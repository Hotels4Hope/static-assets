/* eslint-disable no-underscore-dangle */
// import Utilities from '../../utilities';
// const dayjs = require('dayjs');
// const utilities = new Utilities();
export default class Autocomplete {
    constructor(site_config, page_name) {
        this.site_config = site_config;
        this.page_name = page_name;
        this.lat = null;
        this.lng = null;
        this.original_params = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
        this.event_params = {
            properties: '',
            utm_source: '',
            location_label: '',
            radius: '',
            group_id: '',
            cid: '',
            points: '',
        };
        this.destination = null;
        this.url = `${window.location}/v6/?type=geo&siteid=${document.querySelector('meta[name="siteId"]').content}&pagesize=10&${this.site_config.distance_unit}`;
    }

    init() {
        this.sumbitListener();
        this.hideArnSearchInput('input#city');
        this.insertNewSearchInput('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        this.googleMapsScript();
        this.setAttribute('input#theSubmitButton', 'onClick', '');
    }

    /**
     *@description removes ARN's search bar element from the dom.
     *@param string dom selector for ARN's seach input.
     */
    async hideArnSearchInput(selector) {
        if (!document.querySelector(selector)) return;

        document.querySelector(selector).style.position = 'absolute';
        document.querySelector(selector).style.left = '-10000px';

        // await utilities.waitForSelectorInDOM('#city');

        document.querySelector(selector).removeAttribute('required');
    }

    /**
     *@description inserts a new search input.
     *@param string page - the selector/class of the page.
     *@param string selector - selector of dom element to insert html on.
     *@param string adjacent_location - position for html to be inserted on the specified element.
     *@param string html - markup for new element.
     */
    insertNewSearchInput(page, selector, adjacent_location, html) {
        if (!document.querySelector(page)) return;
        document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
    }

    /**
     *@description gets and returns the destination input string for CUG's or retail sites only.
     *@param string selector of the input to get the value from.
     *@return string - the destination or input value.
     */
    getDestination(inputSelector) {
        if (document.querySelector(inputSelector).getAttribute('value') !== '') {
            return document.querySelector(inputSelector).value;
        }
        if (this.original_params.has('destination')) {
            return this.original_params.get('destination');
        }
        return new Error('No destination available');
    }

    googleMapsScript() {
        const options = {
            types: ['(cities)'],
        };
        const input = document.querySelector('input#address-input');
        // eslint-disable-next-line no-undef
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        this.enableEnterKey(input);
        // eslint-disable-next-line no-undef
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            console.log('lat: ', place.geometry.location.lat(), 'lng: ', place.geometry.location.lng());
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.destination = this.getDestination('input#address-input');
        });
    }

    /**
     *@description resets ARN's onClick attribute to and empty string to stop their submit button having any functionality.
     */
    setAttribute(selector, attribute_name, attribute) {
        const arn_submit_btn = document.querySelector(selector);
        arn_submit_btn.setAttribute(attribute_name, attribute);
    }

    /**
     *@description gets the value of an originalParam key.
     *@param string the key for the originalParam you want the content for.
     *@return string - the value of the param.
     */
    getEventOrginalParams(paramObj) {
        // for in over this.event_params and set each value to the value of the key in original params - method only runs once and properties are set ready for url
        if (!this.original_params.has(paramObj)) return;
        const param = this.original_params.get(paramObj);
        return param;
    }

    sumbitListener() {
        document.querySelector('form#searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
        });

        /* Values to have on submit:
            - Filters: Amenitites, Stars, Propertytypes
            - Destination
            - Check in
            - Check out
            - Nights (nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');)
            - Rooms
            - Adults
            - Lat/lng
            - Currency (utilities.getMetaTagContent('currency') ? utilities.getMetaTagContent('currency') : 'USD')
            - Optional Hotel Name: Search results only
            - Event Params (see object in constructor)
            - Member Token (CUG only) */
    }

    enableEnterKey(input) {
        /* Store original event listener */
        const add_event_listener = input.addEventListener;

        const add_event_listener_wrapper = (type, listener) => {
            if (type === 'keydown') {
                /* Store existing listener function */
                const listener_func = listener;
                // eslint-disable-next-line no-param-reassign
                listener = (event) => {
                    /* Simulate a 'down arrow' keypress if no address has been selected */
                    const suggestion_selected = document.getElementsByClassName('pac-item-selected').length;
                    if (event.key === 'Enter' && !suggestion_selected) {
                        const e = new KeyboardEvent('keydown', {
                            key: 'ArrowDown',
                            code: 'ArrowDown',
                            keyCode: 40,
                        });
                        listener_func.apply(input, [e]);
                    }
                    listener_func.apply(input, [event]);
                };
            }
            add_event_listener.apply(input, [type, listener]);
        };

        input.addEventListener = add_event_listener_wrapper;
    }
}

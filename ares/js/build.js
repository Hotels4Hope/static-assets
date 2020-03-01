import 'whatwg-fetch';
import '@babel/polyfill';
import Utilities from './utilities.js';

let dayjs = require('dayjs');
let utilities = new Utilities();

export default class BasePortal {

    constructor() {
        this.site_id;
        this.page_name;
        this.site_config;
        this.svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
    }

    init() {
        utilities.ieForEachPolyfill();
        this.getSiteID().then((site_id) => {
            this.getSiteConfigJSON(site_id).then(() => {
                this.getPageName();
                this.applyConfigColors();
                this.setFontFromConfig();
                this.setupDatePrompt();
                this.showLanguageFromCongif();
                this.createCurrencyDropDown();

                // all pages
                this.buildMobileMenu();
                utilities.createHTML(`<link id="favicon" rel="shortcut icon" href="${this.site_config.fav_icon_url}">`, 'head', 'beforeEnd');

                if (this.site_config.site_type != 'cug') {
                    utilities.createHTML(`<header><a class="logo" href="${this.site_config.logo_outbound_url}" target="_blank"><img src="${this.site_config.logo_file_location}" alt="Logo"></a></header>`, 'body', 'afterBegin');
                }

                if (this.site_config.site_type == 'cug') {
                    if (document.querySelector('.MemberNotAuthenticated')) {
                        utilities.createHTML(`<header><a href="${this.site_config.logo_outbound_url}" target="_blank"><img src="${this.site_config.logo_file_location}" alt="Logo"></a></header>`, 'body', 'afterBegin');
                    }

                    utilities.waitForSelectorInDOM('#AdminControlsContainer').then(() => {
                        utilities.createHTML(`<a href="${this.site_config.logo_outbound_url}" target="_blank"><img src="${this.site_config.logo_file_location}" alt="Logo"></a>`, '#AdminControlsContainer', 'afterBegin');
                    });
                }

                utilities.updateAttribute('.ArnSupportLinks a', '_blank', 'target');

                // single prop detail methods
                if (this.page_name == 'property-detail') {
                    utilities.updateHTML('.SinglePropDetail .Map a', 'Map');
                    utilities.updateHTML('.SinglePropDetail .Reviews a', 'Reviews');
                    utilities.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms');
                    utilities.updateHTML('.SinglePropDetail .Details a', 'General Info');

                    this.createImageSlider();
                    this.updateRoomDescription();
                    this.updatePropReviewsURLToUseAnchor();

                    this.getTotalNights().then((nights) => {
                        this.showFullStayAndNightlyRates(nights);
                    });

                    this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');
                    utilities.moveElementIntoExistingWrapper('.SinglePropDetail .ArnTripAdvisorDetails.HasReviews', '.SinglePropDetail .ArnPropAddress', 'afterEnd');
                    utilities.moveElementIntoExistingWrapper('div.subHeaderContainer > div > a > span.translateMe', '.SinglePropDetail .ArnLeftListContainer', 'afterBegin');
                }

                // checkout page methods
                if (this.page_name == 'checkout') {
                    utilities.createModal([document.querySelector('#theConfirmationPoliciesAjax'), document.querySelector('#theStayPolicies')], 'Policies & Fees', 'checkout', '#theConfirmationContainer', 'afterBegin');
                    utilities.updateAttribute('#theEmailAddressAjax input', 'email', 'type');
                    // Shows numpad on ios
                    utilities.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                    utilities.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                    utilities.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                    utilities.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                    utilities.updateHTML('#theCharges legend', 'Rate Info');
                    utilities.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                    utilities.updateHTML('#theHotel legend', 'Reservation Summary');

                    this.formatCheckoutForm();
                    this.setupReservationSummaryContainer();
                    utilities.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');
                }

                // root page methods
                if (document.querySelector('.RootBody')) {
                    utilities.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search');
                    utilities.createHTML('<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>', '.RootBody .ArnPrimarySearchContainer', 'beforeBegin');
                    utilities.moveOrphanedElementsIntoNewWrapper([document.querySelector('.RootBody .ArnLeftSearchContainer form')], 'root-search-container', '.RootBody .ArnSearchContainerMainDiv', 'afterBegin');
                    utilities.moveElementIntoExistingWrapper('.ArnSecondarySearchOuterContainer', '.ArnPrimarySearchContainer', 'beforeEnd');
                }

                utilities.updateHTML('#thePassCodeAjax label', 'Promocode');
                utilities.updateHTML('#theUserNameAjax label', 'Username/Email');
                utilities.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
                utilities.createHTML('<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>', '#theWBLoginFormBody .ForgotPasswordAction', 'afterEnd');

                utilities.waitForSelectorInDOM('.pollingFinished').then((selector) => {
                    if (!document.querySelector('.SearchHotels')) return;

                    this.toggleMap();
                    this.useLogoForVenueMapMarker();
                    L.control.scale().addTo(window.ArnMap);
                    this.highlightMapMarkersOnPropertyHover();

                    this.getTotalNights().then((nights) => {
                        this.showFullStayAndNightlyRates(nights);
                    });

                    this.createStarIcons();
                    this.addHRToProperties();
                    this.showLoaderOnResultsUpdate();
                    this.showSearchContainerOnMobile();
                    this.moveFooterOutOfSearchContainer();
                    this.moveReviewsIntoPropNameContainer();

                    utilities.updateAttribute('.ArnShowRatesLink', '_blank', 'target')

                    this.movePropClassBelowPropName();
                    this.activateCheckboxByClickingOnAssociatedLabel();
                    utilities.updateHTML('.ArnSearchHeader', 'Search');
                    utilities.updateHTML('#ShowHotelOnMap', 'Open Map');
                    utilities.updateHTML('.ArnShowRatesLink', 'Book Rooms');
                    utilities.updateHTML('#CitySearchContainer > span', 'Where:');
                    utilities.updateHTML('.lblRating', 'Stars');
                    utilities.updateHTML('.lblCurrency', 'Currency');
                    utilities.updateHTML('.lblAmenities', 'Amenities');
                    utilities.updateHTML('.lblNearbyCities', 'Nearby Cities');
                    utilities.updateHTML('.lblPropertyType', 'Property Type');
                    utilities.updateHTML('.ArnSortBy', `<div class="sort">Sort</div>`);
                    utilities.moveElementIntoExistingWrapper('.ArnPropClass', '.ArnPropName', 'beforeEnd');
                    utilities.moveElementIntoExistingWrapper('#theOtherSubmitButton', '.ArnSecondarySearchOuterContainer', 'beforeEnd');

                    utilities.moveOrphanedElementsIntoNewWrapper([document.querySelector('.ArnSortByDealPercent'), document.querySelector('.ArnSortByDealAmount'), document.querySelector('.ArnSortByPrice'), document.querySelector('.ArnSortByClass'), document.querySelector('.ArnSortByType')], 'sort-wrapper', '.ArnSortBy', 'beforeEnd').then(() => {
                        this.createMobileSortAndFilter();
                        utilities.moveElementIntoExistingWrapper('#sort-wrapper', '.ArnSecondarySearchOuterContainer', 'afterBegin');
                        utilities.createHTML('<h4>Sort</h4>', '#sort-wrapper', 'afterBegin');
                    });
                });
            });
        });
    }

    /**
     *@description gets site id from siteId meta tag
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');

        if (!this.site_id) return;

        return await this.site_id;
    }

    async getSiteConfigJSON(site_id) {
        try {
            return await fetch(`https://dev-static.hotelsforhope.com/ares/js/site_configs/${site_id}/${site_id}.json`, { method: 'GET' })
                .then(response => response.json())
                .then((json) => {
                    this.site_config = json;
                    console.log('site_config:', json);
                });
        } catch {
            console.log('could not get site config');
        }
    }

    /**
     *@description gets page name using css classes from body tag
     */
    async getPageName() {
        let body_classes = document.body;

        if (body_classes.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
            return await this.page_name;
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
            return await this.page_name;
        }

        if (body_classes.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
            return await this.page_name;
        }

        if (body_classes.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
            return await this.page_name;
        }

        if (body_classes.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBFaq')) {
            this.page_name = 'faq';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
            return await this.page_name;
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            this.page_name = 'cug-registration';
            return await this.page_name;
        }
    }

    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     */
    updateRoomDescription() {
        let room_description_el = document.querySelectorAll('.RoomDescription');
        if (!document.querySelector('.SinglePropDetail') || !room_description_el || this.site_config.site_type != "lodging") {
            return;
        }

        room_description_el.forEach((element) => {
            element.innerHTML = element.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">${this.site_config.lodging.event_name}</span>`);
        });
    }

    /**
     *@description shows how much a user donated to charity on checkout page - should refactor to allow selector and text as arguments
     */
    donationAmount() {
        if (document.querySelector('.ConfirmationForm')) {
            let nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];

            if (document.querySelector('.topRoomFunding') && nights != null) {
                document.querySelector('.topRoomFunding').innerHTML = '<p>Your reservation just generated an <span>$ ' + nights * 2 + ' donation</span> to <span>RoomFunding</span>.  And that\'s at no cost to you.</p>';
            }
        }
    }

    addPerNightToPrice(page, selector) {
        let page_element = document.querySelector(page);
        if (page_element) {
            let price = document.querySelectorAll(selector);
            price.forEach(function(element) {
                let parent = element.parentNode;
                if (!parent.querySelector('.perNight'))
                    element.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
            });
        }
    }

    updateBookingFeeLanguage() {
        if (document.querySelector('.CheckOutForm')) {
            let due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
            if (due_now) {

                if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                    due_now.insertAdjacentHTML('beforeEnd', ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>');
                }
            }
            return;
        }
    }

    hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
        if (!this.page_name === 'search-results') {
            return;
        }

        let thumbnails = document.querySelectorAll('.ArnImageLink img');
        thumbnails.forEach(function(thumbnail) {
            if (thumbnail) {
                let url = thumbnail.getAttribute('src');
                if (url.includes('no_image_300.gif')) {
                    let thumbnail_parent = thumbnail.parentNode;
                    if (thumbnail_parent) {
                        thumbnail_parent.classList.add("no-images");
                        let arrows = thumbnail_parent.previousSibling;
                        if (arrows && arrows.classList.contains('ArnPropImageButtons')) {
                            arrows.style.display = 'none';
                        }
                    }
                }
            }
        });
    }

    createImageSlider() {
        if (!document.querySelector('.SinglePropDetail') || !document.querySelector('.ArnPhotoContainer>tbody>tr>td:nth-child(1)')) {
            return;
        }

        document.querySelector('.propThumbs').removeChild(document.querySelector('.thumbScroller'));
        let slider_container = document.querySelector('.ArnPhotoContainer');
        let images_container = document.querySelector('.ArnPhotoContainer > tbody > tr > td:nth-child(1)');
        let current_image = 0;
        let prop_thumbs = document.querySelectorAll('.propThumbs div');
        let thumb_count = prop_thumbs.length;

        let svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        slider_container.insertAdjacentHTML('beforeEnd', `<div class="image-arrow arrow-left">${svg_arrow}</div><div class="image-arrow arrow-right">${svg_arrow}</div>`);

        let left_arrow = slider_container.querySelector('.arrow-left');
        let right_arrow = slider_container.querySelector('.arrow-right');

        left_arrow.addEventListener('click', () => {

            if (current_image == 0) {
                current_image = thumb_count;
            }

            current_image -= 1;
            prop_thumbs[current_image].click();

        });

        right_arrow.addEventListener('click', () => {

            current_image += 1;
            if (current_image == thumb_count) {
                current_image = 0;
            }
            prop_thumbs[current_image].click();
        });
    }

    createStarIcons() {
        let star_elements = document.querySelectorAll('.ArnPropClass');
        star_elements.forEach(function(star) {
            star.style.display = 'inline';
            let number_of_stars = star.textContent;
            let num = number_of_stars.replace(/\D/g, "");
            let star_svg = '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

            if (num == 1) {
                star.innerHTML = star_svg;
            }
            if (num == 2) {
                star.innerHTML = star_svg + star_svg;
            }
            if (num == 3) {
                star.innerHTML = star_svg + star_svg + star_svg;
            }
            if (num == 4) {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg;
            }
            if (num == 5) {
                star.innerHTML = star_svg + star_svg + star_svg + star_svg + star_svg;
            }
        });
    }

    // refactor meeeeee
    createMobileSortAndFilter() {
        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('.SearchHotels')) return;

        utilities.updateHTML('.sort', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter');

        utilities.createHTML('<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"></div><div class="mobile-filter-container"><h4>Filter</h4></div></div></div>', 'body', 'beforeEnd');

        let sort_button = document.querySelector('.ArnSortBy');
        let sort_container = document.querySelector('#sort-wrapper');
        let filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
        let sort_filter_container = document.querySelector('.sort-filter-overlay');

        sort_button.removeEventListener('click', () => {});
        sort_button.addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', sort_container);
            document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', filter_container);
            filter_container.style.display = 'block';
            sort_container.style.display = 'block';
        });

        document.querySelector('.sort-filter-close').addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
        });

        document.querySelector('#sort-wrapper a').addEventListener('click', (target) => {
            target.toElement.classList.toggle('active-filter');
        });

        let filters = filter_container.querySelectorAll('.ArnSearchField');
        filters.forEach((filter) => {
            filter.classList.add('panel');
        });
    }

    showSearchContainerOnMobile() {
        let adults_text;
        let location_text;
        let check_in_text;
        let check_in_date;
        let check_out_text;
        let check_out_date;
        let check_in_el = document.querySelector('meta[name="checkIn"]');
        let check_out_el = document.querySelector('meta[name="checkOut"]');
        let adults_el = document.querySelector('meta[name="numberOfAdults"]');
        let location_el = document.querySelector('meta[name="SearchLocation"]');
        let content_el = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');

        if (!check_in_el || !check_out_el || !location_el || !adults_el) return;

        adults_text = adults_el.getAttribute('content');
        location_text = location_el.getAttribute('content');
        check_in_text = check_in_el.getAttribute('content');
        check_out_text = check_out_el.getAttribute('content');

        check_in_date = dayjs(check_in_text);
        check_out_date = dayjs(check_out_text);

        utilities.createHTML(`<div class="show-search-container"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><div class="search-info"><h3>${location_text}</h3><span><span class="search-dates">${check_in_date.format('MMMM D')} - ${check_out_date.format('MMMM D')} </span><span class="adults-count">${adults_text} guests</span></span></div></div>`, '.SearchHotels .ArnPrimarySearchOuterContainer', 'beforeBegin');

        document.querySelector('.show-search-container').addEventListener('click', () => {
            content_el.classList.toggle('show-search');
        });
    }

    buildMobileMenu() {
        let menu_el = document.querySelector('#commands');
        let header_el = document.querySelector('#AdminControlsContainer');

        if (!menu_el && !header_el) return;

        header_el.insertAdjacentHTML('beforeEnd', '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>');

        let menu_button_el = document.querySelector('#hamburger');

        if (!menu_button_el) return;

        menu_button_el.addEventListener('click', () => {
            menu_button_el.classList.toggle('is-active');
            menu_el.classList.toggle('active');
        });
    }

    showAdditionalPolicies() {
        let additional_policies = document.querySelector('#theStayPolicies');
        let additional_policies_legend = additional_policies.querySelector('legend');
        let additional_policies_height = additional_policies.offsetHeight;
        let policies = document.querySelector('#theConfirmationPoliciesAjax');

        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('#theBookingPage')) return;

        policies.insertAdjacentElement('afterEnd', additional_policies);
        utilities.moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd');
        additional_policies.insertAdjacentElement('beforeBegin', additional_policies_legend);

        additional_policies.insertAdjacentHTML('beforeEnd', `
        <style>
            #theStayPolicies {
                height: 0;
                display: none;
            }
            .show-policies{
                height: ${additional_policies_height}px !important;
                display: block !important;
            }
        </style>
    `);

        additional_policies_legend.addEventListener('click', () => {
            additional_policies.classList.toggle('show-policies');
        });
    }

    updatePropReviewsURLToUseAnchor() {
        let review_link = document.querySelector('.reviewCount a');

        if (this.page_name != 'property-detail' || !review_link) return;

        review_link.setAttribute('href', '#thePropertyReviews');
    }

    moveFooterOutOfSearchContainer() {
        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnSupportBottom')) return;

        document.body.insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'))
    }

    moveReviewsIntoPropNameContainer() {
        let prop_names = document.querySelectorAll('.SearchHotels .ArnPropName');

        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnContainer')) return;

        prop_names.forEach((prop_name) => {
            prop_name.insertAdjacentElement('beforeEnd', prop_name.parentElement.querySelector('.ArnTripAdvisorDetails'));
        });
    }

    toggleMap() {
        let map = document.querySelector('.ArnPropertyMapInner');
        let map_btn = document.querySelector('#arnCloseAnchorId');

        if (!map_btn || !map) return;

        map_btn.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>';

        map_btn.addEventListener('click', () => {
            map_btn.classList.toggle('closeMap');
            map.classList.toggle('showMap');

            map_btn.classList.contains('closeMap') ? map_btn.querySelector('span').textContent = ' Close Map' : map_btn.querySelector('span').innerHTML = ' Open Map';
        });

    }

    accordion(main_container, content_container, open_button) {
        if (!document.querySelector(main_container)) {
            return;
        }
        let main_container_el = document.querySelector(main_container);
        let open_el = main_container_el.querySelector(open_button);

        let content_el = main_container_el.querySelector(content_container);
        let svg_arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        let height = content_el.offsetHeight;

        document.querySelector(main_container).insertAdjacentHTML('beforeEnd',
            `<style>
            ${content_container}{
                transform: translateY(-${height}px);
                pointer-events: none;
                transition: all .75s ease;
                height: 0;
                position: relative;
            }
            .show-content{
                transform: translateY(0) !important;
                opacity: 1 !important;
                pointer-events: initial !important;
                height: ${height}px !important;
            }
        </style>
        `);
        open_el.insertAdjacentHTML('beforeEnd', svg_arrow);

        open_el.addEventListener('click', () => {
            content_el.classList.toggle('show-content');
            open_el.querySelector('svg').classList.toggle('flip-svg');
        });
    }

    movePropClassBelowPropName() {
        const prop_containers = document.querySelectorAll('.ArnContainer');

        if (!document.querySelector('.SearchHotels')) {
            return;
        }

        prop_containers.forEach(function(container) {
            let prop_class = container.querySelector('.ArnPropClass');
            let prop_name = container.querySelector('.ArnPropName');
            if (container && prop_class && prop_name) {
                prop_name.insertAdjacentElement('beforeEnd', prop_class);
            }
        });
    }

    setupReservationSummaryContainer() {
        let check_in_date;
        let check_in_text;
        let check_out_date;
        let check_out_text;
        let check_in_element = document.querySelector('.checkInRow td');
        let check_out_element = document.querySelector('.checkOutRow td');
        let currency_element = document.querySelector('meta[name="currency"]');

        if (!check_in_element || !check_out_element || !currency_element) return;

        check_in_text = check_in_element.textContent;
        check_out_text = check_out_element.textContent;

        check_in_date = dayjs(check_in_text).format(this.site_config.dayjs_date_format);
        check_out_date = dayjs(check_out_text).format(this.site_config.dayjs_date_format);


        utilities.createHTML(`<span class="date-container">${check_in_date} - ${check_out_date}`, '#theHotelAddress', 'beforeBegin');
        utilities.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd');
    }

    formatCheckoutForm() {
        let room_reservations = document.querySelectorAll('.WBGuestFormFields');
        let reservation_count = 0;

        room_reservations.forEach((reservation) => {
            reservation_count++;

            utilities.moveElementIntoExistingWrapper(`#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardBillingNameAjax${reservation_count - 1}`, `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardNumberAjax`, 'afterEnd');


            utilities.createWrapper(`.RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr > td > div, .RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax${reservation_count}, #theCountryAjax${reservation_count}`, `#theBillingAddressAjax${reservation_count}`, `billing-details-container`, 'afterEnd');

            utilities.createWrapper(`.RoomNumber-${reservation_count} #theCreditCardBillingNameAjax${reservation_count}, .RoomNumber-${reservation_count} #theCardExpirationFieldsAjax, .RoomNumber-${reservation_count} #theCardVerificationAjax`, `.RoomNumber-${reservation_count} #theCreditCardNumberAjax`, `credit-card-details`, 'afterEnd');

            utilities.updateHTML(`#theCreditCardBillingNameAjax${reservation_count - 1} label`, 'Cardholder\'s Name');
            utilities.updateHTML(`#theBillingAddressAjax${reservation_count - 1} label`, 'Billing Address');
            utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, 'Billing Info');
            utilities.updateHTML(`.RoomNumber-${reservation_count} .paymentMethods`, '<span class="creditcards"><img src="https://dev-static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></span>');
            utilities.createHTML('<legend>Credit Card Info</legend>', `.RoomNumber-${reservation_count} .guestBillingAddress`, 'beforeBegin');
        });
    }

    // probably a much better way to do this
    applyConfigColors() {
        if (!this.site_config) return;

        document.body.insertAdjacentHTML('beforeEnd', `
        <style>
        /* Primary Background Color */
            #searching h2:after,
            #theConfirmationButton,
            #theOtherSubmitButton:active,
            #theOtherSubmitButton:focus,
            #theOtherSubmitButton:hover,
            .ArnPrimarySearchContainer,
            .ArnShowRatesLink,
            .ArnTripAdvisorDetails.HasReviews .ratingCount,
            .CreateAnAccountAction,
            .RootBody #theOtherSubmitButton,
            .SimpleSearch,
            .WBForgotPasswordFormActions .submit,
            .WBLoginFormActions .submit,
            .WBValidatedRegistrationFormActions .submit,
            .arn-leaflet-reset-button,
            .arnMapMarker,
            .arnMapMarker:hover,
            .bookRoom,
            .HoldRoomsForm .submit,
            #datePromptContainer+.SimpleSearch .CheckRates .submit,
            .yui3-skin-sam .yui3-calendar-day:hover,
            #sort-wrapper .active,
            #sort-wrapper a:hover {
                background:${this.site_config.primary_color}
            }

            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover,
                .closeMap {
                    border: 1px solid ${this.site_config.primary_color}
                }
            }

            @media screen and (max-width:800px) {

                #commands a:active,
                #commands a:focus,
                #commands a:hover,
                #commands button:active,
                #commands button:focus,
                #commands button:hover,
                #sort-wrapper a:before,
                #sort-wrapper a.active-filter:before,
                .sort {
                    background:${this.site_config.primary_color}
                }
            }

            #searching,
            #theConfirmationButton,
            #theOtherSubmitButton:active,
            #theOtherSubmitButton:focus,
            #theOtherSubmitButton:hover,
            .HoldRoomsForm .submit,
            .ArnPrimarySearchContainer,
            .ArnShowRatesLink,
            .ArnTripAdvisorDetails.HasReviews .ratingCount,
            .SinglePropDetail .CheckRates .submit,
            .CreateAnAccountAction,
            .RootBody #theOtherSubmitButton,
            .SearchHotels #theSubmitButton,
            .SimpleSearch,
            .WBForgotPasswordFormActions .submit,
            .WBLoginFormActions .submit,
            .WBValidatedRegistrationFormActions .submit,
            .arnMapPopup .rate,
            #datePromptContainer+.SimpleSearch .CheckRates .submit,
            .bookRoom,
            #sort-wrapper .active,
            #sort-wrapper a:hover {
                color:${this.site_config.primary_text_color}
            }

            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover,
                .closeMap {
                    color:${this.site_config.secondary_text_color}
                }
            }

            @media screen and (max-width: 800px) {

                #commands a:active,
                #commands a:focus,
                #commands a:hover,
                #commands button:active,
                #commands button:focus,
                #commands button:hover,
                .sort {
                    color:${this.site_config.primary_text_color}
                }
            }
            .holdRoom,
            .reviewCount a,
            #theAdditionalEmailsLink a,
            #theOtherSubmitButton,
            .RootBody #theOtherSubmitButton:active,
            .RootBody #theOtherSubmitButton:focus,
            .RootBody #theOtherSubmitButton:hover,
            .SearchHotels #theSubmitButton:active,
            .SearchHotels #theSubmitButton:focus,
            .SearchHotels #theSubmitButton:hover,
            .SinglePropDetail #moreRatesLink,
            .SinglePropDetail .ArnRateCancelAnchor,
            .open-modal {
                color:${this.site_config.secondary_text_color}
            }

            @media screen and (max-width:800px) {
                #theBookingPage legend#policies-legend {
                    color:${this.site_config.secondary_text_color}
                }
            }

            header,
            #AdminControlsContainer {
                border-bottom:3px solid ${this.site_config.primary_color}
            }

            .arnMapMarker:hover .arnMapMarkerTriangle,
            .arnMapMarkerTriangle {
                border-top-color:${this.site_config.primary_color}
            }

            #theOtherSubmitButton,
            .ArnSecondarySearchOuterContainer select,
            .ArnShowRatesLink,
            .RootBody #theOtherSubmitButton,
            .bookRoom,
            .sort,
            .HoldRoomsForm .submit {
                border:1px solid ${this.site_config.primary_color}
            }

            .holdRoom,
            .ArnShowRatesLink:active,
            .ArnShowRatesLink:focus,
            .ArnShowRatesLink:hover,
            .bookRoom:active,
            .bookRoom:focus,
            .bookRoom:hover {
                border: 1px solid ${this.site_config.primary_color}
            }

            @media screen and (max-width:1105px) {
                #arnCloseAnchorId,
                .sort {
                    border:1px solid ${this.site_config.primary_color}
                }
            }

            @media screen and (max-width:800px) {
                #sort-wrapper a:before {
                    border:2px solid ${this.site_config.primary_color}
                }
            }
        </style>
        `);
    }

    setFontFromConfig() {
        if (!this.site_config) return;

        utilities.createHTML(`<link href="${this.site_config.google_font_url}" rel="stylesheet">`, 'head', 'beforeEnd');
        document.body.insertAdjacentHTML('beforeEnd', `<style>*{font-family: ${this.site_config.google_font_name}, 'Helvetica' !important;}</style>`);
    }

    // refactor me, please!
    showLanguageFromCongif() {
        let language_label;
        let active_language;
        let header = document.querySelector('#AdminControlsContainer');
        let language_container_el = document.querySelector('#language');
        let config_container = document.querySelector('.config-container');
        let active_language_el = document.querySelector('meta[name="theme"]');

        if (!header ||
            !this.site_config ||
            !config_container ||
            !active_language_el ||
            !language_container_el) return;
        if (!this.site_config.show_language_select) return;


        active_language = active_language_el.getAttribute('content');
        document.querySelector(`.language-container div[value='${active_language}']`).classList.add('active-language');
        header.insertAdjacentElement('beforeBegin', config_container);
        config_container.insertAdjacentElement('afterBegin', language_container_el);
        language_label = language_container_el.querySelector('#language-label');
        language_label.querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML;

        language_label.addEventListener('click', () => {
            language_container_el.querySelector('.language-container').classList.toggle('show-language-container');
            language_label.querySelector('svg').classList.toggle('flip-svg');
        });

        window.addEventListener('click', (e) => {
            if (document.querySelector('.show-language-container')) {
                if (e.target == document.querySelector('#language-label') || e.target.parentNode == document.querySelector('.language-container')) return;

                document.querySelector('.language-container').classList.toggle('show-language-container');
                language_label.querySelector('svg').classList.toggle('flip-svg');
            }
        });
    }

    // needs a refactor real bad
    createCurrencyDropDown() {
        let currencies;
        let clicked_currency;
        let currencies_obj = {};
        let selected_currency = '';
        let submit = document.querySelector('#theOtherSubmitButton');
        let currency_label = document.querySelector('#currency-label');
        let currencies_container = document.querySelector('.currencies');
        let config_container = document.querySelector('.config-container');
        let top_currencies_container = document.querySelector('.top-currencies');
        let currencies_select = document.querySelector('#CurrenciesContainer select');
        let currencies_node_list = document.querySelectorAll('#CurrenciesContainer select option');

        if (!currencies_node_list ||
            !config_container ||
            !currency_label ||
            !top_currencies_container ||
            !currencies_select) return;

        currencies_node_list.forEach((currency) => {
            if (currency.getAttribute('selected')) {
                selected_currency = currency.value;
            }

            currencies_obj[currency.label] = currency.value;
        });

        currencies = Object.entries(currencies_obj);

        currencies.forEach((currency) => {
            if (currency[0] == 'United States Dollars' ||
                currency[0] == 'Euro' ||
                currency[0] == 'United Kingdom Pounds' ||
                currency[0] == 'Mexico Pesos' ||
                currency[0] == 'Canada Dollars' ||
                currency[0] == 'Australia Dollars') {
                top_currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
            }

            currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
        });

        currency_label.addEventListener('click', () => {
            currencies_container.classList.toggle('show-currencies-container');
            currency_label.querySelector('svg').classList.toggle('flip-svg');
        });

        currencies_container.addEventListener('click', (e) => {
            if (!e.target.getAttribute('id')) return;

            clicked_currency = e.target.getAttribute('id');
            document.querySelector('.active-currency').classList.remove('active-currency');
            document.getElementById(clicked_currency).classList.add('active-currency');
            currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
            currencies_select.value = clicked_currency;

            if (document.querySelector('.SearchHotels')) submit.click();
        });

        document.getElementById(selected_currency).classList.add('active-currency');

        window.addEventListener('click', (e) => {
            if (document.querySelector('.show-currencies-container')) {
                if (e.target == document.querySelector('.currencies') ||
                    e.target == document.querySelector('#currency-label') ||
                    e.target.parentNode == document.querySelector('.currencies') ||
                    e.target.parentNode == document.querySelector('.top-currencies')) return;


                currencies_container.classList.toggle('show-currencies-container');
                currency_label.querySelector('svg').classList.toggle('flip-svg');
            }
        });

        currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
    }

    setupDatePrompt() {
        let date_prompt = document.querySelector('#theDatePrompt');

        if (!date_prompt) return;

        date_prompt.querySelector('#datePromptContainer').insertAdjacentHTML('afterBegin', `<img src="${this.site_config.logo_file_location}" alt="Logo">`)
    }

    highlightMapMarkersOnPropertyHover() {
        let prop_id;
        let prop_id_el;
        let properties = document.querySelectorAll('.ArnContainer');
        let prop_container = document.querySelector('#currentPropertyPage');

        if (!prop_container) return;

        properties.forEach((property) => {
            property.addEventListener('mouseenter', (e) => {
                prop_id_el = property.parentElement.querySelector('.propId');
                if (!prop_id_el) return;

                prop_id = prop_id_el.textContent;
                ArnMapDispatcher.eventPropertyHighlightOn(prop_id)
            });

            property.addEventListener('mouseleave', (e) => {
                ArnMapDispatcher.eventPropertyHighlightOff(prop_id)
            });
        });
    }

    // refactor me, please!
    showFullStayAndNightlyRates(nights) {
        let properties;
        let average_rate;
        let full_stay_rate;


        if (document.querySelector('.SearchHotels')) {

            properties = document.querySelectorAll('.ArnProperty');
            properties.forEach((property) => {

                    average_rate = property.querySelector('.arnPrice .arnUnit');
                    full_stay_rate = property.getAttribute('total');

                    if (!average_rate || !full_stay_rate) return;

                    average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div><div class="full-stay-rate">${full_stay_rate}<span> for ${nights} nights </span></div>`);

                    if (nights == 1) property.querySelector('.arnPrice').style.display = 'none';
            });
        }

        if (document.querySelector('.SinglePropDetail')) {
            properties = document.querySelectorAll('.ArnNightlyRate');
            properties.forEach((property) => {
                average_rate = property.querySelector('.averageNightly');
                full_stay_rate = property.querySelector('strong');

                if (!average_rate || !full_stay_rate) return;

                average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);

                if (nights == 1) property.querySelector('.averageNightly').style.display = 'none';
            });
        }
    }

    async getTotalNights() {
        let nights;
        let check_in;
        let check_out;
        let check_in_el = document.querySelector('meta[name="checkIn"]');
        let check_out_el = document.querySelector('meta[name="checkOut"]');

        if (!check_in_el || !check_out_el) return;

        check_in = new Date(check_in_el.getAttribute('content'));
        check_out = new Date(check_out_el.getAttribute('content'));
        nights = (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);

        return await nights;
    }

    addTitleToProperties() {
        let property_name;
        let property_name_el;
        let properties = document.querySelectorAll('.ArnContainer');

        if (!document.querySelector('.SearchHotels')) return;

        properties.forEach((property) => {
            property_name_el = property.querySelector('.ArnPropNameLink');
            property_name = property_name_el.querySelector('span').textContent;

            property_name_el.setAttribute('title', property_name)

        });
    }

    showLoaderOnResultsUpdate() {
        let loader = document.querySelector('#searching');
        let update_buttons = document.querySelectorAll('#theSubmitButton', '#theOtherSubmitButton');

        if (!document.querySelector('.SearchHotels')) return;

        update_buttons.forEach((button) => {
            button.addEventListener('click', () => {
                loader.style.display = 'block';
            });
        });
    }

    // map will need a redraw for this to work - will come back to this
    setMapMarkerSize() {
        let currency = '';
        let currency_el = document.querySelector('meta[name="currency"]');
        let map_markers = document.querySelectorAll('.arnMapMarker')

        if (!currency_el || !map_markers) return;

        currency = currency_el.getAttribute('content');

        if (currency == 'USD') return;

        map_markers.forEach((marker) => {
            marker.style.width = '85px';
        });
    }

    useLogoForVenueMapMarker() {
        let map_markers = document.querySelectorAll('.arn-green-marker-icon');

        if (!this.site_config) return;

        map_markers.forEach((marker) => {
            marker.setAttribute('src', `${this.site_config.map_marker_image_url}`);
        });
    }

    activateCheckboxByClickingOnAssociatedLabel() {
        let checkbox_wrappers = document.querySelectorAll('.ArnSearchField div');

        if (!checkbox_wrappers) return;

        checkbox_wrappers.forEach((wrapper) => {
            if (!wrapper.querySelector('input[type="checkbox"]')) return;

            wrapper.querySelector('span').addEventListener('click', (e) => {
                wrapper.querySelector('input[type="checkbox"]').click();

            });
        });
    }

    addHRToProperties() {
        let props = document.querySelectorAll('.ArnProperty');

        if (!props) return;

        props.forEach((prop) => {
            prop.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
        });
    }
}
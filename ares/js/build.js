import 'whatwg-fetch';
import '@babel/polyfill';
import 'url-polyfill';
import Utilities from './utilities';

const dayjs = require('dayjs');

const utilities = new Utilities();

export default class BasePortal {
    constructor() {
        this.site_id = '';
        this.page_name = '';
        this.site_config = '';
        this.currency = '';
        this.svg_arrow =
            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        this.map_loaded = false;
    }

    init() {
        this.initializeARNRatesReadyEvent();
        utilities.ieForEachPolyfill();
        this.getSiteID().then((site_id) => {
            this.getSiteConfigJSON(site_id).then(async () => {
                this.getPageName();
                this.applyConfigColors();
                this.setRootPageBackgroundImage();
                this.setFontFromConfig();
                this.setupDatePrompt();
                this.showLanguageFromCongif();
                this.showStarsAndFilter();
                this.createCurrencyDropdown();

                // all pages
                // this.addSocialMetaTags(this.site_config.lodging.event_name, this.site_config.lodging.event_id);
                this.buildMobileMenu();
                utilities.createHTML(`<link id="favicon" rel="shortcut icon" href="${this.site_config.fav_icon_url}">`, 'head', 'beforeEnd');

                await utilities.createHTML(
                    `<header><a class="logo" href="${this.site_config.header.logo_outbound_url}" target="_blank"><img src="${this.site_config.header.logo_file_location}" alt="Logo"></a></header>`,
                    '.config-container',
                    'afterEnd'
                );

                if (this.site_config.site_type === 'cug') {
                    utilities.waitForSelectorInDOM('#AdminControlsContainer').then(async () => {
                        utilities.appendToParent('#commands', 'header');
                    });
                }

                utilities.updateAttribute('.ArnSupportLinks a', '_blank', 'target');

                // single prop detail methods
                if (this.page_name === 'property-detail') {
                    this.addImageSlideshow();
                    utilities.updateHTML('.SinglePropDetail .Map a', 'Map');
                    utilities.updateHTML('.SinglePropDetail .Reviews a', 'Reviews');
                    utilities.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms');
                    utilities.updateHTML('.SinglePropDetail .Details a', 'General Info');

                    this.isPropByGateway(
                        this.site_config.exclusive_rate_text,
                        this.site_config.host_hotel_text,
                        this.site_config.partner_hotel_text,
                        this.site_config.lodging.event_name
                    );

                    this.updatePropReviewsURLToUseAnchor();

                    this.getTotalNights().then((nights) => {
                        this.getCurrency().then((currency) => {
                            this.showFullStayAndNightlyRates(nights, currency);
                        });
                    });

                    this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');
                    utilities.moveElementIntoExistingWrapper('.SinglePropDetail .ArnTripAdvisorDetails.HasReviews', '.SinglePropDetail .ArnPropAddress', 'afterEnd');
                    utilities.moveElementIntoExistingWrapper('div.subHeaderContainer > div > a > span.translateMe', '.SinglePropDetail .ArnLeftListContainer', 'afterBegin');
                }

                // checkout page methods
                if (this.page_name === 'checkout') {
                    utilities.createModal(
                        [document.querySelector('#theConfirmationPoliciesAjax'), document.querySelector('#theStayPolicies')],
                        'Policies & Fees',
                        'checkout',
                        '#theConfirmationContainer',
                        'afterBegin'
                    );
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
                    utilities.emailVerificationSetup();
                }

                if (this.page_name === 'confirmation') {
                    this.implementAds();
                }

                // root page methods
                if (document.querySelector('.RootBody')) {
                    this.addAlgoliaSearch();
                    utilities.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search');
                    utilities.createHTML(
                        '<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>',
                        '.RootBody .ArnPrimarySearchContainer',
                        'beforeBegin'
                    );
                    utilities.moveOrphanedElementsIntoNewWrapper(
                        [document.querySelector('.RootBody .ArnLeftSearchContainer form')],
                        'root-search-container',
                        '.RootBody .ArnSearchContainerMainDiv',
                        'afterBegin'
                    );
                    utilities.moveElementIntoExistingWrapper('.ArnSecondarySearchOuterContainer', '.ArnPrimarySearchContainer', 'beforeEnd');
                }

                utilities.updateHTML('#thePassCodeAjax label', 'Promocode');
                utilities.updateHTML('#theUserNameAjax label', 'Username/Email');
                utilities.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
                utilities.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
                utilities.createHTML('<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>', '#theWBLoginFormBody .ForgotPasswordAction', 'afterEnd');

                if (this.site_config.show_tax_inclusive_rates) {
                    jQuery('#theBody').on('arnMapLoadedEvent', () => {
                        this.getTotalNights().then((nights) => {
                            this.getCurrency().then((currency) => {
                                this.getNightlyRateForMapMarkers(nights, currency);
                            });
                        });
                    });
                }

                if (this.page_name === 'lrg-page') {
                    this.replaceLRGForm();
                }

                if (this.page_name === 'search-results') {
                    this.addAlgoliaSearch();
                }

                jQuery('#theBody').on('arnMapLoadedEvent', async () => {
                    this.map_loaded = true;
                    await utilities.waitForSelectorInDOM('.pollingFinished');

                    if (!document.querySelector('.leaflet-control-scale-line')) L.control.scale().addTo(window.ArnMap);

                    this.useLogoForVenueMapMarker();
                    this.highlightMapMarkersOnPropertyHover();
                    this.changeContractedPropertyPinColor();
                });

                jQuery(document).on('ratesReadyEvent', () => {
                    setTimeout(() => {
                        this.isPropByGateway(
                            this.site_config.exclusive_rate_text,
                            this.site_config.host_hotel_text,
                            this.site_config.partner_hotel_text,
                            this.site_config.lodging.event_name
                        );
                        if (this.page_name === 'property-detail' && this.site_config.site_type.toLowerCase() === 'cug') {
                            this.cugConfigs();
                        }
                    }, 1);
                });

                utilities.waitForSelectorInDOM('.pollingFinished').then(async (selector) => {
                    if (this.page_name === 'hold-rooms') {
                        this.moveReviewsIntoPropNameContainer();
                    }

                    if (this.page_name !== 'search-results' || this.page_name === 'hold-rooms') return;

                    if (!this.map_loaded) {
                        if (!document.querySelector('.leaflet-control-scale-line')) L.control.scale().addTo(window.ArnMap);

                        this.useLogoForVenueMapMarker();
                        this.highlightMapMarkersOnPropertyHover();
                        this.changeContractedPropertyPinColor();
                    }

                    this.cugConfigs();
                    this.implementAds();
                    this.toggleMap();
                    this.addLRGDetails();
                    this.getTotalNights().then((nights) => {
                        this.getCurrency().then((currency) => {
                            this.showFullStayAndNightlyRates(nights, currency);
                        });
                    });
                    this.createStarIcons();
                    this.addHRToProperties();
                    this.showLoaderOnResultsUpdate();
                    this.showSearchContainerOnMobile();
                    this.moveFooterOutOfSearchContainer();
                    this.moveReviewsIntoPropNameContainer();

                    utilities.updateAttribute('.ArnShowRatesLink', '_blank', 'target');

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

                    await utilities.waitForSelectorInDOM('#pagerBottomAjax').then(() => {
                        utilities.appendToParent('#pagerBottomAjax', '#currentPropertyPage');
                    });
                    await utilities.waitForSelectorInDOM('.ArnSortContainer').then(() => {
                        utilities
                            .createWrapper(
                                '.ArnSortByDealPercent, .ArnSortByDistance, .ArnSortByDealAmount, .ArnSortByAvailability, .ArnSortByPrice, .ArnSortByClass, .ArnSortByType',
                                '.ArnSecondarySearchOuterContainer',
                                'sort-wrapper',
                                'afterBegin'
                            )
                            .then(() => {
                                this.createMobileSortAndFilter();
                                utilities.createHTML('<h4>Sort</h4>', '.sort-wrapper', 'afterBegin');
                            });
                    });
                });

                this.applyCustomStyles();
                // this.addSocialMediaShareButtons(this.site_config.lodging.event_name, this.site_config.lodging.event_id);
                // this.forceClickOnCitySearch();
                this.setInputToRequired('input#city');
                this.setInputToRequired('input#theCheckIn');
                this.resizeViewportForMapMobile();
                this.showCoronavirusInfoBanner();
                this.showCurrencySelect();
            });
        });
    }

    initializeARNRatesReadyEvent() {
        function globalAjax() {
            try {
                setTimeout(() => {
                    jQuery(document).trigger('ratesReadyEvent');
                }, 1);
                // eslint-disable-next-line no-empty
            } catch (e) {}
        }
        // eslint-disable-next-line no-undef
        Ajax.Responders.register({
            onComplete: globalAjax,
        });

        globalAjax();
    }

    /**
     *@description gets site id from siteId meta tag
     *@return {string}
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');

        if (!this.site_id) return;

        return this.site_id;
    }

    getDirectoryName() {
        if (!document.querySelector('meta[name="directory_name"]')) {
            console.log('no directory_name');
            return;
        }
        return document.querySelector('meta[name="directory_name"]').getAttribute('content');
    }

    async getSiteConfigJSON(site_id) {
        let path = '';
        const directory_name = this.getDirectoryName();
        if (window.location.href.includes('arn_html')) {
            path = `/ares/site_configs/${directory_name}/${site_id}.json`;
        } else {
            path = `https://dev-static.hotelsforhope.com/ares/site_configs/${directory_name}/${site_id}.json`;
        }

        try {
            return fetch(path, {method: 'GET'})
                .then((response) => response.json())
                .then((json) => {
                    this.site_config = json;
                    console.log('site_config:', json);
                });
        } catch (error) {
            console.log('could not get site config', error);
        }
        console.log(path);
        return this.site_config;
    }

    /**
     *@description gets page name using css classes from body tag
     */
    async getPageName() {
        const body_classes = document.body;

        if (body_classes.classList.contains('SearchHotels') && !body_classes.classList.contains('HoldRoomsForm')) {
            this.page_name = 'search-results';
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
        }

        if (body_classes.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
        }

        if (body_classes.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
        }

        if (body_classes.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
        }

        if (body_classes.classList.contains('WBFaq')) {
            this.page_name = 'faq';
        }

        if (body_classes.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
        }

        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
        }

        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            this.page_name = 'cug-registration';
        }

        if (body_classes.classList.contains('HoldRoomsForm') && body_classes.classList.contains('SearchHotels')) {
            this.page_name = 'hold-rooms';
        }

        return this.page_name;
    }

    async getCurrency() {
        const currency_el = document.querySelector('meta[name="currency"]');
        if (!currency_el) return;

        this.currency = currency_el.getAttribute('content');

        return this.currency;
    }

    /**
     *@description shows how much a user donated to charity on checkout page - should refactor to allow selector and text as arguments
     */
    donationAmount() {
        if (document.querySelector('.ConfirmationForm')) {
            const nights = document.querySelector('.numberOfNights th').textContent.split(' ')[0];

            if (document.querySelector('.topRoomFunding') && nights !== null) {
                document.querySelector('.topRoomFunding').innerHTML = `<p>Your reservation just generated an <span>$ ${
                    nights * 2
                } donation</span> to <span>RoomFunding</span>.  And s at no cost to you.</p>`;
            }
        }
    }

    addPerNightToPrice(page, selector) {
        const page_element = document.querySelector(page);
        if (page_element) {
            const price = document.querySelectorAll(selector);
            price.forEach((element) => {
                const parent = element.parentNode;
                if (!parent.querySelector('.perNight')) element.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
            });
        }
    }

    updateBookingFeeLanguage() {
        if (document.querySelector('.CheckOutForm')) {
            const due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
            if (due_now) {
                if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                    due_now.insertAdjacentHTML(
                        'beforeEnd',
                        ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>'
                    );
                }
            }
        }
    }

    hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
        if (!this.page_name === 'search-results') {
            return;
        }

        const thumbnails = document.querySelectorAll('.ArnImageLink img');
        thumbnails.forEach((thumbnail) => {
            if (thumbnail) {
                const url = thumbnail.getAttribute('src');
                if (url.includes('no_image_300.gif')) {
                    const thumbnail_parent = thumbnail.parentNode;
                    if (thumbnail_parent) {
                        thumbnail_parent.classList.add('no-images');
                        const arrows = thumbnail_parent.previousSibling;
                        if (arrows && arrows.classList.contains('ArnPropImageButtons')) {
                            arrows.style.display = 'none';
                        }
                    }
                }
            }
        });
    }

    createStarIcons() {
        const star_elements = document.querySelectorAll('.ArnPropClass');
        star_elements.forEach((star) => {
            const number_of_stars = star.textContent;
            const num = number_of_stars.replace(/\D/g, '');
            const star_svg =
                '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

            if (num === '1') star.innerHTML = star_svg;
            if (num === '2') star.innerHTML = star_svg.repeat(2);
            if (num === '3') star.innerHTML = star_svg.repeat(3);
            if (num === '4') star.innerHTML = star_svg.repeat(4);
            if (num === '5') star.innerHTML = star_svg.repeat(5);
        });
    }

    // refactor meeeeee
    createMobileSortAndFilter() {
        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('.SearchHotels')) return;

        utilities.updateHTML(
            '.sort',
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter'
        );

        utilities.createHTML(
            '<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"></div><div class="mobile-filter-container"><h4>Filter</h4></div></div></div>',
            '#searchForm',
            'beforeEnd'
        );

        const sort_button = document.querySelector('.ArnSortBy');
        const sort_container = document.querySelector('.sort-wrapper');
        const filter_container = document.querySelector('.ArnSecondarySearchOuterContainer');
        const sort_filter_container = document.querySelector('.sort-filter-overlay');

        sort_button.removeEventListener('click', () => {});
        sort_button.addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', sort_container);
            document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', filter_container);
            filter_container.style.display = 'block';
            sort_container.style.display = 'block';
            document.body.classList.toggle('fixed');
        });

        document.querySelector('.sort-filter-close').addEventListener('click', () => {
            sort_filter_container.classList.toggle('show-sort-filter');
            document.body.classList.toggle('fixed');
        });

        document.querySelector('.sort-wrapper a').addEventListener('click', (target) => {
            target.toElement.classList.toggle('active-filter');
        });

        const filters = filter_container.querySelectorAll('.ArnSearchField');
        filters.forEach((filter) => {
            filter.classList.add('panel');
        });
    }

    showSearchContainerOnMobile() {
        let adults_text = '';
        let location_text = '';
        let check_in_text = '';
        let check_in_date = '';
        let check_out_text = '';
        let check_out_date = '';
        const check_in_el = document.querySelector('meta[name="checkIn"]');
        const check_out_el = document.querySelector('meta[name="checkOut"]');
        const adults_el = document.querySelector('meta[name="numberOfAdults"]');
        const location_el = document.querySelector('meta[name="SearchLocation"]');
        const content_el = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');

        if (!check_in_el || !check_out_el || !location_el || !adults_el) return;

        adults_text = adults_el.getAttribute('content');
        location_text = location_el.getAttribute('content');
        check_in_text = check_in_el.getAttribute('content');
        check_out_text = check_out_el.getAttribute('content');

        check_in_date = dayjs(check_in_text);
        check_out_date = dayjs(check_out_text);

        utilities.createHTML(
            `
            <div class="show-search-container">
                <span class="search-close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                        <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>
                        <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>
                    </svg>
                </span>
                <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <div class="search-info">
                    <h3>${location_text}</h3>
                    <span>
                        <span class="search-dates">${check_in_date.format('MMMM D')} - ${check_out_date.format('MMMM D')}</span>
                        <span class="adults-count">${adults_text} guests</span>
                    </span>
                </div>
            </div>`,
            '.SearchHotels .ArnPrimarySearchOuterContainer',
            'beforeBegin'
        );

        document.querySelector('.show-search-container').addEventListener('click', () => {
            content_el.classList.toggle('show-search');
            document.querySelector('.search-close').classList.toggle('show-search-close');
        });
    }

    buildMobileMenu() {
        const menu_el = document.querySelector('#commands');
        const header_el = document.querySelector('#AdminControlsContainer');

        if (!menu_el && !header_el) return;

        header_el.insertAdjacentHTML('beforeEnd', '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>');

        const menu_button_el = document.querySelector('#hamburger');

        if (!menu_button_el) return;

        menu_button_el.addEventListener('click', () => {
            menu_button_el.classList.toggle('is-active');
            menu_el.classList.toggle('active');
        });
    }

    showAdditionalPolicies() {
        const additional_policies = document.querySelector('#theStayPolicies');
        const additional_policies_legend = additional_policies.querySelector('legend');
        const additional_policies_height = additional_policies.offsetHeight;
        const policies = document.querySelector('#theConfirmationPoliciesAjax');

        if (!window.matchMedia('(max-width:800px)').matches || !document.querySelector('#theBookingPage')) return;

        policies.insertAdjacentElement('afterEnd', additional_policies);
        utilities.moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd');
        additional_policies.insertAdjacentElement('beforeBegin', additional_policies_legend);

        additional_policies.insertAdjacentHTML(
            'beforeEnd',
            `
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
    `
        );

        additional_policies_legend.addEventListener('click', () => {
            additional_policies.classList.toggle('show-policies');
        });
    }

    updatePropReviewsURLToUseAnchor() {
        const review_link = document.querySelector('.reviewCount a');

        if (this.page_name !== 'property-detail' || !review_link) return;

        review_link.setAttribute('href', '#thePropertyReviews');
    }

    moveFooterOutOfSearchContainer() {
        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnSupportBottom')) return;

        document.body.insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'));
    }

    moveReviewsIntoPropNameContainer() {
        const prop_names = document.querySelectorAll('.SearchHotels .ArnPropName');

        if (!document.querySelector('.SearchHotels') || !document.querySelector('.ArnContainer')) return;

        prop_names.forEach((prop_name) => {
            prop_name.insertAdjacentElement('beforeEnd', prop_name.parentElement.querySelector('.ArnTripAdvisorDetails'));
        });
    }

    toggleMap() {
        const map = document.querySelector('#ArnPropertyMap');
        const map_btn = document.querySelector('#arnCloseAnchorId');
        const header = document.querySelector('header');
        const currency = document.querySelector('.config-container');

        if (!map_btn || !map) return;

        map_btn.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>';

        map_btn.addEventListener('click', () => {
            map_btn.classList.toggle('closeMap');
            map.classList.toggle('showMap');
            document.body.classList.toggle('fixed');
            header.classList.toggle('hideElement');
            currency.classList.toggle('hideElement');

            map_btn.classList.contains('closeMap') ? (map_btn.querySelector('span').textContent = ' Close Map') : (map_btn.querySelector('span').innerHTML = ' Open Map');
        });
    }

    accordion(main_container, content_container, open_button) {
        if (!document.querySelector(main_container)) {
            return;
        }
        const main_container_el = document.querySelector(main_container);
        const open_el = main_container_el.querySelector(open_button);

        const content_el = main_container_el.querySelector(content_container);
        const svg_arrow =
            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        const height = content_el.offsetHeight;

        document.querySelector(main_container).insertAdjacentHTML(
            'beforeEnd',
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
        `
        );
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

        prop_containers.forEach((container) => {
            const prop_class = container.querySelector('.ArnPropClass');
            const prop_name = container.querySelector('.ArnPropName');
            if (container && prop_class && prop_name) {
                prop_name.insertAdjacentElement('beforeEnd', prop_class);
            }
        });
    }

    setupReservationSummaryContainer() {
        let check_in_date = '';
        let check_in_text = '';
        let check_out_date = '';
        let check_out_text = '';
        const check_in_element = document.querySelector('.checkInRow td');
        const check_out_element = document.querySelector('.checkOutRow td');
        const currency_element = document.querySelector('meta[name="currency"]');

        if (!check_in_element || !check_out_element || !currency_element) return;

        check_in_text = check_in_element.textContent;
        check_out_text = check_out_element.textContent;

        check_in_date = dayjs(check_in_text).format(this.site_config.dayjs_date_format);
        check_out_date = dayjs(check_out_text).format(this.site_config.dayjs_date_format);

        utilities.createHTML(`<span class="date-container">${check_in_date} - ${check_out_date}`, '#theHotelAddress', 'beforeBegin');
        utilities.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd');
    }

    formatCheckoutForm() {
        const room_reservations = document.querySelectorAll('.WBGuestFormFields');
        let reservation_count = 0;

        room_reservations.forEach((reservation) => {
            reservation_count += 1;

            utilities.moveElementIntoExistingWrapper(
                `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardBillingNameAjax${reservation_count - 1}`,
                `#theBookingPage td.GuestForms > fieldset:nth-child(${reservation_count}) #theCreditCardNumberAjax`,
                'afterEnd'
            );

            utilities.createWrapper(
                `.RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr > td > div, .RoomNumber-${reservation_count} .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax${reservation_count}, #theCountryAjax${reservation_count}`,
                `#theBillingAddressAjax${reservation_count}`,
                `billing-details-container`,
                'afterEnd'
            );

            utilities.createWrapper(
                `.RoomNumber-${reservation_count} #theCreditCardBillingNameAjax${reservation_count}, .RoomNumber-${reservation_count} #theCardExpirationFieldsAjax, .RoomNumber-${reservation_count} #theCardVerificationAjax`,
                `.RoomNumber-${reservation_count} #theCreditCardNumberAjax`,
                `credit-card-details`,
                'afterEnd'
            );

            utilities.updateHTML(`#theCreditCardBillingNameAjax${reservation_count - 1} label`, "Cardholder's Name");
            utilities.updateHTML(`#theBillingAddressAjax${reservation_count - 1} label`, 'Billing Address');
            utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, `Billing Info`);
            if (reservation_count > 1) {
                utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, `Billing Info - Room ${reservation_count}`);
            }

            utilities.createHTML('<legend>Credit Card Info</legend>', `.RoomNumber-${reservation_count} .guestBillingAddress`, 'beforeBegin');
            utilities.updateHTML(
                `.cardNumber label`,
                '<div class="creditcards"><img src="https://dev-static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></div><label>Credit Card Number</label>'
            );
        });

        this.keepHeaderConsistentWhenSameAsLastGuestClicked(reservation_count);
    }

    keepHeaderConsistentWhenSameAsLastGuestClicked(reservation_count) {
        if (!document.querySelector('#theCopyInfoAjax input')) return;

        document.querySelector('#theCopyInfoAjax input').addEventListener('click', () => {
            setTimeout(() => {
                utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, `Billing Info`);
                if (reservation_count > 1) {
                    utilities.updateHTML(`.RoomNumber-${reservation_count} > legend`, `Billing Info - Room ${reservation_count}`);
                }
            }, 750);
        });
    }

    setRootPageBackgroundImage() {
        if (!this.site_config) return;
        document.body.insertAdjacentHTML(
            'beforeEnd',
            `

            <style>
                .RootBody{
                    background: ${this.site_config.banner_image_url};
                }
            </style>`
        );
    }

    // probably a much better way to do this
    applyConfigColors() {
        if (!this.site_config) return;

        document.body.insertAdjacentHTML(
            'beforeEnd',
            `
        <style>
        /* Header */

        header {
            justify-content: ${this.site_config.header.logo_flex_position};
            background: ${this.site_config.header.background};
        }

        .logo img{
            max-width: ${this.site_config.header.logo_max_width};
        }

        /* Primary Background Color */
            #searching h2:after,
            #theConfirmationButton,
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
            .bookRoom,
            .HoldRoomsForm .submit,
            #datePromptContainer+.SimpleSearch .CheckRates .submit,
            .yui3-skin-sam .yui3-calendar-day:hover,
            .sort-wrapper .active,
            .sort-wrapper a:hover {
                background: ${this.site_config.primary_color}
            }

            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover {
                    border: 1px solid ${this.site_config.primary_color}
                }

                .closeMap {
                    border: 1px solid ${this.site_config.primary_text_color}!important;
                    background-color: ${this.site_config.primary_color}!important;
                    color: ${this.site_config.primary_text_color}!important;
                }
            }

            @media screen and (max-width:800px) {

                #commands a:active,
                #commands a:focus,
                #commands a:hover,
                #commands button:active,
                #commands button:focus,
                #commands button:hover,
                .sort-wrapper a:before,
                .sort-wrapper a.active-filter:before,
                .sort {
                    background: ${this.site_config.primary_color}
                }
            }

            #searching,
            #theConfirmationButton,
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
            .sort-wrapper .active,
            .sort-wrapper a:hover {
                color: ${this.site_config.primary_text_color}
            }

            span.exclusive-rate {
                background: ${this.site_config.secondary_color};
                color: #fff;
            }


            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover {
                    color: ${this.site_config.secondary_text_color}
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
                    color: ${this.site_config.primary_text_color}
                }
            }
            .holdRoom,
            .reviewCount a,
            #theAdditionalEmailsLink a,
            #theOtherSubmitButton,
            .SinglePropDetail .ArnRateCancelAnchor,
            .open-modal,
            .lowest-rate-link,
            .SinglePropDetail .RateCalendarPopupAnchor,
            .ArnContentContainer legend {
                color: ${this.site_config.secondary_text_color};
            }
            
            .percentSavings{
                color: ${this.site_config.secondary_color};
            }

            input#theSubmitButton,
            .RootBody #theOtherSubmitButton,
            .bookRoom,
            .arn-leaflet-reset-button,
            input#theConfirmationButton,
            a.ArnShowRatesLink {
                background: ${this.site_config.primary_color};
                color: ${this.site_config.primary_text_color};
                border: 1px solid ${this.site_config.border_color};
            }

            .CheckRates input.submit,
            .CheckRates input.submit,
            .CheckRates input.submit {
                background: ${this.site_config.primary_color};
                color: ${this.site_config.primary_text_color};
            }

            input#theSubmitButton:hover,
            input#theSubmitButton:focus,
            input#theSubmitButton:active,
            #theOtherSubmitButton:hover,
            #theOtherSubmitButton:focus,
            #theOtherSubmitButton:active,
            .RootBody #theOtherSubmitButton:hover,
            .RootBody #theOtherSubmitButton:focus,
            .RootBody #theOtherSubmitButton:active,
            .bookRoom:hover,
            .bookRoom:focus,
            .bookRoom:active,
            .arn-leaflet-reset-button:hover,
            .arn-leaflet-reset-button:focus,
            .arn-leaflet-reset-button:active,
            input#theConfirmationButton:hover,
            input#theConfirmationButton:focus,
            input#theConfirmationButton:active,
            a.ArnShowRatesLink:hover {
                background: ${this.site_config.button_hover_background_color};
                color: ${this.site_config.button_hover_text_color};
                border: 1px solid ${this.site_config.button_hover_border_color};
            }

            .CheckRates input.submit:hover,
            .CheckRates input.submit:focus,
            .CheckRates input.submit:active {
                background: ${this.site_config.button_hover_background_color};
                color: ${this.site_config.button_hover_text_color};
            }

            .SinglePropDetail #moreRatesLink {
                color: ${this.site_config.primary_color};
                border-color: ${this.site_config.primary_color};
            }
            
            .SinglePropDetail #moreRatesLink:hover {
                background-color: ${this.site_config.primary_color}
            }

            @media screen and (max-width:800px) {
                #theBookingPage legend#policies-legend {
                    color: ${this.site_config.secondary_text_color}
                }
            }

            header,
            #AdminControlsContainer {
                border-bottom:3px solid ${this.site_config.border_color}
            }

            .arnMapMarker.contracted-pin,
            .arnMapMarker.contracted-pin.highlight{
                border: 1px solid ${this.site_config.primary_text_color};
                background: ${this.site_config.secondary_color};
                color: ${this.site_config.primary_text_color};
            }

            .arnMapMarker.contracted-pin:hover {
                border: 1px solid ${this.site_config.secondary_color};
                background: ${this.site_config.primary_text_color};
                color: ${this.site_config.secondary_color};
            }

            .arnMapMarker.contracted-pin .arnMapMarkerTriangle {
                border-top-color: ${this.site_config.secondary_color};
            }

            #theOtherSubmitButton,
            .ArnSecondarySearchOuterContainer select,
            .ArnShowRatesLink,
            .RootBody #theOtherSubmitButton,
            .bookRoom,
            .sort,
            .HoldRoomsForm .submit {
                border:1px solid ${this.site_config.border_color}
            }

            .holdRoom {
                border: 1px solid ${this.site_config.border_color}
            }

            @media screen and (max-width:1105px) {
                #arnCloseAnchorId,
                .sort {
                    border:1px solid ${this.site_config.primary_color}
                }
            }

            @media screen and (max-width:800px) {
                .sort-wrapper a:before {
                    border:2px solid ${this.site_config.primary_color}
                }
            }

            .active-page{
                background: ${this.site_config.primary_color} !important;
                color: ${this.site_config.primary_text_color} !important;
                border: 1px solid ${this.site_config.border_color} !important;
            }
        </style>
        `
        );
    }

    async applyCustomStyles() {
        if (!this.site_config.has_custom_styles) return;
        document.body.insertAdjacentHTML('beforeend', `<link href="${this.site_config.custom_styles_url}" rel="stylesheet">`);
    }

    setFontFromConfig() {
        if (!this.site_config) return;

        utilities.createHTML(`<link href="${this.site_config.google_font_url}" rel="stylesheet">`, 'head', 'beforeEnd');
        document.body.insertAdjacentHTML('beforeEnd', `<style>*{font-family: ${this.site_config.google_font_name}, 'Helvetica';}</style>`);
    }

    // refactor me, please!
    showLanguageFromCongif() {
        let language_label = '';
        let active_language = '';

        const language_container_el = document.querySelector('#language');
        const config_container = document.querySelector('.config-container');
        const active_language_el = document.querySelector('meta[name="theme"]');

        if (!this.site_config || !config_container || !active_language_el || !language_container_el) return;
        if (!this.site_config.show_language_select) {
            language_container_el.style.display = 'none';
            return;
        }

        active_language = active_language_el.getAttribute('content');
        document.querySelector(`.language-container div[value='${active_language}']`).classList.add('active-language');
        document.body.insertAdjacentElement('afterBegin', config_container);
        config_container.insertAdjacentElement('afterBegin', language_container_el);
        language_label = language_container_el.querySelector('#language-label');
        language_label.querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML;

        language_label.addEventListener('click', () => {
            language_container_el.querySelector('.language-container').classList.toggle('show-language-container');

            // return if ie - ie can't toggle svgs
            if (window.document.documentMode) return;

            language_label.querySelector('svg').classList.toggle('flip-svg');
        });

        window.addEventListener('click', (e) => {
            if (document.querySelector('.show-language-container')) {
                if (e.target === document.querySelector('#language-label') || e.target.parentNode === document.querySelector('.language-container')) return;

                document.querySelector('.language-container').classList.toggle('show-language-container');

                // return if ie - ie can't toggle svgs
                if (window.document.documentMode) return;

                language_label.querySelector('svg').classList.toggle('flip-svg');
            }
        });
    }

    createCurrencyDropdown() {
        const currencies_json = 
        {
            "AED": {
                "symbol": "AED",
                "name": "United Arab Emirates Dirham",
                "symbol_native": "د.إ.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AED",
                "name_plural": "UAE dirhams"
            },
            "AOA": {
                "symbol": "Kz",
                "symbol_native": "Kz",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AOA",
                "name": "Angolan Kwanza"
            },
            "AMD": {
                "symbol": "AMD",
                "name": "Armenian Dram",
                "symbol_native": "դր.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AMD",
                "name_plural": "Armenian drams"
            },
            "ARS": {
                "symbol": "AR$",
                "name": "Argentine Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ARS",
                "name_plural": "Argentine pesos"
            },
            "AUD": {
                "symbol": "AU$",
                "name": "Australian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AUD",
                "name_plural": "Australian Dollars"
            },
            "AWG": {
                "symbol": "Afl.",
                "symbol_native": "Afl.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AWG",
                "name": "Aruban Florin"
            },
            "AZN": {
                "symbol": "man.",
                "name": "Azerbaijani Manat",
                "symbol_native": "ман.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AZN",
                "name_plural": "Azerbaijani manats"
            },
            "BBD": {
                "symbol": "Bds$",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BBD",
                "name": "Barbadian Dollar"
            },
            "BHD": {
                "symbol": "BD",
                "name": "Bahraini Dinar",
                "symbol_native": "د.ب.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "BHD",
                "name_plural": "Bahraini dinars"
            },
            "BMD": {
                "symbol": "$",
                "name": "Bermudian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BMD",
                "name_plural": "Bermudian Dollar"
            },
            "BRL": {
                "symbol": "R$",
                "name": "Brazilian Real",
                "symbol_native": "R$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BRL",
                "name_plural": "Brazilian reals"
            },
            "BSD": {
                "symbol": "B$",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BSD",
                "name": "Bahamian Dollar"
            },
            "CAD": {
                "symbol": "CA$",
                "name": "Canadian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CAD",
                "name_plural": "Canadian Dollars"
            },
            "CHF": {
                "symbol": "CHF",
                "name": "Swiss Franc",
                "symbol_native": "CHF",
                "decimal_digits": 2,
                "rounding": 0.05,
                "code": "CHF",
                "name_plural": "Swiss francs"
            },
            "CLP": {
                "symbol": "CL$",
                "name": "Chilean Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CLP",
                "name_plural": "Chilean pesos"
            },
            "CNY": {
                "symbol": "CN¥",
                "name": "Chinese Yuan",
                "symbol_native": "CN¥",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CNY",
                "name_plural": "Chinese yuan"
            },
            "COP": {
                "symbol": "CO$",
                "name": "Colombian Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "COP",
                "name_plural": "Colombian pesos"
            },
            "CRC": {
                "symbol": "₡",
                "name": "Costa Rican Colón",
                "symbol_native": "₡",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CRC",
                "name_plural": "Costa Rican colóns"
            },
            "CZK": {
                "symbol": "Kč",
                "name": "Czech Republic Koruna",
                "symbol_native": "Kč",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CZK",
                "name_plural": "Czech Republic korunas"
            },
            "DKK": {
                "symbol": "Dkr",
                "name": "Danish Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DKK",
                "name_plural": "Danish kroner"
            },
            "DZD": {
                "symbol": "DA",
                "name": "Algerian Dinar",
                "symbol_native": "د.ج.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DZD",
                "name_plural": "Algerian dinars"
            },
            "EGP": {
                "symbol": "EGP",
                "name": "Egyptian Pound",
                "symbol_native": "ج.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EGP",
                "name_plural": "Egyptian pounds"
            },
            "EUR": {
                "symbol": "€",
                "name": "Euro",
                "symbol_native": "€",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EUR",
                "name_plural": "euros"
            },
            "FJD": {
                "symbol": "FJ$€",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "FJD",
                "name": "Fijian Dollar"
            },
            "GBP": {
                "symbol": "£",
                "name": "British Pound Sterling",
                "symbol_native": "£",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GBP",
                "name_plural": "British pounds sterling"
            },
            "HKD": {
                "symbol": "HK$",
                "name": "Hong Kong Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HKD",
                "name_plural": "Hong Kong Dollars"
            },
            "HUF": {
                "symbol": "Ft",
                "name": "Hungarian Forint",
                "symbol_native": "Ft",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "HUF",
                "name_plural": "Hungarian forints"
            },
            "IDR": {
                "symbol": "Rp",
                "name": "Indonesian Rupiah",
                "symbol_native": "Rp",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IDR",
                "name_plural": "Indonesian rupiahs"
            },
            "ISK": {
                "symbol": "Ikr",
                "name": "Icelandic Króna",
                "symbol_native": "kr",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ISK",
                "name_plural": "Icelandic krónur"
            },
            "ILS": {
                "symbol": "₪",
                "name": "Israeli New Shekel",
                "symbol_native": "₪",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ILS",
                "name_plural": "Israeli new shekels"
            },
            "INR": {
                "symbol": "Rs",
                "name": "Indian Rupee",
                "symbol_native": "₹",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "INR",
                "name_plural": "Indian rupees"
            },
            "JPY": {
                "symbol": "¥",
                "name": "Japanese Yen",
                "symbol_native": "￥",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "JPY",
                "name_plural": "Japanese yen"
            },
            "KGS": {
                "symbol": "Ksh",
                "name": "Kyrgyzstani Som",
                "symbol_native": "Ksh",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KES",
                "name_plural": "Kenyan shillings"
            },
            "KRW": {
                "symbol": "₩",
                "name": "South Korean Won",
                "symbol_native": "₩",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KRW",
                "name_plural": "South Korean won"
            },
            "KWD": {
                "symbol": "KD",
                "name": "Kuwaiti Dinar",
                "symbol_native": "د.ك.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "KWD",
                "name_plural": "Kuwaiti dinars"
            },
            "KYD": {
                "symbol": "$",
                "name": "Cayman Islands dollar",
                "symbol_native": "$‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KYD",
                "name_plural": "Cayman Islands DollarS"
            },
            "KZT": {
                "symbol": "KZT",
                "name": "Kazakhstani Tenge",
                "symbol_native": "тңг.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KZT",
                "name_plural": "Kazakhstani tenges"
            },
            "LVL": {
                "symbol": "Ls",
                "name": "Latvian Lats",
                "symbol_native": "Ls",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LVL",
                "name_plural": "Latvian lati"
            },
            "MAD": {
                "symbol": "MAD",
                "name": "Moroccan Dirham",
                "symbol_native": "د.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MAD",
                "name_plural": "Moroccan dirhams"
            },
            "MXN": {
                "symbol": "MX$",
                "name": "Mexican Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MXN",
                "name_plural": "Mexican pesos"
            },
            "MYR": {
                "symbol": "RM",
                "name": "Malaysian Ringgit",
                "symbol_native": "RM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MYR",
                "name_plural": "Malaysian ringgits"
            },
            "NGN": {
                "symbol": "₦",
                "name": "Nigerian Naira",
                "symbol_native": "₦",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NGN",
                "name_plural": "Nigerian nairas"
            },
            "NOK": {
                "symbol": "Nkr",
                "name": "Norwegian Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NOK",
                "name_plural": "Norwegian kroner"
            },
            "NZD": {
                "symbol": "NZ$",
                "name": "New Zealand Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NZD",
                "name_plural": "New Zealand Dollars"
            },
            "OMR": {
                "symbol": "OMR",
                "name": "Omani Rial",
                "symbol_native": "ر.ع.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "OMR",
                "name_plural": "Omani rials"
            },
            "PAB": {
                "symbol": "B/.",
                "name": "Panamanian Balboa",
                "symbol_native": "B/.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PAB",
                "name_plural": "Panamanian balboas"
            },
            "PGK": {
                "symbol": "K",
                "symbol_native": "K",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PGK",
                "name": "Papua New Guinean Kina"
            },
            "PHP": {
                "symbol": "₱",
                "name": "Philippine Peso",
                "symbol_native": "₱",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PHP",
                "name_plural": "Philippine pesos"
            },
            "PLN": {
                "symbol": "zł",
                "name": "Polish Zloty",
                "symbol_native": "zł",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PLN",
                "name_plural": "Polish zlotys"
            },
            "QAR": {
                "symbol": "QR",
                "name": "Qatari Rial",
                "symbol_native": "ر.ق.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "QAR",
                "name_plural": "Qatari rials"
            },
            "RON": {
                "symbol": "RON",
                "name": "Romanian Leu",
                "symbol_native": "RON",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RON",
                "name_plural": "Romanian lei"
            },
            "RUB": {
                "symbol": "RUB",
                "name": "Russian Ruble",
                "symbol_native": "руб.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RUB",
                "name_plural": "Russian rubles"
            },
            "SAR": {
                "symbol": "SR",
                "name": "Saudi Riyal",
                "symbol_native": "ر.س.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SAR",
                "name_plural": "Saudi riyals"
            },
            "SEK": {
                "symbol": "Skr",
                "name": "Swedish Krona",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SEK",
                "name_plural": "Swedish kronor"
            },
            "SGD": {
                "symbol": "S$",
                "name": "Singapore Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SGD",
                "name_plural": "Singapore Dollars"
            },
            "THB": {
                "symbol": "฿",
                "name": "Thai Baht",
                "symbol_native": "฿",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "THB",
                "name_plural": "Thai baht"
            },
            "TRY": {
                "symbol": "TL",
                "name": "Turkish Lira",
                "symbol_native": "TL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TRY",
                "name_plural": "Turkish Lira"
            },
            "TTD": {
                "symbol": "TT$",
                "name": "Trinidad and Tobago Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TTD",
                "name_plural": "Trinidad and Tobago Dollars"
            },
            "TWD": {
                "symbol": "NT$",
                "name": "New Taiwan Dollar",
                "symbol_native": "NT$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TWD",
                "name_plural": "New Taiwan Dollars"
            },
            "UAH": {
                "symbol": "₴",
                "name": "Ukrainian Hryvnia",
                "symbol_native": "₴",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "UAH",
                "name_plural": "Ukrainian hryvnias"
            },
            "USD": {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "name_plural": "US Dollars"
            },
            "VEF": {
                "symbol": "Bs.F.",
                "name": "Venezuelan Bolívar",
                "symbol_native": "Bs.F.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "VEF",
                "name_plural": "Venezuelan Bolívars"
            },
            "VND": {
                "symbol": "₫",
                "name": "Vietnamese Dong",
                "symbol_native": "₫",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "VND",
                "name_plural": "Vietnamese Dong"
            },
            "ZAR": {
                "symbol": "R",
                "name": "South African Rand",
                "symbol_native": "R",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ZAR",
                "name_plural": "South African Rand"
            }
        };

        const setupContentForDropdown = () => {
            const currencies = Object.entries(currencies_json);
            const menu_container = document.createElement('div');
            const all_currencies_container = document.createElement('div');
            const top_currencies = `
            <div class="top-currencies">
                <h4>Top Currencies</h4>
                <div>
                    <span><strong>${currencies_json['AUD']['code']}</strong> - ${currencies_json['AUD']['name']}</span>
                    <span><strong>${currencies_json['CAD']['code']}</strong> - ${currencies_json['CAD']['name']}</span>
                    <span><strong>${currencies_json['EUR']['code']}</strong> - ${currencies_json['EUR']['name']}</span>
                    <span><strong>${currencies_json['MXN']['code']}</strong> - ${currencies_json['MXN']['name']}</span>
                    <span><strong>${currencies_json['GBP']['code']}</strong> - ${currencies_json['GBP']['name']}</span>
                    <span><strong>${currencies_json['USD']['code']}</strong> - ${currencies_json['USD']['name']}</span>
                </div>

                <h4>All Currencies</h4>
            </div>`;

            menu_container.insertAdjacentHTML('afterBegin', top_currencies)
            menu_container.classList.add('currency-content');
            
            all_currencies_container.classList.add('all-currencies-container');

            for(const currency in currencies_json){
                all_currencies_container.insertAdjacentHTML('beforeEnd', `<div id="${currency}"><strong>${currency}</strong> - ${currencies_json[currency]['name']}</div>`);
            }

            menu_container.insertAdjacentElement('beforeEnd', all_currencies_container);
    
            utilities.createDropdownMenu('#currency-label', menu_container, '.currency-content', '.dropdown' );
        }

        const updateParamOnCurrencyClick = () => {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            const dropdown = document.querySelector('.dropdown');

            if(!dropdown) return;
            dropdown.addEventListener('click', (e) => {
                let clicked_currency = e.target.id;
                params.delete('currency');
                params.set('currency', clicked_currency);

                window.location.href = url.host + url.pathname + '?' + decodeURIComponent(params);
            });
        }

        setupContentForDropdown();
        updateParamOnCurrencyClick();

        // let currencies = '';
        // let clicked_currency;
        // const currencies_obj = {};
        // let selected_currency = '';
        // let submit;
        // let currencies_select;
        // let currencies_node_list;
        
        // const currency_label = document.querySelector('#currency-label');
        // const currencies_container = document.querySelector('.currencies');
        // const config_container = document.querySelector('.config-container');
        // const top_currencies_container = document.querySelector('.top-currencies');

        // if (this.page_name === 'search-results' || this.page_name === 'landing-page') {
        //     submit = document.querySelector('#theOtherSubmitButton');
        //     currencies_select = document.querySelector('#CurrenciesContainer select');
        //     currencies_node_list = document.querySelectorAll('#CurrenciesContainer select option');
        // } else if (this.page_name === 'property-detail') {
        //     submit = document.querySelector('.CheckRates .submit');
        //     currencies_select = document.querySelector('.ArnCurrency select');
        //     currencies_node_list = document.querySelectorAll('.ArnCurrency select option');
        // }

        // if (!currencies_node_list || !config_container || !currency_label || !top_currencies_container || !currencies_select) return;

        // currencies_node_list.forEach((currency) => {
        //     if (currency.getAttribute('selected')) {
        //         selected_currency = currency.value;
        //     }

        //     currencies_obj[currency.label] = currency.value;
        // });

        // currencies = Object.entries(currencies_obj);

        // currencies.forEach((currency) => {
        //     console.log(currency)
        //     if (
        //         currency[0] === 'United States Dollars' ||
        //         currency[0] === 'Euro' ||
        //         currency[0] === 'United Kingdom Pounds' ||
        //         currency[0] === 'Mexico Pesos' ||
        //         currency[0] === 'Canada Dollars' ||
        //         currency[0] === 'Australia Dollars'
        //     ) {
        //         top_currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
        //     }

        //     currencies_container.insertAdjacentHTML('beforeEnd', `<div id=${currency[1]}>${currency[0]}</div>`);
        // });

        // currency_label.addEventListener('click', () => {
        //     currencies_container.classList.toggle('show-currencies-container');

        //     // return if ie - ie can't toggle an svg
        //     if (window.document.documentMode) return;

        //     currency_label.querySelector('svg').classList.toggle('flip-svg');
        // });

        // currencies_container.addEventListener('click', (e) => {
        //     if (!e.target.getAttribute('id')) return;

        //     clicked_currency = e.target.getAttribute('id');
        //     document.querySelector('.active-currency').classList.remove('active-currency');
        //     document.getElementById(clicked_currency).classList.add('active-currency');
        //     currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
        //     currencies_select.value = clicked_currency;

        //     // submit.click();
        //     const url = new URL(window.location.href);
        //     const params = new URLSearchParams(url.search);
        //     params.set('currency', clicked_currency)
        //     console.log('Output: createCurrencyDropDown -> params', clicked_currency.tex);
        // });

        // document.getElementById(selected_currency).classList.add('active-currency');

        // window.addEventListener('click', (e) => {
        //     if (document.querySelector('.show-currencies-container')) {
        //         if (
        //             e.target === document.querySelector('.currencies') ||
        //             e.target === document.querySelector('#currency-label') ||
        //             e.target.parentNode === document.querySelector('.currencies') ||
        //             e.target.parentNode === document.querySelector('.top-currencies')
        //         )
        //             return;

        //         currencies_container.classList.toggle('show-currencies-container');

        //         // return if ie - ie can't toggle svgs
        //         if (window.document.documentMode) return;
        //         currency_label.querySelector('svg').classList.toggle('flip-svg');
        //     }
        // });

        // currency_label.querySelector('span').textContent = document.querySelector('.active-currency').textContent;
    }

    setupDatePrompt() {
        const date_prompt = document.querySelector('#theDatePrompt');

        if (!date_prompt) return;

        date_prompt.querySelector('#datePromptContainer').insertAdjacentHTML('afterBegin', `<img src="${this.site_config.header.logo_file_location}" alt="Logo">`);
    }

    highlightMapMarkersOnPropertyHover() {
        let prop_id;
        let prop_id_el;
        const properties = document.querySelectorAll('.ArnContainer');
        const prop_container = document.querySelector('#currentPropertyPage');

        if (!prop_container) return;

        properties.forEach((property) => {
            property.addEventListener('mouseenter', (e) => {
                prop_id_el = property.parentElement.querySelector('.propId');

                if (!prop_id_el) return;

                prop_id = prop_id_el.textContent;
                if (window.ArnMapDispatcher) ArnMapDispatcher.eventPropertyHighlightOn(prop_id);
            });

            property.addEventListener('mouseleave', (e) => {
                if (window.ArnMapDispatcher) ArnMapDispatcher.eventPropertyHighlightOff(prop_id);
            });
        });
    }

    // refactor me, please!
    showFullStayAndNightlyRates(nights, currency) {
        let rate;
        let properties;
        let average_rate;
        let full_stay_rate;
        let fixed_full_stay;

        if (this.site_config.show_tax_inclusive_rates) {
            if (document.querySelector('.SearchHotels')) {
                properties = document.querySelectorAll('.ArnContainer');
                properties.forEach((property) => {
                    average_rate = property.querySelector('.ArnRateCell .ArnPriceCell .averageNightly');
                    full_stay_rate = property.querySelector('.arnPrice .arnUnit');

                    if (!average_rate || !full_stay_rate) return;

                    average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                    full_stay_rate.insertAdjacentHTML('beforeEnd', `<span> for ${nights} nights </span>`);

                    if (nights === 1) property.querySelector('.arnPrice').style.display = 'none';
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

                    if (nights === 1) property.querySelector('.averageNightly').style.display = 'none';
                });
            }
        }

        if (!this.site_config.show_tax_inclusive_rates) {
            if (document.querySelector('.SearchHotels')) {
                properties = document.querySelectorAll('.ArnContainer');
                properties.forEach((property) => {
                    rate = property.querySelector('.arnPrice');
                    average_rate = property.querySelector('.arnPrice .arnUnit');

                    if (!average_rate || !rate) return;

                    full_stay_rate = parseFloat(average_rate.textContent) * nights;
                    fixed_full_stay = full_stay_rate.toFixed(2);

                    if (!average_rate) return;

                    currency === 'USD'
                        ? rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">$${fixed_full_stay} for ${nights} nights </div>`)
                        : rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">${fixed_full_stay} ${currency} for ${nights} nights </div>`);
                    if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                });

                document.body.insertAdjacentHTML('beforeEnd', '<style>.arnCurrency,.arnUnit{font-size: 17px;}.arnCurrency + div{font-weight:500;}</style>');
            }

            if (document.querySelector('.SinglePropDetail')) {
                properties = document.querySelectorAll('.ArnNightlyRate');
                properties.forEach((property) => {
                    average_rate = property.querySelector('strong');
                    full_stay_rate = parseFloat(average_rate.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')) * nights;

                    if (!average_rate || !full_stay_rate) return;

                    fixed_full_stay = full_stay_rate.toFixed(2);

                    if (!fixed_full_stay) return;

                    currency === 'USD'
                        ? average_rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">$${fixed_full_stay} for ${nights} nights </div>`)
                        : average_rate.insertAdjacentHTML('beforeEnd', `<div>per night</div><div class="full-stay">${fixed_full_stay} ${currency} for ${nights} nights </div>`);
                    if (nights === 1) property.querySelector('.full-stay').style.display = 'none';
                });

                document.body.insertAdjacentHTML(
                    'beforeEnd',
                    '<style>.ArnNightlyRate strong{font-size: 17px !important;}.ArnNightlyRate strong div:first-child{font-weight:500;margin-bottom:4px;}.ArnNightlyRate strong div{font-size:13px;}</style>'
                );
            }
        }
    }

    async getTotalNights() {
        const check_in_el = document.querySelector('meta[name="checkIn"]');
        const check_out_el = document.querySelector('meta[name="checkOut"]');

        if (!check_in_el || !check_out_el) return;

        const check_in = new Date(check_in_el.getAttribute('content'));
        const check_out = new Date(check_out_el.getAttribute('content'));
        const nights = (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);

        return nights;
    }

    getNightlyRateForMapMarkers(nights, currency) {
        let average_rate;
        let full_stay_rate;
        let fixed_average_rate;
        const map_markers = document.querySelectorAll('.arnMapMarkerSpan');

        map_markers.forEach((marker) => {
            full_stay_rate = marker.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '');
            average_rate = full_stay_rate / nights;
            fixed_average_rate = parseFloat(average_rate).toFixed(0);

            currency === 'USD' ? (marker.textContent = `$${fixed_average_rate}`) : (marker.textContent = `${fixed_average_rate} ${currency}`);
        });
    }

    addTitleToProperties() {
        let property_name;
        let property_name_el;
        const properties = document.querySelectorAll('.ArnContainer');

        if (!document.querySelector('.SearchHotels')) return;

        properties.forEach((property) => {
            property_name_el = property.querySelector('.ArnPropNameLink');
            property_name = property_name_el.querySelector('span').textContent;

            property_name_el.setAttribute('title', property_name);
        });
    }

    showLoaderOnResultsUpdate() {
        const loader = document.querySelector('#searching');
        const update_buttons = document.querySelectorAll('#theSubmitButton', '#theOtherSubmitButton');

        if (!document.querySelector('.SearchHotels')) return;

        update_buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (this.site_config.lodging.event_id === null && document.querySelector('input#city').value === '') {
                    this.style_validation_fields('input#city');
                    return;
                }
                if (document.querySelector('input#theCheckIn').value === '') {
                    this.style_validation_fields('input#theCheckIn');
                    return;
                }
                loader.style.display = 'block';
            });
        });
    }

    changeContractedPropertyPinColor() {
        const property_elements = document.querySelectorAll('.ArnProperty');
        const map_pins_list = document.querySelectorAll('.arnMapMarker');
        if (!property_elements) return;

        const properties_array = [];
        const contracted_properties_index = [];

        property_elements.forEach((property) => {
            if (property.classList.contains('S16') || property.classList.contains('S20')) {
                properties_array.push(true);
            } else {
                properties_array.push(false);
            }
        });

        properties_array.forEach((property, i) => {
            if (!property) return;

            contracted_properties_index.push(i);
        });

        contracted_properties_index.forEach((contracted_property_index) => {
            map_pins_list[contracted_property_index].classList.add('contracted-pin');
        });
    }

    // map will need a redraw for this to work - will come back to this
    setMapMarkerSize() {
        let currency = '';
        const currency_el = document.querySelector('meta[name="currency"]');
        const map_markers = document.querySelectorAll('.arnMapMarker');

        if (!currency_el || !map_markers) return;

        currency = currency_el.getAttribute('content');

        if (currency === 'USD') return;

        map_markers.forEach((marker) => {
            marker.style.width = '85px';
        });
    }

    useLogoForVenueMapMarker() {
        const map_markers = document.querySelectorAll('.arn-green-marker-icon');

        if (!this.site_config) return;

        map_markers.forEach((marker) => {
            marker.setAttribute('src', `${this.site_config.map_marker_image_url}`);
        });
    }

    activateCheckboxByClickingOnAssociatedLabel() {
        const checkbox_wrappers = document.querySelectorAll('.ArnSearchField div');

        if (!checkbox_wrappers) return;

        checkbox_wrappers.forEach((wrapper) => {
            if (!wrapper.querySelector('input[type="checkbox"]')) return;

            wrapper.querySelector('span').addEventListener('click', (e) => {
                wrapper.querySelector('input[type="checkbox"]').click();
            });
        });
    }

    addHRToProperties() {
        const props = document.querySelectorAll('.ArnProperty');

        if (!props) return;

        props.forEach((prop) => {
            prop.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
        });
    }

    /**
     *@description Swaps out the city search for lat/lng geo search and autocomplete for Algolia's autocomplte.
     */
    addAlgoliaSearch() {
        let lat_lng;
        let default_lat_lng;
        let url;
        let destination_value;
        let checked_amenities = '';
        let checked_stars = '';
        const {origin} = window.location;
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);
        const original_params = document.querySelector('meta[name="originalParams"]').content;
        const original_params_url = new URLSearchParams(original_params);

        function setInputToRequired(selector) {
            if (!document.querySelector(selector)) return;
            document.querySelector(selector).required = true;
        }

        function hideArnSearchElements(selectors) {
            if (!document.querySelector('.SearchHotels')) return;
            const elements = document.querySelectorAll(selectors);

            elements.forEach((element) => {
                element.style.display = 'none';
            });
        }

        function removeArnSearchBar(selector) {
            if (!document.querySelector(selector)) return;

            document.querySelector(selector).remove();
        }

        function insertAlgoliaSearch(page, selector, adjacent_location, html) {
            if (!document.querySelector(page)) return;

            document.querySelector(selector).insertAdjacentHTML(adjacent_location, html);
        }

        function prepopulateDestinationInputOnSearchHotels() {
            if (!document.querySelector('.SearchHotels')) return;

            const destination = search_params.get('destination');
            const algolia_input = document.querySelector('input#address-input');
            algolia_input.value = destination;

            algolia_input.addEventListener('click', () => {
                algolia_input.value = '';
            });
        }

        function setDropdownIndex(dropdown_selector) {
            const dropdown = document.querySelector(dropdown_selector);
            let value = dropdown.querySelector(`option[value="${dropdown.value}"]`).textContent;

            dropdown.addEventListener('change', () => {
                for (let i = 0; i < dropdown.length; i += 1) {
                    if (dropdown[i].selected) {
                        dropdown.selectedIndex = i;
                        value = dropdown[i].textContent;
                        break;
                    }
                }
                return value;
            });
            return value;
        }

        const remove_city_search_for_event = () => {
            if (this.page_name !== 'search-results') return;
            if (!this.site_config.lodging.event_id) return;
            utilities.waitForSelectorInDOM('.algolia-places').then(() => {
                document.querySelector('.algolia-places').remove();
                document.querySelector('#theSearchBox').firstChild.style.display = 'none';
            });
        };

        const construct_url_on_submit = () => {
            const arn_submit_btn = document.querySelector('input#theSubmitButton');
            arn_submit_btn.setAttribute('onClick', '');

            document.querySelector('form#searchForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const rooms_value = setDropdownIndex('select#rooms');
                const adults_value = setDropdownIndex('select#adults');
                const check_in_value = dayjs(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY');
                const check_out_value = dayjs(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');

                const nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');
                const properties = `&properties=${original_params_url.get('properties')}`;
                const utm_source = `&utm_source=${original_params_url.get('utm_source')}`;
                const location_label = `&locationlabel=${original_params_url.get('locationlabel')}`;
                const radius = `&radius=${original_params_url.get('radius')}`;
                const group_id = `&groupid=${original_params_url.get('groupid')}`;
                const page_size = `&pageSize=${original_params_url.get('pageSize')}`;
                const cid = `&cid=${original_params_url.get('cid')}`;

                const build_url = (lat, lng) => {
                    url = `${origin}/v6/?type=geo&siteid=${this.site_id}&longitude=${lng}&latitude=${lat}&&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${this.site_config.distance_unit}&rooms=${rooms_value}&adults=${adults_value}`;
                };

                if (lat_lng) build_url(lat_lng.lat, lat_lng.lng);
                else if (default_lat_lng) build_url(default_lat_lng.lat, default_lat_lng.lng);
                else if (!lat_lng && !default_lat_lng && this.page_name === 'search-results') {
                    build_url(original_params_url.get('latitude'), original_params_url.get('longitude'));
                }

                if (this.site_config.lodging.event_id === null) {
                    destination_value = document.querySelector('input#address-input').value;
                    url += `&destination=${destination_value}`;
                }

                function applyFilters() {
                    const amenity_filters = document.querySelectorAll('#AmentitiesContainer .ArnSearchField div');

                    amenity_filters.forEach((el) => {
                        if (el.classList.contains('lblAmenities')) return;
                        if (el.querySelector('input').checked) {
                            const label = el.querySelector('span').textContent;
                            checked_amenities += `${label},`;
                        }
                    });

                    const star_filters = document.querySelectorAll('#PropertyClassesContainer .ArnSearchField div');

                    star_filters.forEach((el) => {
                        if (el.classList.contains('lblRating')) return;
                        if (el.querySelector('input').checked) {
                            const label = el.querySelector('span').textContent;
                            checked_stars += `${label},`;
                        }
                    });
                }

                applyFilters();

                const built_url = new URL(url);
                const amenities = checked_amenities.slice(0, -1);
                const stars = checked_stars.slice(0, -1);

                if (amenities !== '') {
                    built_url.searchParams.append('amenities', amenities);
                }
                if (stars !== '') {
                    built_url.searchParams.append('propertyclasses', stars);
                }
                if (this.page_name === 'search-results') {
                    window.location.href = `${decodeURIComponent(built_url)}${properties}${utm_source}${location_label}${radius}${group_id}${page_size}${cid}`;
                } else window.location.href = decodeURIComponent(built_url);
            });
        };
        insertAlgoliaSearch('.RootBody', 'div#CitySearchContainer span', 'beforeEnd', '<input type="search" id="address-input" placeholder="Destination" required="true" />');
        insertAlgoliaSearch(
            '.SearchHotels',
            'div#theSearchBox',
            'afterBegin',
            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
        );
        removeArnSearchBar('input#city');
        remove_city_search_for_event();
        prepopulateDestinationInputOnSearchHotels();
        setDropdownIndex('select#rooms');
        setDropdownIndex('select#adults');
        setInputToRequired('input#theCheckIn');

        jQuery('#theBody').on('arnMapLoadedEvent', () => {
            if (search_params.has('locationlabel') || search_params.has('points')) return;
            hideArnSearchElements('img.arn-green-marker-icon');
        });

        hideArnSearchElements('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch, div#HotelNameContainer');
        construct_url_on_submit();

        (() => {
            const places_autocomplete = places({
                appId: this.site_config.algolia_app_id,
                apiKey: this.site_config.algolia_api_key,
                container: document.querySelector('input#address-input'),
            }).configure({
                aroundLatLngViaIP: 'false',
                type: 'city',
            });
            places_autocomplete.on('change', function resultSelected(e) {
                document.querySelector('input#address-input').value = e.suggestion.value || '';
                lat_lng = e.suggestion.latlng;
            });
            places_autocomplete.on('suggestions', function saveDefaultGeo(e) {
                // eslint-disable-next-line no-underscore-dangle
                default_lat_lng = e.rawAnswer.hits[0]._geoloc;
            });
        })();
    }

    /**
     *@description Looks at the prop id and checks if it should have a custom tag or sash
     @param string takes the text for the exclusive rate sash
     @param string takes the text for the host hotel custom tag text
     @param string takes the text for the partner hotel custom tag text
     */
    isPropByGateway(exclusiveRateText, hostHotelText, partnerHotelText, eventName) {
        /**
        *@description adds a sash to a property
        @param string DOM selector 
        @param string Event name from site_config 
        @param string Exclusive rate text
        */
        function updateRoomDescription(selector, name, text) {
            if (!document.querySelector('.SinglePropDetail')) return;
            const original = selector.querySelector('.RoomDescription');
            original.innerHTML = original.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate">${name} ${text}</span>`);
        }

        /**
        *@description adds a sash to a property
        @param string takes the text for the exclusive rate sash
        @param string is the parent element for the current iteration 
        */
        function addExclusiveRatesSash(text, selector) {
            selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('afterbegin', `<span class="exclusive-rate">${text}</span>`);
        }

        /**
        *@description adds a custom tag to a property thumbnail image
        @param string takes the text for custom tag
        @param string is the parent element for the current iteration 
        @param string will be either 'x' or 'y'. Determines if Host or Partner hotel. 
        */
        function addCustomTag(text, selector) {
            selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('beforeend', `<div class="custom-tag">${text} </div>`);
        }

        if (this.page_name === 'search-results') {
            const props = document.querySelectorAll('div.ArnProperty');
            props.forEach((el) => {
                if (el.classList.contains('ArnPropertyTierTwo') && partnerHotelText !== '') {
                    addCustomTag(partnerHotelText, el);
                }
                if (el.classList.contains('ArnPropertyTierThree') && hostHotelText !== '') {
                    addCustomTag(hostHotelText, el);
                }
                if (el.classList.contains('S16') || (el.classList.contains('S20') && exclusiveRateText !== '')) {
                    addExclusiveRatesSash(exclusiveRateText, el);
                }
            });
        }

        if (this.page_name === 'property-detail') {
            const rates = document.querySelectorAll('div.rateRow');
            rates.forEach((el) => {
                if (el.querySelector('table.SB16') || (el.querySelector('table.SB20') && this.site_config.exclusive_rate_text !== '')) {
                    updateRoomDescription(el, eventName, exclusiveRateText);
                }
            });
        }
    }

    addLRGDetails() {
        if (this.site_config.site_type !== 'lodging' || !this.site_config.lodging.is_lrg) return;

        const properties = document.querySelectorAll('.S16, .S20');

        if (!properties) return;

        properties.forEach((property) => {
            if (!property.querySelector('.arnPrice')) return;

            property.querySelector('.arnPrice').insertAdjacentHTML(
                'afterEnd',
                `
                <a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=${this.site_id}&amp;theme=standard" target="_blank" class="lowest-rate-link">Lowest Rate. <span>Guaranteed.</span></a>
            `
            );
        });
    }

    async replaceLRGForm() {
        if (this.site_config.site_type !== 'lodging' && !this.site_config.is_lrg) return;

        try {
            const html = await fetch('https://dev-static.hotelsforhope.com/components/lrg-form/lrg-form.html').then((response) => response.text());

            document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }

    addImageSlideshow() {
        document.querySelector('#thePropertyImages').style.display = 'none';

        const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
        let counter = 0;
        let prop_images;
        let carousel_images;

        async function getPropImages() {
            try {
                const data = await fetch(`https://api.hotelsforhope.com/arn/properties/${prop_id}`, {
                    method: 'GET',
                }).then((response) => response.json());
                return data.Images.map((e) => e.ImagePath.replace(/_300/, '_804480'));
            } catch (error) {
                console.log(error);
            }
        }

        async function createPropImageSlideshow() {
            prop_images = await getPropImages();
            document.querySelector('.ArnPropName').insertAdjacentHTML(
                'afterend',
                `<div class="carousel-container">
                    <div class="carousel-slide">
                    </div>
                    <a id="previousBtn">&#10094;</a>
                    <a id="nextBtn">&#10095;</a>
                </div>`
            );
            populateImages();
        }

        function populateImages() {
            carousel_images = document.querySelectorAll('.carousel-slide img');
            for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i += 1) {
                if (i === prop_images.length) return;
                document.querySelector('.carousel-slide').insertAdjacentHTML(
                    'beforeend',
                    `<div class="image-wrapper">
                        <div class ="image-number">${i + 1}/${prop_images.length}</div>
                        <img src=${prop_images[i]}>
                    </div>`
                );
            }
        }

        function hideArrows(next, prev) {
            if (counter > 1 && counter < prop_images.length - 2) return;

            next.style.display = 'block';
            prev.style.display = 'block';

            if (counter === 0) prev.style.display = 'none';

            if (counter + 1 === prop_images.length) next.style.display = 'none';
        }

        async function createCarousel() {
            await createPropImageSlideshow();

            const carousel_slide = document.querySelector('.carousel-slide');
            const previous_btn = document.querySelector('#previousBtn');
            const next_btn = document.querySelector('#nextBtn');
            hideArrows(next_btn, previous_btn);

            next_btn.addEventListener('click', () => {
                carousel_images = document.querySelectorAll('.carousel-slide img');
                if (counter === carousel_images.length - 1) return;
                counter += 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
                if (counter === carousel_images.length - 2) {
                    populateImages();
                }
            });

            previous_btn.addEventListener('click', () => {
                if (counter <= 0) return;
                counter -= 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
            });
        }

        createCarousel();
    }

    addSocialMetaTags(event_name, event_id) {
        if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;

        document.head.insertAdjacentHTML(
            'beforeend',
            `<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html">
            <meta property="og:type" content="website" >
            <meta property="og:title" content="${event_name}" >
            <meta property="og:description" content="I just booked my room for ${event_name} through Hotels4Hope and donated to charity!" >
            <meta property="og:image" content="https://events.hotelsforhope.com/group-event?id=${event_id}">`
        );
    }

    addSocialMediaShareButtons(event_name, event_id) {
        if (this.site_config.site_type === 'cug' || this.page_name !== 'confirmation' || !this.site_config.has_social_sharing) return;
        const confirmation_container = document.querySelector('#theReservationFormContainer tbody');

        const twitter_script = document.createElement('script');
        twitter_script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        twitter_script.setAttribute('async', true);
        document.head.appendChild(twitter_script);

        confirmation_container.insertAdjacentHTML(
            'afterbegin',
            `<div class="social-share-buttons-container">
                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fevents.hotelsforhope.com%2Fgroup-event%3Fid%3D${event_id}&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just booked my room for ${event_name} through Hotels4Hope and donated to charity!" data-url="https://events.hotelsforhope.com/group-event?id=${event_id}" data-via="Hotels4Hope" data-show-count="false">Tweet</a>
                </div>`
        );
    }

    style_validation_fields(element) {
        const el_val = document.querySelector(element);
        if (el_val.value === '') {
            el_val.classList.add('invalidated');
        }
    }

    // forceClickOnCitySearch() {
    //     if (this.page_name === 'search-results' && document.querySelector('meta[name="SearchType"]').content === 'City') {
    //         document.querySelector('.ArnGoCitySearch').click();
    //     }
    // }

    setInputToRequired(selector) {
        if (!document.querySelector(selector)) return;
        document.querySelector(selector).required = true;
    }

    resizeViewportForMapMobile() {
        if (this.page_name !== 'search-results' && !window.matchMedia('(max-width:800px)').matches) return;
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }

    implementAds() {
        if (!this.site_config.ads || window.matchMedia('(max-width:800px)').matches) return;

        const {ads} = this.site_config;

        if (this.page_name === 'search-results') {
            if (!document.querySelector('.ArnSecondarySearchOuterContainer') || !ads.sidebar_ad.is_active) return;
            document.querySelector('.ArnSecondarySearchOuterContainer').insertAdjacentHTML(
                'afterEnd',
                `
                <a class="sidebar-ad" href="${ads.sidebar_ad.outbound_url}" target="_blank">
                    <img src="${ads.sidebar_ad.image_url}" alt="Advertisement">
                </a>
            `
            );

            if (!document.querySelector('#currentPropertyPage .ArnProperty:nth-child(2)') || !ads.between_property_ad.is_active) return;
            document.querySelector('#currentPropertyPage .ArnProperty:nth-child(2)').insertAdjacentHTML(
                'afterEnd',
                `
                <a class="between-property-ad" href="${ads.between_property_ad.outbound_url}" target="_blank">
                    <img src="${ads.between_property_ad.image_url}" alt="Advertisement">
                </a>
                <hr class="prop-hr">
            `
            );
        }

        if (this.page_name === 'confirmation') {
            if (!document.querySelector('.GuestForms') || !ads.confirmation_page_bottom.is_active) return;

            document.querySelector('.GuestForms').insertAdjacentHTML(
                'beforeEnd',
                `
                <a class="confirmation-bottom-ad" href="${ads.confirmation_page_bottom.outbound_url}" target="_blank">
                    <img src="${ads.confirmation_page_bottom.image_url}" alt="Advertisement">
                </a>
            `
            );
        }
    }

    cugConfigs() {
        const {site_config} = this;

        if (site_config.site_type.toLowerCase() !== 'cug') return;

        function showPercentSavingsFilter() {
            if (site_config.cug.show_percent_savings) return;

            const percent_savings_filter = document.querySelector('.ArnSortByDealPercent');

            if (!percent_savings_filter) return;

            percent_savings_filter.style.display = 'block';
        }

        function updatePercentSavingsText() {
            const percents = document.querySelectorAll('.percentSavings');

            if (!percents || site_config.cug.show_percent_savings) return;

            percents.forEach((percent) => {
                percent.insertAdjacentHTML('beforeEnd', ` Today`);
            });
        }

        function showPercentSavingsOnProperties() {
            if (site_config.cug.show_percent_savings) return;

            let properties = '';

            if (document.querySelector('.SearchHotels')) properties = document.querySelectorAll('.ArnProperty');
            if (document.querySelector('.SinglePropDetail')) properties = document.querySelectorAll('.ArnNightlyRate');

            if (!properties) return;

            properties.forEach((property) => {
                const percent = property.querySelector('div.percentSavings');

                if (!percent) return;

                percent.style.display = 'block';

                if (!document.querySelector('.SearchHotels')) return;

                const rate_container = property.querySelector('.ArnRateCell');
                const rate_button = property.querySelector('.ArnRateButton');

                window.matchMedia('(min-width: 600px)').matches
                    ? rate_container.insertAdjacentElement('afterBegin', percent)
                    : rate_button.insertAdjacentElement('afterBegin', percent);
            });
        }

        updatePercentSavingsText();
        showPercentSavingsFilter();
        showPercentSavingsOnProperties();
    }

    showStarsAndFilter() {
        if (!this.site_config.show_stars) return;

        document.body.insertAdjacentHTML('beforeEnd', `<style>.ArnPropClass, #PropertyClassesContainer{display:block !important;}</style>`);
    }

    showCoronavirusInfoBanner() {
        if (this.site_id === 52342) return;

        if (localStorage.getItem('covidAlertBanner') === 'closed') return;

        document.body.insertAdjacentHTML(
            'afterBegin',
            `
            <div class="info-banner">
                <div class="message-content">
                    <h1>Book with Confidence:</h1>
                    <a class="details-link" href="https://www.hotelsforhope.com/covid19/" target="_blank">
                        <h1>COVID-19 Update</h1> 
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">
                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">
                            </path>
                        </svg>
                    </a>
                    <a style="margin-left: 12px;" class="details-link" href="https://www.hotelsforhope.com/covid-19-hotel-cleaning-policies/" target="_blank">
                        <h1>Cleaning Policies</h1>                    
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">
                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">
                            </path>
                        </svg>
                    </a>
                </div>
                <button class="close-banner-button close-alert">X</button>
            </div>
        `
        );

        document.querySelector('.close-banner-button').addEventListener('click', (evt) => {
            document.querySelector('.info-banner').style.display = 'none';
            window.localStorage.setItem('covidAlertBanner', 'closed');
        });
    }

    showCurrencySelect() {
        if (this.site_config.show_currency_select === true) return;

        const config_container = document.querySelector('.config-container');
        const currency_element = document.querySelector('.currencies-container');

        if (this.site_config.show_currency_select === false && this.site_config.show_language_select === false) {
            config_container.style.display = 'none';
            return;
        }
        if (this.site_config.show_currency_select === false) {
            currency_element.style.display = 'none';
        }
    }
}

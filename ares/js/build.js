import 'whatwg-fetch';
import '@babel/polyfill';
import 'url-polyfill';
import Utilities from './utilities';
import Algolia from './components/algolia';
import Path from './path';

const env_path = new Path();

const dayjs = require('dayjs');
const custom_parse_format = require('dayjs/plugin/customParseFormat');

dayjs.extend(custom_parse_format);

const utilities = new Utilities();
const algolia = new Algolia();

export default class BasePortal {
    constructor(config) {
        console.log('Output: BasePortal -> constructor -> config', config);
        this.site_id = '';
        this.page_name = utilities.getPageName();
        this.site_config = config;
        this.currency = '';
        this.svg_arrow =
            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>';
        this.map_loaded = false;
        this.selected_currency = 'USD';
    }

    init() {
        if (!this.site_config) console.error('No site config found.');

        this.initializeARNRatesReadyEvent();
        utilities.ieForEachPolyfill();
        this.getSiteID().then(async (site_id) => {
            utilities.getPageName();
            this.applyConfigStyles();
            this.setupDatePrompt();
            this.showLanguageFromCongif();
            this.showFilters();

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

                this.showUsersCugPoints();
            }

            utilities.updateAttribute('.ArnSupportLinks a', '_blank', 'target');

            // single prop detail methods
            if (this.page_name === 'property-detail') {
                this.addImageSlideshow();
                this.updateAmenitiesLegendTag();
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

                // this.accordion('#thePropertyAmenities', '.ArnAmenityContainer', 'legend');
                utilities.moveElementIntoExistingWrapper('.SinglePropDetail .ArnTripAdvisorDetails.HasReviews', '.SinglePropDetail .ArnPropAddress', 'afterEnd');
                utilities.moveElementIntoExistingWrapper('div.subHeaderContainer > div > a > span.translateMe', '.SinglePropDetail .ArnLeftListContainer', 'afterBegin');
                this.hideReviewContainer();
            }

            // checkout page methods
            if (this.page_name === 'checkout') {
                utilities.createModal([document.querySelector('#theStayPolicies')], 'Policies & Fees', 'checkout', '#theConfirmationContainer', 'afterBegin');
                utilities.updateAttribute('#theEmailAddressAjax input', 'email', 'type');
                // Shows numpad on ios
                utilities.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                utilities.updateAttribute('.CheckOutForm #theAreaCode', 'numeric', 'inputmode');
                utilities.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                utilities.updateAttribute('.CheckOutForm #theCreditCardNumber', 'numeric', 'inputmode');
                utilities.updateAttribute('.CheckOutForm #theCvvCode', 'numeric', 'inputmode');
                utilities.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
                utilities.updateHTML('#theCharges legend', 'Rate Info');
                utilities.updateHTML('.taxFeeRow th', '<span>Taxes:</span>');
                utilities.updateHTML('#theHotel legend', 'Reservation Summary');
                this.formatCheckoutForm();
                this.setupReservationSummaryContainer();
                utilities.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd');
                utilities.emailVerificationSetup();
                this.fixCheckoutInputTabOrder();

                utilities.selectCheckboxOnLabelClick('.confirmationWarning, .confirmationAgreement, #theMarketingOptInAjax');
            }

            if (this.page_name === 'confirmation') {
                this.implementAds();
                this.addMessagingToConfirmationPage();
            }

            // root page methods
            if (document.querySelector('.RootBody')) {
                algolia.init(this.site_config, this.page_name, utilities);
                this.buildCurrencyDropdown();
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
                utilities.selectCheckboxOnLabelClick('.ArnSearchField div');
            }

            utilities.updateHTML('#thePassCodeAjax label', 'Promocode');
            utilities.updateHTML('#theUserNameAjax label', 'Username/Email');
            utilities.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin');
            utilities.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin');
            utilities.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin');
            utilities.createHTML('<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>', '#theWBLoginFormBody .ForgotPasswordAction', 'afterEnd');

            if (this.page_name === 'lrg-page') {
                this.replaceLRGForm();
            }

            if (this.page_name === 'search-results') {
                algolia.init(this.site_config, this.page_name, utilities);
            }

            jQuery('#theBody').on('arnMapLoadedEvent', async () => {
                this.map_loaded = true;
                await utilities.waitForSelectorInDOM('.pollingFinished');

                if (!document.querySelector('.leaflet-control-scale-line')) L.control.scale().addTo(window.ArnMap);

                this.useLogoForVenueMapMarker();
                this.highlightMapMarkersOnPropertyHover();
                this.changeContractedPropertyPinColor();
            });

            jQuery(document).on('ratesReadyEvent', async () => {
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
                    utilities.addClass('ArnSearchContainerMainDiv', 'ArnSubPage');
                }

                if (this.page_name !== 'search-results' || this.page_name === 'hold-rooms') return;
                this.buildCurrencyDropdown();
                this.styleCUGMapPins();
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
                utilities.selectCheckboxOnLabelClick('.ArnSearchField div');
                utilities.updateHTML('#ShowHotelOnMap', 'Open Map');
                utilities.updateHTML('.ArnShowRatesLink', 'Book Rooms');
                utilities.updateHTML('.lblRating', 'Stars');
                utilities.updateHTML('.lblCurrency', 'Currency');
                utilities.updateHTML('.lblAmenities', 'Amenities');
                utilities.updateHTML('.lblNearbyCities', 'Nearby Cities');
                utilities.updateHTML('.lblPropertyType', 'Property Type');
                utilities.updateHTML('.ArnSortBy', `<div class="sort">Sort</div>`);
                utilities.updateHTML('.ArnSearchHeader', 'Update Search');
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

                            if (utilities.matchMediaQuery('min-width: 800px'))
                                document.body.insertAdjacentHTML('afterBegin', '<style>.ArnSortContainer, .sort-wrapper{display: block !important}</style>');

                            if (utilities.matchMediaQuery('max-width: 1105px'))
                                document.body.insertAdjacentHTML('afterBegin', '<style>.ArnSortContainer,.ArnSortContainer > a{visibility:visible !important;}</style>');

                            if (utilities.matchMediaQuery('max-width: 800px'))
                                document.body.insertAdjacentHTML(
                                    'afterBegin',
                                    '<style>.ArnSortContainer{display: flex !important; visibility: unset !important;}#arnToggleMapDiv{margin-left: auto;}</style>'
                                );
                        });
                });

                const mq = window.matchMedia('(min-width: 1105px)');

                if (mq) {
                    await utilities.waitForSelectorInDOM('#ArnPropertyMap');
                    if (!document.querySelector('.leaflet-control-scale-line')) L.control.scale().addTo(window.ArnMap);

                    this.useLogoForVenueMapMarker();
                    this.highlightMapMarkersOnPropertyHover();
                    this.changeContractedPropertyPinColor();
                }
            });
            this.applyDarkTheme();
            this.applyCustomStyles();
            // this.addSocialMediaShareButtons(this.site_config.lodging.event_name, this.site_config.lodging.event_id);

            // this.forceClickOnCitySearch();
            this.setInputToRequired('input#city');
            this.setInputToRequired('input#theCheckIn');
            this.resizeViewportForMapMobile();
            this.showCoronavirusInfoBanner();
            this.showCurrencySelect();
            this.positionPropReviews();
            this.insertPoweredByFooterLogo();
            this.updateConfirmationCheckBoxes();
            this.showMoreAmenities();
            this.appendMemberTokenForCug();
            this.hideRemainingRooms();
            this.replaceHTMLWithFile('https://static.hotelsforhope.com/ares/html/terms.html', '.ArnSubPage.ArnTermsConditions');
            this.addLinkToLoginFromRegisterPage();
            this.setCheckDatesToReadOnlyOnMobile();

            if (document.querySelector('.WBConfirmedBooking')) {
                this.cancelConfirmUpdate();
            }
        });
    }

    initializeARNRatesReadyEvent() {
        function globalAjax() {
            try {
                setTimeout(() => {
                    jQuery(document).trigger('ratesReadyEvent');
                }, 1);
                // eslint-disable-next-line no-empty
            } catch (e) {
                console.log(e);
            }
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
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);

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

        if (this.site_config.site_type.toLowerCase() === 'cug' || (this.site_config.site_type.toLowerCase() === 'retail' && search_params.get('destination') !== null)) {
            location_text = search_params.get('destination');
        }

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

    async buildMobileMenu() {
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
        await utilities.waitForSelectorInDOM('header');
        document.querySelector('header').insertAdjacentElement('beforeend', header_el);
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

        const dumb_extra_toggle_btn = document.querySelector('.ArnToggleMap + .ArnToggleMap');
        if (dumb_extra_toggle_btn) {
            dumb_extra_toggle_btn.click();
        }

        if (!map_btn || !map) return;

        map_btn.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>';

        map_btn.addEventListener('click', () => {
            map_btn.classList.toggle('closeMap');
            map.classList.toggle('showMap');
            document.body.classList.toggle('fixed');
            header.classList.toggle('hideElement');
            currency.classList.toggle('hideElement');

            if (map_btn.classList.contains('closeMap')) {
                map_btn.querySelector('span').textContent = ' Close Map';
                const right_controls = document.querySelector('.leaflet-control-container .leaflet-top.leaflet-right');

                if (!right_controls) return;

                right_controls.appendChild(map_btn);
            } else {
                const toggle_map_container = document.querySelector('#arnToggleMapDiv');

                if (!toggle_map_container) return;

                toggle_map_container.appendChild(map_btn);
                map_btn.querySelector('span').innerHTML = ' Open Map';
            }
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
                `.RoomNumber-${reservation_count} #theCreditCardBillingNameAjax${reservation_count},
                .RoomNumber-${reservation_count} #theCardExpirationFieldsAjax,
                .RoomNumber-${reservation_count} #theCardVerificationAjax`,
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
                '<div class="creditcards"><img src="https://static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></div><label>Credit Card Number</label>'
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

    // probably a much better way to do this
    applyConfigStyles() {
        const style_element = document.querySelector('#h4h-styles');

        if (!this.site_config || !style_element) return;

        utilities.createHTML(`<link href="${this.site_config.google_font_url}" rel="stylesheet">`, 'head', 'beforeEnd');

        style_element.insertAdjacentHTML(
            'afterBegin',
            `
            /* Fonts */
            *,
            .taxFeeRow td,
            .discount td,
            .totalRow td,
            .balanceDueRow td,
            .dueNowRow td,
            .guestNameFields td,
            .total-points-earned td{
                font-family: ${this.site_config.google_font_name}, 'Helvetica';
            }

            /* Root Body */
            .RootBody{
                background: ${this.site_config.banner_image_url};
            }

            /* Header */

            header {
                justify-content: ${this.site_config.header.logo_flex_position};
                background: ${this.site_config.header.background};
            }

            .logo img{
                max-width: ${this.site_config.header.logo_max_width};
            }

            body, #thePropertyAmenities span, .WBRateGuaranteeForm2 .zsFormClass, #lightbox .window, .WBConfirmedBooking .informMessage {
                background-color: ${this.site_config.background_color};
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
            .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, .custom-button a
            {
                background: ${this.site_config.primary_color};
            }

            @media screen and (max-width:1105px) {

                #arnCloseAnchorId,
                #arnCloseAnchorId:active,
                #arnCloseAnchorId:focus,
                #arnCloseAnchorId:hover {
                    border: 1px solid ${this.site_config.primary_color};
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
                    background: ${this.site_config.primary_color};
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
            .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, .custom-button a
            {
                color: ${this.site_config.primary_text_color};
            }

            .custom-button a:hover {
                color: ${this.site_config.primary_color}
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
                    color: ${this.site_config.secondary_text_color};
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
                    color: ${this.site_config.primary_text_color};
                }

                .SearchHotels .ArnSecondarySearchOuterContainer #theOtherSubmitButton {
                    color: ${this.site_config.primary_color};
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
            .ArnContentContainer legend, #theRoomsOnHold h2,
            .confirmation-messaging a,
            .receiptLink,
            .returnResultsInfo a,
            .supportInfo a, .SinglePropDetail #show-more-or-less {
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
            a.ArnShowRatesLink, .WBConfirmedBooking .submit, .custom-button a {
                background: ${this.site_config.primary_color};
                color: ${this.site_config.primary_text_color};
                border: 1px solid ${this.site_config.border_color};
            }

            .CheckRates input.submit,
            .CheckRates input.submit,
            .CheckRates input.submit,
            #lightbox, #lightbox .dialog-button-ok input:hover  {
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
            a.ArnShowRatesLink:hover, .WBConfirmedBooking .submit:hover, .GroupHoldForm .bookRoomButton:hover, .custom-button a:hover {
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

            .SinglePropDetail #moreRatesLink, #lightbox .dialog-button-ok input {
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

            header {
                border-bottom:3px solid ${this.site_config.border_color};
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
            .HoldRoomsForm .submit, #lightbox .WBChangePasswordFormActions .ChangePasswordAction, .custom-button a {
                border:1px solid ${this.site_config.border_color};
            }

            .holdRoom {
                border: 1px solid ${this.site_config.border_color};
            }

            @media screen and (max-width:1105px) {
                #arnCloseAnchorId,
                .sort {
                    border:1px solid ${this.site_config.primary_color};
                }
            }

            @media screen and (max-width:800px) {
                .sort-wrapper a:before {
                    border:2px solid ${this.site_config.primary_color};
                }
            }

            .active-page{
                background: ${this.site_config.primary_color} !important;
                color: ${this.site_config.primary_text_color} !important;
                border: 1px solid ${this.site_config.border_color} !important;
            }

            .yui3-skin-sam .yui3-calendar-day-selected {
                background-color: ${this.site_config.primary_color} !important;
                color: ${this.site_config.primary_text_color} !important;
            }

            .yui3-skin-sam .yui3-calendar-day:hover{
                background-color: ${this.site_config.primary_color} !important;
            }

            .yui3-skin-sam .yui3-calendar-content{
                border-color: ${this.site_config.border_color} !important;
            }
        </style>
        `
        );
    }

    applyDarkTheme() {
        if (this.site_config.theme.toLowerCase() === 'light') return;

        document.body.insertAdjacentHTML('beforeend', `<link href="${env_path.path}/styles/dark.css" rel="stylesheet">`);
    }

    applyCustomStyles() {
        if (!this.site_config.has_custom_styles) return;
        document.body.insertAdjacentHTML('beforeend', `<link href="${this.site_config.custom_styles_url}" rel="stylesheet">`);
    }

    styleCUGMapPins() {
        if (!document.querySelector('.SearchHotels') || this.site_config.cug.is_cug === false) return;
        document.body.insertAdjacentHTML(
            'beforeend',
            `
        <style>
            .SearchHotels .arnMapMarker {
                background: ${this.site_config.primary_color};
                border-color:  ${this.site_config.primary_text_color};
                color: ${this.site_config.primary_text_color};
            }

            .SearchHotels .arnMapMarkerTriangle {
                border-top-color: ${this.site_config.primary_color};
            }

            .arnMapMarker:hover .arnMapMarkerTriangle {
                border-top-color: ${this.site_config.primary_color};
            }
        `
        );
    }

    // refactor me, please!
    showLanguageFromCongif() {
        let language_label = '';
        let active_language = '';

        const language_container_el = document.querySelector('#language');
        const config_container = document.querySelector('.config-container');
        const active_language_el = document.querySelector('meta[name="theme"]');

        const check_in_el = document.querySelector('input#theCheckIn');
        const check_out_el = document.querySelector('input#theCheckOut');
        let check_in_value;
        let check_out_value;
        let nights;
        const us_format = 'M/D/YYYY';
        const euro_format = 'D/M/YYYY';
        const iso8601 = 'YYYY/M/D';

        const params = new URLSearchParams(window.location.search);

        if (!this.site_config || !config_container || !active_language_el || !language_container_el) return;
        if (!this.site_config.show_language_select) {
            language_container_el.style.display = 'none';
            return;
        }
        document.querySelector('div#language-label').classList.add('config-label');
        active_language = active_language_el.getAttribute('content');
        document.querySelector(`.language-container div[value='${active_language}']`).classList.add('active-language');
        document.body.insertAdjacentElement('afterBegin', config_container);
        config_container.insertAdjacentElement('afterBegin', language_container_el);
        language_label = language_container_el.querySelector('#language-label');
        language_label.querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML;

        function setValuesForDayJs(initial_format, new_format) {
            check_in_value = dayjs(check_in_el.value, initial_format).format(us_format);
            check_out_value = dayjs(check_out_el.value, initial_format).format(us_format);

            nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

            check_in_value = dayjs(check_in_el.value, initial_format).format(new_format);
            check_out_value = dayjs(check_out_el.value, initial_format).format(new_format);
        }

        language_label.addEventListener('click', () => {
            language_container_el.querySelector('.language-container').classList.toggle('show-language-container');

            // return if ie - ie can't toggle svgs
            if (window.document.documentMode) return;

            language_label.querySelector('svg').classList.toggle('flip-svg');
        });

        language_container_el.querySelector('.language-container').addEventListener('click', (e) => {
            const clicked_language = document.getElementById(e.target.id).getAttribute('value');

            if ((this.page_name === 'search-results' || this.page_name === 'landing-page') && clicked_language !== active_language) {
                params.set('theme', clicked_language);

                if (clicked_language !== 'standard' && !clicked_language.includes('mandarin') && active_language === 'standard') {
                    setValuesForDayJs(us_format, euro_format);
                } else if (clicked_language === 'standard' && active_language !== 'standard' && !active_language.includes('mandarin')) {
                    setValuesForDayJs(euro_format, us_format);
                } else if (clicked_language !== 'standard' && !clicked_language.includes('mandarin') && active_language !== 'standard' && !active_language.includes('mandarin')) {
                    setValuesForDayJs(euro_format, euro_format);
                } else if (clicked_language.includes('mandarin') && active_language !== 'standard') {
                    setValuesForDayJs(euro_format, iso8601);
                } else if (clicked_language.includes('mandarin') && active_language.includes('mandarin')) {
                    setValuesForDayJs(iso8601, iso8601);
                } else if (clicked_language.includes('mandarin') && active_language === 'standard') {
                    setValuesForDayJs(us_format, iso8601);
                } else if (clicked_language === 'standard' && active_language.includes('mandarin')) {
                    setValuesForDayJs(iso8601, us_format);
                } else if (clicked_language !== 'standard' && active_language.includes('mandarin')) {
                    setValuesForDayJs(iso8601, euro_format);
                }

                if (this.page_name === 'search-results') {
                    params.set('nights', nights);
                    params.set('checkin', check_in_value);
                }

                window.location.search = params.toString();
            }
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

    async buildCurrencyDropdown() {
        const get_currency_j_s_o_n = () => {
            fetch(`${env_path.path}/js/json/currencies.json`)
                .then((response) => {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json();
                })
                .then((currencies_json) => {
                    setup_content_for_dropdown(currencies_json);
                    update_param_on_currency_click();
                    style_active_currency();
                })
                .catch((err) => {
                    err.text().then((error) => {
                        console.error('Could not fetch currencies.json', error);
                    });
                });
        };

        const setup_content_for_dropdown = (currencies_json) => {
            // eslint-disable-next-line no-unused-vars
            const currencies = Object.entries(currencies_json);

            const menu_container = document.createElement('div');
            const all_currencies_container = document.createElement('div');

            const top_currencies = `
            <h4>Top Currencies</h4>
            <div class="top-currencies">
                <span id="AUD"><strong>${currencies_json.AUD.code}</strong> - ${currencies_json.AUD.name}</span>
                <span id="CAD"><strong>${currencies_json.CAD.code}</strong> - ${currencies_json.CAD.name}</span>
                <span id="EUR"><strong>${currencies_json.EUR.code}</strong> - ${currencies_json.EUR.name}</span>
                <span id="MXN"><strong>${currencies_json.MXN.code}</strong> - ${currencies_json.MXN.name}</span>
                <span id="GBP"><strong>${currencies_json.GBP.code}</strong> - ${currencies_json.GBP.name}</span>
                <span id="USD"><strong>${currencies_json.USD.code}</strong> - ${currencies_json.USD.name}</span>
            </div>
            <h4>All Currencies</h4>
            `;

            menu_container.insertAdjacentHTML('afterBegin', top_currencies);
            menu_container.classList.add('currency-content');

            all_currencies_container.classList.add('all-currencies');

            for (const currency in currencies_json) {
                all_currencies_container.insertAdjacentHTML('beforeEnd', `<span id="${currency}"><strong>${currency}</strong> - ${currencies_json[currency].name}</span>`);
            }

            menu_container.insertAdjacentElement('beforeEnd', all_currencies_container);

            utilities.createDropdownMenu('#currency-label', menu_container, '.currency-content', '.dropdown');
        };

        const update_param_on_currency_click = () => {
            const params = new URLSearchParams(window.location.search);
            const dropdown = document.querySelector('.dropdown');

            if (!dropdown) return;

            dropdown.addEventListener('click', (e) => {
                this.selected_currency = e.target.id;
                if (!this.selected_currency) return;

                document.querySelector('.active-currency').classList.remove('active-currency');
                document.querySelector(`#${e.target.id}`).classList.add('active-currency');

                document.querySelector('#currency-label span').textContent = document.querySelector('.active-currency').textContent;

                if (this.page_name !== 'search-results') return;
                params.set('currency', this.selected_currency);
                window.location.search = params.toString();
            });
        };

        const style_active_currency = () => {
            const active_currency_meta = document.querySelector('meta[name="currency"]');

            if (!active_currency_meta) return;

            const active_currency = active_currency_meta.content;

            this.selected_currency = active_currency;

            document.querySelector(`#${active_currency}`).classList.add('active-currency');

            document.querySelector('#currency-label span').textContent = document.querySelector('.active-currency').textContent;
        };

        await get_currency_j_s_o_n();
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

        if (utilities.getMetaTagContent('showFullTotals')) {
            if (document.querySelector('.SearchHotels')) {
                properties = document.querySelectorAll('.ArnContainer');
                properties.forEach((property) => {
                    average_rate = property.querySelector('.ArnRateCell .ArnPriceCell .averageNightly');
                    full_stay_rate = property.querySelector('.arnPrice .arnUnit');

                    if (!average_rate || !full_stay_rate) return;

                    average_rate.insertAdjacentHTML('afterEnd', `<div>per night</div>`);
                    full_stay_rate.insertAdjacentHTML('beforeEnd', `<span style="font-size:13px; font-weight:normal;"><br> for ${nights} nights </span>`);

                    if (nights === 1) {
                        property.querySelector('.arnPrice').style.display = 'none';
                        property.querySelector('.averageNightly').style.display = 'block';
                    }

                    if (nights > 1) property.querySelector('.averageNightly + div').style.display = 'none';
                });
            }

            if (document.querySelector('.SinglePropDetail')) {
                properties = document.querySelectorAll('.ArnNightlyRate');
                properties.forEach((property) => {
                    average_rate = property.querySelector('.averageNightly');
                    full_stay_rate = property.querySelector('strong');

                    if (!average_rate || !full_stay_rate) return;

                    if (nights === 1) {
                        average_rate.insertAdjacentHTML('afterEnd', `<div style="order: 1;">per night</div>`);
                        property.querySelector('.averageNightly').style.display = 'none';
                    }
                    if (nights > 1) {
                        full_stay_rate.insertAdjacentHTML('beforeEnd', `<span style="font-size:13px; font-weight:normal;"><br> for ${nights} nights </span>`);
                        property.querySelector('.averageNightly + div').style.display = 'none';
                    }
                });
            }
        }
        if (!utilities.getMetaTagContent('showFullTotals')) {
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
                if (this.site_config.site_type.toLowerCase() === 'cug' && document.querySelector('input#address-input').value === '') {
                    this.style_validation_fields('input#address-input');
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

    addHRToProperties() {
        const props = document.querySelectorAll('.ArnProperty');

        if (!props) return;

        props.forEach((prop) => {
            prop.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
        });
    }

    /**
     *@description Looks at the prop id and checks if it should have a custom tag or sash
     @param string takes the text for the exclusive rate sash
     @param string takes the text for the host hotel custom tag text
     @param string takes the text for the partner hotel custom tag text
     */
    isPropByGateway(exclusiveRateText, hostHotelText, partnerHotelText, eventName) {
        if (document.querySelector('.exclusive-rate')) return;
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
        const add_exclusive_rates_sash = (text, selector) => {
            if (this.site_config.exclusive_rate_text === '') return;
            selector.querySelector('div.ArnPropThumb').insertAdjacentHTML('afterbegin', `<span class="exclusive-rate">${text}</span>`);
        };

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
                    add_exclusive_rates_sash(exclusiveRateText, el);
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
            const html = await fetch('https://static.hotelsforhope.com/components/lrg-form/lrg-form.html').then((response) => response.text());

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
    //     if (this.page_name === 'search-results' && document.querySelector('meta[name="SearchType"]').content === 'City' && this.site_config.site_type.toLowerCase() === 'cug') {
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
            if (!site_config.cug.show_percent_savings) return;

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

    showFilters() {
        if (this.site_config.show_stars) {
            document.body.insertAdjacentHTML('beforeEnd', `<style>.ArnPropClass, #PropertyClassesContainer{display:block !important;}</style>`);
        }

        if (this.site_config.show_property_type) {
            document.body.insertAdjacentHTML('beforeEnd', `<style> #PropertyTypesContainer{display:block !important;}</style>`);
        }
    }

    showCoronavirusInfoBanner() {
        if (this.site_id === '52342') return;

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
        if (this.site_config.show_currency_select) return;

        const config_container = document.querySelector('.config-container');
        const currency_element = document.querySelector('.currencies-container');

        if (!this.site_config.show_currency_select && !this.site_config.show_language_select) {
            config_container.style.display = 'none';
            return;
        }
        if (!this.site_config.show_currency_select) {
            currency_element.style.display = 'none';
        }
    }

    positionPropReviews() {
        if (this.page_name !== 'property-detail' || !this.site_config.reviews_before_info || document.querySelector('.PropertyReviews') === null) return;

        const reviews = document.querySelector('.PropertyReviews');
        document.querySelector('.GeneralInfo').insertAdjacentElement('beforebegin', reviews);
    }

    insertPoweredByFooterLogo() {
        document.querySelector('.ArnSupportBottom').insertAdjacentHTML(
            'beforeend',
            `<div class="pb-container">
            <a href="https://www.hotelsforhope.com/" target="_blank"><img src="https://static.hotelsforhope.com/ares/images/h4h/pb-h4h.png" alt="Powered by Hotels for Hope logo"></a>
            </div>`
        );
    }

    updateConfirmationCheckBoxes() {
        if (this.page_name !== 'checkout') return;

        document.querySelector('.open-modal').textContent = 'Policies & Fees';
        document.querySelector(
            'span.confirmationAgreement'
        ).innerHTML = `By checking this box I agree to the <span id="policies-fees">Policies & Fees</span> above and the <a id="t-and-cs" target="_blank" href="https://events.hotelsforhope.com/v6/terms-and-conditions?&siteId=${this.site_id}&theme=standard">Terms & Conditions</a> found on this website.`;

        utilities.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)You(?=\s|$)/gi, 'I');
        utilities.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)your(?=|$)/gi, 'my');

        const policies_lower = document.querySelector('#policies-fees');
        policies_lower.addEventListener('click', () => {
            document.querySelector('div.modal-overlay').classList.toggle('show-modal');
            document.body.classList.toggle('hide');
        });

        const policies_header = document.querySelector('span.open-modal');
        policies_header.addEventListener('click', () => {
            document.body.classList.toggle('hide');
        });

        const close_modal = document.querySelector('span.close-modal');
        close_modal.addEventListener('click', () => {
            document.body.classList.toggle('hide');
        });
    }

    addMessagingToConfirmationPage() {
        if (this.page_name !== 'confirmation' || this.site_config.confirmation_email_from === null || this.site_config.confirmation_email_from === '') return;

        const user_email = window.arnCustomerEmailAddress;
        let email_from = this.site_config.confirmation_email_from;

        if (email_from === undefined || email_from === null || email_from === '') email_from = 'reservations@hotelsforhope.com';

        const support_info = document.querySelector('.supportInfo');

        if (!user_email || !support_info) return;

        support_info.insertAdjacentHTML(
            'afterEnd',
            `<div class="confirmation-messaging">
                <p>You will receive a confirmation email from <a href="mailto:reservations@hotelsforhope.com"><strong>${email_from}</strong></a> at <strong>${user_email}</strong> shortly.</p>
            </div>
            `
        );
    }

    fixCheckoutInputTabOrder() {
        const form = document.querySelector('#theReservationForm');
        const room_count_el = document.querySelector('meta[name="numberOfRooms"]');

        if (!form || !room_count_el) return;
        const room_count = room_count_el.content;
        const elements = form.querySelectorAll('input, select, textarea');

        elements.forEach((element, i) => {
            if (!element) return;
            if (i === 0) {
                element.setAttribute('tabindex', 1);
            } else {
                element.setAttribute('tabIndex', i);
            }
        });

        for (let i = 1; i <= room_count; i += 1) {
            const city = document.querySelector(`#theCity${i}`);
            const postal = document.querySelector(`#theZipCode${i}`);
            const state = document.querySelector(`#theStateAjax${i} select`);
            const country = document.querySelector(`#theCountryAjax${i} select`);
            const card_name = document.querySelector(`#theCreditCardBillingNameAjax${i} input`);
            const cvv_code = document.querySelector(`.RoomNumber-${i} #theCvvCode`);
            const month = document.querySelector(`.RoomNumber-${i} .cardMonth`);
            const year = document.querySelector(`.RoomNumber-${i} .cardYear`);

            if (!city || !postal || !state || !country || !card_name || !cvv_code || !month || !year) return;

            const city_tab_index = city.tabIndex;
            const state_tab_index = state.tabIndex;
            const postal_tab_index = postal.tabIndex;
            const country_tab_index = country.tabIndex;
            const card_name_tab_index = card_name.tabIndex;
            const cvv_code_tab_index = cvv_code.tabIndex;
            const month_tab_index = month.tabIndex;
            const year_tab_index = year.tabIndex;

            city.setAttribute('tabIndex', postal_tab_index);
            state.setAttribute('tabIndex', city_tab_index);
            postal.setAttribute('tabIndex', country_tab_index);
            country.setAttribute('tabIndex', state_tab_index);
            card_name.setAttribute('tabIndex', cvv_code_tab_index);
            cvv_code.setAttribute('tabIndex', month_tab_index);
            month.setAttribute('tabIndex', year_tab_index);
            year.setAttribute('tabIndex', card_name_tab_index);
        }
    }

    showMoreAmenities() {
        if (this.page_name !== 'property-detail') return;
        let show_more;
        const amenity_container = document.querySelector('.ArnAmenityContainer');

        function showMore() {
            show_more.addEventListener('click', () => {
                if (document.querySelector('span.show-more')) {
                    const amenities = document.querySelectorAll('.ArnAmenityContainer td:not(.show-amenities)');
                    amenities.forEach((el) => {
                        el.classList.toggle('show-amenities');
                    });
                    show_more.textContent = 'Show Less Amenities';
                    show_more.classList.toggle('show-more');
                    show_more.classList.toggle('show-less');
                } else if (document.querySelector('span.show-less')) {
                    const amenities = document.querySelectorAll('.ArnAmenityContainer td:not(:first-child)');
                    amenities.forEach((el) => {
                        el.classList.toggle('show-amenities');
                    });
                    show_more.textContent = 'Show More Amenities';
                    show_more.classList.toggle('show-less');
                    show_more.classList.toggle('show-more');
                }
            });
        }

        if (document.querySelector('#show-more-or-less') || !document.querySelector('.PropertyAmenities li')) return;
        amenity_container.insertAdjacentHTML('beforeend', '<span id="show-more-or-less" class="show-more">Show More Amenities</span>');
        show_more = document.querySelector('span#show-more-or-less');
        document.querySelector('.ArnAmenityContainer td').classList.add('show-amenities');
        showMore();
    }

    hideRemainingRooms() {
        if (this.page_name !== 'property-detail' || !document.querySelector('div.roomCount')) return;
        const rooms = document.querySelectorAll('table.ArnRateList');
        const mq = window.matchMedia('(max-width: 560px)');

        rooms.forEach((el) => {
            if (!el.querySelector('.roomCount strong') && !el.classList.contains('SB16') && !el.classList.contains('SB20')) return;

            const rooms_remaining = parseFloat(el.querySelector('.roomCount strong').textContent);
            if (rooms_remaining < 6) {
                el.querySelector('.roomCount').style.display = 'block';
            }
            if (!el.classList.contains('SB16') || (!el.classList.contains('SB20') && !mq.matches)) return;
            if ((rooms_remaining < 6 && el.classList.contains('SB16')) || el.classList.contains('SB20')) {
                el.querySelector('.bookRoomCell').style.gridTemplateRows = '3fr .5fr .25fr';
            }
        });
    }

    async replaceHTMLWithFile(html_url, page_body_selector) {
        if (!document.querySelector(page_body_selector)) return;

        const parent_container = document.querySelector(page_body_selector);
        const html = await utilities.fetchHTMLFromFile(html_url);

        parent_container.innerHTML = html;
    }

    async appendMemberTokenForCug() {
        if (this.site_config.site_type.toLowerCase() !== 'cug' || this.site_id === '52342') return;

        const outbound_url = this.site_config.header.logo_outbound_url;

        await utilities.waitForSelectorInDOM('.logo');

        // if (!document.querySelector('input[name="_s"]')) return;
        // const member_token = document.querySelector('input[name="_s"]').value;

        if (!document.querySelector('meta[name="memberToken"]')) return;
        const member_token = document.querySelector('meta[name="memberToken"]').content;

        const logo = document.querySelector('.logo');

        let new_href = '';

        if (outbound_url.slice(-1) === '/') {
            new_href = `${outbound_url}v6?siteId=${this.site_id}&_s=${member_token}`;
        } else if (outbound_url.slice(-4) === '.com') {
            new_href = `${outbound_url}/v6?siteId=${this.site_id}&_s=${member_token}`;
        } else {
            new_href = `${outbound_url}&_s=${member_token}`;
        }

        logo.setAttribute('href', new_href);
    }

    addLinkToLoginFromRegisterPage() {
        if (this.site_config.site_type.toLowerCase() !== 'cug' || this.page_name !== 'cug-registration') return;

        const register_btn = document.querySelector('.WBValidatedRegistrationFormActions');
        const current_url = window.location.href;
        const login_url = current_url.replace('register', 'login');

        if (!register_btn) return;

        register_btn.insertAdjacentHTML(
            'afterEnd',
            `
            <a class="return-to-login" href="${login_url}">Return to Login</a>
        `
        );
    }

    async setCheckDatesToReadOnlyOnMobile() {
        if (!utilities.matchMediaQuery('max-width: 800px')) return;
        await utilities.waitForSelectorInDOM('#theCheckIn');
        if (this.page_name === 'search-results' || this.page_name === 'landing-page') {
            const check_in = document.querySelector('#theCheckIn');
            const check_out = document.querySelector('#theCheckOut');

            if (!check_in || !check_out) return;
            check_in.setAttribute('readonly', true);
            check_out.setAttribute('readonly', true);
        }
    }

    updateAmenitiesLegendTag() {
        if (this.page_name !== 'property-detail') return;

        const amenities_legend = document.querySelector('#thePropertyAmenities legend');
        amenities_legend.outerHTML = '<span>Property Amenities</span>';
    }

    cancelConfirmUpdate() {
        if (!document.querySelector('.WBConfirmedBooking')) return;

        const do_nothing = document.querySelector('.dialog-button-cancel a');
        do_nothing.textContent = 'Go Back';
    }

    showUsersCugPoints() {
        if (!this.site_config.cug.show_points || !this.site_config.cug.is_cug) return;

        const member_data_meta = utilities.getMetaTagContent('memberMetaTag');

        if (!member_data_meta) return;

        const points = JSON.parse(member_data_meta).Points;

        document.querySelector('header').insertAdjacentHTML(
            'afterEnd',
            `
            <div class="points-container">Points: <span class="points">${points}</span></div>
            <style>
                .points-container{
                    text-align: right;
                    margin: 12px 12px 12px 0;
                    text-transform: uppercase;
                }

                .points{
                    font-weight: 700;
                }
            </style>
        `
        );
    }

    hideReviewContainer() {
        if (this.page_name !== 'property-detail') return;
        if (!document.querySelector('#p_cdspropertydetail')) return;

        if (document.querySelector('#p_cdspropertydetail').textContent === 'Sorry! We can’t find the content you’re looking for.') {
            document.querySelector('.PropertyReviews .propReview').style.height = '160px';
        }
    }
}

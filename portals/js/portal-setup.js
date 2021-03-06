export default class Portal {
    constructor(site_id, page_name, language, translations) {
        this.site_id = site_id;
        this.page_name = page_name;
        this.language = language;
        this.translations = translations;

        this.init();
    }

    init() {
        this.getSiteId();
        this.getPageName();
        this.getLanguage();
        this.ieForEachPolyfill();
    };

    /**
     *@description gets site id from siteId meta tag
     */
    getSiteId() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
        return this.site_id;
    }

    /**
     *@description gets page name using css classes from body tag
     */

    getPageName() {
        let body_classes = document.querySelector('body');

        if (body_classes.classList.contains('SearchHotels')) {
            this.page_name = 'search-results';
            return;
        }

        if (body_classes.classList.contains('SinglePropDetail')) {
            this.page_name = 'property-detail';
            return;
        }
        if (body_classes.classList.contains('CheckOutForm')) {
            this.page_name = 'checkout';
            return;
        }
        if (body_classes.classList.contains('ConfirmationForm')) {
            this.page_name = 'confirmation';
            return;
        }
        if (body_classes.classList.contains('RootBody')) {
            this.page_name = 'landing-page';
            return;
        }
        if (body_classes.classList.contains('WBFaq')) {
            this.page_name = 'faq';
            return;
        }
        if (body_classes.classList.contains('WBTermsAndConditions')) {
            this.page_name = 'terms-conditions';
            return;
        }
        if (body_classes.classList.contains('WBPrivacyPolicy')) {
            this.page_name = 'privacy-policy';
            return;
        }
        if (body_classes.classList.contains('WBRateGuaranteeForm2')) {
            this.page_name = 'lrg-page';
            return;
        }

        if (body_classes.classList.contains('WBValidatedRegistrationForm')) {
            this.page_name = 'cug-registration';
            return;
        }
    }

    /**
     *@description gets site id from siteId meta tag
     */
    async getLanguage() {
        this.language = document.querySelector('meta[name="theme"]').getAttribute('content');
        return this.language;
    }

    /**
     * @description translates text of specific selector from translations.json
     * @param  string selector element to update text content of
     * @param  string key_to_translate key within translations.json to use
     */
    async translateText(selector, key_to_translate) {
        let response = await fetch('https://static.hotelsforhope.com/portals/js/translations.json');
        this.translations = await response.json()
            .then((data) => {
                this.translations = data;
                let el = document.querySelectorAll(selector);
                Object.keys(this.translations).forEach(key => {
                    if (this.language == key) {
                        el.forEach(element => {
                            if (element) {
                                element.textContent = this.translations[key][key_to_translate];
                            }
                        });
                    }
                });
            });
    }

    /**
     *@description forEach polyfill for internet explorer
     */
    ieForEachPolyfill() {
        if ('NodeList' in window && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function(callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }

    /**
     *@description fetches content from specified url
     *@param string url - url to fetch
     */
    async fetchAsset(url) {
        let response = await fetch(url);
        let data = await response.text();
        return data;
    }

    /**
     *@description inserts fetched content from fetchAsset()
     */
    insertAssets() {
        // insert html
        if (document.querySelector('header')) {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/header.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterBegin', data))
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });

            this.fetchAsset('https://static.hotelsforhope.com/portals/html/supportSlider.html')
                .then(data => document.querySelector('header').insertAdjacentHTML('afterEnd', data))
                .then(() => {
                    this.updateAttribute('.tw', 'https://events.hotelsforhope.com/v6/support?siteId=' + this.site_id, 'href');
                })
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'faq') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/faq.html')
                .then(data => document.querySelector('.WBFaq .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'privacy-policy') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/privacyPolicy.html')
                .then(data => document.querySelector('.WBPrivacyPolicy .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        if (this.page_name === 'terms-conditions') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/termsAndConditions.html')
                .then(data => document.querySelector('.WBTermsAndConditions .ArnSubPage').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }

        document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/styles/styles.css">');
    }

    /**
     *@description updates an attribute tag of a specified selector
     *@param string selector - selector to update
     *@param string argument - value to update
     *@param string attribute - which attribute to update
     */
    updateAttribute(selector, argument, attribute) {
        let arr = document.querySelectorAll(selector);
        arr.forEach(function(element, index) {
            if (element) {
                element.setAttribute(attribute, argument);
            }
        });
    }

    /**
     *@description creates custom tag in a properties image
     *@param string text - text of tag
     *@param int propId - property id to add the tag to
     */
    addCustomTag(text, propId) {
        if (!document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb > .customTag') && document.querySelector('#theArnProperty' + propId)) {
            let property_thumbnail = document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb');
            property_thumbnail.insertAdjacentHTML('afterbegin', '<div class="customTag">' + text + '</div>');
        }
    }

    /**
     *@description updates text of specified selector
     *@param string selector - selector to update text
     *@param string text - text to update
     */
    updateText(selector, text) {
        let class_list = document.querySelectorAll(selector);
        class_list.forEach(function(element, index) {
            if (element) {
                element.textContent = text;
            }
        });
    }

    /**
     *@description updates innerHTML of selector
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        let class_list = document.querySelectorAll(selector);
        if (class_list) {
            class_list.forEach(function(element, index) {
                element.innerHTML = html;
            });
        }
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    createHTML(parent_to_append_to, html, location) {
        let parent = document.querySelector(parent_to_append_to);
        if (parent) {
            parent.insertAdjacentHTML(location, html);
        }
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parentSelector) {
        let childElement = document.querySelector(child_selector);
        let parentElement = document.querySelector(parentSelector);

        if (childElement && parentElement) {
            parentElement.appendChild(childElement);
        }
    }

    /**
     *@description adds accordion effect to element
     *@param string open_element - element holding the click event
     *@param string content_element - element to hide
     */
    accordion(open_element, content_element) {
        let content = document.querySelector(content_element);
        let open = document.querySelector(open_element);
        if (open && content) {
            content.classList.add('hideAccordion');
            open.addEventListener('click', function() {
                content.classList.toggle('hideAccordion');
            });
        }
    }

    /**
     *@description creates a button that opens and closes the map
     */
    createMapButton() {
        if (this.page_name === 'search-results' && document.querySelector('.openMapBtn') === null) {
            document.querySelector('#Properties').insertAdjacentHTML('beforeBegin', '<div class="openMapBtn">Open Map</div>');
            let map = document.querySelector('.ArnRightExtraContainer');
            document.querySelector('.openMapBtn').addEventListener('click', function() {
                let map_btn = document.querySelector('.openMapBtn');
                map_btn.classList.toggle('closeMapBtn');
                map.classList.toggle('showMap');

                if (document.querySelector('.closeMapBtn')) {
                    this.textContent = 'X';
                } else {
                    this.textContent = 'Open Map';
                }
            });
        }
    }

    /**
     *@description sets threshhold for when to display rooms remaining text on each property
     *@param int threshhold - minimum number before rooms remaining will be displayed
     */
    roomCountThreshhold(threshhold) {
        let count = document.querySelectorAll('.roomCount strong');
        count.forEach(function(element, index) {
            let number = element.textContent;
            if (number > threshhold) {
                element.parentNode.style.display = 'none';
            }
        });
    }

    /**
     *@description collapses search options by default
     *@param string open_selector - DOM selector for element to be opened
     *@param string collapsed_selector - DOM selector to collapse
     */
    collapseSearchBy(open_selector, collapsed_selector) {
        if (this.page_name === 'search-results') {
            let arr = document.querySelectorAll(collapsed_selector);
            arr.forEach(function(element, index) {
                element.style.display = 'none';
            });
            document.querySelector(open_selector).style.display = 'block';
        }
    }

    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     *@param string text - text to display - usually 'Event Name Exclusive Rate'
     */
    updateRoomDescription(selector, text) {
        if (document.querySelector('.SinglePropDetail')) {
            let original = document.querySelectorAll(selector);
            original.forEach(function(element, index) {
                let updated = element.innerHTML.replace('Special Event Rate', '<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
                element.innerHTML = updated;
            });
        }
    }

    /**
     *@description removes sash and tag from their respective pages if savings is less than $10
     */
    removeSavingsLessThan10() {
        if (this.page_name === 'property-detail' && document.querySelector('.bestPrice .originalPrice')) {
            let savings = document.querySelector('.bestPrice .originalPrice').getAttribute('amount');
            savings = savings.replace(/[^a-zA-Z0-9]/g, "");
            if (savings < 1000) {
                document.querySelector('.bestPrice .percentSavings').style.display = 'none';
            }
            return false;
        }
        if (this.page_name === 'search-results') {
            let savings_arr = document.querySelectorAll('.yourSavings');
            savings_arr.forEach(function(element) {
                let savings = element.textContent;
                savings = savings.replace(/\D+/g, '');
                if (savings < 1000) {
                    element.parentElement.style.display = 'none';
                }
            });
        }
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

    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string sash_html - the html for the sash - should probably refacator to only need the text as the paramter
     */
    searchHotelsExclusiveSash(sash_html, selector) {
        let event_prop = document.querySelectorAll(selector);
        event_prop.forEach(function(element, index) {
            if (element && element.querySelector('.sash') === null) {
                element.insertAdjacentHTML('afterBegin', sash_html);
            }
        });
    }

    /**
     *@description adds a tag for each contracted room on the singlePropDetail page
     *@param string tagHTML - the html for the tag - should probably refacator to only need the text as the paramter
     */
    singlePropExclusiveTag(tagHTML) {
        let single_prop_lrg = document.querySelectorAll('.SinglePropDetail .SB16 .ArnNightlyRate');
        single_prop_lrg.forEach(function(element) {
            if (element && element.querySelector('.exclusiveRate') === null) {
                element.insertAdjacentHTML('afterbegin', tagHTML);
            }
        });
    }

    restrictMaxAdults(search_container) {
        let el = document.querySelector(search_container);
        if (el) {
            let adults_label = el.querySelector('.ArnAdults .titleLabel');
            let adults_input = el.querySelector('#adults');
            let rooms_input = el.querySelector('#rooms');
            let options = el.querySelectorAll('#adults option');
            if (rooms_input) {
                options.forEach(function(element, index) {
                    let initialAdults = rooms_input[rooms_input.selectedIndex].textContent * 4;
                    element.style.display = 'block';
                    if (index >= initialAdults) {
                        element.style.display = 'none';
                    }
                });

                rooms_input.addEventListener('change', function() {
                    let maxAdults = rooms_input[rooms_input.selectedIndex].textContent * 4;

                    if (rooms_input[rooms_input.selectedIndex].textContent == 1) {
                        adults_label.textContent = 'Adults:';

                        options.forEach(function(element, index) {
                            element.style.display = 'block';
                            if (index >= 4) {
                                element.style.display = 'none';
                            }
                        });
                    }

                    if (rooms_input[rooms_input.selectedIndex].textContent > 1) {
                        adults_label.textContent = 'Total Adults:';
                        options.forEach(function(element, index) {
                            element.style.display = 'block';
                            if (index >= maxAdults) {
                                element.style.display = 'none';
                            }
                        });
                    }
                });
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

    updateDepositPolicy() {
        if (document.querySelector('.CheckOutForm')) {
            let deposit_policy = document.querySelector('#theDepositPolicies li');
            if (deposit_policy) {
                if (deposit_policy.textContent == 'Deposit required. See Payment Policy above.' || deposit_policy.textContent == 'Deposit required. See Payment Policy.') {
                    deposit_policy.textContent = 'No deposit required. Total amount due at hotel.';
                }
            }
        }
    }

    updateBookingFeeLanguage() {
        if (document.querySelector('.CheckOutForm')) {
            let due_now = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
            if (due_now) {

                if ((due_now.textContent.includes('4.95') || due_now.textContent.includes('5.00')) && due_now.textContent.includes('Hotels For Hope')) {
                    console.log('test')
                    due_now.insertAdjacentHTML('beforeEnd', ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>');
                }
            }
            return;
        }
    }

    hidePropertyThumbnailArrowIfNoPropertyThumbnails() {
        if (this.page_name === 'search-results') {
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
    }

    createParentPortal() {
        this.insertAssets();
        this.updateHTML('.WBSupportForm .ArnSupportChatTable tr td', '<p><span id="speakToRep">If you would like to speak with a representative, please call</span> <strong>+1 512-691-9555.</strong></p><strong id="phoneCenterHours">Phone Center Hours</strong><ul><li id="weekdayHours">Call Center Weekday Hours: 8:00 AM - 5:30 PM CST</li><li id="weekendHours"> Call Center Weekend Hours: Closed</li></ul><p id="useForm">Or, please use the form below, and one of our consultants will respond promptly.</p>');

        // open footer links in new tab
        this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
        this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');

        // Checkout form input validation
        this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');

        // shows numpad on ios
        this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
        this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
        this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');

        if (this.language == 'standard') {
            this.updateAttribute('.SearchHotels #theSubmitButton', 'Update Search', 'value', );
            this.updateAttribute('#theOtherSubmitButton', 'Update Search', 'value');
            this.updateText('.SearchHotels .modifySearch', 'Update Search');
            this.updateText('.SinglePropDetail .modifySearch', 'Update Search');
        }

        this.appendToParent('.ConfirmationForm .confirmMessageContainer.desktopVersion', '.ConfirmationForm .GuestForms');
        this.appendToParent('.confirmMessageContainer.mobileVersion', '.ConfirmationForm .PaymentPolicies');
        this.appendToParent('.ConfirmationForm .meetH4H.desktopVersion', '.ConfirmationForm .GuestForms');
        this.appendToParent('.ConfirmationForm .meetH4H.mobileVersion', '.ConfirmationForm .PaymentPolicies');
        this.appendToParent('.confirmationContainer', '.GuestForms');

        this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');
        this.appendToParent('.lrgTipContainer', '#theDatePrompt');
        this.createHTML('.ArnSupportLinks.ArnSupportBottom', '<a class="pb-h4h" href="https://www.hotelsforhope.com/" target="_blank"><img src="//media.travsrv.com/appSkins/52342/v6/themes/standard/images/PBH4H.png"></a>', 'beforeend');
        this.appendToParent('.pb-h4h', '.ArnSupportLinks.ArnSupportBottom');
        this.createHTML('head', '<link id="favicon" rel="shortcut icon" href="https://static.hotelsforhope.com/portals/images/h4h-fav.ico">', 'beforeend');
        this.accordion('.PropertyAmenities legend', '.ArnAmenityContainer');
        this.donationAmount();
        this.updateDepositPolicy();
        this.updateBookingFeeLanguage();
    }

    ratesReadyEventMethods() {
        if (this.language == 'standard') {
            this.updateText('.ArnShowRatesLink', 'Book Rooms');
            this.updateText('a.bookRoom', 'Book Rooms');
            this.updateText('a.holdRoom', 'Hold Rooms');
        }

        // this.hidePropertyThumbnailArrowIfNoPropertyThumbnails();

        this.updateAttribute('.SearchHotels .ArnShowRatesLink', '_blank', 'target');

        this.collapseSearchBy('.lblNearbyCities', '.lblNearbyCities + select');
        this.collapseSearchBy('.lblCurrency', '.lblCurrency + select');
        this.collapseSearchBy('.lblAmenities', '#AmentitiesContainer .ArnSearchField div');
        this.collapseSearchBy('.lblPropertyType', '#PropertyTypesContainer .ArnSearchField div');
        this.collapseSearchBy('.lblRating', '#PropertyClassesContainer .ArnSearchField div');

        this.roomCountThreshhold(5);
        this.removeSavingsLessThan10();
        this.createMapButton();

        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Exclusive Rate</span></span></div>', '.SearchHotels .S16');
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Exclusive Rate</span></span></div>', '.SearchHotels .S20');
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Exclusive Rate</span></span></div>', '.SearchHotels .S33');
        // this.singlePropExclusiveTag('<div class="exclusiveRate"><span class="translateMe">Exclusive Rate</span></div>');

        this.restrictMaxAdults('.ArnPrimarySearchContainer');
        this.restrictMaxAdults('.SimpleSearch');

        this.addPerNightToPrice('.SearchHotels', '.arnPrice');
        this.addPerNightToPrice('.SinglePropDetail', '.bestPrice .yourRateAmount');
    }
}

class LRGPortal extends Portal {
    insertLRGAssets() {
        if (this.page_name === 'lrg-page') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/lrgForm.html')
                .then(data => document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
        if (document.querySelector('#datePromptContainer')) {
            this.fetchAsset('https://static.hotelsforhope.com/portals/html/datePrompt.html')
                .then(data => document.querySelector('#datePromptContainer').innerHTML = data)
                .then(() => {
                    Portal.prototype.appendToParent('.lrgTipContainer', '#theDatePrompt');
                })
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
    }

    createLRGPortal() {
        this.insertLRGAssets();
        this.updateText('.WBRateGuaranteeForm > h1', 'Meet the Lowest Rate Guarantee');
        this.updateAttribute('.tooltipLink', 'https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=' + this.site_id + '&theme=standard', 'href');
    }

    ratesReadyEventMethods() {
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=51107&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div><div class="svg-container"><div class="triangle-bottomright"></div><svg class="svg-badge" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"> <g> <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill:rgb(255,255,255);fill-opacity:1;"/> </g> </svg> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"> <path class="checkmark__check" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" d="M8 14l4 4 8-9"/></svg> </div></span></span></div>');
        this.singlePropExclusiveTag('<div class="exclusiveRate"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"><g id="surface1"><path d="M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/><path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"/></g></svg>&nbsp;Lowest Rate Guarantee <span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=50055&theme=standard" target="_blank" class="tooltipLink">Learn more</a></p></div></div>');
    }
}

class NoLRGPortal extends Portal {
    ratesReadyEventMethods() {
        this.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate">Exclusive Rate</span></div>');
        this.singlePropExclusiveTag('<div class="exclusiveRate">Exclusive Rate</div>');
    }
}

class CUGPortal extends Portal {
    insertCUGAssets() {
        if (this.page_name === 'cug-registration') {
            this.fetchAsset('https://static.hotelsforhope.com/portals/child-portals/cug/' + this.site_id + 'html/registration.html')
                .then(data => document.querySelector('.WBValidatedRegistrationFormContainer').innerHTML = data)
                .catch(() => {
                    throw new Error('File at path ' + url + ' not found.');
                    return false;
                });
        }
    }
}

let portal = new Portal();
portal.createParentPortal();

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        portal.ratesReadyEventMethods();

    }, 1);
    setTimeout(() => {
        portal.hidePropertyThumbnailArrowIfNoPropertyThumbnails();
    }, 500);
});

jQuery('#theBody').on("arnMapLoadedEvent", () => {
    L.control.scale().addTo(window.ArnMap);
});

function showCoronavirusInfoBanner() {
    if(portal.site_id == 52342) return;

    if (localStorage.getItem('covidAlertBanner') === 'closed') return;

    document.body.insertAdjacentHTML('afterBegin', `
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
    `);

    document.querySelector('.close-banner-button').addEventListener('click', function(evt) {
        document.querySelector('.info-banner').style.display = 'none';
        window.localStorage.setItem('covidAlertBanner', 'closed')
    });
}

showCoronavirusInfoBanner();
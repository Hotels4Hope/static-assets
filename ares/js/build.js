export default class BasePortal {
    constructor(site_id, site_config_json, page_name) {
        this.site_id = site_id;
        this.site_config_json = site_config_json;
        this.page_name = page_name;
    }

    init() {
        this.getSiteID().then(() => {
            this.getSiteConfigJSON().then(() => {
                this.getPageName();
                this.ieForEachPolyfill();
                this.cssVariablePolyFill();

                // open footer links in new tab
                this.updateAttribute('.ArnSupportLinks .lowRateLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .faqLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .termsLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .privacyLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .supportLink', '_blank', 'target');
                this.updateAttribute('.ArnSupportLinks .cancelLink', '_blank', 'target');
                this.createHTML('head', `<link id="favicon" rel="shortcut icon" href="${this.site_config_json['fav_icon_url']}">`, 'beforeEnd');

                // Checkout form input validation
                this.updateAttribute('#theEmailAddressAjax input', 'email', 'type');

                // Shows numpad on ios
                this.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode');
                this.updateAttribute('.CheckOutForm #theAreaCode', 'inputmode');
                this.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode');
                this.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');

                this.updateRoomDescription();
                this.createImageSlider();
                this.pollingFinished().then(() => {
                    this.createStarIcons();
                });
            });
        });
    }

    /**
     *@description gets site id from siteId meta tag
     */
    async getSiteID() {
        this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
        console.log('BasePortal getSiteID() fired.', this.site_id);
        return await this.site_id;
    }

    async getSiteConfigJSON() {
        console.log('getSiteConfigJSON fired', this.site_id);
        try {
            return await fetch(`https://dev-static.hotelsforhope.com/ares/js/site_configs/${this.site_id}/${this.site_id}.json`, { method: 'GET' })
                .then(response => response.json())
                .then((json) => {
                    this.site_config_json = json;
                    console.log('site_config_json:', json);
                });
        } catch {
            console.log('could not get site config');
        }
    }

    /**
     *@description gets page name using css classes from body tag
     */
    async getPageName() {
        let body_classes = document.querySelector('body');

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
     *@description forEach polyfill for internet explorer
     *@return {void}
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
     *@description updates an attribute tag of a specified selector
     *@param string selector - selector to update
     *@param string argument - value to update
     *@param string attribute - which attribute to update
     */
    updateAttribute(selector, argument, attribute) {
        let arr = document.querySelectorAll(selector);

        if (!arr) {
            return;
        }

        arr.forEach(function(element, index) {
            element.setAttribute(attribute, argument);
        });
    }

    /**
     *@description updates text of specified selector
     *@param string selector - selector to update text
     *@param string text - text to update
     */
    updateText(selector, text) {
        let class_list = document.querySelectorAll(selector);
        if (!class_list) {
            return;
        }

        class_list.forEach(function(element, index) {
            element.textContent = text;
        });
    }

    /**
     *@description updates innerHTML of selector
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        let class_list = document.querySelectorAll(selector);

        if (!class_list) {
            return;
        }

        class_list.forEach(function(element, index) {
            element.innerHTML = html;
        });
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    createHTML(parent_to_append_to, html, location) {
        let parent = document.querySelector(parent_to_append_to);

        if (!parent) {
            return;
        }

        parent.insertAdjacentHTML(location, html);
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parentSelector) {
        let childElement = document.querySelector(child_selector);
        let parentElement = document.querySelector(parentSelector);

        if (!childElement && !parentElement) {
            return;
        }

        parentElement.appendChild(childElement);
    }
    /**
     *@description adds a tag for each contracted property on the searchHotels page
     *@param string selector - DOM selector
     */
    updateRoomDescription() {
        let room_description_el = document.querySelectorAll('.RoomDescription');
        if (!document.querySelector('.SinglePropDetail') || !room_description_el || !this.site_config_json['is_lodging']) {
            return;
        }

        room_description_el.forEach(function(element) {
            element.innerHTML = element.innerHTML.replace('Special Event Rate', `<span id="exclusive-event-rate" style="font-weight:bold; color:#111; font-size: 17px;">${this.site_config_json['event_name']}</span>`);
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
            let number_of_stars = star.textContent;
            let num = number_of_stars.replace(/\D/g, "");
            let star_svg = '<svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

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

    async pollingFinished(condition) {
        return await new Promise(resolve => {
            let interval = setInterval(() => {
                if (document.querySelector('.pollingFinished')) {
                    resolve();
                    clearInterval(interval);
                };
            }, 250);
        });
    }

    cssVariablePolyFill() {
        /*!
         * css-var-polyfill.js - v1.1.2
         *
         * Copyright (c) 2019 Aaron Barker <http://aaronbarker.net>
         * Released under the MIT license
         *
         * Date: 2019-03-23
         */
        let cssVarPoly = {
            init: function() {
                // first lets see if the browser supports CSS variables
                // No version of IE supports window.CSS.supports, so if that isn't supported in the first place we know CSS variables is not supported
                // Edge supports supports, so check for actual variable support
                if (window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')) {
                    // this browser does support variables, abort
                    console.log('your browser supports CSS variables, aborting and letting the native support handle things.');
                    return;
                } else {
                    // edge barfs on console statements if the console is not open... lame!
                    console.log('no support for you! polyfill all (some of) the things!!');
                    document.querySelector('body').classList.add('cssvars-polyfilled');
                }

                cssVarPoly.ratifiedVars = {};
                cssVarPoly.varsByBlock = {};
                cssVarPoly.oldCSS = {};

                // start things off
                cssVarPoly.findCSS();
                cssVarPoly.updateCSS();
            },

            // find all the css blocks, save off the content, and look for variables
            findCSS: function() {
                let styleBlocks = document.querySelectorAll('style:not(.inserted),link[rel="stylesheet"],link[rel="import"]');

                // we need to track the order of the style/link elements when we save off the CSS, set a counter
                let counter = 1;

                // loop through all CSS blocks looking for CSS variables being set
                [].forEach.call(styleBlocks, function(block) {
                    // console.log(block.nodeName);
                    let theCSS;
                    if (block.nodeName === 'STYLE') {
                        // console.log("style");
                        theCSS = block.innerHTML;
                        cssVarPoly.findSetters(theCSS, counter);
                    } else if (block.nodeName === 'LINK') {
                        // console.log("link");
                        cssVarPoly.getLink(block.getAttribute('href'), counter, function(counter, request) {
                            cssVarPoly.findSetters(request.responseText, counter);
                            cssVarPoly.oldCSS[counter] = request.responseText;
                            cssVarPoly.updateCSS();
                        });
                        theCSS = '';
                    }
                    // save off the CSS to parse through again later. the value may be empty for links that are waiting for their ajax return, but this will maintain the order
                    cssVarPoly.oldCSS[counter] = theCSS;
                    counter++;
                });
            },

            // find all the "--variable: value" matches in a provided block of CSS and add them to the master list
            findSetters: function(theCSS, counter) {
                // console.log(theCSS);
                cssVarPoly.varsByBlock[counter] = theCSS.match(/(--[^:)]+:[\s]*[^;}]+)/g) || [];
            },

            // run through all the CSS blocks to update the variables and then inject on the page
            updateCSS: function() {
                // first lets loop through all the variables to make sure later vars trump earlier vars
                cssVarPoly.ratifySetters(cssVarPoly.varsByBlock);

                // loop through the css blocks (styles and links)
                for (let curCSSID in cssVarPoly.oldCSS) {
                    // console.log("curCSS:", cssVarPoly.oldCSS[curCSSID]);
                    let newCSS = cssVarPoly.replaceGetters(cssVarPoly.oldCSS[curCSSID], cssVarPoly.ratifiedVars);
                    // put it back into the page
                    // first check to see if this block exists already
                    if (document.querySelector('#inserted' + curCSSID)) {
                        // console.log("updating")
                        document.querySelector('#inserted' + curCSSID).innerHTML = newCSS;
                    } else {
                        // console.log("adding");
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        style.innerHTML = newCSS;
                        style.classList.add('inserted');
                        style.id = 'inserted' + curCSSID;
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }
                };
            },

            // parse a provided block of CSS looking for a provided list of variables and replace the --var-name with the correct value
            replaceGetters: function(curCSS, varList) {
                // console.log(varList);
                for (let theVar in varList) {
                    // console.log(theVar);
                    // match the variable with the actual variable name
                    let getterRegex = new RegExp('var\\(\\s*' + theVar + '\\s*\\)', 'g');
                    // console.log(getterRegex);
                    // console.log(curCSS);
                    curCSS = curCSS.replace(getterRegex, varList[theVar]);

                    // now check for any getters that are left that have fallbacks
                    let getterRegex2 = new RegExp('var\\([^\\)]+,\\s*([^\\)]+)\\)', 'g');
                    // console.log(getterRegex);
                    // console.log(curCSS);
                    let matches = curCSS.match(getterRegex2);
                    if (matches) {
                        // console.log("matches",matches);
                        matches.forEach(function(match) {
                            // console.log(match.match(/var\(.+,\s*(.+)\)/))
                            // find the fallback within the getter
                            curCSS = curCSS.replace(match, match.match(/var\([^\)]+,\s*([^\)]+)\)/)[1]);
                        });

                    }

                    // curCSS = curCSS.replace(getterRegex2,varList[theVar]);
                };
                // console.log(curCSS);
                return curCSS;
            },

            // determine the css variable name value pair and track the latest
            ratifySetters: function(varList) {
                // console.log("varList:",varList);
                // loop through each block in order, to maintain order specificity
                for (let curBlock in varList) {
                    let curVars = varList[curBlock];
                    // console.log("curVars:",curVars);
                    // loop through each var in the block
                    curVars.forEach(function(theVar) {
                        // console.log(theVar);
                        // split on the name value pair separator
                        let matches = theVar.split(/:\s*/);
                        // console.log(matches);
                        // put it in an object based on the varName. Each time we do this it will override a previous use and so will always have the last set be the winner
                        // 0 = the name, 1 = the value, strip off the ; if it is there
                        cssVarPoly.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
                    });
                };
                // console.log(cssVarPoly.ratifiedVars);
            },

            // get the CSS file (same domain for now)
            getLink: function(url, counter, success) {
                var request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.overrideMimeType('text/css;');
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        // Success!
                        // console.log(request.responseText);
                        if (typeof success === 'function') {
                            success(counter, request);
                        }
                    } else {
                        // We reached our target server, but it returned an error
                        console.warn('an error was returned from:', url);
                    }
                };

                request.onerror = function() {
                    // There was a connection error of some sort
                    console.warn('we could not get anything from:', url);
                };

                request.send();
            }
        };

        cssVarPoly.init();
    }
}
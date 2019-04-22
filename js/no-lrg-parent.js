// IE 11 forEach Polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

function updateAttribute(attribute, argument, selector) {
    let arr = document.querySelectorAll(selector);
    arr.forEach(function(element, index) {
        element.setAttribute(attribute, argument);
    });
}

updateAttribute('href', 'https://www.iubenda.com/privacy-policy/24896936', '.privacyLink');
updateAttribute('class', 'iubenda-nostyle no-brand iubenda-embed', '.privacyLink');

function addCustomTag(text, propId) {
    if (document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb > .customTag')) {} else if (document.querySelector('#theArnProperty' + propId)) {
        let propertyThumbnail = document.querySelector('#theArnProperty' + propId + ' .ArnPropThumb');
        propertyThumbnail.insertAdjacentHTML('afterbegin', '<div class="customTag">' + text + '</div>');
    }
}

// runs on ratesReadyEvent
function eventRateProp() {
    let eventProp = document.querySelectorAll('.SearchHotels .OnSale');
    eventProp.forEach(function(element, index) {
        let percentSavings = element.querySelector('.percentSavings').textContent;
        let yourSavings = element.querySelector('.creditsValue').textContent;
        let sponsoredContainer = element.querySelector('.ArnContainerSponsored');
        let containerRanked = element.querySelector('.ArnContainerRanked');
        if (sponsoredContainer || containerRanked) {
            element.insertAdjacentHTML('afterBegin', '<div class="sash"><span class="event-rate">Exclusive Rate </span><span class="percent-off">' + percentSavings + ' <span class="yourSavings">(Save ' + yourSavings + ')</span></span></div>');
        }
    });
}

function singlePropDetailLRGTag() {
    let singlePropLRG = document.querySelectorAll('.SinglePropDetail .SB16 .ArnNightlyRate');
    singlePropLRG.forEach(function(element) {
        if (element) {
            element.insertAdjacentHTML('afterbegin', '<div class="exclusiveRate">Exclusive Rate </div>');
        }
    });
}

function updateText(selector, text) {
    let classList = document.querySelectorAll(selector);
    classList.forEach(function(element, index) {
        element.textContent = text;
    });
}

function updateHTML(selector, html) {
    let classList = document.querySelectorAll(selector);
    if (classList) {
        classList.forEach(function(element, index) {
            element.innerHTML = html;
        });
    }
}

function appendToParent(childSelector, parentSelector) {
    let childElement = document.querySelector(childSelector);
    let parentElement = document.querySelector(parentSelector);

    if (childElement && parentElement) {
        parentElement.appendChild(childElement);
    }
}
appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax');

function accordion(openElement, contentElement) {
    let content = document.querySelector(contentElement);
    let open = document.querySelector(openElement);
    if (open && content) {
        content.classList.add('hideAccordion');
        open.addEventListener('click', function() {
            content.classList.toggle('hideAccordion');
        });
    }
}
accordion('.PropertyAmenities legend', '.ArnAmenityContainer');

function replaceText(selector, textToReplace, replaceWith) {
    let str = document.querySelector(selector);
    if (str) {
        str.textContent = str.textContent.replace(textToReplace, replaceWith);
    }
}

let searchHotels = document.querySelector('body.SearchHotels');
if (searchHotels) {
    searchHotels.insertAdjacentHTML('beforeend', '<div class="openMapBtn"></div>');
    document.querySelector('.openMapBtn').addEventListener('click', openMap);
}

function openMap() {
    let map = document.querySelector('.ArnRightExtraContainer');
    let mapBtn = document.querySelector('.openMapBtn');
    mapBtn.classList.toggle('closeMapBtn');
    map.classList.toggle('showMap');
}

// runs on rateReadyEvent
function roomCountThreshhold() {
    let count = document.querySelectorAll('.roomCount strong');
    count.forEach(function(element, index) {
        let number = element.textContent;
        if (number > 5) {
            element.parentNode.style.display = 'none';
        }
    });
}

// runs on ratesReadyEvent
function removeBuggedReviews() {
    if (document.querySelector('.SearchHotels')) {
        let buggedReview = document.querySelectorAll('.ratingCount');
        buggedReview.forEach(function(element, index) {
            if (element.textContent == '-7.92281625142644e28') {
                element.style.display = 'none';
            }
        });
    }
}

// runs on rateReadyEvent
function collapseSearchBy(openSelector, collapsedSelector) {
    if (document.querySelector('.SearchHotels')) {
        let arr = document.querySelectorAll(collapsedSelector);
        arr.forEach(function(element, index) {
            element.style.display = 'none';
        });
        document.querySelector(openSelector).style.display = 'block';
    }
}

// Update room description to say event name instead of 'Special Event Rate'
function updateRoomDescription(selector, text) {
    if (document.querySelector('.SinglePropDetail')) {
        var original = document.querySelectorAll(selector);
        original.forEach(function(element, index) {
            var rateDate = document.querySelector('.ArnRateFromTo');
            element.removeChild(rateDate);
            var updated = element.innerHTML.replace('Special Event Rate', '<span style="font-weight:bold; color:#111; font-size: 17px;">' + text + '</span>');
            element.innerHTML = updated;
        });
    }
}

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        roomCountThreshhold();
        removeBuggedReviews();

        replaceText('.ArnAcdParentLable', '- 0 Children', '');
        replaceText('.ArnAcdParentLable', 'Adults', 'Guests');
        replaceText('.ArnAcdAdultsContainer > .ArnAcdSpan', 'Adults', 'Guests Per Room');

        updateText('.ArnShowRatesLink', 'Book Rooms');
        updateText('a.bookRoom', 'Book Rooms');
        updateText('a.holdRoom', 'Hold Rooms');

        collapseSearchBy('.lblNearbyCities', '.lblNearbyCities + select');
        collapseSearchBy('.lblCurrency', '.lblCurrency + select');
        collapseSearchBy('.lblAmenities', '#AmentitiesContainer .ArnSearchField div');
        collapseSearchBy('.lblPropertyType', '#PropertyTypesContainer .ArnSearchField div');
        collapseSearchBy('.lblRating', '#PropertyClassesContainer .ArnSearchField div');

        if (document.querySelector('.SearchHotels .ArnPropName div.originalPrice span')) {
            document.querySelector('.SearchHotels .ArnPropName div.originalPrice span').style.textAlign = 'left';
            document.querySelector('.SearchHotels .ArnPropName div.originalPrice span').style.textAlign = 'center';
            eventRateProp();
        }

        if (window.matchMedia("(max-width: 800px)" && document.querySelector('.OptionsPricing')).matches) {
            document.querySelector('.OptionsPricing a').textContent = 'Rooms';
        }

    }, 1);
    singlePropDetailLRGTag();
});

function roomFundingConfirmation() {
    var nights = jQuery('.numberOfNights th').text();
    var nightsSplit = nights.split(" ");
    var nightsNum = nightsSplit[0];
    var roomFundingDonation = nightsNum * 2;
    var roomFundingText = "Your reservation just generated an <span style='color:#9C6AAD'>$" + roomFundingDonation + " donation</span> to <span style='color:#9C6AAD'>RoomFunding</span>.  And that's at no cost to you.";
    jQuery('.topRoomFunding').html(roomFundingText);
}

function savingsTag() {
    var savings = jQuery('.savings td').text()
    savingsShort = savings.split(' ');
    if (jQuery('body').hasClass('ConfirmationForm')) {
        savingsTopText = "You Saved $" + savingsShort[0];
        jQuery('.confirmationTopSavings').html(savingsTopText);
        jQuery('.confirmationSavings').addClass('show');
    } else if (jQuery('body').hasClass('CheckOutForm')) {
        savingsText = "<span class='font1'>Well done, friend! <b>You’re saving $" + savingsShort[0] + "</b> by booking today. </span><span class='font2'>[Tip: book now…before these rates are gone.]</span>";
        jQuery('.CheckOutForm .hurryBook').insertBefore(jQuery('.CheckOutForm #theReservationForm'));
        jQuery('.hurryBook').css('display', 'block');
    }
}

jQuery(document).ready(function() {
    jQuery(".WBSupportForm .ArnSupportChatTable p:first").replaceWith("If you would like to speak with a representative, please call <b>512-691-9555</b></br>");
    jQuery(".WBSupportForm.ArnSubPage .ArnSupportChatTable tbody tr td:first-child div:nth-child(4)").replaceWith("Call Center Weekday Hours: 8:00 AM - 5:30 PM CST");
    jQuery('.ConfirmationForm .confirmMessageContainer.desktopVersion').appendTo(jQuery('.ConfirmationForm .GuestForms').last());
    jQuery('.ConfirmationForm .confirmMessageContainer.mobileVersion').appendTo(jQuery('.ConfirmationForm .PaymentPolicies').last());
    jQuery('.ConfirmationForm .meetH4H.desktopVersion').appendTo(jQuery('.ConfirmationForm .GuestForms').last());
    jQuery('.ConfirmationForm .meetH4H.mobileVersion').appendTo(jQuery('.ConfirmationForm .PaymentPolicies').last());
});

jQuery(window).load(function() {
    savingsTag();
    roomFundingConfirmation();
    document.querySelector('.ArnSupportBottom .supportLink').insertAdjacentHTML('beforebegin', '<a href="https://www.iubenda.com/privacy-policy/24896936/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed"><span>Cookies Policy</span></a><span class="dvd"> | </span>');
});

//Fav icon
jQuery('head').append('<link rel="shortcut icon" href="/appSkins/25729/v6/themes/standard/images/H4Hfavicon2.ico?v=4" />');
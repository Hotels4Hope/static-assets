import CUGPortal from '../../../js/portal-setup.js';

let cugPortal = new CUGPortal();

cugPortal.updateText('title', 'Room Steals');
cugPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/' + cugPortal.site_id + '/images/favicon.png', 'href');
cugPortal.updateText('#theMarketingOptInAjax label', 'I want to receive the latest information by email from Room Steals including event reminders, relevant news, surveys, offers, and promotions.');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        cugPortal.ratesReadyEventMethods();
        cugPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (document.querySelector('#AdminControlsContainer')) {
                    document.querySelector('#AdminControlsContainer').insertAdjacentHTML('afterBegin', '<a class="room-steals" href="https://roomsteals.com/home">Room Steals</a>');
                } else {
                    cugPortal.createHTML('header', '<a class="room-steals" href="https://hotels.roomsteals.com">Room Steals</a>', 'afterBegin');
                }

                if (document.querySelector('.ArnSupportBottom .cancelLink')) {
                    document.querySelector('.ArnSupportBottom .cancelLink').insertAdjacentHTML('afterEnd', '<span class="dvd"> | </span><a target="_blank" href="https://roomsteals.getrewardful.com/signup">Affiliate Program &nbsp; <i class="fa fa-external-link"></i></a>');
                }
                cugPortal.updateAttribute('.termsLink', 'https://roomsteals.com/terms', 'href');
                cugPortal.updateAttribute('.privacyLink', 'https://roomsteals.com/privacy', 'href');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

let script = document.createElement('script');
script.setAttribute('src', 'https://static.hotelsforhope.com/js/room-steals-provider.js');
document.head.appendChild(script);

if (document.querySelector('.WBLoginForm') || document.querySelector('.WBForgotPasswordForm')) {
    window.location.href = 'https://roomsteals.com/login';
    document.querySelector('body').style.display = 'none';
}

if (cugPortal.page_name === 'privacy-policy') {
    cugPortal.fetchAsset('https://static.hotelsforhope.com/portals/child-portals/cug/52342/html/privacyPolicy.html')
        .then(data => document.querySelector('.WBPrivacyPolicy .ArnSubPage').innerHTML = data)
        .catch(() => {
            throw new Error('File at path ' + url + ' not found.');
            return false;
        });
}

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/52342/52342.css">');
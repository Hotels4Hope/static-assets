import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'SnowGlobe Music Festival Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'SnowGlobe Exclusive Rate');

jQuery(document).on('ratesReadyEvent', function () {
    setTimeout(function () {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
        noLRGPortal.addCustomTag('Host Hotel', 41188);
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = {
        attributes: false,
        childList: true,
        subtree: false
    };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'http://snowglobemusicfestival.com/', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

// Custom Banner Ad
noLRGPortal.createHTML('.SearchHotels .ArnLeftSearchContainer', '<a class="ad-unit" target="_blank" href="mailto:alejandraj@tahoekeysresort.com"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/ad-unit.png"></a>', 'beforeEnd');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/' + noLRGPortal.site_id + '.css">');
import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'BUKU Music + Arts Festival Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'BUKU Music + Arts Festival Exclusive Rates');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
        noLRGPortal.searchHotelsExclusiveSash('<div class="sash"><span class="event-rate"><span class="translateMe">Exclusive Rate</span></span></div>', '.ArnPropertyTierTwo');
        noLRGPortal.addCustomTag('Sponsor Hotel', 20428);
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.thebukuproject.com/', 'href');
                // document.querySelector('header').insertAdjacentHTML('afterEnd', '<img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/55776/images/pattern.png" style="height: 50px; width: 100%; position: relative; z-index: 4; object-fit: cover; object-position: center center;">');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');
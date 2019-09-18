import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Innings Fest Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Innings Fest Exclusive Rate');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/' + noLRGPortal.site_id + '/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.inningsfestival.com/', 'href');
                noLRGPortal.createHTML('header', '<span class="header-info"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51442/images/dash.png"><span>Feb. 29th-Mar. 1st</span><span>2020</span><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51442/images/dash.png"></span>', 'afterBegin');
                noLRGPortal.createHTML('header', '<span class="header-info"><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51442/images/dash.png"><span>Tempe Beach Park</span><span>&amp; Arts Park</span><img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/51442/images/dash.png"></span>', 'beforeEnd');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');
 
 
 noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');
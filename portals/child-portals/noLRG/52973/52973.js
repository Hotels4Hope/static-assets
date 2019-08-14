import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', "Sweetland Amphitheatre Exclusive Rate");

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
                noLRGPortal.updateAttribute('.logo', 'http://www.sweetland.events/', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

if(document.querySelector('#theDatePrompt')){
    document.querySelector('#theDatePrompt').insertAdjacentHTML('afterBegin', '<img src="https://static.hotelsforhope.com/portals/child-portals/noLRG/52973/images/logo.png">');
}

if(document.querySelector('.RootBody') && document.querySelector('#city')){
    document.querySelector('#city').value = 'LaGrange, GA';
    document.querySelector('#geoLongitudeId').value = '-85.032512';
    document.querySelector('#geoLatitudeId').value = '33.044822';
}
document.querySelector('#searchForm').setAttribute('action', 'https://events.hotelsforhope.com/v6?currency=USD&type=geo&siteid=52973&longitude=-85.032512&latitude=33.044822&radius=100&map&locationlabel=Sweetland+Ampitheatre&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles');
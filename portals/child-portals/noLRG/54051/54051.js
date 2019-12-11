import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Community Brands Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Community Brands Exclusive Rate');


jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', '');
        if (document.querySelector('.event-rate')) {
            document.querySelector('.event-rate').insertAdjacentHTML('afterEnd', '<div class="lrgContainer"><div class="svg-container"><div class="triangle-bottomright"></div><svg class="svg-badge" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-38 0 512 512.00142"> <g> <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " style=" stroke:none;fill-rule:nonzero;fill:rgb(255,255,255);fill-opacity:1;"></path> </g> </svg> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"> <path class="checkmark__check" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" d="M8 14l4 4 8-9"></path></svg> </div></span><span class="percent-off" style="display: none;">36% Off<span class="yourSavings"></div>Host Hotel<span class="hoverTooltip">i</span><div class="tooltipContainer"><span class="tooltipClose">X</span><p>This rate is protected by our Lowest Rate Guarantee. Find a lower rate and our partners at Hotels for Hope will not only match it, but will throw in an extra $10. <br><a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=' + noLRGPortal.site_id + '" target="_blank" class="tooltipLink">Learn more</a></p></div>');
        }

        noLRGPortal.addCustomTag('Walking Distance to Event', 20578);

    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/54051/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.communitybrands.com/', 'href');

                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

// Custom Banner Ad
noLRGPortal.createHTML('.SearchHotels .ArnLeftSearchContainer', '<a class="ad-unit" target="_blank" href="http://events.hotelsforhope.com/group-event?id=36661"><img src="https://via.placeholder.com/200x600.png?text=200x600%20Ad%20Unit"></a>', 'beforeEnd');

function loadExternalHTML(fileURL, classOfPageToAddFile, idOfContentToReplace, successFunction) {
    if (classOfPageToAddFile) {
        new Ajax.Updater(idOfContentToReplace, fileURL, { onComplete: successFunction });
    }
}

function rateGuaranteePage() {
    let eventRateGuarantee = document.querySelector('body.WBRateGuaranteeForm2');
    if (eventRateGuarantee) {
        document.querySelector('.WBRateGuaranteeForm > h1').textContent = 'Meet the Lowest Rate Guarantee';
        document.title = 'Lowest Rate Guarantee';
    }
}
rateGuaranteePage();

if (document.querySelector('.WBRateGuaranteeForm')) {
    loadExternalHTML('/appSkins/' + noLRGPortal.site_id + '/v6/themes/standard/LRGForm.html', '.WBRateGuaranteeForm2', 'theWBRateGuaranteeForm2Body');
}

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/54051/54051.css">');
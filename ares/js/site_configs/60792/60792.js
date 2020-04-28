import BasePortal from '../../build';

class ChildPortal extends BasePortal {
    constructor() {
        super();
        super.init();
    }
}

new ChildPortal();

// This is temporary - only to show Michelle LRG messaging
function addLRGDetails() {
    const properties = document.querySelectorAll('.ArnPropertyTierOne');
    properties.forEach((property) => {
        property.querySelector('.arnPrice').insertAdjacentHTML(
            'afterEnd',
            `
<a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid=60792&amp;theme=standard" target="_blank" class="lowest-rate-link">Lowest Rate. <span>Guaranteed.</span></a>

            `
        );
    });
}

addLRGDetails();

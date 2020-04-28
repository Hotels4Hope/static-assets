import BasePortal from '../../build';
import Utilities from '../../utilities';

const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super();
        super.init();
    }
}

new ChildPortal();

utilities.addMultipleHeaderLogos({
    image1: {
        insertPosition: 'afterbegin',
        className: 'logo-left',
        imageUrl: '../../js/site_configs/49553/img/left.svg',
    },
    image2: {
        insertPosition: 'beforeend',
        className: 'logo-right',
        imageUrl: '../../js/site_configs/49553/img/right.svg',
    },
});

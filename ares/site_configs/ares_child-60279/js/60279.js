import BasePortal from '../../../js/build';
import SiteConfig from './60279-config';
// import Distance from '../../../js/calculate-distance';
// import Utilities from '../../../js/utilities';

// const dayjs = require('dayjs');

// const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        // this.init();
    }

    // init() {
    //     this.prepopulateSearchDate();
    // }

    // async prepopulateSearchDate() {
    //     if (!document.querySelector('.SearchHotels')) return;

    //     await utilities.waitForSelectorInDOM('#theQuickCheckIn');

    //     const check_in_input = document.querySelector('#theDatePrompt #theQuickCheckIn');
    //     const check_out_input = document.querySelector('#theDatePrompt #theQuickCheckOut');

    //     if (!check_in_input || !check_out_input) return;

    //     check_in_input.setAttribute('value', dayjs().format('MM/DD/YYYY'));
    //     check_out_input.setAttribute('value', dayjs().add(1, 'day').format('MM/DD/YYYY'));
    // }
}

new ChildPortal();
// new Distance();

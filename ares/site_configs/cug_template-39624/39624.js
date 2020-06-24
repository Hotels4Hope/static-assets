import BasePortal from '../../js/build';
import SiteConfig from './39624-config';

// const base = new BasePortal();
const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

new ChildPortal();

import BasePortal from '../../js/build';
import SiteConfig from './54494-config';
import f1Styles from '../../js/f1';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);

new ChildPortal();

import BasePortal from '../../../js/build';
import SiteConfig from './60302-config';
import f1Styles from '../../../js/f1';
import Distance from '../../../js/calculate-distance';
import popUp from '../../../js/components/event-popup/multiple-event-weekends';

const site_config = new SiteConfig();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}

f1Styles(site_config.site_id);
popUp(site_config, 'Sakhir Grand Prix', 'url1', 'url2');

new ChildPortal();
new Distance();
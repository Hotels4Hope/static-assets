import BasePortal from '../../build';

class ChildPortal extends BasePortal {
    constructor() {
        super();
        super.init();
    }
}

new ChildPortal();

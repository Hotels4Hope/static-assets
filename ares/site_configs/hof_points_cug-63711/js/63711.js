import SiteConfig from './63711-config';
import Resbeat from '../../../js/resbeat';
import Utilities from '../../../js/utilities';

const utilities = new Utilities();

const site_config = new SiteConfig();
class ChildPortal extends Resbeat {
    constructor() {
        super(site_config);
        super.init();
        this.init();
    }

    init() {
        this.showUsersCugPoints();
    }

    async showUsersCugPoints() {
        if (!this.site_config.cug.show_points || !this.site_config.cug.is_cug) return;

        await utilities.waitForSelectorInDOM('header');

        function showBelowHeader() {
            const member_data_meta = utilities.getMetaTagContent('memberMetaTag');

            if (!member_data_meta) return;

            const points = JSON.parse(member_data_meta).Points;

            document.querySelector('header').insertAdjacentHTML(
                'afterEnd',
                `
                <div class="arn-points-container">Credits: <span class="arn-points">${points}</span></div>
                <style>
                    .arn-points-container{
                        text-align: right;
                        margin: 12px 12px 12px 0;
                        text-transform: uppercase;
                        font-size: 19px;
                        color: #666;
                    }

                    .arn-points{
                        font-weight: 700;
                    }
                </style>
                `
            );
        }

        function showPointsAppliedOnRate() {
            let rate_containers = '';

            if (document.querySelector('.SearchHotels')) rate_containers = document.querySelectorAll('.ArnProperty');
            if (document.querySelector('.SinglePropDetail')) rate_containers = document.querySelectorAll('.ArnRateList');

            rate_containers.forEach((container, i) => {
                const savings_element = container.querySelector('.originalPrice');

                let rate_cell = '';

                if (document.querySelector('.SearchHotels')) rate_cell = container.querySelector('.ArnRateCell');
                if (document.querySelector('.SinglePropDetail')) rate_cell = container.querySelector('.bookRoomCell');

                if (!savings_element || container.querySelector('.points-applied')) return;

                const savings = savings_element.getAttribute('amount').replace(/[^0-9.]/g, '');

                rate_cell.insertAdjacentHTML(
                    'afterBegin',
                    `
                        <span class="beat-em points-applied">
                            Credits Applied <span>${Math.floor(savings)}</span>
                            <span class="tooltip-wrapper">
                                <span>
                                    <b class="tooltip">i
                                        <span>These Credits equal the total discount offered per night for this property.</span>
                                    </b>
                                </span>
                            </span>
                        </span>
                    `
                );
            });
        }

        function showPointsAppliedOnCheckout() {
            if (!document.querySelector('.CheckOutForm') || !document.querySelector('.discount')) return;

            const savings = document.querySelector('.discount td').textContent.replace(/[^0-9.]/g, '');

            document.querySelector('.discount td').textContent = Math.floor(savings);

            document.querySelector('.discount th').textContent = 'Credits Applied:';
        }

        showBelowHeader();
        showPointsAppliedOnCheckout();

        if (document.querySelector('.SinglePropDetail')) showPointsAppliedOnRate();

        if (document.querySelector('.SearchHotels')) {
            jQuery(document).on('ratesReadyEvent', () => {
                setTimeout(() => {
                    showPointsAppliedOnRate();
                }, 1);
            });
        }
    }
}

new ChildPortal();

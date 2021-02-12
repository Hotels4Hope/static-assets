import Utilities from '../../../js/utilities';
import Path from '../../../js/build_tools/path';

const env_path = new Path();

const utilities = new Utilities();

export default class Roomcash {
    constructor(config) {
        this.config = config;
        this.user_points = document.querySelector('meta[name="userPoints"]').getAttribute('content');
        this.sub_header_container = `
        <span id="sub-header-container">
            <a target="_blank" href="https://roomcash.com/how-it-works">How It Works</a>
            <a target="_blank" href="https://roomcash.com/faqs">FAQs</a>
            <a target="_blank" href="https://roomcash.com/daily-deals">Daily Deals</a>
            <a target="_blank" href="https://roomcash.com/partnerships">Partnerships</a>
        </span>`;
        this.init();
    }

    init() {
        // All pages
        this.insertContent([
            {
                element: '.ArnSupportLinks.ArnSupportBottom',
                position: 'afterbegin',
                html: `
                    <div id="footer">
                        <div id="footer-title"><hr><span>RoomCash is Part of QuintEvents</span><hr></div>
                        <div id="brand-logos">
                            <a target="_blank" href="https://quintevents.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/quint.png"></a>
                            <a target="_blank" href="https://resbeat.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/resbeat.png"></a>
                            <a target="_blank" href="https://www.hotelsforhope.com/" target="_blank"><img src="${env_path.path}/site_configs/${this.config.directory_name}/img/h4h.png"></a>
                        </div>
                    </div>`,
            },
        ]);
        if (document.querySelector('.MemberAuthenticated')) {
            this.buildHeaderLinks();
        }

        // Root Page
        if (document.querySelector('.RootBody')) {
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.insertContent([
                {
                    element: '.SearchHotels .ArnSearchContainerMainDiv',
                    position: 'afterbegin',
                    html: this.sub_header_container,
                },
            ]);
        }
        // Search Results
        if (document.querySelector('.SearchHotels')) {
            this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
            this.moveCurrency();
            this.insertContent([
                {
                    element: '.SearchHotels .ArnQuadSearchContainer.ArnPrimarySearchContainer',
                    position: 'beforeend',
                    html: `<hr>`,
                },
                {
                    element: '.SearchHotels .sort-wrapper',
                    position: 'afterend',
                    html: `<hr>`,
                },
                {
                    element: '.SearchHotels .ArnSearchContainerMainDiv',
                    position: 'afterbegin',
                    html: this.sub_header_container,
                },
                {
                    element: '.SearchHotels #AmentitiesContainer',
                    position: 'beforeBegin',
                    html: `<div id="filter-by">FILTER BY</div>`,
                },
            ]);
            this.addRoomCashBar('.ArnProperty', '.ArnPropDescription', 'afterend');
            this.buildSortSelectMenu();
        }

        // Property Detail
        if (document.querySelector('.SinglePropDetail')) {
            this.buildFooterMenu('.PropDetailView', 'afterend');
            this.insertContent([
                {
                    element: '.PropDetailView',
                    position: 'beforebegin',
                    html: this.sub_header_container,
                },
            ]);
            this.addRoomCashBar('.rateRow', 'tbody tr td.bookRoomCell', 'beforebegin');
        }

        // Checkout Page
        if (document.querySelector('.CheckOutForm')) {
            this.buildFooterMenu('#theReservationFormContainer', 'afterend');
        }

        // Confirmation Page
        if (document.querySelector('.ConfirmationForm')) {
            this.buildFooterMenu('#theBookingPage', 'afterend');
        }

        // Support Page & Cancel/modify Page
        if (document.querySelector('.WBSupportForm') || document.querySelector('.WBResendOrCancelForm')) {
            this.buildFooterMenu('.ArnSubPage', 'afterend');
        }
    }

    buildFooterMenu(insertElement, position) {
        const footer_menu = `
        <div id="footer-menu-container">
            <div id="links-container">
                <div class="links">
                        <li class="links-header">Learn More</li>
                        <li><a target="_blank" href="https://roomcash.com/how-it-works">How it Works</a></li>
                        <li><a target="_blank" href="https://roomcash.com/faqs">FAQs</a></li>
                </div>
                <div class="links">
                        <li class="links-header">About RoomCash</li>
                        <li><a target="_blank" href="https://roomcash.com/our-mission">Our Mission</a></li>
                        <li><a target="_blank" href="https://roomcash.com/careers">Careers</a></li>
                        <li><a target="_blank" href="https://roomcash.com/contact-us">Contact Us</a></li>
                </div>
                <div class="links">
                        <li class="links-header">Partner with RoomCash</li>
                        <li><a target="_blank" href="https://roomcash.com/add-hotel">Add Your Hotel</a></li>
                    <li><a target="_blank" href="https://roomcash.com/partnerships">Corporate Partners</a></li>
                </div>
            </div>
            <div id="policy-social">
                <div id="social-container">
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/facebook.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/instagram.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="">m
                        </a>
                    </div>
                    <div class="social-icon">
                        <a target="_blank" href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/app-store.png">
                        </a>
                    </div>
                </div>
                <hr>
                <div id="copyright">
                    <p>Copyright &copy; 2020. All rights reserved</p>
                    <div><a target="_blank" href="https://roomcash.com/privacy-policy">Privacy Policy</a><span id="pipe">|</span><a target="_blank" href="https://roomcash.com/terms">Terms & Conditions</a></div>
                </div>
            </div>
        </div>
        `;
        const container = document.querySelector(insertElement);

        container.insertAdjacentHTML(position, footer_menu);
    }

    async buildHeaderLinks() {
        await utilities.waitForSelectorInDOM('header');
        await utilities.waitForSelectorInDOM('#commands');
        const header = document.querySelector('header');
        const commands = document.querySelector('#commands');
        const hamburger = document.querySelector('#AdminControlsContainer');

        hamburger.insertAdjacentHTML(
            'afterbegin',
            `
            <div id="mobile-balance-container">
                <span id="mobile-balance">$${this.user_points}</span>
            </div>
        `
        );

        commands.insertAdjacentHTML(
            'afterbegin',
            `
            <a id="mobile-account-link" href="https://roomcash.com/dashboard">My Account</a>
            <a target="_blank" href="https://roomcash.com/how-it-works">How It Works</a>
            <a target="_blank" href="https://roomcash.com/faqs">FAQs</a>
            <a target="_blank" href="https://roomcash.com/daily-deals">Daily Deals</a>
            <a target="_blank" href="https://roomcash.com/partnerships">Partnerships</a>
            `
        );

        header.insertAdjacentHTML(
            'beforeend',
            `
            <div id="admin-container">
                <div id="balance-container" class="header-link">
                    <img src="${env_path.path}/site_configs/${this.config.directory_name}/img/points-icon.png">
                    <span id="balance">$${this.user_points}</span>
                </div>
                <div id="account-container" class="header-link">
                    <span><a id="account-link" href="https://roomcash.com/dashboard">MY ACCOUNT</a></span>
                </div>
                <div id="search-container" class="header-link">
                    <span><a href="https://hotels.roomcash.com">SEARCH HOTELS</a></span>
                </div>
            </div>
        `
        );
    }

    insertContent(elementsArray) {
        elementsArray.forEach(async (obj) => {
            await utilities.waitForSelectorInDOM(obj.element);

            document.querySelector(obj.element).insertAdjacentHTML(obj.position, obj.html);
        });
    }

    getValues(property) {
        let your_cash;

        if (document.querySelector('.SearchHotels')) {
            your_cash = property.querySelector('.arnUnit').innerHTML;
        } else if (document.querySelector('.SinglePropDetail')) {
            your_cash = property.querySelector('.ArnNightlyRate strong').innerHTML;
        }

        your_cash = your_cash.substring(0, your_cash.indexOf('<span>'));
        const room_cash = property.querySelector('.originalPrice').getAttribute('amount');
        const width = property.querySelector('.originalPrice').getAttribute('percent');
        return {yc: your_cash, rc: room_cash, rc_width: width};
    }

    async addRoomCashBar(containerName, insertElement, insertPosition) {
        if (document.querySelector('.SearchHotels')) {
            await utilities.waitForSelectorInDOM('.pollingFinished');
        }
        await utilities.waitForSelectorInDOM(insertElement);
        const props = document.querySelectorAll(containerName);

        props.forEach((prop, idx) => {
            if (prop.querySelector('.ArnLimitedAvail')) return;
            const values = this.getValues(prop);

            if (!values.yc || !values.rc || !values.rc_width) return;

            const html = document.querySelector('.SearchHotels')
                ? `
                <div class="roomcash-scale-container" id="rc-${idx}">
                    <div id="roomcash-bar-container">
                        <span class="bar"></span>
                    </div>
                <div id="container-lower">
                    <div class="roomcash-amount">     
                        <div class="cash-text">
                            <span class="rc-value">${values.rc}</span>
                            <p>RoomCash</p>
                            <p>(per stay)</p>
                        </div>
                    </div>
                    <div class="your-cash-amount">      
                        <div class="cash-text">
                            <span class="yc-value">${values.yc}</span>
                            <p>Your Cash</p>
                            <p>(per stay)</p>
                        </div>
                    </div>
                    </div>
                </div>
    `
                : `
                <div class="roomcash-scale-container" id="rc-${idx}">
                    <div id="container-lower">
                        <div class="roomcash-amount">     
                            <div class="cash-text">
                                <span class="rc-value">${values.rc}</span>
                                <p>RoomCash</p>
                                <p>(per stay)</p>
                            </div>
                        </div>
                        <div class="your-cash-amount">      
                            <div class="cash-text">
                                <span class="yc-value">${values.yc}</span>
                                <p>Your Cash</p>
                                <p>(per stay)</p>
                            </div>
                        </div>
                    </div>
                    <div id="roomcash-bar-container">
                        <span class="bar"></span>
                    </div>
                </div>
`;

            const selector = document.querySelector('.SearchHotels') ? `${prop.id}` : `rc-${idx}`;
            prop.querySelector(insertElement).insertAdjacentHTML(insertPosition, html);

            // add tooltip
            utilities.addToolTip(`#${selector} .roomcash-amount p`, 'beforeend', 'Maximum amount of your RoomCash we can apply', '?', '#fff', '#000');
            utilities.addToolTip(`#${selector} .your-cash-amount p`, 'beforeend', 'How much of your cash is needed', '?', '#fff', '#000');

            // Moves Book button
            if (!document.querySelector('.SearchHotels')) return;
            const button = prop.querySelector('.ArnRateButton');
            prop.querySelector('.ArnPropName').insertAdjacentElement('beforeend', button);

            // insert average nightly
            prop.querySelector('.ArnRateButton').insertAdjacentHTML(
                'afterend',
                `
                <div id="rc-avg-nightly">Average Per Night: <span>${prop.querySelector('.averageNightly').textContent}</span></div>
                `
            );
        });
    }

    async buildSortSelectMenu() {
        if (!document.querySelector('.SearchHotels')) return;
        await utilities.waitForSelectorInDOM('.sort-wrapper');
        const html = `
        <select id="sort-select">
            <option id="sort-price"></option>
            <option id="sort-rating"></option>
        </select>`;

        const price = document.querySelector('.ArnSortByPrice');
        const rating = document.querySelector('.ArnSortByDistance');

        document.querySelector('.sort-wrapper h4').insertAdjacentHTML('afterend', html);

        document.querySelector('#sort-price').insertAdjacentElement('afterbegin', price);
        document.querySelector('#sort-rating').insertAdjacentElement('afterbegin', rating);
    }

    async moveCurrency() {
        await utilities.waitForSelectorInDOM('.ArnQuadSearchContainer input');
        const currency = document.querySelector('.currencies-container');

        document.querySelector('.ArnQuadSearchContainer #theSubmitButton').insertAdjacentElement('afterend', currency);
    }
}

import Path from './path';
import Utilities from './utilities';

const utilities = new Utilities();

const env_path = new Path();

export default async function f1Styles() {
    await utilities.waitForSelectorInDOM('header');
    const header = document.querySelector('header');
    const language_el = document.querySelector('#language');

    async function addHeader() {
        const html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/f1-header.html`);

        header.insertAdjacentHTML('beforebegin', html);
        header.insertAdjacentHTML(
            'beforeend',
            `
            <ul id="races-contact">
                <li>
                    <a href="https://bookrooms.formula1.com/" id="races" target="_blank">Races</a>
                </li>
                <li>
                    <a href="https://events.hotelsforhope.com/v6/support?siteId=${document.querySelector('meta[name="siteId"]').content}" id="contactUs">Contact Us</a>
                </li>
            </ul>
            <div class="navbar-hamburger">
                <span class="toggle-bar top-bar"></span> 
                <span class="toggle-bar middle-bar"></span> 
                <span class="toggle-bar bottom-bar"></span>
            </div>
        `
        );
        if (language_el === null) return;
        document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
    }

    async function addHamburgerMenu() {
        const burger_html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/mobile-hamburger-menu.html`);
        header.insertAdjacentHTML('beforeend', burger_html);

        document.querySelector('.mobile-nav-upper-ul #contactUs').href = `href="https://events.hotelsforhope.com/v6/support?siteId=${
            document.querySelector('meta[name="siteId"]').content
        }"`;

        await utilities.waitForSelectorInDOM('.navbar-hamburger');

        document.querySelector('.navbar-hamburger').addEventListener('click', () => {
            document.querySelector('.mobile-nav-container').classList.toggle('show-mobile-nav');
        });

        function widthChange(mq) {
            if (language_el === null) return;
            if (mq.matches) {
                document.querySelector('.mobile-nav-lower-ul .language-mobile-li').insertAdjacentElement('afterbegin', language_el);
            } else {
                document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', language_el);
            }
        }

        const mq = window.matchMedia('(max-width: 1100px)');
        widthChange(mq);
        mq.addListener(widthChange);
    }

    async function addFooter() {
        if (document.querySelector('meta[name="landing-page"]') !== null) return;
        const footer_html = await utilities.fetchHTMLFromFile(`${env_path.path}/html/f1/footer.html`);

        document.querySelector('.pb-container').insertAdjacentHTML('afterend', footer_html);
    }

    addHeader();
    addHamburgerMenu();
    addFooter();
}

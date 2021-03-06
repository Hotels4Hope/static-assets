import CUGPortal from '../../../js/portal-setup';

const cug_portal = new CUGPortal();

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        cug_portal.ratesReadyEventMethods();
        cug_portal.removeSavingsLessThan10();
        beatTheirRateMessaging('.SearchHotels', '.ArnProperty');
        beatTheirRateMessaging('.SinglePropDetail', '.rateRow');
    }, 1);
});

cug_portal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/cug/60831/images/favicon-white.png', 'href');
cug_portal.updateAttribute('.SendMeNewPasswordAction', 'Send New Password', 'value');
cug_portal.updateText('#theUserNameAjax label', 'Username');
cug_portal.createHTML('#theWBForgotPasswordFormBody', '<h1>Forgot Your Password?</h1>', 'afterBegin');

setTimeout(() => {
    cug_portal.updateHTML('.savingsTable .savings th', `<strong>Beat 'em by</strong>`);
}, 1000);

function waitForElementToLoad(elementWaitingFor) {
    const element = document.querySelector(elementWaitingFor);
    const config = {attributes: false, childList: true, subtree: false};

    function callback(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cug_portal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=60831', 'href');
                cug_portal.appendToParent('.MemberAuthenticated .logo', '.MemberAuthenticated #AdminControlsContainer');
                cug_portal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/60831/images/logo.png', 'src');

                if (document.querySelector('#commands')) {
                    document.querySelector('header').style.display = 'none';
                    document.querySelector('#AdminControlsContainer').insertAdjacentElement('afterBegin', document.querySelector('.logo'));
                }

                observer.disconnect();
            }
        }
    }
    const observer = new MutationObserver(callback);
    observer.observe(element, config);
}

waitForElementToLoad('header');

document
    .querySelector('body')
    .insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/60831/60831.css">');

cug_portal.updateText('.CreateAnAccountAction', 'Register');

function updateSearchTitle() {
    const name = document.querySelector('meta[name="firstName"]').content;

    cug_portal.updateHTML(
        '.RootBody .ArnSearchHotelsImg',
        `
        <span class="search-messaging">
            <span>
                <h3>${name} START YOUR <strong>SEARCH</strong></h3>
                <h4>RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES</h4>
            </span>
        </span>
        `
    );
}

updateSearchTitle();

function hidePromoCode() {
    const promo_code_element = document.querySelector('#thePassCodeAjax input');

    if (cug_portal.page_name !== 'cug-registration' || !promo_code_element) return;

    promo_code_element.value = 'resbeat';
}

hidePromoCode();

function beatTheirRateMessaging(page_selector, property_container) {
    let percent_el;
    const properties = document.querySelectorAll(property_container);

    if (!document.querySelector(page_selector)) return;

    properties.forEach((property) => {
        if (!property) return;

        percent_el = property.querySelector('.originalPrice');

        if (!percent_el) return;

        const percent = percent_el.getAttribute('percent');
        const percent_banner = property.querySelector('.percentSavings');

        if (!percent_banner || percent < 3) {
            percent_banner.style.display = 'none';
            percent_banner.style.background = 'transparent';
            property.querySelector('.originalPrice').style.position = 'absolute';
            property.querySelector('.originalPrice').style.left = '100000px';

            return;
        }

        percent_banner.innerHTML = `<span class="brand-message"><strong>Beat</strong> 'em by ${percent}%</span>`;
    });
}

function styleLoginContainer() {
    if (document.querySelector('.WBValidatedRegistrationForm')) {
        document.querySelector('#theWBValidatedRegistrationFormBody').insertAdjacentHTML('beforeend', `<div id='already-member-container'></div>`);
        const already_member = document.querySelector('.loginLink');
        document.querySelector('#already-member-container').insertAdjacentElement('afterbegin', already_member);
    } else if (document.querySelector('.WBLoginForm')) {
        document.querySelector('#theWBLoginFormBody').insertAdjacentHTML('afterend', `<div id='register-button'></div>`);
        const register = document.querySelector('.CreateAnAccountAction');
        document.querySelector('#register-button').insertAdjacentElement('afterbegin', register);
        register.textContent = 'New user? Register here';
    }
}

styleLoginContainer();

// New styles below

function updateAttribute(element, attribute, value) {
    document.querySelector(element).setAttribute(attribute, value);
}

updateAttribute('#theUserNameAjax input', 'placeholder', 'Username');
updateAttribute('#thePasswordAjax input', 'placeholder', 'Password');
updateAttribute('.LoginAction.submit', 'value', 'LOGIN');

function removerCharacters(arr) {
    arr.forEach((e) => {
        const el = document.querySelector(e);
        const str = el.textContent;
        const new_str = str.slice(0, -1);
        el.textContent = new_str;
    });
}

removerCharacters([
    '#CitySearchContainer span',
    '#CheckInContainer span',
    '#CheckOutContainer span',
    '.ArnRooms span',
    '.ArnAdults span',
    '.lblAmenities',
    '.lblRating',
    '.lblPropertyType',
    '.lblCurrency',
]);

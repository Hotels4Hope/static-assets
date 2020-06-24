import BasePortal from '../../js/build';
import SiteConfig from './62011-config';
import Utilities from '../../js/utilities';

const site_config = new SiteConfig();
const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
    }
}
function styleResbeatFonts(element, word1, word2) {
    if (!document.querySelector(element)) return;
    const el = document.querySelector(element);
    el.innerHTML = `${word1}<strong>${word2}</strong>`;
}

styleResbeatFonts();
styleResbeatFonts();

function updateSearchTitle() {
    if (!document.querySelector('.RootBody')) return;

    const name = document.querySelector('meta[name="firstName"]').content;
    const el = document.querySelector('.RootBody .ArnSearchHotelsImg');
    el.innerHTML = `
        <span class="search-messaging">
                <h1 id="user-name">${name.toUpperCase()}, START YOUR <strong>SEARCH</strong></h1>
                <h4>RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES</h4>
        </span>
        `;
}

updateSearchTitle();

function insertBeatEmBy(element) {
    if (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
        if (!document.querySelector(element)) return;
        const rate_cells = document.querySelectorAll(element);
        rate_cells.forEach((el) => {
            if (el.querySelector('.originalPrice')) {
                const percent = el.querySelector('.originalPrice').getAttribute('percent');
                el.insertAdjacentHTML(
                    'afterbegin',
                    `<div class="beat-em">
                    Beat 'em by ${percent}%
                    </div>`
                );
            }
        });
    }
}

insertBeatEmBy('.SinglePropDetail .bookRoomCell');

async function displayRewardPoints() {
    if (!document.querySelector('.SinglePropDetail')) return;

    await utilities.waitForSelectorInDOM('.ArnNightlyRate');
    const rooms = document.querySelectorAll('table.ArnRateList');
    rooms.forEach((el) => {
        let full_stay = el.querySelector('.full-stay').textContent;
        full_stay = full_stay.replace(/[^0-9.]/g, '');
        // eslint-disable-next-line radix
        const reward_points = parseInt(full_stay);
        el.querySelector('tbody tr td').insertAdjacentHTML(
            'beforeend',
            `
            <div class="points-earned">
            Reward points earned for this stay: ${reward_points}
            </div>
            `
        );
    });
}

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        insertBeatEmBy('.SearchHotels .ArnRateCell');
    }, 1);
});
displayRewardPoints();

new ChildPortal();

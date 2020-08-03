// eslint-disable-next-line import/extensions
import races from './races.js';
import Utilities from '../../../js/utilities';
import f1Styles from '../../../js/f1';

f1Styles('54494');

// eslint-disable-next-line no-unused-vars
const utilities = new Utilities();

function populateRaces(obj, year) {
    const races_list = document.querySelector(`.races-${year}`);
    Object.keys(obj).forEach((i) => {
        if (utilities.checkForPastDate(obj[i].race_expiry)) return;
        races_list.insertAdjacentHTML(
            'beforeend',
            `
            <div class="race">
                <div class="race-info">
                    <div class="date">
                        <div class="days">${obj[i].days}</div>
                        <div class="month">${obj[i].month}</div>
                    </div>
                    <div class="race-location">
                        <img class="country-flag" src="${obj[i].country_flag_url}" alt="${obj[i].flag_alt_text} flag">
                        <div class="race-details">
                            <div class="name">
                            <span id="F1-title">Formula 1</span>
                            <span id="mobile-year">${year}</span>
                            <span id="sponsor">${obj[i].sponsor}</span>
                            ${obj[i].name}
                            <span id="desktop-year">${year}</span>
                            </div>
                            <div class="location">${obj[i].location}</div>
                        </div>
                    </div>
                </div>
            <a class="book-btn" href="${obj[i].book_url}">Book Rooms <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>
            <a class="mobile-book-btn" href="${obj[i].book_url}"><svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>

        </div>
        `
        );
    });
}

function populateRaceSeasons() {
    Object.keys(races).forEach((i) => {
        const year = i.slice(-4);
        document.querySelector('#lower-section').insertAdjacentHTML(
            'beforebegin',
            `
            <div class="container" id="races-container">
                <section>
                    <h1>${year} FIA Formula One World Championship&trade; Races</h1>
                    <p>Choose your race below to see all available hotel options.</p>
                    <fieldset>
                        <h3 class="season">${year} Races</h3>
                        <div class="races-${year} races">
                        </div>
                    </fieldset>
                </section>
            </div>
            `
        );
        populateRaces(races[i], year);
    });
}

populateRaceSeasons();

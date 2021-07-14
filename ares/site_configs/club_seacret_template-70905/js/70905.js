import BasePortal from '../../../js/build';
import SiteConfig from './70905-config';
import Utilities from '../../../js/utilities';

const site_config = new SiteConfig();
const utilities = new Utilities();

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();

        this.init();

        this.ref = '';
        this.trips = {};
        this.trip = {};
    }

    async init() {
        if (!document.querySelector('.SinglePropDetail')) return;

        await this.getReferenceId();
        await this.fetchTrips();
        await this.fetchPropertyHtml();
        this.getTrip();
        this.insertTripDetailsIntoHtml();
    }

    async getReferenceId() {
        return fetch(
            'https://club-seacret.cdn.prismic.io/api/v2?access_token=MC5ZT2NaZlJFQUFDOEFMNzU4.Yu-_ve-_ve-_ve-_vSpTKk7vv73vv71RFj15NyMgCu-_ve-_vRPvv73vv73vv71ZVO-_ve-_vUpf77-9#format=json',
            {
                method: 'GET',
                redirect: 'follow',
            }
        )
            .then((response) => response.json())
            .then((result) => {
                this.ref = result.refs[0].ref;
            })
            .catch((error) => console.log('error', error));
    }

    async fetchTrips() {

        return fetch(
            `https://club-seacret.cdn.prismic.io/api/v2/documents/search?ref=${this.ref}&access_token=MC5ZT2NaZlJFQUFDOEFMNzU4.Yu-_ve-_ve-_ve-_vSpTKk7vv73vv71RFj15NyMgCu-_ve-_vRPvv73vv73vv71ZVO-_ve-_vUpf77-9#format=json`,
            {
                method: 'GET',
                redirect: 'follow',
            }
        )
            .then((response) => response.json())
            .then((result) => {
                this.trips = result;
                console.log(this.trips);
            })
            .catch((error) => console.log('error', error));
    }

    async fetchPropertyHtml() {
        document.body.insertAdjacentHTML('afterBegin', '<div id="property-html"></div>');

        // url below is an example of how you could use this method
        const promise = utilities.fetchHTMLFromFile(`https://dev-static.hotelsforhope.com/ares/site_configs/club_seacret_template-70905/html/seacret.html`);

        promise.then((html) => {
            // document.querySelector('#property-html').innerHTML = html;
            document.body.insertAdjacentHTML(
                'afterBegin',
                `   <div class='seacret-header'>
                        <div class='navbar'>
                            <div class='logo'>
                            </div>
                            <div class='language-select'></div>
                        </div>
                        <div class='hero-container'></div>
                    </div>

                    <article class='body-article'>

                        <section class='itinerary-section'>
                            <h3 class='section-title' id='itinerary-section-title'>ITINERARY</h3>
                            <div class='itinerary-list'></div>
                        </section>

                        <section class='trips-section'>
                        <h3 class='section-title' id='trips-section-title'>TRIPS</h3>
                            <div class='trip-item'>
                            <div class='item-text-container'>
                                <div class="trip-mobile-container">
                                <div class='trip-item-name'>King Room:</div>
                                <div class="trip-price-mobile">$1,500</div>
                                </div>
                                <p class='trip-item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna commodo diam amet, accumsan vel. Laoreet dui dolor vitae ante dictum egestas suscipit sapien pellentesque. Ipsum libero varius donec lectus faucibus velit. Quam mi consequat vel, habitasse aliquam proin orci sit.</p>
                            </div>
                            <div class='trip-price-cta-container'>
                                <div class='trip-price-desktop'>$1,500</div>
                                <div class='trip-ctas'>
                                <button class='book-button'>BOOK TRIP</button>
                                <button class='hold-button'>HOLD TRIP</button>
                                </div>
                            </div>
                            </div>
                        </section>

                    </article>

                    <article class='bottom-carousel-article'>
                        <div class='carousel-container'>
                        </div>
                    </article>
                `
            );
        });
    }

    getTrip() {
        const trip_id = utilities.getUrlParameter('tripId');

        this.trip = this.trips.results.find((obj) => {
            return obj.id === trip_id;
        });

        return this.trip;
    }

    async insertTripDetailsIntoHtml() {

        await utilities.waitForSelectorInDOM('#itinerary-section-title');
        const itinerary_title = document.getElementById('itinerary-section-title');
        console.log(itinerary_title);

        const trips_section = document.body.querySelector('.trip-item-description');
        console.log(trips_section);

        document.querySelector('.hero-container').insertAdjacentHTML(
            'afterBegin',
            `
            <div class='title-date-container'>
                <h1 class='trip-title'>${this.trip.data.trip_name[0].text}</h1>
                <h2 class='trip-date'>${this.trip.data.start_date} - ${this.trip.data.end_date}</h2>
            </div>
        `
        );

        // if (!document.querySelector('#trip-name') || !document.querySelector('#trip-date') || !document.querySelector('#itinerary-section-title')) return;

        this.trip.data.itinerary.reverse().forEach((i) => {
            document.querySelector('.itinerary-list').insertAdjacentHTML(
                'afterBegin',
                `
                <div class='itinerary-item'>
                    <div class='itinerary-text'>
                        <span class="itinerary-day">${i.day[0].text}</span>
                        <span class="itinerary-description">${i.description[0].text}</span>
                    </div>
                    <hr class='itinerary-separator'>
                </div>
                `
            );
        });

        this.trip.data.itinerary.reverse().forEach((i) => {
            document.querySelector('.itinerary-list').insertAdjacentHTML(
                'afterBegin',
                `
                <div class='itinerary-item'>
                    <div class='itinerary-text'>
                        <span class="itinerary-day">${i.day[0].text}</span>
                        <span class="itinerary-description">${i.description[0].text}</span>
                    </div>
                    <hr class='itinerary-separator'>
                </div>
                `
            );
        });
    }
}

new ChildPortal();

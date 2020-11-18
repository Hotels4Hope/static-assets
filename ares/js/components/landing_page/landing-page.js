import Utilities from '../../utilities';

const utilities = new Utilities();

export default class LandingPage {
    constructor(landing_page_events) {
        this.landing_page_events = landing_page_events;
        this.header_search_container_built = false;
    }

    init() {
        if (!document.querySelector('.RootBody')) return;
        this.generateEventHtml();
        this.removeArnSearchContainer();
    }

    /**
     *@description Removes ARN search container
     *@return void
     */
    async removeArnSearchContainer() {
        document.body.insertAdjacentHTML('afterBegin', '<style>#root-search-container{display: none;}');

        await utilities.waitForSelectorInDOM('#root-search-container');

        if (!document.querySelector('#root-search-container')) return;

        document.querySelector('#root-search-container').remove();
    }

    buildCitySearchElement(event) {
        if (!this.header_search_container_built) {
            document.querySelector('.ArnSearchContainerMainTable').insertAdjacentHTML('afterend', '<div class="header-events"></div>');
            this.header_search_container_built = true;
        }
        let i = 1;

        document.querySelector('.header-events').insertAdjacentHTML(
            'afterbegin',
            `
            <a class="header-container search-header-${i}" href="${event.portal_url}" target="_blank">
                <div class="event-details">
                    <h2 class="event-name">${event.name}</h2>
                </div>
                <div class="view-hotels">View Hotels</div>
            </a>
        `
        );
        i += 1;
    }

    /**
     *@description Generates the events in HTML
     *@return void
     */
    async generateEventHtml() {
        let i = 0;
        await utilities.waitForSelectorInDOM('.ArnSearchContainerMainDiv');

        const container = document.querySelector('.ArnSearchContainerMainDiv');

        if (!container) return;
        this.landing_page_events.forEach((event) => {
            if (event.is_city_search_header_link) {
                this.buildCitySearchElement(event);
                return;
            }
            if (utilities.checkForPastDate(event.end_date)) return;
            if (i === 0) container.insertAdjacentHTML('beforeEnd', `<h1>Upcoming Events</h1><div class="events"></div>`);

            document.querySelector('.events').insertAdjacentHTML(
                'beforeEnd',
                `
                <a class="event-container event-${i + 1}" href="${event.portal_url}" target="_blank">
                    <div class="event-details">
                        <h2 class="event-name">${event.name}</h2>
                        <div class="display-date">${event.display_date}</div>
                    </div>
                        <div class="view-hotels">View Hotels</div>
                </a>
                `
            );
            i += 1;
        });
    }
}

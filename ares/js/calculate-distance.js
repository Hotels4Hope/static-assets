/* eslint-disable prefer-destructuring */

export default class Distance {
    constructor(params, venueName, unit, from_lat, from_long) {
        this.params = [];
        this.venueName = venueName;
        this.unit = unit;
        this.from_lat = from_lat;
        this.from_long = from_long;

        this.init();
    }

    init() {
        this.getVenueLatLng();
        this.getVenueName();
        this.getUnit();
    }

    getVenueLatLng() {
        const params = new URL(window.location.href);
        const search_params = new URLSearchParams(params.search);

        if (search_params.has('points')) {
            const lat_lng = search_params.get('points').split('|');
            this.from_long = lat_lng[0];
            this.from_lat = lat_lng[1];
        } else {
            this.from_lat = document.querySelector('meta[name="aLatitude"]');
            this.from_long = document.querySelector('meta[name="aLongitude"]');

            if (this.from_lat) this.from_lat = this.from_lat.getAttribute('content');

            if (this.from_long) this.from_long = this.from_long.getAttribute('content');
        }
    }

    async getPropertyLatLong(params) {
        const self = this;
        const property = document.querySelectorAll('.ArnProperty');

        property.forEach((element, index) => {
            if (!element) return;

            let to_lat = element.getAttribute('latitude');
            to_lat = parseFloat(to_lat);
            to_lat = to_lat.toFixed(4);
            element.setAttribute('latitude', to_lat);

            let to_long = element.getAttribute('longitude');
            to_long = parseFloat(to_long);
            to_long = to_long.toFixed(4);
            element.setAttribute('longitude', to_long);

            if (to_lat && to_long) {
                self.params.push([
                    [self.from_lat, self.from_long],
                    [to_lat, to_long],
                ]);
            }
        });
    }

    getVenueName() {
        this.venueName = document.querySelector('meta[name="SearchLocation"]');

        if (!this.venueName) return;

        this.venueName = this.venueName.getAttribute('content');
    }

    getUnit() {
        let units = document.querySelector('.units');

        if (!units) return;

        units = units.textContent;

        if (units.includes('miles')) this.unit = 'miles';

        if (units.includes('kilometers')) this.unit = 'kilometers';
    }

    sortPropsByDistance() {
        const hr_list = document.querySelectorAll('.prop-hr');

        const prop_container = document.querySelector('#currentPropertyPage');
        const props = document.querySelectorAll('.ArnProperty');

        function extractNumber(str) {
            return str.substring(0, str.indexOf(' '));
        }

        const props_array = [].slice.call(props).sort((a, b) => {
            return extractNumber(a.querySelector('.distanceLabel').textContent) > extractNumber(b.querySelector('.distanceLabel').textContent) ? 1 : -1;
        });

        props_array.reverse().forEach((property, i) => {
            prop_container.insertAdjacentElement('afterbegin', property);
            document.querySelector(`#${property.id}`).insertAdjacentElement('afterend', hr_list[i]);
        });
    }

    async updateDistance() {
        const distance_element = document.querySelectorAll('.distanceLabel');

        if (!distance_element) return;

        const promises = [];

        this.params.forEach(async (param) => {
            const url = `https://distance.hotelsforhope.com?from_lat=${param[0][0]}&from_long=${param[0][1]}&to_lat=${param[1][0]}&to_long=${param[1][1]}`;
            promises.push(
                new Promise((resolve) => {
                    fetch(url)
                        .then((response) => {
                            const data = response.json();

                            return data;
                        })
                        .then((data) => {
                            if (!distance_element) return;

                            distance_element.forEach((element) => {
                                const parent = element.closest('.ArnProperty');

                                if (data.to_lat !== parent.getAttribute('latitude') || data.to_long !== parent.getAttribute('longitude')) return;

                                if (this.unit === 'miles') {
                                    data.mi = parseFloat(data.mi);
                                    data.mi = data.mi.toFixed(1);
                                    element.textContent = `${data.mi} ${this.unit} to ${this.venueName}`;
                                }

                                if (this.unit === 'kilometers') {
                                    data.km = parseFloat(data.km);
                                    data.km = data.km.toFixed(1);
                                    element.textContent = `${data.km} ${this.unit} to ${this.venueName}`;
                                }
                            });

                            resolve();
                        })
                        .catch(() => {
                            console.log('There was an error trying to make your request');
                        });
                })
            );
        });

        Promise.all(promises).then(() => {
            this.sortPropsByDistance();
        });
    }
}

async function pollingFinished() {
    return new Promise((resolve) => {
        const interval = setInterval(async () => {
            if (!document.querySelector('.pollingFinished')) return;

            const distance = new Distance();
            distance.params = [];
            await distance.getPropertyLatLong();

            if (distance.from_lat === null || distance.from_long === null) return;

            distance.updateDistance();

            resolve();
            clearInterval(interval);
        }, 250);
    });
}

pollingFinished();

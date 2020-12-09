import Autocomplete from './autocomplete';

describe('Constructor sets property values', () => {
    document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    it('Sets the value of site_config', () => {
        expect(autocomplete.site_config).toEqual(expect.objectContaining({site_id: '60279', directory_name: 'ares_child', distance_unit: 'useMiles'}));
    });
    it('Sets the value of page_name to landing-page', () => {
        expect(autocomplete.page_name).toEqual('landing-page');
    });
    it('Sets the value of latitude to null', () => {
        expect(autocomplete.lat).toBeNull();
    });
    it('Sets the value of longitude null', () => {
        expect(autocomplete.lng).toBeNull();
    });
    it('Sets the value of original_params', () => {
        expect(autocomplete.original_params.toString()).toEqual(
            'siteid=62309&currency=USD&cid=ROCK&useMiles=&checkin=11%2F12%2F21&pageSize=15&mapSize=13&groupid=43285&radius=5&nights=3&latitude=26.10879170000000&map=&longitude=-80.10643370000000&destination=Austin%2C+TX%2C+USA'
        );
    });
    it('Sets the value of currency to USD', () => {
        expect(autocomplete.currency).toEqual('USD');
    });
});

describe('init', () => {
    afterEach(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    it("Calls it's methods the correct amount of times", () => {
        jest.spyOn(Autocomplete.prototype, 'sumbitListener').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'hideArnSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'insertNewSearchInput').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'googleMapsScript').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'getEventOriginalParams').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'setAttribute').mockImplementation(() => true);

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'search-results'
        );
        autocomplete.init();

        expect(autocomplete.sumbitListener).toBeCalledTimes(1);
        expect(autocomplete.sumbitListener).toReturnWith(true);
        expect(autocomplete.hideArnSearchInput).toBeCalledTimes(1);
        expect(autocomplete.insertNewSearchInput).toBeCalledTimes(1);
        expect(autocomplete.googleMapsScript).toBeCalledTimes(1);
        expect(autocomplete.getEventOriginalParams).toBeCalledTimes(1);
    });
});

describe('hideArnSearchInput', () => {
    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );
    it('Positions ARN search input off the page and removes the required attribute', () => {
        afterEach(() => {
            document.body.innerHTML = '';
        });

        document.body.innerHTML = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city" required>`;

        const new_html = `
        <h1 class="RootBody">This is a test</h1>
        <input id="city" style="position: absolute; left: -10000px;">`;
        autocomplete.hideArnSearchInput('input#city');
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

describe('insertNewSearchInput', () => {
    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Inserts a new search input', () => {
        document.body.innerHTML = `
        <h1 class="RootBody">This is a test</h1>
        <div id="CitySearchContainer">
            <span>
            </span>
        </div>`;

        const new_html = `
        <h1 class="RootBody">This is a test</h1>
        <div id="CitySearchContainer">
            <span>
            <input type="search" id="address-input" placeholder="Destination" required="true"></span>
        </div>`;
        autocomplete.insertNewSearchInput(
            '.RootBody',
            'div#CitySearchContainer span',
            'beforeEnd',
            '<input type="search" id="address-input" placeholder="Destination" required="true">'
        );
        expect(document.body.innerHTML).toEqual(new_html);
    });
});

describe('setAttribute', () => {
    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    it('Sets an onClick attribute to and empty string', () => {
        afterEach(() => {
            document.body.innerHTML = '';
        });
    });
    document.body.innerHTML = `<input id="theSubmitButton" onclick="$('theBody').addClassName('searchingForResults');doPushPagePrep();$('theArnPushPage').show();$('theArnPushPageContent').show()">`;

    autocomplete.setAttribute('input#theSubmitButton', 'onClick', '');
    expect(document.body.innerHTML).toEqual(`<input id="theSubmitButton" onclick="">`);
});

describe('getDestination', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Returns the destination string from the input', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="Austin, TX, USA">
        `;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );

        expect(autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });

    it('Sets destination if it exists in Original Params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );

        expect(autocomplete.getDestination('input#address-input')).toEqual('Austin, TX, USA');
    });

    it('Returns and error if the destination is not available', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value="">`;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );

        expect(autocomplete.getDestination('input#address-input')).toEqual(new Error('No destination available'));
    });
});

// test googleMapsScript() here

describe('getEventParams', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Sets the key/values in the constructor property event_params', () => {
        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279">`;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'landing-page'
        );
        autocomplete.getEventOriginalParams(autocomplete.event_params);
        expect(autocomplete.event_params).toBeTruthy();
        expect(autocomplete.event_params).toEqual(
            expect.not.objectContaining({
                properties: null,
                utm_source: null,
                locationlabel: null,
                radius: null,
                groupid: null,
                cid: null,
                points: null,
            })
        );
        expect(autocomplete.event_params).toEqual(
            expect.objectContaining({
                properties: 'x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947',
                utm_source: 'internal',
                locationlabel: 'Tortuga-Main Stage',
                radius: '5',
                groupid: '43285',
                cid: 'ROCK',
                points: '-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)',
            })
        );
    });
});

describe('getDropdownValue', () => {
    document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;points=-80.104529|26.114917|Tortuga-Sunset Stage,-80.119458|26.100938|Water Taxi Stop (Tickets Extra$),-80.106137|26.110877|Water Taxi Stop (Tickets Extra$)&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;locationlabel=Tortuga-Main Stage&amp;utm_source=internal&amp;nights=3&amp;propertytypes=Hotel,Motel,Resort,Hostel,Ext. Stay,Boutique,Weekly Rentals&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;type=geo&amp;properties=x208368,x378,x2636,x2324,x44621,x24437,x29761,x848867,x3846047,x235230,x10505,x3873763,x269736,x1714083,x13941,x39947"><meta name="siteId" content="60279">`;

    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    it('Returns the selected options text content', () => {
        document.body.innerHTML = `<select id="rooms" name="31">
        <option value="32">1</option>
        <option value="33" selected="selected">2</option>
        <option value="34">3</option>
        <option value="35">4</option>
    </select>`;

        expect(autocomplete.getDropdownValue('#rooms')).toBe('2');
    });
});

describe('applyFilters', () => {
    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Returns a comma seperated list of amenities', () => {
        document.body.innerHTML = `
        <div id="AmentitiesContainer" class="ArnIndividualSearchContainer ArnAmentitiesContainer">
            <div class="ArnSearchField">
                <div class="lblAmenities">Amenities:</div>
                    <div class="AirportShuttleBox">
                        <input name="191" type="checkbox" class="checkbox" checked>
                        <input name="192" type="hidden" class="hidden">
                        <span class="lblAirportShuttle">Airport Shuttle</span>
                    </div>
                    <div class="ComplimentaryBreakfastBox">
                        <input name="193" type="checkbox" class="checkbox" checked>
                        <input name="194" type="hidden" class="hidden">
                        <span class="lblComplimentaryBreakfast">Complimentary Breakfast</span>
                    </div>
                    <div class="FitnessCenterBox">
                        <input name="195" type="checkbox" class="checkbox" checked>
                        <input name="196" type="hidden" class="hidden">
                        <span class="lblFitnessCenter">Fitness Center</span>
                    </div>
                </div>
        </div>`;

        expect(autocomplete.applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')).toEqual('Airport Shuttle,Complimentary Breakfast,Fitness Center');
    });

    it('Returns null with not filter boxes checked', () => {
        document.body.innerHTML = `
        <div id="AmentitiesContainer" class="ArnIndividualSearchContainer ArnAmentitiesContainer">
            <div class="ArnSearchField">
                <div class="lblAmenities">Amenities:</div>
                    <div class="AirportShuttleBox">
                        <input name="191" type="checkbox" class="checkbox">
                        <input name="192" type="hidden" class="hidden">
                        <span class="lblAirportShuttle">Airport Shuttle</span>
                    </div>
        </div>`;

        expect(autocomplete.applyFilters('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')).toBeNull();
    });
});

describe('appendParamsToUrl', () => {
    const autocomplete = new Autocomplete(
        {
            site_id: '60279',
            directory_name: 'ares_child',
            distance_unit: 'useMiles',
        },
        'landing-page'
    );

    it('Returns and error with invalid keys or values', () => {
        // Needs more tests, perhaps refactor method
        expect(
            autocomplete.appendParamsToURL({
                longitude: {
                    key: 'longitude',
                    value: '3',
                },
                rooms: {
                    key: 'rooms',
                    value: '',
                },
            })
        ).toBeUndefined();
    });

    // it('Builds the URL with valid params', () => {
    //     expect(
    //         autocomplete.appendParamsToURL({
    //             longitude: {
    //                 key: 'longitude',
    //                 value: '3',
    //             },
    //             rooms: {
    //                 key: 'rooms',
    //                 value: '2',
    //             },
    //         })
    //     ).toEqual();
    // });
});

describe('submitListener', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    // document.body.innerHTML = `<form accept-charset="utf-8" autocomplete="off" id="searchForm"></form>`;

    it("Calls it's methods correct amount of times", () => {
        jest.spyOn(Autocomplete.prototype, 'getDropdownValue').mockImplementation(() => true);
        jest.spyOn(Autocomplete.prototype, 'applyFilters').mockImplementation(() => true);

        document.body.innerHTML = `<meta name="originalParams" content="siteid=62309&amp;currency=USD&amp;cid=ROCK&amp;useMiles=&amp;checkin=11/12/21&amp;pageSize=15&amp;mapSize=13&amp;groupid=43285&amp;radius=5&amp;nights=3&amp;latitude=26.10879170000000&amp;map=&amp;longitude=-80.10643370000000&amp;destination=Austin, TX, USA"><meta name="siteId" content="60279"><input type="search" id="address-input" placeholder="Destination" required="true" value=""><input id="theOtherSubmitButton" style="cursor:hand;cursor:pointer;" value="Search" type="submit" class="submit">`;

        const autocomplete = new Autocomplete(
            {
                site_id: '60279',
                directory_name: 'ares_child',
                distance_unit: 'useMiles',
            },
            'search-results'
        );
        autocomplete.sumbitListener();
        document.getElementById('theOtherSubmitButton').click();

        expect(autocomplete.getDropdownValue).toBeCalledTimes(2);
        expect(autocomplete.getDropdownValue).toReturnWith(true);
        expect(autocomplete.applyFilters).toBeCalledTimes(3);
    });
});
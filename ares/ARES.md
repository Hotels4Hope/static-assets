# Ares Portal


## Contents



1. [Ares Portal Configuration Keys](#Ares-Portal-Configuration-Keys)
2. [Components](#Components)
3. [Email](#Email)
4. [EsLint/Prettier](#EsLint-&-Prettier)
5. Build Tools
6. Styles
7. Webpack
8. Testing


# Ares Portal Configuration Keys

Documented below are the configuration keys for the Ares portal build system. Each config will enable or disable certain features within a portal.


## Contents



1. [Autocomplete](#Autocomplete)
2. [Site Type](#Site-Type)
3. [Property Thumbnail Image Tags](#Property-Thumbnail-Image-Tags)
4. [Showing Tax Inclusive Rates](#Showing-Tax-Inclusive-Rates)
5. [Dayjs Date format](#Dayjs-Date-format)
6. [Property Reviews Page Position](#Property-Reviews-Page-Position)
7. [Property Filtering](#Property-Filtering)
8. [Language](#Language)
9. [Currency](#Currency)
10. [Page Load Date Prompt](#Page-Load-Date-Prompt)
11. [Social Sharing](#Social-Sharing)
12. [Assets (Logos/Images)](#Assets)
13. [Theme](#Theme)
14. [Fonts](#Fonts)
15. [Advertizing](#Advertizing)
16. [Hybrid Compensation Model Text Changes](#heading=h.p09xqhqcpigk)
17. [Search Page Header Text](#heading=h.2wk6kclacn79)
18. [Custom Emails](#Custom-Emails)

 


### **Autocomplete**

(Boolean)


```
algolia_app_id: 'plCZXR0GZ7J1',
algolia_api_key: '123445',
```


Ares autocomplete is migrating to use Google Places autocomplete as of April 2021. 

If a portal has the key “use_google_autocomplete: true”, it will use Google instead of the default that is Algolia.

Algolia requires an app ID and and API key, both are required in a portal’s config.js file. Resbeat sites use a different app ID and API key so that the searches from those portals can be tracked separately from our event portals.

Algolia log in information can be found [here](https://docs.google.com/document/d/1JAM-oDEG-y9PErLlCmBxD1pra8zLFxQpPNNAw9PntwQ/edit?usp=sharing).


### **Site Type**

(String)


```
site_type: 'lodging',
lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
        }
cug: {
    is_cug: false,
    show_points: false,
    allow_registration: false,
}
```


The site type indicates whether a site is a lodging - linked to an event with contracted inventory, or a CUG (Closed User Group) - a site that shows inventory for any location the user searches, the user must be a member/signed up to legally be showed discounted rates.

Within the lodging object, there are two keys, “redirect_date” and “redirect_url”, we use these when a site is old/expired to automatically redirect any user that finds their way to the site, to the current site. For example, ACL Festival portal from 2020 should be redirected to ACL Festival 2021.


### **Property Thumbnail Image Tags**

(string)


```
exclusive_rate_text: 'Exclusive Rate',
partner_hotel_text: 'Partner Hotel',
host_hotel_text: 'Host Hotel',
```


Within the ARN Groups app, an ops team member can customize the long URL in order to specify the search criteria for an events’ portal. Within that URL, the parameter “properties” can be used to order specific properties to the top of the search results. Each property ID can be prepended with an X or a Y, doing this will enable certain cong keys to be active on that property’s thumbnail image.

For Example:


```
&properties=x209332,y1235556,x209333,x13333
```


“X” will enable the “`partner_hotel_text`”, “Y” will enable “`host_hotel_tex`t”. The values for each of these keys can be whatever text the event manager wants. (These keys probably should have been called x_prop_tag and y_prop_tag)

As well as the property tags, we also have the contracted property tag, this is to signify that a specific property has contracted rates and are exclusive to the event. It is represented by the “exclusive_rate_text” key. When A property is contracted, it will have a class added to it in the dom to enable this tag.

Find URL parameter documentation [here](https://docs.google.com/document/d/12TO-uBpY7YA9XPkFEeJAu_TKtbr-3AtpPNzXF8D1mZk/edit?usp=sharing) and [here](https://implementation-guide.alliancereservations.com/booking-engine-url-parameters.html).


### **Showing Tax Inclusive Rates**

(Boolean)


```
show_tax_inclusive_rates: false,
```



### **Dayjs Date Format**

(string)


```
dayjs_date_format: 'M/D/YYYY',
```


The Ares portal uses dayjs to calculate dates, some sites use a european style date format. Simply set this format here.


### **Property Review Page Position**

(Boolean)


```
reviews_before_info: true,
```


This boolean will switch between the reviews section on the property page being either below or above the map.


### **Property Filtering**

(Boolean) 

```
show_stars: false,
show_property_type: false,
```


The stars and property type filers can have their display toggled using a boolean value. These filters will appear on the RootBody search page and the search results page.


### **Language**

(Boolean)
```
 show_language_select: false,
```
Turns on the language select component in the header of a portal.


### **Currency**

(Boolean), (String)


```
show_currency_select: false,
currency: 'USD',
```


Turns on the currency select component in the header and sets the default currency.


### **Page Load Date Prompt**

(Boolean)


```
show_date_prompt: false,
```


*Not Functional*


### **Social Sharing**

(Boolean)


```
has_social_sharing: true,
```


*Not Functional*


### **Assets**

(String)


```
fav_icon_url
     header: {
         logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'http://www..com/',
        },
   map_marker_image_url:`${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
```


These config keys are the paths to a portals’ images. All images should be located in the events’ directory in a directory called `'img'`. We use the `path` property of the `env_path` object to set our paths between local/develop/production environments. The `directory_name `is a config key within the same file.


### **Theme**

(String)


```
theme: 'light',['dark']
```


We have built in two options for a portals’ theme: light and dark. Light is the most common, dark will swap the background to be black with white text where appropriate. 

See an example of a dark theme [here](https://book.hofhotels.com/group-event?id=46202&utm_source=internal).


### **Fonts**

(String)


```
google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
```


Simply sets the font for the portal.


### **Advertizing**

```
    ads: {
            sidebar_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            between_property_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            confirmation_page_top: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
```



### **Hybrid Compensation model**

(Boolean)
Having the Hybrid Compensation Model set to true changes the text in two places on the checkout page. 

See an example on [this](https://bookrooms.formula1.com/group-event?id=46260&utm_source=internal) portal (on the Checkout page)

```
uses_hybrid_compensation_model: true,
```

### **Search Page Header Text**

(String)

These two keys represent the text that is shown on the search (.RootBody) page.

```
 root_page_header_text: 'Start Your Search',
 root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
```

### **Custom Emails**

(Boolean)

When `has_custom_emails` is set to `true`, it will trigger a conditional in the [build_emails](#Build-Email-Script) script that will use the custom [mjml](#MJML) file inside that site's directory instead of the default confirmation email template.

For a good example of the use of custom emails, see the RoomCash emails directory.

```
has_custom_emails: true,
```


            percent_off_text: 'off',

            show_percent_savings: false

        is_resbeat_client: false,

        confirmation_email_from: 'Hotels for Hope',

### **Email Logo**

(String)

Sometimes a site's logo may not work with the default confirmation email template - for example if the logo has white text, the logo will not be visible (the default email template has a white background), therefore a second logo can be provided by specifiying the path to it as the value for the below key. The [email build script](#Build-Email-Script) will use this logo if the config key exists.

```
Email_logo_file_location: ‘path’
```

# Components


## Contents



1. [Group Booking Banner](#Group-Booking-Banner)
2. [Landing Page](#Landing-Page)
3. [Popup](#Popup)
4. [Property Image Replacement](#Property-Image-Replacement)

        


### **Group Booking Banner**

(Boolean, String)


```
has_group_booking_banner: true,
group_booking_form_url: 'https:{jorform url}?bookingPortal=BJAC%20Las%20Vegas',
```


The group booking banner component will add a full width banner below the header of a portal with the message:


“_Need 10+ rooms for {event_name} or another event? We're here to help you secure great rates._”

NOTE: {event_name} is taken from that portal’s config `event_name.`

The parameter `bookingPortal `in the Jot Form url is simply a reference to the event name so conversion can be tracked in Google Analytics.


### **Landing Page**

(Boolean, String)

Config.js:


```
has_landing_page: true,
hide_search_on_landing_page: true,
landing_page_events: [
             {
                 name: ',
                 display_date: ',
                 end_date: '', // M/D/YYYY
                 portal_url: '',
             },
```


{site_id}.js:


```
new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
```


The landing page component changes the DOM of the RootBody (search) page to show tiles for each event object that is passed into the `landing_page_events` array. The actual search field along with checkin/out can optionally be hidden with the boolean config `hide_search_on_landing_page. `See an example of a landing page [here](https://events.quintrooms.com/v6/?siteid=64189&utm_source=internal).


### **Popup**

-Child.js file
```
Import “popUp” from js/components/event_popup/multiple-event-weekends

popUp(
    site_config,
    'Sakhir Grand Prix',
    'https://bookrooms.formula1.com/group-event?id=44125&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202020',
    'https://bookrooms.formula1.com/group-event?id=44126&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Sakhir%202020'
);
```


   

The popup will display a message on load of a portal, it is used to switch between two weekends of an event. For example ACL weekend 1 & 2.


### **Property Image Replacement**


```
prop_image_replacement: [
            {
              prop_id: '663849',
              Image_url: 'https://media.travsrv.com/663849/1089261127_804480.jpg',
            },
        ],
```


This component will update the thumbnail image for a given property on the search results page. Ares has code that sets each property to show the `'featureImage'` from the API but sometimes those images are not desirable. The property image replacement is simply a method that is evoked when `prop_image_replacement `is truthy. The arry takes objects that have the property id for the hotel that needs its image replacing and the url for the image to be added.


# Email


## Contents



1. [MJML](#MJML)
2. [Build Email Script](#Build-Email-Script)
3. [Site names Json File](#Site-names-Json-File)
4. [Integromat Confirmation Email Scenario](#Integromat-Confirmation-Email-Scenario)
5. [Custom Email](#Custom-Email)


### **MJML**
MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase. MJML’s open-source engine generates high quality responsive HTML compliant with best practices.

Find MJML documentation [here](https://mjml.io/documentation/).

Withing the Ares repo, all mjml is compiled into HTML. To compiles a single mjml file into an HTML file on demand, run the following command:

```
npm run mjml [../dir/emails/input.mjml] -0 [../dir/emails/output.html]

```

*Note: The npm command `mjml` is a custom script in `package.json` that is just running `./node_modules/.bin/mjml` before the specified input file name.


### **Build Email Script**
Located in: `ares/js/build_tools/build-emails.js`

This script will be called for each site being built through webpack when in either Develop or Production environment.

The script handles a few things:
- It gathers key data for the current site like primary/secondary colors, logo path and client name etc and creates an object out of that for later use.
- It will create an `emails` directory inside that site's directory, within that emails directory a json file is created to hold the object with key data, and, unless the site is using a [custom email design](#Custom-Emails), will create a confirmation email in HTML using the client's colors and logo.
- Adds the name and site ID of the current site to `site-names.json` in `ares/js/json/site-names.json`. For more info on this, see [Site names Json File](#Site-names-Json-File)

### **Site names Json File**

This file exists purely to serve as a helper to the tool we use to parse and send the confirmation email to customers using [Integromat](www.integromat.com). It is just a list of every site that has an email HTML file that the Integromat scenario checks against to then do a Get request for that HTML.

### **Integromat Confirmation Email Scenario**
Integromat handles a few things in regards to sending a confirmation email. First it receieves the data payload from our CRM (ZOHO) then it checks to see if that site ID has its own confirmation.HTML. If it doesn't, it will send a fallback confirmation email (located in: `ares/emails/default_templates_mjml/quintrooms.mjml`) as well as an email to `dev@quintrooms` with a description of the error that caused it to send the fallback email.

See the confirmation email workflow inside Integromat [here](https://www.integromat.com/scenario/2011949/edit).


### **Custom Email**
As long as a site has the following config:
```
has_custom_emails: true,
```
For every file within a site's `/emails` directory that has the file extension `.mjml`, a function within the [build-emails.js script](#Build-Email-Script) will be run on that file. It will compile it into HTML using the site specific colors and logo.

# EsLint & Prettier


## Contents



1. [About](#About)
2. [EsLint](#EsLint)
3. [Prettier](#Prettier)


### **About**
The Ares codebase uses EsLint and Prettier to give our code a uniform style. Both Eslint and Prettier are set to run/format on a git hook. This means that when you attempt to commit code, if there are significant issues, it won't allow it. If issues exist that Prettier can handle, it will fix them for you. To view the code for the on commit hook, look in `package.json` of Static Assets.

```
"husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js, html}": [
            "eslint --fix",
            "prettier --single-quote --write",
            "npm run test --verbose --passWithNoTests --findRelatedTests",
            "git add"
        ]
    },
```

### **EsLint**
Our EsLint setup extends the Air-Bnb style guide. See the `.eslintrc.js` file in the root of Static Assets for more specific rules we have applied.

Documentation: [EsLint](https://eslint.org/)

### **Prettier**
Prettier formats our code to keep spacing and other such things uniform within the repo. See the `.prettierrc` file in the root of Static Assets to add to or view the rules.
Documentation: [Prettier](https://prettier.io/docs/en/index.html)

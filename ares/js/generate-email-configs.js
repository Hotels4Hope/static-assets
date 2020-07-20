/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */

const fs = require('fs');

const sites = {
    39624: {
        client_name: 'CUG Test Template',
        site_url: 'https://hotels.resbeat.com/v6/',
        primary_color: '#215853',
        secondary_color: '##e2ad37',
        logo_url: 'https://static.hotelsforhope.com/portals/child-portals/cug/60831/images/logo.png',
    },
    60831: {
        client_name: 'RESBEAT',
        site_url: 'https://hotels.resbeat.com/v6/',
        primary_color: '#215853',
        secondary_color: '#e2ad37',
        logo_url: 'https://static.hotelsforhope.com/ares/site_configs/resbeat-60831/img/logo.png',
    },
    60278: {
        client_name: 'Ares Child',
        site_url: 'https://events.hotelsforhope.com/v6/',
        primary_color: '#5dc3ac',
        secondary_color: '',
        logo_url: 'https://dev-static.hotelsforhope.com/ares/site_configs/ares_child-60278/img/logo.png',
    },
    60279: {
        client_name: 'Ares Child',
        site_url: 'https://events.hotelsforhope.com/v6/',
        primary_color: '#5dc3ac',
        secondary_color: '',
        logo_url: 'https://dev-static.hotelsforhope.com/ares/site_configs/ares_child-60279/img/logo.png',
    },
    62011: {
        client_name: 'RESBEAT Test',
        site_url: 'https://events.hotelsforhope.com/v6/',
        primary_color: '#215853',
        secondary_color: '#e2ad37',
        logo_url: 'https://dev-static.hotelsforhope.com/ares/site_configs/resbeat_test-62011/img/logo.png',
    },
    60512: {
        client_name: 'Republic of Texas Motorcycle Rally',
        site_url: 'https://events.hotelsforhope.com/v6/',
        primary_color: '#d01c1f',
        secondary_color: '#d01c1f',
        logo_url: 'https://static.hotelsforhope.com/ares/site_configs/rot_rally_21-60512/img/logo.png',
    },
};

const entries = Object.entries(sites);
let site_details;

for (const [key, value] of entries) {
    site_details = {
        site_id: key,
        client_name: value.client_name,
        primary_color: value.primary_color,
        secondary_color: value.secondary_color,
        logo_url: value.logo_url,
        site_url: value.site_url + '?siteId=' + key,
        faq_url: value.site_url + 'faq?siteId=' + key,
        booking_guide_url: value.site_url + 'booking?siteId=' + key,
        rewards_guide_url: value.site_url + 'rewards?siteId=' + key,
    };

    const data = JSON.stringify(site_details);

    fs.writeFileSync(__dirname + '/../../emails/email-configs/' + key + '.json', data);

    console.log('/emails/email-configs/' + key + '.json (' + value.client_name + ') has been generated.');
}

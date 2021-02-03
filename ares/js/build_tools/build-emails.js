/* eslint-disable no-console */
const fs = require('fs');
const handlebars = require('handlebars');
const mjml2html = require('mjml');
// eslint-disable-next-line import/no-extraneous-dependencies
const fsx = require('fs-extra');

const ares = `${process.cwd()}`;
let site_id;
let site_name;

async function buildEmail(context, inputPath, fileName) {
    const conf_template = fs.readFileSync(`${ares}/${inputPath}`, 'utf8');
    const {html} = mjml2html(conf_template);
    const template = handlebars.compile(html.toString());
    const data = template(context);
    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/${fileName}.html`, data, {encoding: 'utf8'}, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

function createFiles(siteObj) {
    const data = JSON.stringify(siteObj);
    fsx.outputFile(`${ares}/site_configs/${site_name}/emails/${site_id}.json`, data);
    if (siteObj.has_custom_emails) {
        const email_dir = fs.readdirSync(`${ares}/site_configs/${site_name}/emails`);
        email_dir.forEach((file) => {
            if (file.includes('.mjml')) {
                buildEmail(siteObj, `/site_configs/${site_name}/emails/${file}`, file.substring(0, file.length - 5));
            }
        });
        if (!email_dir.toString().includes('.mjml')) {
            console.log(
                "\u001b[1;33m\n------------------------------------------------------------------------------------------------------------------\n\nNo custom emails exists, please build the custom email template you wish to compile at the following location:\n\n  site_configs\n         |\n         |- /emails\n               |\n               |- /confirmation\n                     |\n                     |- confirmation.html\n\nOr change the site's config 'has_custom_emails' to false to use the default room booking confirmation email.\n\n------------------------------------------------------------------------------------------------------------------"
            );
        }
    } else {
        buildEmail(siteObj, 'emails/default_templates_mjml/confirmation.mjml', 'confirmation');
    }
}

function extractValue(string, startChar, endChar) {
    const value = string.substring(string.indexOf(startChar), string.indexOf(endChar, string.indexOf(startChar)) + 1);
    return value.slice(value.indexOf(':') + 2, value.indexOf(endChar));
}

function buildSiteObject(siteConfig, siteStyles) {
    let logo = extractValue(siteConfig, 'logo_file_location:', ',').split('img/');
    logo = logo[1].replace(`\``, '');
    const theme_color = extractValue(siteConfig, 'theme:', ',').slice(1, -1) === 'light' ? '#fff' : '#000';

    const site_details = {
        site_id: `${site_id}`,
        primary_color: extractValue(siteStyles, '$primary_color:', ';'),
        secondary_color: extractValue(siteStyles, '$secondary_color:', ';'),
        client_name: extractValue(siteConfig, 'event_name:', ',').slice(1, -1),
        site_url: extractValue(siteConfig, 'logo_outbound_url:', ',').slice(1, -1),
        has_custom_emails: extractValue(siteConfig, 'has_custom_emails:', ',') === 'true',
        logo: `https://dev-static.hotelsforhope.com/ares/site_configs/${site_name}/img/${logo}`,
        theme: theme_color,
        text: theme_color === '#fff' ? '#666' : '#F5FFFA',
    };
    createFiles(site_details);
}

function defineVars(site) {
    site_id = site.slice(-5);
    site_name = site;
    const site_config = fs.readFileSync(`${ares}/site_configs/${site_name}/js/${site_id}-config.js`, 'utf8');
    const site_styles = fs.readFileSync(`${ares}/site_configs/${site_name}/styles/${site_id}.scss`, 'utf8');
    buildSiteObject(site_config, site_styles);
}

module.exports = defineVars;
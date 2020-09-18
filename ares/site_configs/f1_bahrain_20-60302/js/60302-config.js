import Path from '../../../js/path';

const env_path = new Path();

const site_id = 60302;
const directory_name = `f1_bahrain_20-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
        affiliate_id: 17415,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        lodging: {
            event_id: 11111,
            event_name: 'Bahrain Grand Prix',
            event_dates: '11/27/2020 - 11/29/2020',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            percent_off_text: 'off',
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rate',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: true,
        dayjs_date_format: 'D/M/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: true,
        show_currency_select: false,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: `${env_path.path}/html/f1/img/favicon.png`,
        header: {
            logo_file_location: `${env_path.path}/html/f1/img/logo.png`,
            logo_outbound_url: 'https://bookrooms.formula1.com/v6?siteid=45246&theme=standard',
        },
        map_marker_image_url: `${env_path.path}/html/f1/img/favicon.png`,
        theme: 'light',
        google_font_url: '',
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
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
        // new options
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
    };
}

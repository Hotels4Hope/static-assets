import Path from '../../js/path';

const env_path = new Path();

const site_id = 62725;
const directory_name = `resbeat_points_demo-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 16827,
        master_id: 2143,
        site_type: 'cug',
        algolia_app_id: 'pl58QCMXHS4C',
        algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            is_lrg: '',
        },
        cug: {
            is_cug: true,
            show_points: true,
            allow_registration: false,
            percent_off_text: "BEAT 'EM BY",
            show_percent_savings: true,
        },
        exclusive_rate_text: '',
        host_hotel_text: '',
        partner_hotel_text: '',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: true,
        show_property_type: true,
        show_language_select: false,
        show_currency_select: true,
        show_date_prompt: false,
        fav_icon_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        has_custom_styles: true,
        custom_styles_url: `${env_path.path}/site_configs/${directory_name}/${site_id}.css`,
        has_social_sharing: true,
        header: {
            logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.svg`,
            logo_outbound_url: 'https://hotels.resbeat.com',
            background: '#fff',
            logo_flex_position: 'space-between',
            logo_max_width: '230px',
        },
        banner_image_url: '#fff',
        map_marker_image_url: `${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
        theme: 'light',
        background_color: '#fff',
        secondary_background_color: '#f0f0f0',
        primary_color: '#215853',
        secondary_color: '#e2ad37',
        primary_text_color: '#fff',
        secondary_text_color: '#215853',
        border_color: '#215853',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#215853',
        button_hover_border_color: '#215853',
        google_font_url: '',
        google_font_name: 'Avenir',
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
        // new options
        root_page_header_text: 'START YOUR <b>SEARCH</b>',
        root_page_subheader_text: 'RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES',
        is_resbeat_client: true,
        confirmation_email_from: 'RESBEAT',
    };
}
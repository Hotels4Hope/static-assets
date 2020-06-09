import Path from '../../js/path';

// eslint-disable-next-line no-unused-vars
const env_path = new Path();

const site_id = 60265;
// eslint-disable-next-line no-unused-vars
const directory_name = `housing_template-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        affiliate_id: 14808,
        master_id: 920,
        site_type: 'noLRG',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: false,
            event_name: 'Hotels for Hope',
            event_dates: '',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            show_percent_savings: false,
        },
        exclusive_rate_text: '',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_language_select: true,
        show_currency_select: false,
        show_date_prompt: false,
        fav_icon_url: 'https://www.hotelsforhope.com/wp-content/uploads/2017/02/favicon.png',
        has_custom_styles: false,
        custom_styles_url: '',
        has_social_sharing: true,
        header: {
            logo_file_location: 'https://www.hotelsforhope.com/wp-content/uploads/2016/04/logo-purple-small.png',
            logo_outbound_url: 'https://hotelsforhope.com',
            background: '',
            logo_flex_position: 'flex-start',
            logo_max_width: '300px',
        },
        banner_image_url: 'url(https://static.hotelsforhope.com/images/stock_photos/hamburg.jpg)',
        map_marker_image_url: 'https://static.hotelsforhope.com/portals/images/h4h-fav.ico',
        theme: 'light',
        background_color: '#fff',
        primary_color: '#9c6aad',
        secondary_color: '#333',
        primary_text_color: '#fff',
        secondary_text_color: '#9c6aad',
        border_color: '#9c6aad',
        button_hover_background_color: 'transparent',
        button_hover_text_color: '#333',
        button_hover_border_color: '#9c6aad',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
        google_font_name: 'Montserrat',
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
        confirmation_email_from: 'Hotels for Hope',
    };
}
export default function siteConfig() {
    let path = '';

    if (process.env.environment === 'production') {
        path = 'https://static.hotelsforhope.com/ares/site_configs';
    } else if (process.env.environment === 'development') {
        path = 'https://dev-static.hotelsforhope.com/ares/site_configs';
    } else if (process.env.environment === 'local') {
        path = '../../site_configs';
    }

    return {
        site_id: 60871,
        affiliate_id: 17493,
        master_id: 920,
        site_type: 'lodging',
        algolia_app_id: 'plCZXR0GZ7J1',
        algolia_api_key: 'b9763a419845b59957b8cc5c9b13440c',
        currency: 'USD',
        distance_unit: 'useMiles',
        map_size: '12',
        radius: '50',
        lodging: {
            event_id: 42001,
            event_name: 'Pro Football Hall of Fame Marathon',
            event_dates: '05/01/2021 - 05/02/2021',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            show_percent_savings: false,
        },
        exclusive_rate_text: 'Exclusive Rates',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        show_stars: false,
        show_language_select: false,
        show_currency_select: false,
        show_date_prompt: false,
        fav_icon_url: `${path}/${process.env.directory_name}/img/favicon.png`,
        has_custom_styles: false,
        custom_styles_url: '',
        has_social_sharing: true,
        header: {
            logo_file_location: `${path}/${process.env.directory_name}/img/logo.png`,
            logo_outbound_url: 'https://www.hofmarathon.com/',
            background: '#fff',
            logo_flex_position: 'center',
            logo_max_width: '200px',
        },
        banner_image_url: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(${path}/${process.env.directory_name}/img/banner2.jpg) no-repeat center center /cover`,
        map_marker_image_url: `${path}/${process.env.directory_name}/img/favicon.png`,
        theme: 'light',
        primary_color: '#38831F',
        secondary_color: '#D02730',
        primary_text_color: '#fff',
        secondary_text_color: '#38831F',
        border_color: '#38831F',
        button_hover_background_color: '#fff',
        button_hover_text_color: '#38831F',
        button_hover_border_color: '#38831F',
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
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
    };
}
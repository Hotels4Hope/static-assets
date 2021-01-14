import Path from '../../../js/build_tools/path';

// eslint-disable-next-line no-unused-vars
const env_path = new Path();

const site_id = 60265;
// eslint-disable-next-line no-unused-vars
const directory_name = `housing_template-${site_id}`;

export default function siteConfig() {
    return {
        site_id,
        directory_name,
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
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
        },
        cug: {
            is_cug: false,
            show_points: false,
            allow_registration: true,
            percent_off_text: 'off',
            show_percent_savings: false,
        },
        exclusive_rate_text: '',
        host_hotel_text: 'Host Hotel',
        partner_hotel_text: 'Partner Hotel',
        show_tax_inclusive_rates: false,
        dayjs_date_format: 'M/D/YYYY',
        reviews_before_info: true,
        show_stars: false,
        show_property_type: false,
        show_language_select: true,
        show_currency_select: false,
        show_date_prompt: false,
        has_social_sharing: true,
        fav_icon_url: 'https://www.hotelsforhope.com/wp-content/uploads/2017/02/favicon.png',
        header: {
            logo_file_location: 'https://www.hotelsforhope.com/wp-content/uploads/2016/04/logo-purple-small.png',
            logo_outbound_url: 'https://hotelsforhope.com',
        },
        map_marker_image_url: 'https://static.hotelsforhope.com/portals/images/h4h-fav.ico',
        theme: 'light',
        google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
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
        root_page_header_text: 'Start Your Search',
        root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
        is_resbeat_client: false,
        confirmation_email_from: 'Hotels for Hope',
        has_group_booking_banner: false,
        group_booking_form_url: '',
    };
}

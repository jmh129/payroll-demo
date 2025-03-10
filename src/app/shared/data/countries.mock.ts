/**
 * Country data with locale codes
 */
export interface CountryLocale {
  /** Country name */
  name: string;
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** Locale code */
  locale: string;
}

// Complete list of countries with their locale codes
export const COUNTRIES: CountryLocale[] = [
  { name: 'Afghanistan', code: 'AF', locale: 'fa-AF' },
  { name: 'Albania', code: 'AL', locale: 'sq-AL' },
  { name: 'Algeria', code: 'DZ', locale: 'ar-DZ' },
  { name: 'Andorra', code: 'AD', locale: 'ca-AD' },
  { name: 'Angola', code: 'AO', locale: 'pt-AO' },
  { name: 'Antigua and Barbuda', code: 'AG', locale: 'en-AG' },
  { name: 'Argentina', code: 'AR', locale: 'es-AR' },
  { name: 'Armenia', code: 'AM', locale: 'hy-AM' },
  { name: 'Australia', code: 'AU', locale: 'en-AU' },
  { name: 'Austria', code: 'AT', locale: 'de-AT' },
  { name: 'Azerbaijan', code: 'AZ', locale: 'az-AZ' },
  { name: 'Bahamas', code: 'BS', locale: 'en-BS' },
  { name: 'Bahrain', code: 'BH', locale: 'ar-BH' },
  { name: 'Bangladesh', code: 'BD', locale: 'bn-BD' },
  { name: 'Barbados', code: 'BB', locale: 'en-BB' },
  { name: 'Belarus', code: 'BY', locale: 'be-BY' },
  { name: 'Belgium', code: 'BE', locale: 'nl-BE' },
  { name: 'Belize', code: 'BZ', locale: 'en-BZ' },
  { name: 'Benin', code: 'BJ', locale: 'fr-BJ' },
  { name: 'Bhutan', code: 'BT', locale: 'dz-BT' },
  { name: 'Bolivia', code: 'BO', locale: 'es-BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA', locale: 'bs-BA' },
  { name: 'Botswana', code: 'BW', locale: 'en-BW' },
  { name: 'Brazil', code: 'BR', locale: 'pt-BR' },
  { name: 'Brunei', code: 'BN', locale: 'ms-BN' },
  { name: 'Bulgaria', code: 'BG', locale: 'bg-BG' },
  { name: 'Burkina Faso', code: 'BF', locale: 'fr-BF' },
  { name: 'Burundi', code: 'BI', locale: 'fr-BI' },
  { name: 'Cabo Verde', code: 'CV', locale: 'pt-CV' },
  { name: 'Cambodia', code: 'KH', locale: 'km-KH' },
  { name: 'Cameroon', code: 'CM', locale: 'fr-CM' },
  { name: 'Canada', code: 'CA', locale: 'en-CA' },
  { name: 'Central African Republic', code: 'CF', locale: 'fr-CF' },
  { name: 'Chad', code: 'TD', locale: 'fr-TD' },
  { name: 'Chile', code: 'CL', locale: 'es-CL' },
  { name: 'China', code: 'CN', locale: 'zh-CN' },
  { name: 'Colombia', code: 'CO', locale: 'es-CO' },
  { name: 'Comoros', code: 'KM', locale: 'ar-KM' },
  { name: 'Congo (Congo-Brazzaville)', code: 'CG', locale: 'fr-CG' },
  { name: 'Costa Rica', code: 'CR', locale: 'es-CR' },
  { name: 'Croatia', code: 'HR', locale: 'hr-HR' },
  { name: 'Cuba', code: 'CU', locale: 'es-CU' },
  { name: 'Cyprus', code: 'CY', locale: 'el-CY' },
  { name: 'Czech Republic', code: 'CZ', locale: 'cs-CZ' },
  { name: 'Democratic Republic of the Congo', code: 'CD', locale: 'fr-CD' },
  { name: 'Denmark', code: 'DK', locale: 'da-DK' },
  { name: 'Djibouti', code: 'DJ', locale: 'fr-DJ' },
  { name: 'Dominica', code: 'DM', locale: 'en-DM' },
  { name: 'Dominican Republic', code: 'DO', locale: 'es-DO' },
  { name: 'Ecuador', code: 'EC', locale: 'es-EC' },
  { name: 'Egypt', code: 'EG', locale: 'ar-EG' },
  { name: 'El Salvador', code: 'SV', locale: 'es-SV' },
  { name: 'Equatorial Guinea', code: 'GQ', locale: 'es-GQ' },
  { name: 'Eritrea', code: 'ER', locale: 'ti-ER' },
  { name: 'Estonia', code: 'EE', locale: 'et-EE' },
  { name: 'Eswatini (Swaziland)', code: 'SZ', locale: 'en-SZ' },
  { name: 'Ethiopia', code: 'ET', locale: 'am-ET' },
  { name: 'Fiji', code: 'FJ', locale: 'en-FJ' },
  { name: 'Finland', code: 'FI', locale: 'fi-FI' },
  { name: 'France', code: 'FR', locale: 'fr-FR' },
  { name: 'Gabon', code: 'GA', locale: 'fr-GA' },
  { name: 'Gambia', code: 'GM', locale: 'en-GM' },
  { name: 'Georgia', code: 'GE', locale: 'ka-GE' },
  { name: 'Germany', code: 'DE', locale: 'de-DE' },
  { name: 'Ghana', code: 'GH', locale: 'en-GH' },
  { name: 'Greece', code: 'GR', locale: 'el-GR' },
  { name: 'Grenada', code: 'GD', locale: 'en-GD' },
  { name: 'Guatemala', code: 'GT', locale: 'es-GT' },
  { name: 'Guinea', code: 'GN', locale: 'fr-GN' },
  { name: 'Guinea-Bissau', code: 'GW', locale: 'pt-GW' },
  { name: 'Guyana', code: 'GY', locale: 'en-GY' },
  { name: 'Haiti', code: 'HT', locale: 'fr-HT' },
  { name: 'Honduras', code: 'HN', locale: 'es-HN' },
  { name: 'Hungary', code: 'HU', locale: 'hu-HU' },
  { name: 'Iceland', code: 'IS', locale: 'is-IS' },
  { name: 'India', code: 'IN', locale: 'hi-IN' },
  { name: 'Indonesia', code: 'ID', locale: 'id-ID' },
  { name: 'Iran', code: 'IR', locale: 'fa-IR' },
  { name: 'Iraq', code: 'IQ', locale: 'ar-IQ' },
  { name: 'Ireland', code: 'IE', locale: 'en-IE' },
  { name: 'Israel', code: 'IL', locale: 'he-IL' },
  { name: 'Italy', code: 'IT', locale: 'it-IT' },
  { name: 'Jamaica', code: 'JM', locale: 'en-JM' },
  { name: 'Japan', code: 'JP', locale: 'ja-JP' },
  { name: 'Jordan', code: 'JO', locale: 'ar-JO' },
  { name: 'Kazakhstan', code: 'KZ', locale: 'kk-KZ' },
  { name: 'Kenya', code: 'KE', locale: 'sw-KE' },
  { name: 'Kiribati', code: 'KI', locale: 'en-KI' },
  { name: 'Kosovo', code: 'XK', locale: 'sq-XK' },
  { name: 'Kuwait', code: 'KW', locale: 'ar-KW' },
  { name: 'Kyrgyzstan', code: 'KG', locale: 'ky-KG' },
  { name: 'Laos', code: 'LA', locale: 'lo-LA' },
  { name: 'Latvia', code: 'LV', locale: 'lv-LV' },
  { name: 'Lebanon', code: 'LB', locale: 'ar-LB' },
  { name: 'Lesotho', code: 'LS', locale: 'en-LS' },
  { name: 'Liberia', code: 'LR', locale: 'en-LR' },
  { name: 'Libya', code: 'LY', locale: 'ar-LY' },
  { name: 'Liechtenstein', code: 'LI', locale: 'de-LI' },
  { name: 'Lithuania', code: 'LT', locale: 'lt-LT' },
  { name: 'Luxembourg', code: 'LU', locale: 'fr-LU' },
  { name: 'Madagascar', code: 'MG', locale: 'fr-MG' },
  { name: 'Malawi', code: 'MW', locale: 'en-MW' },
  { name: 'Malaysia', code: 'MY', locale: 'ms-MY' },
  { name: 'Maldives', code: 'MV', locale: 'dv-MV' },
  { name: 'Mali', code: 'ML', locale: 'fr-ML' },
  { name: 'Malta', code: 'MT', locale: 'mt-MT' },
  { name: 'Marshall Islands', code: 'MH', locale: 'en-MH' },
  { name: 'Mauritania', code: 'MR', locale: 'ar-MR' },
  { name: 'Mauritius', code: 'MU', locale: 'en-MU' },
  { name: 'Mexico', code: 'MX', locale: 'es-MX' },
  { name: 'Micronesia', code: 'FM', locale: 'en-FM' },
  { name: 'Moldova', code: 'MD', locale: 'ro-MD' },
  { name: 'Monaco', code: 'MC', locale: 'fr-MC' },
  { name: 'Mongolia', code: 'MN', locale: 'mn-MN' },
  { name: 'Montenegro', code: 'ME', locale: 'sr-ME' },
  { name: 'Morocco', code: 'MA', locale: 'ar-MA' },
  { name: 'Mozambique', code: 'MZ', locale: 'pt-MZ' },
  { name: 'Myanmar (Burma)', code: 'MM', locale: 'my-MM' },
  { name: 'Namibia', code: 'NA', locale: 'en-NA' },
  { name: 'Nauru', code: 'NR', locale: 'en-NR' },
  { name: 'Nepal', code: 'NP', locale: 'ne-NP' },
  { name: 'Netherlands', code: 'NL', locale: 'nl-NL' },
  { name: 'New Zealand', code: 'NZ', locale: 'en-NZ' },
  { name: 'Nicaragua', code: 'NI', locale: 'es-NI' },
  { name: 'Niger', code: 'NE', locale: 'fr-NE' },
  { name: 'Nigeria', code: 'NG', locale: 'en-NG' },
  { name: 'North Korea', code: 'KP', locale: 'ko-KP' },
  { name: 'North Macedonia', code: 'MK', locale: 'mk-MK' },
  { name: 'Norway', code: 'NO', locale: 'nb-NO' },
  { name: 'Oman', code: 'OM', locale: 'ar-OM' },
  { name: 'Pakistan', code: 'PK', locale: 'ur-PK' },
  { name: 'Palau', code: 'PW', locale: 'en-PW' },
  { name: 'Palestine', code: 'PS', locale: 'ar-PS' },
  { name: 'Panama', code: 'PA', locale: 'es-PA' },
  { name: 'Papua New Guinea', code: 'PG', locale: 'en-PG' },
  { name: 'Paraguay', code: 'PY', locale: 'es-PY' },
  { name: 'Peru', code: 'PE', locale: 'es-PE' },
  { name: 'Philippines', code: 'PH', locale: 'fil-PH' },
  { name: 'Poland', code: 'PL', locale: 'pl-PL' },
  { name: 'Portugal', code: 'PT', locale: 'pt-PT' },
  { name: 'Qatar', code: 'QA', locale: 'ar-QA' },
  { name: 'Romania', code: 'RO', locale: 'ro-RO' },
  { name: 'Russia', code: 'RU', locale: 'ru-RU' },
  { name: 'Rwanda', code: 'RW', locale: 'rw-RW' },
  { name: 'Saint Kitts and Nevis', code: 'KN', locale: 'en-KN' },
  { name: 'Saint Lucia', code: 'LC', locale: 'en-LC' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', locale: 'en-VC' },
  { name: 'Samoa', code: 'WS', locale: 'sm-WS' },
  { name: 'San Marino', code: 'SM', locale: 'it-SM' },
  { name: 'Sao Tome and Principe', code: 'ST', locale: 'pt-ST' },
  { name: 'Saudi Arabia', code: 'SA', locale: 'ar-SA' },
  { name: 'Senegal', code: 'SN', locale: 'fr-SN' },
  { name: 'Serbia', code: 'RS', locale: 'sr-RS' },
  { name: 'Seychelles', code: 'SC', locale: 'fr-SC' },
  { name: 'Sierra Leone', code: 'SL', locale: 'en-SL' },
  { name: 'Singapore', code: 'SG', locale: 'en-SG' },
  { name: 'Slovakia', code: 'SK', locale: 'sk-SK' },
  { name: 'Slovenia', code: 'SI', locale: 'sl-SI' },
  { name: 'Solomon Islands', code: 'SB', locale: 'en-SB' },
  { name: 'Somalia', code: 'SO', locale: 'so-SO' },
  { name: 'South Africa', code: 'ZA', locale: 'en-ZA' },
  { name: 'South Korea', code: 'KR', locale: 'ko-KR' },
  { name: 'South Sudan', code: 'SS', locale: 'en-SS' },
  { name: 'Spain', code: 'ES', locale: 'es-ES' },
  { name: 'Sri Lanka', code: 'LK', locale: 'si-LK' },
  { name: 'Sudan', code: 'SD', locale: 'ar-SD' },
  { name: 'Suriname', code: 'SR', locale: 'nl-SR' },
  { name: 'Sweden', code: 'SE', locale: 'sv-SE' },
  { name: 'Switzerland', code: 'CH', locale: 'de-CH' },
  { name: 'Syria', code: 'SY', locale: 'ar-SY' },
  { name: 'Taiwan', code: 'TW', locale: 'zh-TW' },
  { name: 'Tajikistan', code: 'TJ', locale: 'tg-TJ' },
  { name: 'Tanzania', code: 'TZ', locale: 'sw-TZ' },
  { name: 'Thailand', code: 'TH', locale: 'th-TH' },
  { name: 'Timor-Leste', code: 'TL', locale: 'pt-TL' },
  { name: 'Togo', code: 'TG', locale: 'fr-TG' },
  { name: 'Tonga', code: 'TO', locale: 'to-TO' },
  { name: 'Trinidad and Tobago', code: 'TT', locale: 'en-TT' },
  { name: 'Tunisia', code: 'TN', locale: 'ar-TN' },
  { name: 'Turkey', code: 'TR', locale: 'tr-TR' },
  { name: 'Turkmenistan', code: 'TM', locale: 'tk-TM' },
  { name: 'Tuvalu', code: 'TV', locale: 'en-TV' },
  { name: 'Uganda', code: 'UG', locale: 'en-UG' },
  { name: 'Ukraine', code: 'UA', locale: 'uk-UA' },
  { name: 'United Arab Emirates', code: 'AE', locale: 'ar-AE' },
  { name: 'United Kingdom', code: 'GB', locale: 'en-GB' },
  { name: 'United States', code: 'US', locale: 'en-US' },
  { name: 'Uruguay', code: 'UY', locale: 'es-UY' },
  { name: 'Uzbekistan', code: 'UZ', locale: 'uz-UZ' },
  { name: 'Vanuatu', code: 'VU', locale: 'bi-VU' },
  { name: 'Vatican City', code: 'VA', locale: 'it-VA' },
  { name: 'Venezuela', code: 'VE', locale: 'es-VE' },
  { name: 'Vietnam', code: 'VN', locale: 'vi-VN' },
  { name: 'Yemen', code: 'YE', locale: 'ar-YE' },
  { name: 'Zambia', code: 'ZM', locale: 'en-ZM' },
  { name: 'Zimbabwe', code: 'ZW', locale: 'en-ZW' },
];

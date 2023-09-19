const residenceOptions = [
  { code: 'AF', residence: 'Afghanistan' },
  { code: 'AL', residence: 'Albania' },
  { code: 'DZ', residence: 'Algeria' },
  { code: 'AS', residence: 'American Samoa' },
  { code: 'AD', residence: 'Andorra' },
  { code: 'AO', residence: 'Angola' },
  { code: 'AI', residence: 'Anguilla' },
  { code: 'AQ', residence: 'Antarctica' },
  { code: 'AG', residence: 'Antigua and Barbuda' },
  { code: 'AR', residence: 'Argentina' },
  { code: 'AM', residence: 'Armenia' },
  { code: 'AW', residence: 'Aruba' },
  { code: 'AU', residence: 'Australia' },
  { code: 'AT', residence: 'Austria' },
  { code: 'AZ', residence: 'Azerbaijan' },
  { code: 'BS', residence: 'Bahamas' },
  { code: 'BH', residence: 'Bahrain' },
  { code: 'BD', residence: 'Bangladesh' },
  { code: 'BB', residence: 'Barbados' },
  { code: 'BY', residence: 'Belarus' },
  { code: 'BE', residence: 'Belgium' },
  { code: 'BZ', residence: 'Belize' },
  { code: 'BJ', residence: 'Benin' },
  { code: 'BM', residence: 'Bermuda' },
  { code: 'BT', residence: 'Bhutan' },
  { code: 'BO', residence: 'Bolivia' },
  { code: 'BQ', residence: 'Bonaire' },
  { code: 'BA', residence: 'Bosnia and Herzegovina' },
  { code: 'BW', residence: 'Botswana' },
  { code: 'BV', residence: 'Bouvet Island' },
  { code: 'BR', residence: 'Brazil' },
  { code: 'IO', residence: 'British Indian Ocean Territory' },
  { code: 'BN', residence: 'Brunei Darussalam' },
  { code: 'BG', residence: 'Bulgaria' },
  { code: 'BF', residence: 'Burkina Faso' },
  { code: 'BI', residence: 'Burundi' },
  { code: 'KH', residence: 'Cambodia' },
  { code: 'CM', residence: 'Cameroon' },
  { code: 'CA', residence: 'Canada' },
  { code: 'CV', residence: 'Cape Verde' },
  { code: 'KY', residence: 'Cayman Islands' },
  { code: 'CF', residence: 'Central African Republic' },
  { code: 'TD', residence: 'Chad' },
  { code: 'CL', residence: 'Chile' },
  { code: 'CN', residence: 'China' },
  { code: 'CX', residence: 'Christmas Island' },
  { code: 'CC', residence: 'Cocos (Keeling) Islands' },
  { code: 'CO', residence: 'Colombia' },
  { code: 'KM', residence: 'Comoros' },
  { code: 'CD', residence: 'Congo' },
  { code: 'CG', residence: 'Congo' },
  { code: 'CK', residence: 'Cook Islands' },
  { code: 'CR', residence: 'Costa Rica' },
  { code: 'HR', residence: 'Croatia' },
  { code: 'CU', residence: 'Cuba' },
  { code: 'CW', residence: 'Curaçao' },
  { code: 'CY', residence: 'Cyprus' },
  { code: 'CZ', residence: 'Czech Republic' },
  { code: 'CI', residence: "Côte D'Ivoire" },
  { code: 'DK', residence: 'Denmark' },
  { code: 'DJ', residence: 'Djibouti' },
  { code: 'DM', residence: 'Dominica' },
  { code: 'DO', residence: 'Dominican Republic' },
  { code: 'EC', residence: 'Ecuador' },
  { code: 'EG', residence: 'Egypt' },
  { code: 'SV', residence: 'El Salvador' },
  { code: 'GQ', residence: 'Equatorial Guinea' },
  { code: 'ER', residence: 'Eritrea' },
  { code: 'EE', residence: 'Estonia' },
  { code: 'ET', residence: 'Ethiopia' },
  { code: 'FK', residence: 'Falkland Islands (Malvinas)' },
  { code: 'FO', residence: 'Faroe Islands' },
  { code: 'FJ', residence: 'Fiji' },
  { code: 'FI', residence: 'Finland' },
  { code: 'FR', residence: 'France' },
  { code: 'GF', residence: 'French Guiana' },
  { code: 'PF', residence: 'French Polynesia' },
  { code: 'TF', residence: 'French Southern Territories' },
  { code: 'GA', residence: 'Gabon' },
  { code: 'GM', residence: 'Gambia' },
  { code: 'GE', residence: 'Georgia' },
  { code: 'DE', residence: 'Germany' },
  { code: 'GH', residence: 'Ghana' },
  { code: 'GI', residence: 'Gibraltar' },
  { code: 'GR', residence: 'Greece' },
  { code: 'GL', residence: 'Greenland' },
  { code: 'GD', residence: 'Grenada' },
  { code: 'GP', residence: 'Guadeloupe' },
  { code: 'GU', residence: 'Guam' },
  { code: 'GT', residence: 'Guatemala' },
  { code: 'GG', residence: 'Guernsey' },
  { code: 'GN', residence: 'Guinea' },
  { code: 'GW', residence: 'Guinea-Bissau' },
  { code: 'GY', residence: 'Guyana' },
  { code: 'HT', residence: 'Haiti' },
  { code: 'HM', residence: 'Heard and McDonald Islands' },
  { code: 'VA', residence: 'Holy See (Vatican City State)' },
  { code: 'HN', residence: 'Honduras' },
  { code: 'HK', residence: 'Hong Kong' },
  { code: 'HU', residence: 'Hungary' },
  { code: 'IS', residence: 'Iceland' },
  { code: 'IN', residence: 'India' },
  { code: 'ID', residence: 'Indonesia' },
  { code: 'IR', residence: 'Iran' },
  { code: 'IQ', residence: 'Iraq' },
  { code: 'IE', residence: 'Ireland' },
  { code: 'IM', residence: 'Isle of Man' },
  { code: 'IL', residence: 'Israel' },
  { code: 'IT', residence: 'Italy' },
  { code: 'JM', residence: 'Jamaica' },
  { code: 'JP', residence: 'Japan' },
  { code: 'JE', residence: 'Jersey' },
  { code: 'JO', residence: 'Jordan' },
  { code: 'KZ', residence: 'Kazakhstan' },
  { code: 'KE', residence: 'Kenya' },
  { code: 'KI', residence: 'Kiribati' },
  { code: 'KP', residence: 'Korea' },
  { code: 'KR', residence: 'Korea' },
  { code: 'KW', residence: 'Kuwait' },
  { code: 'KG', residence: 'Kyrgyzstan' },
  { code: 'LA', residence: "Lao People's Democratic Republic" },
  { code: 'LV', residence: 'Latvia' },
  { code: 'LB', residence: 'Lebanon' },
  { code: 'LS', residence: 'Lesotho' },
  { code: 'LR', residence: 'Liberia' },
  { code: 'LY', residence: 'Libya' },
  { code: 'LI', residence: 'Liechtenstein' },
  { code: 'LT', residence: 'Lithuania' },
  { code: 'LU', residence: 'Luxembourg' },
  { code: 'MO', residence: 'Macao' },
  { code: 'MK', residence: 'Macedonia' },
  { code: 'MG', residence: 'Madagascar' },
  { code: 'MW', residence: 'Malawi' },
  { code: 'MY', residence: 'Malaysia' },
  { code: 'MV', residence: 'Maldives' },
  { code: 'ML', residence: 'Mali' },
  { code: 'MT', residence: 'Malta' },
  { code: 'MH', residence: 'Marshall Islands' },
  { code: 'MQ', residence: 'Martinique' },
  { code: 'MR', residence: 'Mauritania' },
  { code: 'MU', residence: 'Mauritius' },
  { code: 'YT', residence: 'Mayotte' },
  { code: 'MX', residence: 'Mexico' },
  { code: 'FM', residence: 'Micronesia' },
  { code: 'MD', residence: 'Moldova' },
  { code: 'MC', residence: 'Monaco' },
  { code: 'MN', residence: 'Mongolia' },
  { code: 'ME', residence: 'Montenegro' },
  { code: 'MS', residence: 'Montserrat' },
  { code: 'MA', residence: 'Morocco' },
  { code: 'MZ', residence: 'Mozambique' },
  { code: 'MM', residence: 'Myanmar' },
  { code: 'NA', residence: 'Namibia' },
  { code: 'NR', residence: 'Nauru' },
  { code: 'NP', residence: 'Nepal' },
  { code: 'NL', residence: 'Netherlands' },
  { code: 'AN', residence: 'Netherlands Antilles' },
  { code: 'NC', residence: 'New Caledonia' },
  { code: 'NZ', residence: 'New Zealand' },
  { code: 'NI', residence: 'Nicaragua' },
  { code: 'NE', residence: 'Niger' },
  { code: 'NG', residence: 'Nigeria' },
  { code: 'NU', residence: 'Niue' },
  { code: 'NF', residence: 'Norfolk Island' },
  { code: 'MP', residence: 'Northern Mariana Islands' },
  { code: 'NO', residence: 'Norway' },
  { code: 'OM', residence: 'Oman' },
  { code: 'PK', residence: 'Pakistan' },
  { code: 'PW', residence: 'Palau' },
  { code: 'PS', residence: 'Palestine' },
  { code: 'PA', residence: 'Panama' },
  { code: 'PG', residence: 'Papua New Guinea' },
  { code: 'PY', residence: 'Paraguay' },
  { code: 'PE', residence: 'Peru' },
  { code: 'PH', residence: 'Philippines' },
  { code: 'PN', residence: 'Pitcairn' },
  { code: 'PL', residence: 'Poland' },
  { code: 'PT', residence: 'Portugal' },
  { code: 'PR', residence: 'Puerto Rico' },
  { code: 'QA', residence: 'Qatar' },
  { code: 'RO', residence: 'Romania' },
  { code: 'RU', residence: 'Russian Federation' },
  { code: 'RW', residence: 'Rwanda' },
  { code: 'RE', residence: 'Réunion' },
  { code: 'BL', residence: 'Saint Barthélemy' },
  { code: 'SH', residence: 'Saint Helena' },
  { code: 'KN', residence: 'Saint Kitts And Nevis' },
  { code: 'LC', residence: 'Saint Lucia' },
  { code: 'MF', residence: 'Saint Martin' },
  { code: 'PM', residence: 'Saint Pierre And Miquelon' },
  { code: 'VC', residence: 'Saint Vincent And The Grenedines' },
  { code: 'WS', residence: 'Samoa' },
  { code: 'SM', residence: 'San Marino' },
  { code: 'ST', residence: 'Sao Tome and Principe' },
  { code: 'SA', residence: 'Saudi Arabia' },
  { code: 'SN', residence: 'Senegal' },
  { code: 'RS', residence: 'Serbia' },
  { code: 'SC', residence: 'Seychelles' },
  { code: 'SL', residence: 'Sierra Leone' },
  { code: 'SG', residence: 'Singapore' },
  { code: 'SX', residence: 'Sint Maarten' },
  { code: 'SK', residence: 'Slovakia' },
  { code: 'SI', residence: 'Slovenia' },
  { code: 'SB', residence: 'Solomon Islands' },
  { code: 'SO', residence: 'Somalia' },
  { code: 'ZA', residence: 'South Africa' },
  { code: 'GS', residence: 'South Georgia and the South Sandwich Islands' },
  { code: 'SS', residence: 'South Sudan' },
  { code: 'ES', residence: 'Spain' },
  { code: 'LK', residence: 'Sri Lanka' },
  { code: 'SD', residence: 'Sudan' },
  { code: 'SR', residence: 'Suriname' },
  { code: 'SJ', residence: 'Svalbard And Jan Mayen' },
  { code: 'SZ', residence: 'Swaziland' },
  { code: 'SE', residence: 'Sweden' },
  { code: 'CH', residence: 'Switzerland' },
  { code: 'SY', residence: 'Syrian Arab Republic' },
  { code: 'TW', residence: 'Taiwan' },
  { code: 'TJ', residence: 'Tajikistan' },
  { code: 'TZ', residence: 'Tanzania' },
  { code: 'TH', residence: 'Thailand' },
  { code: 'TL', residence: 'Timor-Leste' },
  { code: 'TG', residence: 'Togo' },
  { code: 'TK', residence: 'Tokelau' },
  { code: 'TO', residence: 'Tonga' },
  { code: 'TT', residence: 'Trinidad and Tobago' },
  { code: 'TN', residence: 'Tunisia' },
  { code: 'TR', residence: 'Turkey' },
  { code: 'TM', residence: 'Turkmenistan' },
  { code: 'TC', residence: 'Turks and Caicos Islands' },
  { code: 'TV', residence: 'Tuvalu' },
  { code: 'UG', residence: 'Uganda' },
  { code: 'UA', residence: 'Ukraine' },
  { code: 'AE', residence: 'United Arab Emirates' },
  { code: 'GB', residence: 'United Kingdom' },
  { code: 'US', residence: 'United States' },
  { code: 'UM', residence: 'United States Minor Outlying Islands' },
  { code: 'UY', residence: 'Uruguay' },
  { code: 'UZ', residence: 'Uzbekistan' },
  { code: 'VU', residence: 'Vanuatu' },
  { code: 'VE', residence: 'Venezuela' },
  { code: 'VN', residence: 'Vietnam' },
  { code: 'VI', residence: 'Virgin Islands' },
  { code: 'VG', residence: 'Virgin Islands' },
  { code: 'WF', residence: 'Wallis and Futuna' },
  { code: 'EH', residence: 'Western Sahara' },
  { code: 'YE', residence: 'Yemen' },
  { code: 'ZM', residence: 'Zambia' },
  { code: 'ZW', residence: 'Zimbabwe' },
  { code: 'AX', residence: 'Åland Islands' },
];

export default residenceOptions;
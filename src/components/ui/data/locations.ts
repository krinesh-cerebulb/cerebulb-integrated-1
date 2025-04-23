export type Location = {
  country: string
  flag: string
  address: string
  phone_number: string
}

export type Social = {
  href: string
  label: string
  icon: string
}

export const locations: Location[] = [
  {
    country: 'United States',
    flag: '🇺🇸',
    address: '1122 North St. Jersey City, NJ 07307',
    phone_number: '+1-201-203-4659'
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    address: '17, Polsson Street, Horsely, New South Wales 2530',
    phone_number: '+61 469 864 990'
  },
  {
    country: 'India',
    flag: '🇮🇳',
    address: '307 & 801, Hiranandani Signature, GIFT-SEZ Zone 1, Gift City, Gandhinagar-382355, Gujarat.',
    phone_number: '+91 99099 77295'
  }
] 
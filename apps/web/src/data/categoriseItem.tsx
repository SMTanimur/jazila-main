import {
  CameraIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

export const CategoriesMenuItem = [
  { id: 1, title: 'Computer', icon: <ComputerDesktopIcon className="w-5" /> },
  {
    id: 2,
    title: 'SmartPhone',
    icon: <DevicePhoneMobileIcon className="w-5" />,
  },
  {
    id: 3,
    title: 'Camera',
    icon: <CameraIcon className="w-5" />,
  },
];

export const CategoriesItem = [
  {
    title: 'FREE DELIVERY',
    subtitle: 'On order over $49.86',
    icon: (
      <svg
        className="svg-inline--fa fa-file-alt fa-w-12 w-8 h-8 mr-4 text-yellow-500"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Order protecttion',
    subtitle: 'Secured information',
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="shield-alt"
        className="svg-inline--fa fa-shield-alt fa-w-16  w-8 h-8 mr-4 text-yellow-500"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Promotion gift',
    subtitle: 'Special offers!',
    icon: (
      <svg
        className="svg-inline--fa fa-gift fa-w-16 w-8 h-8 mr-4 text-yellow-500"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Money back',
    subtitle: 'Return over 30 days',
    icon: (
      <svg
        className="svg-inline--fa fa-money-bill-alt fa-w-20 w-10 h-10 mr-4 text-yellow-500"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"
        ></path>
      </svg>
    ),
  },
];

export const TagList = [
  'Catling',
  'Best',
  'Ham',
  'Pili',
  'Hock',
  'Patreon',
  'Pleasure',
  'SamSung',
  'Nama',
  'Donee',
  'Present',
  'Cilium',
  'Densimeter',
  'Oscan',
  'FHD',
  'Nam',
  'Turpin',
  'Patreon',
  'Pleasure',
  'SamSung',
  'Nama',
  'Donee',
];

export const categoriesOptionList = [
  'Accessories',
  'Computer',
  'SmartPhones',
  'Camera',
  'Sport Clothing',
  'Gifts Sport Toys',
  'Home Furniture',
  'Kitchen',
];
export const brandsList = [
  'Apple',
  'Samsung',
  'Huawei',
  'OPPO',
  'Realme',
  'Vivo',
  'Apple',
  'HP',
  'Dell',
  'Acer',
  'Asus',
  'NIKE',
  'Hermes',
  'Gucci',
  'Zara',
  'Philippe',
  'Rolex',
];
export const ColorList = [
  { value: 'red', label: 'red' },
  { value: 'yellow', label: 'yellow' },
  { value: 'green', label: 'green' },
  { value: 'blue', label: 'blue' },
  { value: 'purple', label: 'purple' },
  { value: 'pink', label: 'pink' },
];

export const SizeList = ['XS', 'S', 'M', 'L', 'XL'];

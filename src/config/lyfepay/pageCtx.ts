import { IPageContext } from '../interface';

const productionBaseUrl = 'https://api.lyfepay.io/api';
const sandBoxApiUrl = 'https://sandbox-api.sandbox-lyfepay.io/api';
const cdnUrl = 'https://cdn.lyfepay.io';

export const lyfePayPageCtx: IPageContext = {
  root: '/lyfepay',
  pageTitle: 'lyfecycle PAYMENTS',
  baseUrl: productionBaseUrl,
  sandBoxApiUrl: sandBoxApiUrl,

  // variables
  injectables: {
    brand_name: 'lyfecycle PAYMENTS LLC',
    app_name: 'Lyfepay',
    brand_support_email: 'help@lyfecyclepayments.com',
    brand_website_url: 'https://www.lyfecyclepayments.com',
    brand_streetaddress1: '105 Westpark Dr. Suite 360',
    brand_city: 'Brentwood',
    brand_state: 'Tennessee',
    brand_postalcode: '37027',
    brand_phone: '+1 (615) 933-0910',
    cdnUrl: cdnUrl,
    api_url: {
      production: productionBaseUrl,
      sandbox: sandBoxApiUrl,
    },
  },
  heading: 'dark:text-blue-500 text-indigo-700',
  paragraphs: 'text-gray-700 dark:text-slate-300 prose prose-md leading-6',
  pageBackground: 'dark:bg-gray-900 bg-white',
  codeBox: {
    headPrimaryBackground: 'dark:bg-blue-800 bg-indigo-500',
    headSecondaryBackground: 'dark:bg-blue-600 bg-indigo-700',
    contentBackground: 'bg-gray-800',
  },
  divider: {
    primary: 'dark:divide-blue-600 divide-indigo-100',
    secondary: 'dark:divide-blue-900 divide-indigo-50',
  },
  toolTip: {
    background: 'bg-blue-800',
    pointer: 'border-blue-800',
  },
  border: {
    bottom: 'dark:border-blue-700 border-indigo-200',
  },
  sidePanel: {
    background: 'dark:bg-gray-800 bg-zinc-50',
    entity: {
      color: 'dark:text-blue-500 text-[#B0BF40]',
      border: 'dark:border-blue-600 border-[#B0BF40]',
    },
    service: {
      background: 'dark:bg-blue-700 bg-indigo-600',
    },
  },
  darkModeSwitch: {
    background: 'dark:bg-gray-800 bg-gray-200',
    foreground: 'dark:bg-blue-900 bg-white',
  },
  scrollbar: {
    thumb: 'dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-500',
    track: 'dark:scrollbar-track-gray-900 scrollbar-track-gray-800',
  },
  libraryDropDown: {
    active: {
      background: 'dark:bg-blue-600 bg-indigo-500',
      color: 'dark:text-white text-white',
    },
  },
  methods: {
    post: 'text-green-400',
    get: 'text-sky-400',
    patch: 'text-amber-400',
    delete: 'text-red-400',
    put: 'text-purple-400',
  },
};

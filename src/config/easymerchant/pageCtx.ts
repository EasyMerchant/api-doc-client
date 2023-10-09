import { IPageContext } from '../interface';

const productionBaseUrl = 'https://api.easymerchant.io/api';
const sandBoxApiUrl = 'https://sandbox-api.sandbox-covenantpay.io/api';
const cdnUrl = 'https://cdn.easymerchant.io';

export const easyMerchantPageCtx: IPageContext = {
  root: '/easymerchant',
  pageTitle: 'Easy Merchant',
  baseUrl: productionBaseUrl,
  sandBoxApiUrl,
  //variables
  injectables: {
    brand_name: 'EasyMerchant LLC',
    app_name: 'EasyMerchant',
    brand_support_email: 'support@easymerchant.io',
    brand_website_url: 'https://www.easymerchant.io/',
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
  heading: 'dark:text-[#F39D36] text-[#B0BF40]',
  paragraphs: 'text-gray-700 dark:text-slate-300 prose prose-md leading-6',
  pageBackground: 'dark:bg-[#160C00] bg-white',
  codeBox: {
    headPrimaryBackground: 'dark:bg-[#6F3C00] bg-[#B0BF40]',
    headSecondaryBackground: 'dark:bg-[#975200] bg-[#94A132]',
    contentBackground: 'bg-[#261603]',
  },
  divider: {
    primary: 'dark:divide-[#F39D36] divide-[#B0BF40]',
    secondary: 'dark:divide-[#B27121] divide-[#B0BF40]',
  },
  toolTip: {
    background: 'bg-[#B0BF40]',
    pointer: 'border-[#B0BF40]',
  },
  border: {
    bottom: 'dark:border-[#B27121] border-[#B0BF40]',
  },
  sidePanel: {
    background: 'dark:bg-[#1B0E00] bg-zinc-50',
    entity: {
      color: 'text-[#B0BF40] text-[#B0BF40]',
      border: 'dark:border-[#F39D36] border-[#B0BF40]',
    },
    service: {
      background: 'dark:bg-[#F39D36] bg-[#B0BF40]',
    },
  },
  darkModeSwitch: {
    background: 'dark:bg-[#2d2011] bg-gray-200',
    foreground: 'dark:bg-[#342717] bg-white',
  },
  scrollbar: {
    thumb: 'dark:scrollbar-thumb-[#4a2900] scrollbar-thumb-[#b0bf40]',
    track: 'scrollbar-track-transparent',
  },
  libraryDropDown: {
    active: {
      background: 'bg-[#F39D36]',
      color: 'text-white',
    },
  },
  methods: {
    post: 'text-green-500',
    get: 'text-sky-500',
    patch: 'text-amber-500',
    delete: 'text-red-500',
    put: 'text-purple-500',
  },
};

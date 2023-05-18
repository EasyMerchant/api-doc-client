import { IPageContext } from '../interface';
import { dark } from './dark';
import { light } from './light';

export const easyMerchantPageCtx: IPageContext = {
  root: '/easymerchant',
  pageTitle: 'Easy Merchant',
  baseUrl: 'https://api.easymerchant.io/api/v1',

  sandBoxApiUrl: process?.env?.NEXT_PUBLIC_LYFEPAY_SANDBOX_API_URL || '',

  // dark
  dark,

  //light
  light,

  //variables
  brand_name: 'EasyMerchant LLC',
  app_name: 'EasyMerchant',
  brand_support_email: 'support@easymerchant.io',
  brand_website_url: 'https://www.easymerchant.io/',
  brand_streetaddress1: '105 Westpark Dr. Suite 360',
  brand_city: 'Brentwood',
  brand_state: 'Tennessee',
  brand_postalcode: '37027',
  brand_phone: '+1 (615) 933-0910',
};

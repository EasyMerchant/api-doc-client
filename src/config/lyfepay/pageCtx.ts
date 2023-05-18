import { IPageContext } from '../interface';
import { dark } from './dark';
import { light } from './light';

export const lyfePayPageCtx: IPageContext = {
  root: '/lyfepay',
  pageTitle: 'Lyfecycle Payments',
  baseUrl: 'https://api.lyfepay.io/api/v1',
  sandBoxApiUrl: process?.env?.NEXT_PUBLIC_EASYMERCHANT_SANDBOX_API_URL || '',
  //dark classes
  dark,

  //light classes
  light,

  // variables
  brand_name: 'Lyfecycle PAYMENTS LLC',
  app_name: 'lyfepay.io',
  brand_support_email: 'help@lyfecyclepayments.com',
  brand_website_url: 'https://www.lyfecyclepayments.com',
  brand_streetaddress1: '105 Westpark Dr. Suite 360',
  brand_city: 'Brentwood',
  brand_state: 'Tennessee',
  brand_postalcode: '37027',
  brand_phone: '+1 (615) 933-0910',
};

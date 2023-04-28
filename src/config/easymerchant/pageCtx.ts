import { IPageContext } from '../interface';
import { dark } from './dark';
import { light } from './light';

export const easyMerchantPageCtx: IPageContext = {
  root: '/easymerchant',
  pageTitle: 'Easy Merchant',
  baseUrl: 'https://api.easymerchant.io/api/v1',
  identifier: 'EasyMerchant',
  sandBoxApiUrl: process?.env?.NEXT_PUBLIC_LYFEPAY_SANDBOX_API_URL || '',

  // dark
  dark,

  //light
  light,
};

import { IPageContext } from '../interface';
import { dark } from './dark';
import { light } from './light';

export const lyfePayPageCtx: IPageContext = {
  root: '/lyfepay',
  pageTitle: 'Lyfecycle Payments',
  baseUrl: 'https://api.lyfepay.io/api/v1',
  identifier: 'LyfePay',
  sandBoxApiUrl: process?.env?.NEXT_PUBLIC_EASYMERCHANT_SANDBOX_API_URL || '',
  //dark classes
  dark,

  //light classes
  light,
};

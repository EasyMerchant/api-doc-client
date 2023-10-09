import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const card_transactions: IApiData = {
  name: 'Card Transactions',
  controller: 'card-transactions',
  defaultOpen: true,
  description: [
    'This service allows capturing one time and recurring payments on a credit/debit card.',
  ],
  attributes,
  services,
};

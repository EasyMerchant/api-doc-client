import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const paymentPartners: IApiData = {
  name: 'Payment Partners',
  controller: 'Payment Partners',
  defaultOpen: true,
  description: [
    `This object represents list of payment partners that are associated with your accounts.`,
  ],
  attributes,
  services,
};

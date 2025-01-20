import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const payouts: IApiData = {
  name: 'Payouts',
  controller: 'payouts',
  defaultOpen: true,
  description: [
    `This object represents list of Payouts that are associated with the accounts.`,
  ],
  attributes,
  services,
};

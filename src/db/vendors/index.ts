import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const vendors: IApiData = {
  name: 'Vendors',
  controller: 'vendors',
  defaultOpen: true,
  description: [
    `The Vendor API gives you options to create, update and list tthe vendors.`,
    `Vendor's comminssion can be as percentage or a fixed amount that can be overridden for each transaction. You can add multiple vendors and provide the commission for each vendor in each transaction.`,
  ],
  attributes,
  services,
};

import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const customer: IApiData = {
  name: 'Customers',
  controller: 'customers',
  defaultOpen: true,
  description: [
    `This object represents a customer of your business. Use it to create recurring charges and track payments that belong to the same customer.`,
  ],
  attributes,
  services,
};

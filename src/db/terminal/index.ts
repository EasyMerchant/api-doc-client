import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const terminal: IApiData = {
  name: 'Terminal',
  controller: 'terminal',
  defaultOpen: true,
  description: [
    `A payment terminal allows a merchant to capture required credit and debit card information and to transmit this data to the merchant services provider or bank for authorization and finally, to transfer funds to the merchant.`,
  ],
  attributes,
  services,
};

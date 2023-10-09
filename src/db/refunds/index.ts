import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const refunds: IApiData = {
  name: 'Refunds',
  controller: 'refunds',
  defaultOpen: true,
  description: [
    `Refund objects allow you to refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged.`,
  ],
  attributes,
  services,
};

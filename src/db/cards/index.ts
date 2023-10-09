import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const cards: IApiData = {
  name: 'Cards',
  controller: 'cards',
  defaultOpen: true,
  description: [
    `You can store multiple cards on a customer in order to charge the customer later. You can also store multiple debit cards on a recipient in order to transfer to those cards later.`,
  ],
  attributes,
  services,
};

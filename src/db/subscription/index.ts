import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const subscription: IApiData = {
  name: 'Subscription',
  controller: 'subscription',
  defaultOpen: true,
  description: [
    `The subscription object represents a single attempt to move money into your account.`,
  ],
  attributes,
  services,
};

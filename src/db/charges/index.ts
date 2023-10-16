import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const charges: IApiData = {
  name: 'Charges',
  controller: 'charges',
  defaultOpen: true,
  description: [
    `The Charge object represents a single attempt to move money into your account.`,
  ],
  attributes,
  services,
};

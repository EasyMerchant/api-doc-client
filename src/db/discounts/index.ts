import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const discounts: IApiData = {
  name: 'Discounts',
  controller: 'discounts',
  defaultOpen: true,
  description: [
    `You can save discount by specifying either a name along with an amount or a percentage.`,
  ],
  attributes,
  services,
};

import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const discounts: IApiData = {
  name: 'Discounts',
  controller: 'discounts',
  defaultOpen: true,
  description: [
    `You can store discount with name or percent.`,
  ],
  attributes,
  services,
};

import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const fees: IApiData = {
  name: 'Fees',
  controller: 'fees',
  defaultOpen: true,
  description: [
    `You can store fee with name or percent.`,
  ],
  attributes,
  services,
};

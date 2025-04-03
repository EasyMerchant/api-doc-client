import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const fees: IApiData = {
  name: 'Fees',
  controller: 'fees',
  defaultOpen: true,
  description: [
    `You can save fee by specifying either a name along with an amount or a percentage.`,
  ],
  attributes,
  services,
};

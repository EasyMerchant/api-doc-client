import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const secureAuthentication: IApiData = {
  name: '3D Secure',
  controller: '3D Secure',
  defaultOpen: true,
  description: [
    `3D Secure (3DS) is an authentication protocol that adds an additional security layer to card transactions.`,
  ],
  attributes,
  services,
};

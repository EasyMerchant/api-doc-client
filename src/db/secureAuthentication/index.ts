import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const secureAuthentication: IApiData = {
  name: '3D Secure',
  controller: '3D Secure',
  defaultOpen: true,
  description: [
    `Accept a payment without building additional standalone websites or applications with Payment Links. Share the link as many times as you want on social media, in emails, or on your website.
    Base_URL --> https://stage-api.stage-easymerchant.io/api/v1`,
  ],
  attributes,
  services,
};

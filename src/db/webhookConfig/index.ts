import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const webhookConfig: IApiData = {
  name: 'Webhook Config',
  controller: 'webhook_config',
  defaultOpen: true,
  description: [
    `You can config your receiving webhook url for multiple webhook events.<br /><b>Note:</bThe number of receiving webhook URLss should not be more than 3.`,
  ],
  attributes,
  services,
};

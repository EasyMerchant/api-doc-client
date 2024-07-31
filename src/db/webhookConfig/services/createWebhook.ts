import { IService } from '~/interfaces';

export const createWebhook: IService = {
  id: 'create_webhook',
  name: 'Create',
  description: [
    `You can config your receiving webhook url for each webhook events. 
            <br /><b>Note:</b>The number of URLs in your webhook config should not be more than 3.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/settings/webhook',
    params: [
      {
        required: true,
        attributeId: 'name',
      },
      {
        required: true,
        attributeId: 'url',
      },
      {
        required: true,
        attributeId: 'events',
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
              "message": "Webhook event created successfully!!",
              "data": {
                  "id": "webhook_f931bc68-ea85-4092-925e-0b6b12007c59"
              }
      },
    },
  },
};

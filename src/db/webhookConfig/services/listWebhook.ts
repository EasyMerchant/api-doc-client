import { IService } from '~/interfaces';

export const listWebhook: IService = {
  id: 'list_webhook',
  name: 'List',
  description: [
    `It will list all the webhook configs.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/settings/webhook',

    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Webhook settings retrieved successfully",
        "webhook_settings": [
            {
                "id": "webhook_562b3934-3c3a-4dec-b2ea-346330573d8e",
                "name": "test123",
                "url": "sasaasdasd",
                "description": null,
                "date_created": "2024-07-02 09:23:55",
                "events": [
                    "subscription.created",
                    "charge.captured"
                ]
            },
            {
                "id": "webhook_f931bc68-ea85-4092-925e-0b6b12007c59",
                "name": "test123",
                "url": "https://webhook.lyfepay.io/receiver/webhook",
                "description": null,
                "date_created": "2024-07-29 11:32:33",
                "events": [
                    "subscription.created",
                    "charge.captured"
                ]
            }
        ]
      
      },
    },
  },
};

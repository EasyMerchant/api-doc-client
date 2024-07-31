import { IService } from '~/interfaces';

export const updateWebhook: IService = {
  id: 'update_webhook',
  name: 'Update',
  description: [
    `Update webhook settings api used to update webhook receiver url for each event types under merchants. you have to pass webhook unique identifier (id) for update. you can get this id from list webhook api.you need to include existing events if you want to add or delete events`,
  ],
  endpoint: {
    method: 'put',
    url: '/v1/settings/webhook/:unique_id',
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
      },
    ],
    response: {
      type: 'application/json',
      data: {
       "status": true,
          "message": "Webhook event updated successfully!!",
          "data": {
              "name": "GaneshTest1222222",
              "url": "https://www.google.com",
              "description": "Ganesh",
              "events": [
                  "subscription.created",
                  "charge.captured",
                  "charge.refunded"
              ]
          }
      },
    },
  },
};

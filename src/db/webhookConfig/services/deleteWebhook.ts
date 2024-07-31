import { IService } from '~/interfaces';

export const deleteWebhook: IService = {
  id: 'delete_webhook',
  name: 'Delete',
  description: [
    `Using a unique identifier (id) webhook config can be deleted.`,
  ],
  endpoint: {
    method: 'delete',
    url: '/v1/settings/webhook/:unique_id',

    response: {
      type: 'application/json',
      data: {
       "status": true,
       "message": "Webhook event settings deleted successfully!!"
      },
    },
  },
};

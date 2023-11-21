import { IService } from '~/interfaces';

export const subscriptionCancel: IService = {
  id: 'subscription_cancel',
  name: 'Subscription Cancel',
  description: [
    `This endpoint will Cancel the active subscription for the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/cancel',
    params: [
      {
        required: true,
        attributeId: 'subscription_id'
      }
   ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Subscription Canceled successfully.',
      },
    },
  },
};

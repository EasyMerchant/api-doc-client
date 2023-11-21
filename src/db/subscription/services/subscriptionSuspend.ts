import { IService } from '~/interfaces';

export const subscriptionSuspend: IService = {
  id: 'subscription_suspend',
  name: 'Subscription Suspend',
  description: [
    `This endpoint will Suspend the active subscription for the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/suspend',
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
        message: 'Subscription Suspended successfully.',
      },
    },
  },
};

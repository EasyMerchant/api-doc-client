import { IService } from '~/interfaces';

export const subscriptionRenew: IService = {
  id: 'subscription_renew',
  name: 'Subscription Renew',
  description: [
    `This endpoint will renewal the subscription for the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/renew',
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
        message: 'Subscription is renewed successfully. ',
      },
    },
  },
};

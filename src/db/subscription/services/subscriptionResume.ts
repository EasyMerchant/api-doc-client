import { IService } from '~/interfaces';

export const subscriptionResume: IService = {
  id: 'subscription_resume',
  name: 'Subscription Resume',
  description: [
    `This endpoint will Resume the suspended subscription for the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/resume',
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
        message: 'Subscription Resumed successfully.',
      },
    },
  },
};

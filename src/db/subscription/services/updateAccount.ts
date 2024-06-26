import { IService } from '~/interfaces';

export const updateAccount: IService = {
  id: 'update_account',
  name: 'Update Account',
  description: [
    `This endpoint will update the card for active subscription of the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/update_account',
    params: [
      {
        required: true,
        attributeId: 'subscription_id'
      },
      {
        required: true,
        attributeId: 'account_id'
      },
   ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'ACH Account updated successfully',
      },
    },
  },
};

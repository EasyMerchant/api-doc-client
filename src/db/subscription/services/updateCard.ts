import { IService } from '~/interfaces';

export const updateCard: IService = {
  id: 'update_card',
  name: 'Update Card',
  description: [
    `This endpoint will update the card for active subscription of the customer.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/subscriptions/{subscription_id}/update_card',
    params: [
      {
        required: true,
        attributeId: 'subscription_id'
      },
      {
        required: false,
        attributeId: 'card_id',
      }
   ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Customer card updated successfully.',
      },
    },
  },
};

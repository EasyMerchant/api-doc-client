import { IService } from '~/interfaces';

export const updateCardDetails: IService = {
  id: 'update_card_details',
  name: 'Update Card Details',
  description: [
    `When you create a new credit card, you must specify a customer or recipient on which to create it. This method saves a new card to the database.`,
  ],
  endpoint: {
    method: 'put',
    url: '/v1/cards/{:card_id}',
    params: [
      {
        required: false,
        attributeId: 'cardholder_name',
      },
      {
        required: true,
        attributeId: 'exp_month',
      },
      {
        required: true,
        attributeId: 'exp_year',
      },
      {
        required: true,
        attributeId: 'cvc',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        card_id: 'card_6317a39ec2414',
        message: 'Customer card updated successfully. ',
        card_last_4: '1111',
      },
    },
  },
};

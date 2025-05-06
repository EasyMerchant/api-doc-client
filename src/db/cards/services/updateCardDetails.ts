import { IService } from '~/interfaces';

export const updateCardDetails: IService = {
  id: 'update_card_details',
  name: 'Update Card Details',
  description: [
    `This method updates the credit card holder name, expiry month, expiry year and cvc to the database.`,
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
        last_4: '1111',
      },
    },
  },
};

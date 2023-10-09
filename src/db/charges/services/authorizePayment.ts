import { IService } from '~/interfaces';

export const authorizePayment: IService = {
  id: 'authorize_payent',
  name: 'Authorize Payment',
  description: [
    `Authorization specifically involves contacting the payment system and blocking the required amount of funds against the credit card.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
    params: [
      {
        required: true,
        attributeId: 'charge_amount',
      },
      {
        required: true,
        attributeId: 'charge_name',
      },
      {
        required: true,
        attributeId: 'charge_payment_mode',
      },
      {
        required: true,
        attributeId: 'charge_card_number',
      },
      {
        required: true,
        attributeId: 'charge_exp_month',
      },
      {
        required: true,
        attributeId: 'charge_exp_year',
      },
      {
        required: true,
        attributeId: 'charge_cvc',
      },
      {
        required: true,
        attributeId: 'charge_currency',
      },
      {
        required: false,
        attributeId: 'charge_email',
      },
      {
        required: false,
        attributeId: 'charge_description',
      },
      {
        required: false,
        attributeId: 'charge_save_card',
      },
      {
        required: false,
        attributeId: 'charge_is_default',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        data: 'NA',
        status: 200,
        message: 'Authorized payment successfully. ',
        charge_id: 'cha_6424f71fa67be5160',
      },
    },
  },
};

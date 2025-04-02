import { IService } from '~/interfaces';

export const chargeWithFee: IService = {
  id: 'charge_with_fee',
  name: 'Charge With Fee',
  description: [
    `This service allows charge the payment one time with fee.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
    params: [
      {
        required: false,
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
        required: true,
        attributeId: 'charge_cardholder_name',
      },
      {
        required: true,
        attributeId: 'charge_name',
      },
      {
        required: false,
        attributeId: 'charge_email',
      },
      {
        required: true,
        attributeId: 'username',
      },
      {
        required: true,
        attributeId: 'charge_amount',
      },
      {
        required: true,
        attributeId: 'charge_description',
      },
      {
        required: true,
        attributeId: 'payment_type',
      },
     
      {
        required: true ,
        attributeId: 'customer_id',
      },
      {
        required: false,
        attributeId: 'charge_save_card',
      },
      {
        required: false,
        attributeId: 'charge_is_default',
      },
      {
        required: true ,
        attributeId: 'charge_fees',
      },
      
    ],
    response: {
      type: 'application/json',
      data: {
        data: 'NA',
        status: true,
        message: 'Payment processed successfully. ',
        charge_id: 'cha_6424fb2a14a475160',
      },
    },
  },
};

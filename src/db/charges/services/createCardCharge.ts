import { IService } from '~/interfaces';

export const createCardCharge: IService = {
  id: 'create_card_charge',
  name: 'Create Card Charge',
  description: [
    `This service allows capturing one time and recurring payments through bank account directly.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
    params: [
      {
        required: false,
        attributeId: 'start_date',
      },
      {
        required: false,
        attributeId: 'invoice_num',
      },
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
        required: true,
        attributeId: 'interval',
      },
      {
        required: true,
        attributeId: 'allowed_cycles',
      },
      {
        required: false,
        attributeId: 'metadata',
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
        required: false,
        attributeId: 'order_number',
      },
      {
        required: false ,
        attributeId: 'charge_fees',
      },
      {
        required: false ,
        attributeId: 'charge_discounts',
      }
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

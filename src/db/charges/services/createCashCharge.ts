import { IService } from '~/interfaces';

export const createCashCharge: IService = {
  id: 'create_cash_charge',
  name: 'Create Cash Charge',
  description: [
    `This service allows capturing one time and recurring payments through bank account directly.`,
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
        required: false,
        attributeId: 'charge_payment_method',
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
        attributeId: 'charge_amount',
      },
      {
        required: true,
        attributeId: 'charge_description',
      },
      {
        required: false,
        attributeId: 'metadata',
      },
      {
        required: true,
        attributeId: 'customer_id',
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

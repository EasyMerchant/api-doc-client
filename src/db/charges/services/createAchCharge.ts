import { IService } from '~/interfaces';

export const createAchCharge: IService = {
  id: 'create_ach_charge',
  name: 'Create ACH Charge',
  description: [
    `This service allows capturing one time and recurring payments through bank account directly.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/ach/charges',
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
        required: true,
        attributeId: 'charge_amount',
      },
      {
        required: true,
        attributeId: 'charge_name',
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
        required: true,
        attributeId: 'routing_number',
      },
      {
        required: true,
        attributeId: 'account_number',
      },
      {
        required: true,
        attributeId: 'account_type',
      },
      {
        required: true,
        attributeId: 'entry_class_code',
      },
      {
        required: false,
        attributeId: 'metadata',
      },
      {
        required: true,
        attributeId: 'customer_id',
      },
      {
        required: true,
        attributeId: 'charge_name',
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
        attributeId: 'charge_save_account',
      },
      {
        required: false,
        attributeId: 'charge_is_default',
      },
      {
        required: false,
        attributeId: 'charge_payment_mode',
      },
      {
        required: false,
        attributeId: 'order_number',
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

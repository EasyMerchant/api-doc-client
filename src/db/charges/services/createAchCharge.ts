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

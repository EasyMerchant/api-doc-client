import { IService } from '~/interfaces';

export const createBitcoinCharge: IService = {
  id: 'create_bitcoin_charge',
  name: 'Create Bitcoin Charge',
  description: [
    `The charge endpoint for bitcoin transactions allows you to create a bitcoin charge in satoshi or fiat.`,
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
        attributeId: 'charge_currency',
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

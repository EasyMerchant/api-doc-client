import { IService } from '~/interfaces';

export const findFee: IService = {
  id: 'find_fee',
  name: 'Find Fee',
  description: [
    `It will retrieve the fee object by fee id.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/fees/:fee_id',
    response: {
      type: 'application/json',
      data: {
       "status": true,
    "message": "Fees Retrieved successfully",
    "fees": {
        "id": "fee_6e1045c0-310a-43fe-9609-9ad5c9b6dd9e",
        "name": "Convenient Fee",
        "amount": "10.00",
        "percent": "0.00",
        "created": "2024-06-20 08:56:33",
        "modified": null
    },
    "total": 1
      },
    },
  },
};

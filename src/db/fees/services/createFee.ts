import { IService } from '~/interfaces';

export const createFee: IService = {
  id: 'create_fee',
  name: 'Create Fee',
  description: [
    `When you create a new feo you must sepecify the name & amount or percent.Here name should be unique. This method saves a new fee to the database.`,
    `If you give both amount and percent, amount will be used. If you give neither, an error will be returned.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/fees',
    params: [
      {
        required: true,
        attributeId: 'name',
      },
      {
        required: true,
        attributeId: 'amount',
      },
      {
        required: true,
        attributeId: 'percent',
      },
      
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Fee created successfully. ",
        "data": {
            "id": "fee_b52fb54f-4dee-4bf2-a018-b9fa142675d3"
          }
      },
    },
  },
};

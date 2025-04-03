import { IService } from '~/interfaces';

export const createFee: IService = {
  id: 'create_fee',
  name: 'Create Fee',
  description: [
    `When creating a new fee, you need to specify both a unique name and either an amount or a percentage. Keep in mind that if you provide both the amount and the percentage, the amount will take precedence. If neither is provided, an error will occur.`,
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

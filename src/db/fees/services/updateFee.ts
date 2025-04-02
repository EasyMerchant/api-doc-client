import { IService } from '~/interfaces';

export const updateFee: IService = {
  id: 'update_fee',
  name: 'Update Fee',
  description: [
    `It is to update Fee.Here fee id is required`,
    `You can update fee with amount or percent.`,

  ],  
  endpoint: {
    method: 'put',
    url: '/v1/fees',
    params: [
      {
        required: true,
        attributeId: 'id',
      },
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
        "message": "Fee updated successfully!!",
        "data": {
            "fee_name": "Test232323",
            "fee_amount": "10",
            "id": "fee_0f50e73b-87e5-484f-a14f-6299db2175fe"
        }
      },
    },
  },
};

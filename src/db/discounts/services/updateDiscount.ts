import { IService } from '~/interfaces';

export const updateDiscount: IService = {
  id: 'update_discount',
  name: 'Update discount',
  description: [
    `To update the discount, please provide the discount ID. You can adjust the discount either by specifying an amount or a percentage.`,

  ],  
  endpoint: {
    method: 'put',
    url: '/v1/discounts',
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
    "message": "Discount updated successfully!!",
    "data": {
        "name": "Test Discount update",
        "amount": "10",
        "percent": 0,
        "id": "promo_950cbe5c-691e-401e-8eff-433d13d2bcb9"
    }
      },
    },
  },
};

import { IService } from '~/interfaces';

export const createDiscount: IService = {
  id: 'create_discount',
  name: 'Create discount',
  description: [
    `When you create a new discount you must sepecify the name & amount or percent.Here name should be unique. This method saves a new discount to the database.`,
    `If you give both amount and percent, amount will be used. If you give neither, an error will be returned.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/discounts',
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
        "message": "Discount created successfully!!",
        "data": {
            "id": "promo_950cbe5c-691e-401e-8eff-433d13d2bcb9",
            "coupon_code": "PROMO85456"
        }
      },
    },
  },
};

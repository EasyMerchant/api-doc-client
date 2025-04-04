import { IService } from '~/interfaces';

export const findDiscount: IService = {
  id: 'find_discount',
  name: 'Find Discount',
  description: [
    `It will retrieve the discount object by fee id.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/discounts/:discount_id',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Discounts Retrieved successfully",
        "discounts": {
            "id": "promo_e8bc4361-b9c6-4b85-9cbb-d57656ad4b34",
            "name": "Test1212",
            "amount": "0.00",
            "coupon_code": "PROMO8508",
            "max_redemptions": "19",
            "times_redeemed": null,
            "expires_on": null,
            "percent": "10.00",
            "created": "2024-07-12 02:24:05",
            "modified": null
        },
        "total": 1
      },
    },
  },
};

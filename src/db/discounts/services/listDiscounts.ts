import { IService } from '~/interfaces';

export const listDiscounts: IService = {
  id: 'list_discounts',
  name: 'List discounts',
  description: [
    `It will list all the discounts.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/discounts',

    response: {
      type: 'application/json',
      data: {
        "status": true,
    "message": "Discounts Retrieved successfully",
    "discounts": [
        {
            "id": "promo_e8bc4361-b9c6-4b85-9cbb-d57656ad4b34",
            "name": "Test Discount1",
            "amount": "0.00",
            "coupon_code": "PROMO8508",
            "max_redemptions": "19",
            "times_redeemed": null,
            "expires_on": null,
            "percent": "10.00",
            "created": "2024-07-12 02:24:05",
            "modified": null
        },
        {
            "id": "promo_4080c8ac-5a9f-4ba0-b7ee-2285620e0389",
            "name": "Test Discount2",
            "amount": "0.00",
            "coupon_code": "PROMO69467",
            "max_redemptions": "19",
            "times_redeemed": null,
            "expires_on": null,
            "percent": "10.00",
            "created": "2024-07-12 09:40:40",
            "modified": null
        },
       
    ],
    "total": 2
      },
    },
  },
};

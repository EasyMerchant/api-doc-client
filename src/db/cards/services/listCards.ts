import { IService } from '~/interfaces';

export const listCards: IService = {
  id: 'list_cards',
  name: 'List Cards',
  description: [
    `This method authorizes payment on a credit/debit card transaction. The payment will need to be captured later to settle it.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/card',

    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Credit card details retrieved successfully. ",
        "Cards": [
          {
              "customer_id": "cus_64998b545b1cb5114",
              "card_id": "card_654ddd5a8f25d",
              "cc_last_4": "1112",
              "cc_valid_thru": "07/2029",
              "is_default": "1",
              "card_type": "live_card",
              "card_brand_name": "Visa"
          },
          {
              "customer_id": "cus_6543546eabcfa5114",
              "card_id": "card_654f11b94fb25",
              "cc_last_4": "1112",
              "cc_valid_thru": "07/2029",
              "is_default": "1",
              "card_type": "live_card",
              "card_brand_name": "Visa"
          }
        ],
        "total_rows": 2
      },
    },
  },
};

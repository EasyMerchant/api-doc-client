import { IService } from '~/interfaces';

export const findCard: IService = {
  id: 'find_card',
  name: 'Find Card',
  description: [
    `You can always see the list of cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/card',
    params: [
      {
        required: true,
        attributeId: 'customer_id',
        isQueryParam: true,
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Credit card details retrieved successfully. ",
        "Card": {
          "customer_id": "cus_6545295127abe5114",
          "card_id": "card_654f142e6be56",
          "cc_last_4": "1112",
          "cc_valid_thru": "07/2029",
          "is_default": "1",
          "card_type": "live_card",
          "card_brand_name": "Visa"
        },
        "total_row": 1
      },
    },
  },
};

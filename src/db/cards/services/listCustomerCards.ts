import { IService } from '~/interfaces';

export const listCustomerCards: IService = {
  id: 'list_customer_cards',
  name: 'List Customer Cards',
  description: [
    `You can always see the list of cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/cards/:customer_id/cards',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Credit card details retrieved successfully. ",
        "Cards": [
            {
                "customer_id": "cus_5b69e252f0f955064",
                "card_id": "card_63da58784dc3d",
                "last_4": "4242",
                "cc_valid_thru": "05/2024",
                "is_default": "0",
                "card_type": "live_card",
                "card_brand_name": "Visa"
            },
            {
                "customer_id": "cus_5b69e252f0f955064",
                "card_id": "card_63e3a06c34c14",
                "last_4": "1111",
                "cc_valid_thru": "01/2025",
                "is_default": "0",
                "card_type": "live_card",
                "card_brand_name": "Visa"
            },
        ],
        "total_rows": 2
      },
    },
  },
};

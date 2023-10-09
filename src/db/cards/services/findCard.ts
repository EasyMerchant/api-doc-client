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
        attributeId: 'card_id',
        isQueryParam: true,
      },
    ],
    response: {
      type: 'application/json',
      data: {
        Card: {
          card_id: 'card_6419b2334a7d2',
          card_type: 'live_card',
          cc_last_4: '4242',
          is_default: '1',
          customer_id: 'cus_631394fb135745160',
          cc_valid_thru: '04/2030',
        },
        status: true,
        message: 'Credit card details retrieved successfully. ',
        total_row: 1,
      },
    },
  },
};

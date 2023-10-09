import { IService } from '~/interfaces';

export const listAllCustomers: IService = {
  id: 'list_all_customers',
  name: 'List All Customers',
  description: [
    `Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/customers',

    response: {
      type: 'application/json',
      data: {
        Cards: [
          {
            card_id: 'card_6419b2334a7d2',
            card_type: 'live_card',
            cc_last_4: '4242',
            is_default: '1',
            customer_id: 'cus_631394fb135745160',
            cc_valid_thru: '04/2030',
          },
        ],
        status: true,
        message: 'Credit card details retrieved successfully. ',
        total_rows: 1,
      },
    },
  },
};

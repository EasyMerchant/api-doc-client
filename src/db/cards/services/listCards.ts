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
        total: 1,
        status: true,
        message: 'Customer data is retrieved successfully. ',
        customer: [
          {
            id: '5161',
            name: 'cus1',
            email: 'cus1@test.com',
            active: '1',
            user_id: 'cus_631394fb135745160',
            username: 'cus1',
            client_id: '5160',
          },
        ],
      },
    },
  },
};

import { IService } from '~/interfaces';

export const listAllCharges: IService = {
  id: 'list_all_charges',
  name: 'List All Charges',
  description: [
    `Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/charges',
    response: {
      type: 'application/json',
      data: {
        data: {
          total_count: 1,
          transactions: [
            {
              zip: '37251',
              city: 'city',
              name: 'cus1',
              email: 'cus1@test.com',
              state: 'AL',
              amount: '12.00',
              status: 'Paid',
              balance: '12.00',
              created_by: '5160',
              invoice_id: null,
              customer_id: 'cus_631394fb135745160',
              description: 'test',
              expiry_date: null,
              date_created: '2023-03-21 08:33:39',
              transaction_id: 'cha_6419b2334a6cd5160',
              declined_reason: null,
              subscription_id: '0',
              is_ach_transaction: '0',
            },
          ],
        },
        status: true,
        message: 'Charge data is retrieved successfully. ',
        has_more: false,
      },
    },
  },
};

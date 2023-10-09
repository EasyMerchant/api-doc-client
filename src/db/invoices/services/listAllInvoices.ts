import { IService } from '~/interfaces';

export const listAllInvoices: IService = {
  id: 'list_all_invoices',
  name: 'List All Invoices',
  description: [
    `You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/invoices',
    response: {
      type: 'application/json',
      data: {
        data: {
          invoices: [
            {
              type: 'one_time',
              email: 'cus1@test.com',
              amount: '10.00',
              status: 'draft',
              client_id: '5160',
              date_paid: null,
              created_by: '5160',
              customer_id: 'cus_631394fb135745160',
              description: 'test',
              expiry_date: null,
              invoice_num: '1',
              date_created: '2022-09-03 12:55:07',
              customer_name: 'cus1',
            },
          ],
          total_count: 1,
        },
        status: true,
        company: false,
        message: 'Invoice retrieved successfully. ',
        has_more: false,
      },
    },
  },
};

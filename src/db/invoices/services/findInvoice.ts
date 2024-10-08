import { IService } from '~/interfaces';

export const findInvoice: IService = {
  id: 'find_invoice',
  name: 'Find Invoice',
  description: [
    `It displays the json response related to the invoice id passed in parameter.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/invoices/{invoice_id}',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Invoice retrieved successfully. ',
        data: {
            "expiry_date": null,
            "customer_id": "cus_123124135",
            "reference_number": null,
            "created_by": null,
            "customer_name": "johndoe",
            "email": "johndoe@gmail.com",
            "description": "test description",
            "date_paid": null,
            "invoice_num": "1",
            "status": "draft",
            "amount": "20.00",
            "invoice_id": "inac61b342a4c4194",
            "date_created": "2021-12-10 06:05:56",
            "type": "one_time"
          },
        company: false,
      },
    },
  },
};

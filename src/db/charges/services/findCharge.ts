import { IService } from '~/interfaces';

export const findCharge: IService = {
  id: 'find_charge',
  name: 'Find Charge',
  description: [
    `Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and the server will return the corresponding charge information. The same information is returned when creating or refunding the charge.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/charges/{transaction_id}',
    params: [
      {
        required: true,
        attributeId: 'charge_id',
        isUrlParam: true,
      },
    ],
    response: {
      type: 'application/json',
      data: {
        data: {
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
          subscription_id: '0',
        },
        status: true,
        message: 'Charge data is retrieved successfully. ',
      },
    },
  },
};

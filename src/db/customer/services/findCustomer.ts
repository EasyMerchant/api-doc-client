import { IService } from '~/interfaces';

export const findCustomer: IService = {
  id: 'find_customer',
  name: 'Find Customer',
  description: [`Retrieves a Customer object.`],
  endpoint: {
    method: 'get',
    url: '/v1/customers',
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
        status: true,
        message: 'Customer data is retrieved successfully. ',
        customer: {
          id: '5161',
          zip: '37251',
          city: 'city',
          name: 'cus1',
          email: 'cus1@test.com',
          state: 'AL',
          active: '1',
          address: 'test address',
          country: 'US',
          user_id: 'cus_631394fb135745160',
          username: 'cus1',
          client_id: '5160',
        },
      },
    },
  },
};

import { IService } from '~/interfaces';

export const findCustomer: IService = {
  id: 'find_customer',
  name: 'Find Customer',
  description: [`Retrieves a Customer object.`],
  endpoint: {
    method: 'get',
    url: '/v1/customers/:customer_id',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Customer data is retrieved successfully. ',
        customer: {
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
        },
      },
    },
  },
};

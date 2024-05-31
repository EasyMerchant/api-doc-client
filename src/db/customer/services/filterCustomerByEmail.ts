import { IService } from '~/interfaces';

export const findCustomer: IService = {
  id: 'filter_customer_by_email',
  name: 'Filter customer by email',
  description: [`Filter customer by email. Please encode the email address in the URL query.`],
  endpoint: {
    method: 'get',
    url: '/v1/customers/?filter_by=email&value=jimrising%40lyfecycletech.com',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Customer data is retrieved successfully. ',
        customer: {
          zip: '37251',
          city: 'city',
          name: 'jimrising',
          email: 'jimrising@lyfecycletech.com',
          state: 'AL',
          active: '1',
          address: 'test address',
          country: 'US',
          user_id: 'cus_631394fb135745160',
          username: 'jimrising',
        },
      },
    },
  },
};

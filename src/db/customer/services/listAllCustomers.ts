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
        "status": true,
        "message": "Customer data is retrieved successfully. ",
        "customer": [
          {
            "id": "5577",
            "user_id": "cus_654f1f4d1ad655114",
            "client_id": "5114",
            "username": "BalajiQA830",
            "name": "BalajiQA",
            "email": "qa.balaji.s@gmail.com",
            "active": "1"
          },
          {
            "id": "5554",
            "user_id": "cus_652ab7c755ff15114",
            "client_id": "5114",
            "username": "jimrising123612",
            "name": "Jim",
            "email": "jimrising14@easymerchant.io",
            "active": "1"
          }
        ],
        "total": 2,
      },
    },
  },
};

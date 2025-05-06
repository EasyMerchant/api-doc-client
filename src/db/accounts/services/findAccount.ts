import { IService } from '~/interfaces';

export const findAccount: IService = {
  id: 'find_account',
  name: 'Find Account',
  description: [
    `You can always see the list of cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/ach/account',
    params: [
      {
        required: true,
        attributeId: 'account_id',
        isQueryParam: true,
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Account details have been retrieved successfully",
        "account": [
          {
            "id": "2",
            "client_id": "5114",
            "customer_id": "cus_64998b545b1cb5114",
            "staff_id": null,
            "merchant_account_id": "6467698da98fd",
            "admin_payment_account": "20",
            "payment_customer_id": "sandbox_0",
            "created_by": "5114",
            "account_id": "acc_64bbb70c3dbc4",
            "account_type": "checking",
            "account_number_last_4": "1116",
            "is_default": "0",
            "last_updated_by": null,
            "date_created": "2023-07-22 06:01:32"
          }
        ],
        "total_row": 1
      },
    },
  },
};

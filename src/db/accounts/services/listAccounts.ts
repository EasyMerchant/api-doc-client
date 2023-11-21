import { IService } from '~/interfaces';

export const listAccounts: IService = {
  id: 'list_accounts',
  name: 'List Accounts',
  description: [
    `It will list all the ach accounts.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/ach/account',

    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Account details have been retrieved successfully",
        "accounts": [
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
          },
          {
            "id": "4",
            "client_id": "5114",
            "customer_id": "cus_6499ca7c083e85114",
            "staff_id": null,
            "merchant_account_id": "6467698da98fd",
            "admin_payment_account": "20",
            "payment_customer_id": "sandbox_1",
            "created_by": "5114",
            "account_id": "acc_6504b201c419d",
            "account_type": "checking",
            "account_number_last_4": "1116",
            "is_default": "1",
            "last_updated_by": null,
            "date_created": "2023-09-15 14:35:29"
          }
        ],
        "total_rows": 2
      },
    },
  },
};

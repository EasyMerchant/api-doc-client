import { IService } from '~/interfaces';

export const saveAccount: IService = {
  id: 'save_account',
  name: 'Save Account',
  description: [
    `When you create a new ach account, you must specify a customer or recipient on which to create it. This method saves a new ach account to the database.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/ach/account',
    params: [
      {
        required: true,
        attributeId: 'routing_number',
      },
      {
        required: true,
        attributeId: 'account_number',
      },
      {
        required: true,
        attributeId: 'account_type',
      },
      {
        required: true,
        attributeId: 'business_account',
      },
      {
        required: true,
        attributeId: 'customer_id',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "ACH Account created successfully. ",
        "account_id": "acc_655caf0349f58"
      },
    },
  },
};

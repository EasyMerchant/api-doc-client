import { IService } from '~/interfaces';

export const accountBalance: IService = {
  id: 'account_balance',
  name: 'Account Balance',
  description: [
    `It will show the account balance.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/ach/account/:account_id/balance',
    response: {
      type: 'application/json',
      data: {
          "status": true,
          "message": "Account balance retrived successfully.!",
          "data": {
              "available_balance": 2101.53,
              "currency": "USD"
          }
      },
    },
  },
};

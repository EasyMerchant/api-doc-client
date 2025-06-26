import { IService } from '~/interfaces';

export const transactionStatus: IService = {
  id: 'transaction_status',
  name: 'Fetch Status',
  description: [
    `This endpoint allow you to retrieve a status for previously created 3DS transaction.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/3dsecure/:ref_token/status',
    response: {
      type: 'application/json',
      data: {
          status: true,
          message: "3DS transaction status retrieved successfully. ",
          data: {
            name: "Jim Rising",
            email: "jimrising@lyfepay.com",
            ref_token: "db32abe1-9245-4abc-8bcc-b636af1339ec",
            charge_id: "cha_5064683805cb33655",
            subscription_id: null,
            message: "Payment processed successfully. ",
            transaction_id: "250529085945841556",
            status: "completed",
            created_at: "2025-05-29 01:59:10",
        }
      },
    },
  },
};

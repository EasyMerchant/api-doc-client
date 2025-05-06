import { IService } from '~/interfaces';

export const invoiceTransactions: IService = {
  id: 'list_all_invoice_transactions',
  name: 'Invoice Transactions',
  description: [
    `You can list specific invoice transactions list.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/invoices/{inovice_id}/transactions',
    response: {
      type: 'application/json',
      data: {
        data: {
          total_count: 1,
          transactions: [
            {
              client_name : "love Your support",
              client_email : "raja@test.com",
              client_id : "5064",
              created_by : "love Your support",
              customer_id : "cus_5b69e2dc1418c5064",
              name : "James Rising",
              email : "jim@jimrising.com",
              amount : "4.16",
              balance : "4.16",
              fee_charged : "0.42",
              stripe_fee : "0.12",
              description : "kfbkasbfkhabf",
              status : "Paid",
              city : "Murfreesboro",
              state : "TN",
              zip : "37130",
              date_created : "2024-10-01 06:47:12",
              expiry_date : null,
              payment_type : "Check",
              transaction_id : "cha_66fbe140ae7c25064",
              hpp_id : null,
              declined_reason : null,
              account_number : "6789",
              last_4 : null,
              cheque_notes : "partial payment check"
            },
          ],
        },
        status: true,
        message: 'Charge data is retrieved successfully. ',
        has_more: false,
        invoice_id: "abx-jhv24D-s334a"
      },
    },
  },
};

import { IService } from '~/interfaces';

export const accountTransactions: IService = {
  id: 'list_account_transactions',
  name: 'List Account Transactions',
  description: [
    `It will list the specific account transactions.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/ach/account/:account_id/transactions',
    params: [
      {
        required: false,
        attributeId: 'start_date',
        isQueryParam: true,
      },
      {
        required: false,
        attributeId: 'end_date',
        isQueryParam: true,
      },
      {
        required: false,
        attributeId: 'page',
        isQueryParam: true,
      },
      {
        required: false,
        attributeId: 'per_page',
        isQueryParam: true,
      }
    ],
    response: {
      type: 'application/json',
      data: {
          "status": true,
          "message": "Account transaction history retrived successfully.!",
          "data": {
              "transactions": [
                  {
                      "transaction_id": "txn_Bk4GA2sLsCF46JZxGCCTMP",
                      "amount": "212.99",
                      "type": "debit",
                      "currency": "USD",
                      "date": "06/01/2025",
                      "datetime": null,
                      "description": "Amazon",
                      "raw_description": "Amazon",
                      "pending": false,
                      "enrichment": {
                          "category": {
                              "value": "shopping",
                              "confidence": 99
                          },
                          "subcategory": {
                              "value": "general_online_shopping",
                              "confidence": 99
                          },
                          "merchant": {
                              "id": "4142b869-8686-4dae-a7c7-149af8246fa8",
                              "name": "lyfePAY",
                              "logo": "https://admin.lyfepay.io/assets/images/easymerchant.png",
                              "confidence": 100
                          }
                      }
                  },
                  {
                      "transaction_id": "txn_N698MJ4roLC6qBuRD3RmoH",
                      "amount": "106.25",
                      "type": "debit",
                      "currency": "USD",
                      "date": "05/29/2025",
                      "datetime": null,
                      "description": "Amazon",
                      "raw_description": "Amazon",
                      "pending": false,
                      "enrichment": {
                          "category": {
                              "value": "shopping",
                              "confidence": 99
                          },
                          "subcategory": {
                              "value": "general_online_shopping",
                              "confidence": 99
                          },
                          "merchant": {
                              "id": "4142b869-8686-4dae-a7c7-149af8246fa8",
                              "name": "lyfePAY",
                              "logo": "https://admin.lyfepay.io/assets/images/easymerchant.png",
                              "confidence": 100
                          }
                      }
                  }
              ],
              "pagination": {
                  "currentPage": 1,
                  "totalPages": 1,
                  "totalItems": 2,
                  "pageSize": 10
              }
          }
      },
    },
  },
};

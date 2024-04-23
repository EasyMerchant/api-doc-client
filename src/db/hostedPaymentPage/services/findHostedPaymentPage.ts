import { IService } from '~/interfaces';

export const findHostedPaymentPage: IService = {
  id: 'find_HostedPaymentPage',
  name: 'Find Hosted Payment Page By ID',
  description: [
    `Fetches hosted payment page by unique id.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/hostedpages/:unique_id',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Hosted payment page retrieved successfully.!",
        "data": {
          "unique_id": "7bdb11ba61a0d05b",
          "name": "Test account 7",
          "payment_method": "Card",
          "amount_type": "Fixed",
          "fixed_amount": "10",
          "recurring_cycle": "-",
          "no_of_cycle": 0,
          "payment_type": "One Time",
          "onetime_payment": 0,
          "customer_notify": 1,
          "status": "Active",
          "transactions": {
              "total": 1,
              "has_more": false,
              "data": [
                  {
                      "transaction_id": "cha_6626d6bce0dc65064",
                      "name": "Raja  Kannan",
                      "email": "dev@test.com",
                      "customer_id": null,
                      "invoice_id": null,
                      "amount": "10.00",
                      "balance": "10.00",
                      "subscription_id": "0",
                      "description": "$10.00 x 1 Quantity. HPP Payment",
                      "status": "Paid",
                      "declined_reason": null,
                      "city": "Coimbatore",
                      "state": "CA",
                      "zip": "37251",
                      "payment_type": "Card",
                      "is_ach_transaction": "0",
                      "payment_partner": "mer_clt_1",
                      "account_number": null,
                      "cc_last_4": "4242",
                      "cheque_notes": null,
                      "date_created": "2024-04-22 16:29:34"
                  }
              ]
          },
          "single_use": 0,
          "link": "lys.sandbox-lyfepay.io/payment/charge/7bdb11ba61a0d05b",
          "metadata": {
              "age": "30",
              "name": "Raja",
          }
        },
      }
    },
  },
};

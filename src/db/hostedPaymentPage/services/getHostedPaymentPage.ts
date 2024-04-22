import { IService } from '~/interfaces';

export const getHostedPaymentPage: IService = {
  id: 'get_HostedPaymentPage',
  name: 'List Hosted Payment Page',
  description: [
    `It is to retrieve all the hosted payment pages.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/hostedpages?hostedpage_search=event',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Hosted payment page retrieved successfully.!",
        "data": {
          "total": 2,
          "rows": [
            {
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
                            "created_by": "5064",
                            "date_created": "2024-04-22 16:29:34"
                        }
                    ]
                },
                "single_use": 0,
                "link": "test.easymerchant.test/payment/charge/7bdb11ba61a0d05b",
                "metadata": {
                    "age": "23",
                    "name": "Raja",
                    "primaryPhone": "9629105480"
                }
            },
            {
                "unique_id": "0579dc1e6b7f2f00",
                "name": "Test account 6",
                "payment_method": "Card",
                "amount_type": "Fixed",
                "fixed_amount": "10",
                "recurring_cycle": "-",
                "no_of_cycle": 0,
                "payment_type": "One Time",
                "onetime_payment": 0,
                "customer_notify": 1,
                "status": "Active",
                "transactions": [],
                "single_use": 0,
                "link": "test.easymerchant.test/payment/charge/0579dc1e6b7f2f00",
                "metadata": null
            },
          ]
        },
        "has_more": true
      },
    },
  },
};

import { IService } from '~/interfaces';

export const listSubscriptionTransactions: IService = {
  id: 'list_subscriptions_transactions',
  name: 'List Subscriptions Transactions',
  description: [
    `It lists all Subscriptions.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/subscriptions/{subscription_id}/transactions',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Subscription transactions retrieved successfully",
        "Transactions": [
          {
            "id": "17519",
            "invoice_id": null,
            "created_by": "50689",
            "customer_id": "cus_66e81528ee42a50689",
            "name": "Balaji LyfeCycle",
            "email": "balaji@lyfecycletech.com",
            "amount": "23.99",
            "balance": "23.99",
            "subscription_id": "2161",
            "description": "AAD",
            "status": "Paid",
            "city": "Chennai",
            "state": "TN",
            "zip": "37251",
            "date_created": "2024-09-16 23:23:14",
            "expiry_date": null,
            "payment_type": "Card",
            "unique_id": "cha_66e90431c13e550689",
            "is_ach_transaction": "0",
            "merchant_account_id": "sb_66e80fd00cb94",
            "declined_reason": null,
            "account_number": "",
            "cc_last_4": "0055",
            "cheque_notes": null
          },
          {
            "id": "17511",
            "invoice_id": null,
            "created_by": "50689",
            "customer_id": "cus_66e81528ee42a50689",
            "name": "Balaji LyfeCycle",
            "email": "balaji@lyfecycletech.com",
            "amount": "23.99",
            "balance": "23.99",
            "subscription_id": "2161",
            "description": "AAD",
            "status": "Paid",
            "city": "Chennai",
            "state": "TN",
            "zip": "37251",
            "date_created": "2024-09-16 23:08:30",
            "expiry_date": null,
            "payment_type": "Card",
            "unique_id": "cha_66e900bd9a5ee50689",
            "is_ach_transaction": "0",
            "merchant_account_id": "sb_66e80fd00cb94",
            "declined_reason": null,
            "account_number": "",
            "cc_last_4": "0055",
            "cheque_notes": null
          },
          {
            "id": "17510",
            "invoice_id": null,
            "created_by": "50689",
            "customer_id": "cus_66e81528ee42a50689",
            "name": "Balaji LyfeCycle",
            "email": "balaji@lyfecycletech.com",
            "amount": "23.99",
            "balance": "23.99",
            "subscription_id": "2161",
            "description": "AAD",
            "status": "Paid",
            "city": "Chennai",
            "state": "TN",
            "zip": "37251",
            "date_created": "2024-09-16 11:10:02",
            "expiry_date": null,
            "payment_type": "Card",
            "unique_id": "cha_66e8585a0c0d250689",
            "is_ach_transaction": "0",
            "merchant_account_id": "sb_66e80fd00cb94",
            "declined_reason": null,
            "account_number": "",
            "cc_last_4": "0055",
            "cheque_notes": null
          },
          {
            "id": "17509",
            "invoice_id": null,
            "created_by": "50689",
            "customer_id": "cus_66e81528ee42a50689",
            "name": "Balaji LyfeCycle",
            "email": "balaji@lyfecycletech.com",
            "amount": "23.99",
            "balance": "23.99",
            "subscription_id": "2161",
            "description": "AAD",
            "status": "Paid",
            "city": "Chennai",
            "state": "TN",
            "zip": "37251",
            "date_created": "2024-09-16 10:52:24",
            "expiry_date": null,
            "payment_type": "Card",
            "unique_id": "cha_66e854375091050689",
            "is_ach_transaction": "0",
            "merchant_account_id": "sb_66e80fd00cb94",
            "declined_reason": null,
            "account_number": "",
            "cc_last_4": "0055",
            "cheque_notes": null
          }
        ]
      }
    },
  },
}


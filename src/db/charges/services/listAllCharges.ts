import { IService } from '~/interfaces';

export const listAllCharges: IService = {
  id: 'list_all_charges',
  name: 'List All Charges',
  description: [
    `Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first. List of charges will be irrespective of Card, ACH, Cash, & Check and Authorize card only or Authorize and Capture Payment. It can return the charges based on the filter applied. The filter can be applied for type of charges like invoice, crypto, Virtual Terminal and status of the charge (Paid, Paid Unsettled, Refund, Partial Refund, Uncaptured, Declined, Canceled, Void), Customer name, Customer email, Date Created & metadata.
    `,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/charges',
    response: {
      type: 'application/json',
      data: {
          "status": true,
          "message": "Charge data is retrieved successfully. ",
          "has_more": true,
          "data": {
            "total_count": 2,
            "transactions": [
              {
                "invoice_id": null,
                "customer_id": null,
                "name": "Jim Rising",
                "email": "raja@easymerchant.io",
                "amount": "49.00",
                "balance": "49.00",
                "subscription_id": "0",
                "description": "test",
                "status": "Paid",
                "city": null,
                "state": null,
                "zip": null,
                "date_created": "2023-05-23 11:41:35",
                "expiry_date": null,
                "payment_type": null,
                "transaction_id": "cha_646cecbf0988e5114",
                "hpp_id": "7bdb11ba61a0d05b",
                "is_ach_transaction": "0",
                "merchant_account_id": "6467698da98fd",
                "declined_reason": null,
                "account_number": null,
                "cc_last_4": "1111",
                "cheque_notes": null,
                "metadata": null
              },
              {
                "invoice_id": null,
                "customer_id": null,
                "name": "Jim Rising",
                "email": "raja@easymerchant.io",
                "amount": "44.00",
                "balance": "44.00",
                "subscription_id": "0",
                "description": "test",
                "status": "Paid",
                "city": null,
                "state": null,
                "zip": null,
                "date_created": "2023-05-23 11:45:40",
                "expiry_date": null,
                "payment_type": null,
                "transaction_id": "cha_646cedb410cc15114",
                "hpp_id": null,
                "is_ach_transaction": "0",
                "merchant_account_id": "6467698da98fd",
                "declined_reason": null,
                "account_number": null,
                "cc_last_4": "1111",
                "cheque_notes": null,
                "metadata": {
                  "order_id": 123,
                  "customer_id": 561
                }
              }
            ]
          },
        },
      },
    },
  };

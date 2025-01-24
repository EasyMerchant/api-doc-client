import { IService } from '~/interfaces';

export const listPayouts: IService = {
  id: 'list_payouts',
  name: 'List Payouts',
  description: [
    `Returns list of Payouts associated with your account`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/payouts/',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payout transactions retrieved successfully",
        "has_more": false,
        "per_page": 10,
        "data": {
            "total_count": 5,
            "payout": [
                {
                    "payout_id": "c5749d60-c6dc-4bfc-88de-ce5be6f7e6ee",
                    "created_by": "5064",
                    "customer_id": "cus_506467851a16e0c43",
                    "name": "customerpayout",
                    "email": "payout_cus@test.com",
                    "amount": "5.00",
                    "balance": "5.00",
                    "description": "Test",
                    "status": "Canceled",
                    "city": "Tennessee",
                    "state": "AL",
                    "zip": "123456",
                    "date_created": "2025-01-13 07:50:38",
                    "payment_type": "ACH",
                    "merchant_account_id": "testcovenantpay",
                    "cancel_reason": "Test reason for cancel",
                    "declined_reason": null,
                    "last_4": "0905"
                }
            ]
        }
    },
    },
  },
};

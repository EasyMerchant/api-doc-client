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
                    "id": "11",
                    "created_by": null,
                    "customer_id": null,
                    "name": "Balaji Payout-Ledger1",
                    "email": "raj@test.com",
                    "amount": "21.00",
                    "balance": "21.00",
                    "description": "new",
                    "status": "Paid Unsettled",
                    "city": "Coimbatore",
                    "state": "TN",
                    "zip": "642203",
                    "date_created": "2024-09-12 05:26:36",
                    "payment_type": "ACH",
                    "payout_id": "1b85a68e-c0a3-4890-b46e-0a38b7ae4af7",
                    "is_ach_transaction": "1",
                    "merchant_account_id": "testcovenantpay",
                    "declined_reason": null,
                    "account_number": "4761530001111117",
                    "cc_last_4": null,
                    "metadata": null
                }
            ]
        }
    },
    },
  },
};

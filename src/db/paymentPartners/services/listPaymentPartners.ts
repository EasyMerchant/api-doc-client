import { IService } from '~/interfaces';

export const listPaymentPartners: IService = {
  id: 'list_payment_partners',
  name: 'List payment partners',
  description: [
    `Returns list of payment partners associated with your account`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/partners',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Partners List",
        "partners": [
            {
                "partner_id": "62753234c7bde",
                "name": "my card partner",
                "is_active": true,
                "supports_card": true,
                "supports_ach": false,
                "supports_crypto": false,
                "is_default_card_processor": true,
                "is_default_ach_processor": false
            },
            {
                "partner_id": "6272ad1be5cde",
                "name": "Test ACH partner",
                "is_active": true,
                "supports_card": false,
                "supports_ach": true,
                "supports_crypto": false,
                "is_default_card_processor": false,
                "is_default_ach_processor": true
            },
        ]
      },
    },
  },
};

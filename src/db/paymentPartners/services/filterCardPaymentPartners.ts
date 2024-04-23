import { IService } from '~/interfaces';

export const filterCardPaymentPartners: IService = {
  id: 'card_payment_partners',
  name: 'Filter Card Payment Partners',
  description: [
    `Returns filtered list of credit card payment partners associated with your account`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/partners/card',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Partners List",
        "partners": [
            {
                "partner_id": "62753534c7bde",
                "name": "my card partner",
                "is_active": true,
                "supports_card": true,
                "supports_ach": false,
                "supports_crypto": false,
                "is_default_card_processor": true,
                "is_default_ach_processor": false
            },
            {
                "partner_id": "6272ah1be5cde",
                "name": "Test card partner",
                "is_active": true,
                "supports_card": true,
                "supports_ach": false,
                "supports_crypto": false,
                "is_default_card_processor": false,
                "is_default_ach_processor": false
            },
        ]
      },
    },
  },
};

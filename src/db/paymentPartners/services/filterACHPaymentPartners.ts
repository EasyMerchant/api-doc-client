import { IService } from '~/interfaces';

export const filterACHPaymentPartners: IService = {
  id: 'ach_payment_partners',
  name: 'Filter ACH Payment Partners',
  description: [
    `Returns filtered list of credit ach payment partners associated with your account`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/partners/ach',
    params: [],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Partners List",
        "partners": [
            {
                "partner_id": "62753534c7bde",
                "name": "my ACH partner",
                "is_active": true,
                "supports_card": false,
                "supports_ach": true,
                "supports_crypto": false,
                "is_default_card_processor": false,
                "is_default_ach_processor": true
            },
            {
                "partner_id": "6272ah1be5cde",
                "name": "Test card partner",
                "is_active": true,
                "supports_card": false,
                "supports_ach": true,
                "supports_crypto": false,
                "is_default_card_processor": false,
                "is_default_ach_processor": false
            },
        ]
      },
    },
  },
};

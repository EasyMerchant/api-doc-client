import { IService } from '~/interfaces';

export const getHostedPaymentPage: IService = {
  id: 'get_HostedPaymentPage',
  name: 'Get Hosted Payment Page',
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
          "total": 36,
          "rows": [
            {
              "unique_id": "100330c8533f1324",
              "name": "hpp_test_1",
              "payment_method": "Card, ACH",
              "amount_type": "Fixed",
              "fixed_amount": "2.34",
              "recurring_cycle": "Fixed",
              "no_of_cycle": "2",
              "customer_notify": "Enabled",
              "status": "Active"
            },
		        {
              "unique_id": "da673fde834d8b77",
              "name": "New year eve - both",
              "payment_method": "Card, ACH",
              "amount_type": "Fixed",
              "fixed_amount": "22.44",
              "recurring_cycle": "Fixed",
              "no_of_cycle": "2",
              "customer_notify": "Enabled",
              "status": "Active"
            }
          ]
        },
        "has_more": true
      },
    },
  },
};

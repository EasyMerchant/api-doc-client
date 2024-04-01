import { IService } from '~/interfaces';

export const activateHostedPaymentPage: IService = {
  id: 'activate_hostedPaymentPage',
  name: 'Activate Hosted Payment Page',
  description: [
    `Use below api to activate the payment page which is expired. The payment page will be expire if the 'onetime_payment' is set to 1. Once the payment is done by the customer, then the payment page will be expired and can not make payment against the page until it is activated.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/hostedpages/activate',
    params: [
      {
        required: true,
        attributeId: 'unique_id'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": false,
        "message": "Onetime payment page activated already.!"
      },
    },
  },
};

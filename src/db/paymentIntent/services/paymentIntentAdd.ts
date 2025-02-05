import { IService } from '~/interfaces';

export const paymentIntentAdd: IService = {
  id: 'paymentIntent_Add',
  name: 'Payment Intent Create',
  description: [
    `A PaymentIntent guides you through the process of collecting a payment from your customer. We recommend that you create exactly one PaymentIntent for each order or customer session in your system.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
    params: [
      {
        required: true,
        attributeId: 'amount'
      },
      {
        required: false,
        attributeId: 'currency'
      },
      {
        required: true,
        attributeId: 'payment_type'
      },
      {
        required: false,
        attributeId: 'vendorInfo'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payment Intent is added.",
        "payment_intent": "pi_65b48b603d78c"
      },
    },
  },
};

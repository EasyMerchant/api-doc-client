import { IService } from '~/interfaces';

export const paymentIntentAdd: IService = {
  id: 'paymentIntent_Add',
  name: 'Payment Intent Add',
  description: [
    `Payment Intent should be created first to generate ‘payment_intent’ as a response to create a charge. Amount and Payment type is required field to generate (payment_intent). Payment_type can be either ‘card’ or ‘ach’. Based on the payment type added in the payment intent, the charge should be created in the same type.`,
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

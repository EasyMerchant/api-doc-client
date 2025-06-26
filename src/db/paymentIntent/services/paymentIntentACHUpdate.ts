import { IService } from '~/interfaces';

export const paymentIntentACHUpdate: IService = {
  id: 'paymentIntent_ACHUpdate',
  name: 'Payment Intent ACH Update',
  description: [
    `Payment Intent updates allow you to modify ACH details after the initial creation but before completion. This is essential for handling dynamic accountNumber, routingNumber and other real-time changes during the payment flow.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/ach/account',
    params: [
      {
        required: true,
        attributeId: 'payment_intent'
      },
      {
        required: true,
        attributeId: 'accountType'
      },
      {
        required: true,
        attributeId: 'routingNumber'
      },
      {
        required: true,
        attributeId: 'accountNumber'
      },
      {
        required: false,
        attributeId: 'account_validation'
      },
      {
        required: true,
        attributeId: 'customer_id'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "ACH Account created successfully. ",
        "payment_intent": "pi_65b4ac64b457c",
        "last_4": "1117"
      },
    },
  },
};

import { IService } from '~/interfaces';

export const paymentIntentACHUpdate: IService = {
  id: 'paymentIntent_ACHUpdate',
  name: 'Payment Intent ACH Update',
  description: [
    `Depending on which payment_type ‘ach’ is used in the paymentintent add, the same payment-type needs to be updated, you might need to confirm the PaymentIntent again. For example, updating the payment_method always requires you to confirm the PaymentIntent again. If you use different payment types used in the particular payment intent it will throw an error message as “Invalid Payment Intent for ACH.!”`,
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
        attributeId: 'customerId'
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

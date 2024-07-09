import { IService } from '~/interfaces';

export const paymentIntentCardUpdate: IService = {
  id: 'paymentIntent_CardUpdate',
  name: 'Payment Intent Card Update',
  description: [
    `Depending on which payment_type ‘card’ is used in the paymentintent add, the same payment-type needs to be updated, you might need to confirm the PaymentIntent again. For example, updating the payment_method always requires you to confirm the PaymentIntent again. If you use different payment types used in the particular payment intent it will throw an error message as “Invalid Payment Intent for card.!”`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/card',
    params: [
      {
        required: true,
        attributeId: 'payment_intent'
      },
      {
        required: true,
        attributeId: 'card_number'
      },
      {
        required: true,
        attributeId: 'cardholder_name'
      },
      {
        required: true,
        attributeId: 'exp_month'
      },
      {
        required: false,
        attributeId: 'exp_year'
      },
      {
        required: true,
        attributeId: 'cvc'
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
        "message": "Payment Intent attached successfully.!",
        "payment_intent": "pi_65b4c647a545c",
        "last_4": "1111"
      },
    },
  },
};

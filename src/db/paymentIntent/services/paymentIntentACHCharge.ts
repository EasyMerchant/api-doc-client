import { IService } from '~/interfaces';

export const paymentIntentACHCharge: IService = {
  id: 'paymentIntent_ACHCharge',
  name: 'Payment Intent ACH Charge',
  description: [
    `Once after the Payment Intent ACH update is done for the payment intent added with payment type is ‘ach’, charge can be made for the payment intent. If we use different payment types in the payment intent then it will throw an error message ‘Invalid Payment Intent for ACH.!’`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/ach/account',
    params: [
      {
        required: true,
        attributeId: 'payment_mode'
      },
      {
        required: true,
        attributeId: 'currency'
      },
      {
        required: true,
        attributeId: 'customer_id'
      },
      {
        required: true,
        attributeId: 'payment_intent'
      },
      {
        required: true,
        attributeId: 'description'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payment processed successfully. ",
        "account_id": "pi_65a67aa66975f",
        "charge_id": "cha_65a67ad7446835064",
        "data": "NA"
      },
    },
  },
};

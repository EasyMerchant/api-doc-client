import { IService } from '~/interfaces';

export const paymentIntentCardCharge: IService = {
  id: 'paymentIntentCardCharge',
  name: 'Payment Intent Card Charge',
  description: [
    `Once after the Payment Intent CARD update is done for the payment intent added with payment type is ‘ach’, charge can be made for the payment intent. If we use different payment types in the payment intent then it will throw an error message ‘Invalid Payment Intent for CARD.!’`
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
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
        attributeId: 'customer'
      },
      {
        required: true,
        attributeId: 'payment_intent'
      },
      {
        required: false,
        attributeId: 'amount'
      },
      {
        required: true,
        attributeId: 'description'
      },
      {
        required: true,
        attributeId: 'levelIndicator'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payment processed successfully. ",
        "charge_id": "cha_65a6782584fa35064",
        "data": "NA",
        "card_id": "pi_65a6771c67112",
        "card_last_4": "1111"

      },
    },
  },
};

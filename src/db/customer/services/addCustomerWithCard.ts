import { IService } from '~/interfaces';

export const addCustomerWithCard: IService = {
  id: 'add_customer_WithCard',
  name: 'Add Customer with Card',
  description: [`It is to add Customer along with the Card to Merchant.`],
  endpoint: {
    method: 'POST',
    url: '/v1/customers',
    params: [
      {
        required: true,
        attributeId: 'username'
      },
      {
        required: true,
        attributeId: 'email'
      },
      {
        required: true,
        attributeId: 'name'
      },
      {
        required: true,
        attributeId: 'address'
      },
      {
        required: true,
        attributeId: 'city'
      },
      {
        required: true,
        attributeId: 'state'
      },
      {
        required: true,
        attributeId: 'zip'
      },
      {
        required: true,
        attributeId: 'country'
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
        required: true,
        attributeId: 'exp_year'
      },
      {
        required: true,
        attributeId: 'cvc'
      },
      {
        required: true,
        attributeId: 'payment_intent'
      },
      {
        required: true,
        attributeId: 'save_card'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Customer created successfully and Card saved successfully. ",
        "card_id": "card_65ba415bef6c9",
        "last_4": "4242",
        "customer_id": "cus_65ba415ad0a835064"
      },
    },
  },
};

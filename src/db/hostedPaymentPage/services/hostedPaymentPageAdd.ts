import { IService } from '~/interfaces';

export const hostedPaymentPageAdd: IService = {
  id: 'phostedPaymentPage_Add',
  name: 'Create Hosted Payment Page',
  description: [
    `Use below api to create a payment link that you can share with your customers. Unique payment link which redirects customers to open the link to make a payment. This hosted payment page will support One Time payments or recurring donations as well.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/hostedpages',
    params: [
      {
        required: true,
        attributeId: 'page_name'
      },
      {
        required: true,
        attributeId: 'amount_type'
      },
      {
        required: false,
        attributeId: 'fixed_amount'
      },
      {
        required: true,
        attributeId: 'recurring_type'
      },
      {
        required: false,
        attributeId: 'no_of_cycle'
      },
      {
        required: true,
        attributeId: 'payment_method'
      },
      {
        required: false,
        attributeId: 'customer_notify'
      },
      {
        required: true,
        attributeId: 'payment_type'
      },
      {
        required: false,
        attributeId: 'status'
      },
      {
        required: false,
        attributeId: 'allow_quantity'
      },
      {
        required: false,
        attributeId: 'quantity_label'
      },
      {
        required: false,
        attributeId: 'interval_type'
      },
      {
        required: false,
        attributeId: 'product_image_url'
      },
      {
        required: false,
        attributeId: 'onetime_payment'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Hosted payment page created successfully.!",
        "unique_id": "815b7f86c90341f2"
      },
    },
  },
};
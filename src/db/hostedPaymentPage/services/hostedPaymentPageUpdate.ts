import { IService } from '~/interfaces';

export const hostedPaymentPageUpdate: IService = {
  id: 'hostedPaymentPage_Update',
  name: 'Update Hosted Payment Page',
  description: [
    `Use below api to update a payment link that you can share with your customers. The hosted payment page can be updated to from no expire page to One time Payment. And also page can be updated from supporting only One Time payments to both One time and recurring donations as well.`,
  ],
  endpoint: {
    method: 'put',
    url: '/v1/hostedpages/:page_id',
    params: [
      {
        required: true,
        attributeId: 'page_id'
      },
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
        attributeId: 'single_use'
      },
      {
        required: false,
        attributeId: 'return_url'
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Hosted payment page created successfully.!",
        "link": "executive07.stage-easymerchant.io/payment/charge/918b6ee5056aa5c0",
        "unique_id": "918b6ee5056aa5c0"
      },
    },
  },
};

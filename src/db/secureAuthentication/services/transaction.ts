import { IService } from '~/interfaces';

export const transaction: IService = {
  id: 'transaction',
  name: 'Initiate Transaction',
  description: [
    `This service allows to initiate 3D secure transaction for new cards.`
  ],
  endpoint: {
    method: 'post',
    url: '/v1/3dsecure',
    params: [
      {
        required: false,
        attributeId: 'name',
      },
      {
        required: false,
        attributeId: 'email',
      },
      {
        required: false,
        attributeId: 'customer_id',
      },
      {
        required: false,
        attributeId: 'create_customer',
      },
      {
        required: false,
        attributeId: 'address',
      },
      {
        required: false,
        attributeId: 'city',
      },
      {
        required: false,
        attributeId: 'state',
      },
      {
        required: false,
        attributeId: 'zip',
      },
      {
        required: false,
        attributeId: 'country',
      },
      {
        required: true,
        attributeId: 'cardholder_name',
      },
      {
        required: true,
        attributeId: 'card_number',
      },
      {
        required: true,
        attributeId: 'exp_month',
      },
      {
        required: true,
        attributeId: 'exp_year',
      },
      {
        required: true,
        attributeId: 'cvc',
      },
      {
        required: false,
        attributeId: 'token_only',
      },
      {
        required: false,
        attributeId: 'save_card',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        status : true,
        message: "Secure Transaction initialized successfully. ",
        secure_token: "db32abe1-9245-4abc-8bcc-b636af1339ec",
        transactionId: "250204105702941228",
        redirect_url: "https://admin.lyfepay.io/authentication/start/250204105702941228",
        location_url: "https://admin.lyfepay.io/authentication/start/250204105702941228"
      },
    },
  },
};

import { IService } from '~/interfaces';

export const payoutACH: IService = {
  id: 'payout_ACH',
  name: 'payoutACH',
  description: [
    `SendACH endpoint that is able to send funds to a DDA using routing number and account number. Credentials are in comments. If you look at the TLS documentation from iStream, it indicates that you only need to change the creditOrDebit key / value pair to 'C' in order to credit a named DDA with funds from the merchant's account. 
`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/payouts/ach',
    params: [
      {
        required: true,
        attributeId: 'name',
      },
      {
        required: false,
        attributeId: 'email',
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
        attributeId: 'zip',
      },
      {
        required: false,
        attributeId: 'country',
      },
      {
        required: false,
        attributeId: 'description',
      },
      {
        required: false,
        attributeId: 'send_now',
      },
      {
        required: true,
        attributeId: 'amount',
      },
      {
        required: false,
        attributeId: 'currency',
      },
      {
        required: false,
        attributeId: 'payment_mode',
      },
      {
        required: false,
        attributeId: 'start_date',
      },
      {
        required: false,
        attributeId: 'payment_method',
      },
      {
        required: false,
        attributeId: 'levelIndicator',
      },
      {
        required: true,
        attributeId: 'routing_number',
      },
      {
        required: true,
        attributeId: 'account_number',
      },
      {
        required: true,
        attributeId: 'account_type',
      },
      {
        required: true,
        attributeId: 'business_account',
      },
      {
        required: true,
        attributeId: 'account_validation',
      },
      {
        required: true,
        attributeId: 'entry_class_code',
      },
      {
        required: true,
        attributeId: 'payment_type',
      },
      {
        required: true,
        attributeId: 'customer_id',
      },
      {
        required: true,
        attributeId: 'account_id',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payment processed successfully. ",
        "payout_id": "9a41b24c-0906-4bc7-aad3-959dad7d5a4a",
        "data": "NA"
      },
    },
  },
};

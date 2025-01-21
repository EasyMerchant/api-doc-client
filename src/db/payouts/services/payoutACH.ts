import { IService } from '~/interfaces';

export const payoutACH: IService = {
  id: 'payout_ACH',
  name: 'Payout ACH',
  description: [
    `Creates a PPD ACH credit with the supplied account information.`,
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
        required: true,
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
        attributeId: 'start_date',
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
        required: false,
        attributeId: 'account_validation',
      },
      {
        required: true,
        attributeId: 'entry_class_code',
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

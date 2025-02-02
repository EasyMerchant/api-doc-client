import { IService } from '~/interfaces';

export const payoutCancel: IService = {
  id: 'payout_cancel',
  name: 'Payout Cancel',
  description: [
    `It is to cancel the payout transaction`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/payouts/cancel',
    params: [
      {
        required: true,
        attributeId: 'payout_id',
      },
      {
        required: true,
        attributeId: 'cancel_reason',
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payout canceled successfully. ",
        "payout_id": "4bf9f184-013d-44b0-80c4-6dfca4c3a856",
      },
    },
  },
};

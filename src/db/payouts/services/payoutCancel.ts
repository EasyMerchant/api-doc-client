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
        attributeId: 'charge_id',
      },
      {
        required: true,
        attributeId: 'cancel_reason',
      },
      {
        required: false,
        attributeId: 'mode',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "ACH Payment cancelled successfully. ",
        "charge_id": "4bf9f184-013d-44b0-80c4-6dfca4c3a856",
        "data": "NA"
      },
    },
  },
};

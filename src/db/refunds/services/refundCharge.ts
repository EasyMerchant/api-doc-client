import { IService } from '~/interfaces';

export const refundCharge: IService = {
  id: 'create_refund',
  name: 'Refund A Charge',
  description: [
    `This endpoint allow you to refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were originally charged are also refunded. You can optionally refund only part of a charge.`,
    `You can create refund as many times as you wish until the entire charge has been refunded.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/refunds',
    params: [
      {
        required: true,
        attributeId: 'refund_id',
      },
      {
        required: false,
        attributeId: 'refund_amount',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Refund initiated successfully. ',
        refund_id: 'sandbox_6425a9cfb820b',
      },
    },
  },
};

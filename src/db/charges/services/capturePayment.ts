import { IService } from '~/interfaces';

export const capturePayment: IService = {
  id: 'capture_payent',
  name: 'Capture Payment',
  description: [
    `It occurs when you initiate the process of moving authorized funds from the cardholder's bank to your merchant account. Any fees incurred will come due at this point, and any pre-authorized amount will be settled.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges/{transaction_id}/capture',
    params: [
      {
        required: true,
        attributeId: 'charge_id',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Payment captured',
      },
    },
  },
};

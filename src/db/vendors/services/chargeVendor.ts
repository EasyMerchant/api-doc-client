import { IService } from '~/interfaces';

export const chargeVendor: IService = {
  id: 'charge_vendor',
  name: 'Charge Vendor',
  description: [
    `Create vendor api used to create vendors under merchants. For this Api you need a merchant api key and secret key under “Authentication” in the header. you need to pass all required values for KYC verification.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/charges',
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
        required: true,
        attributeId: 'description',
      },
      {
        required: true,
        attributeId: 'amount',
      },
      {
        required: true,
        attributeId: 'address',
      },
      {
        required: true,
        attributeId: 'city',
      },
      {
        required: true,
        attributeId: 'state',
      },
      {
        required: true,
        attributeId: 'zip',
      },
      {
        required: true,
        attributeId: 'country',
      },
      {
        required: true,
        attributeId: 'payment_mode',
      },
      {
        required: true,
        attributeId: 'currency',
      },
      {
        required: true,
        attributeId: 'payment_method',
      },
      {
        required: true,
        attributeId: 'cheque_number',
      },
      {
        required: true,
        attributeId: 'vendorId',
      },
      {
        required: true,
        attributeId: 'commissionPercent',
      },
      {
        required: true,
        attributeId: 'commissionAmount',
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Payment processed successfully. ",
        "charge_id": "cha_6527f251d2ef25114",
        "data": "NA"
      },
    },
  },
};

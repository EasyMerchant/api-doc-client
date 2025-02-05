import { IService } from '~/interfaces';

export const createVendor: IService = {
  id: 'create_vendor',
  name: 'Create Vendor',
  description: [
    `Create vendor api used to create vendors under merchants. For this Api you need a merchant api key and secret key under “Authentication” in the header. you need to pass all required values for KYC verification.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/vendors',
    params: [
      {
        required: true,
        attributeId: 'first_name',
      },
      {
        required: true,
        attributeId: 'last_name',
      },
      {
        required: true,
        attributeId: 'email',
      },
      {
        required: true,
        attributeId: 'phone',
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
        attributeId: 'country',
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
        attributeId: 'tax_id',
      },
      // {
      //   required: false,
      //   attributeId: 'vendorUrl',
      // },
      {
        required: false,
        attributeId: 'ipn_url',
      },
      {
        required: false,
        attributeId: 'default_payout_currency',
      },
      {
        required: false,
        attributeId: 'minimum_withdraw_limit',
      },
      {
        required: true,
        attributeId: 'personal_identification_number',
      },
      {
        required: true,
        attributeId: 'driver_license_number',
      },
      {
        required: false,
        attributeId: 'vendor_agreement',
      },
      {
        required: false,
        attributeId: 'payout_info',
      },
      {
        required: false,
        attributeId: 'business',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "message": "Vendor created successfully.",
        "status": 200,
        "data": {
          "vendor_id": "2010354"
        }
      },
    },
  },
};

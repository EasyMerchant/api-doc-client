import { IService } from '~/interfaces';

export const createVendor: IService = {
  id: 'create_vendor',
  name: 'Create Vendor',
  description: [
    `Create vendor api used to create vendor under merchant. For this Api you need merchant api key and secret key under “Authentication” in header. you need to pass all required values for KYC verification.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/vendors',
    params: [
      {
        required: true,
        attributeId: 'vendor_email',
      },
      {
        required: true,
        attributeId: 'vendor_firstName',
      },
      {
        required: true,
        attributeId: 'vendor_lastName',
      },
      {
        required: true,
        attributeId: 'vendor_principal',
      },
      {
        required: true,
        attributeId: 'vendor_address',
      },
      {
        required: true,
        attributeId: 'vendor_city',
      },
      {
        required: true,
        attributeId: 'vendor_state',
      },
      {
        required: true,
        attributeId: 'vendor_zip',
      },
      {
        required: true,
        attributeId: 'vendor_country',
      },
      {
        required: true,
        attributeId: 'vendor_personalIdentificationNumber',
      },
      {
        required: true,
        attributeId: 'vendor_driverLicenseNumber',
      },
      {
        required: true,
        attributeId: 'vendor_payoutType',
      },
      {
        required: true,
        attributeId: 'vendor_baseCurrency',
      },
      {
        required: true,
        attributeId: 'vendor_nameOnAccount',
      },
      {
        required: true,
        attributeId: 'vendor_bankAccountType',
      },
      {
        required: true,
        attributeId: 'vendor_bankAccountClass',
      },
      {
        required: true,
        attributeId: 'vendor_bankId',
      },
      {
        required: true,
        attributeId: 'vendor_bankAccountId',
      },
      {
        required: true,
        attributeId: 'vendor_iban',
      },
      {
        required: true,
        attributeId: 'vendor_swiftBic',
      },
      {
        required: false,
        attributeId: 'vendor_agreement',
      },
      {
        required: false,
        attributeId: 'vendor_payoutInfo',
      },
      {
        required: false,
        attributeId: 'vendor_defaultPayoutCurrency',
      },
      {
        required: false,
        attributeId: 'vendor_ipnUrl',
      },
      {
        required: false,
        attributeId: 'vendor_minimalPayoutAmount',
      },
      {
        required: false,
        attributeId: 'vendor_refundReserve',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        data: {
          vendor_id: '982733',
        },
        status: 200,
        message: 'Vendor created successfully.',
      },
    },
  },
};

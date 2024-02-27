import { IService } from '~/interfaces';

export const updateVendor: IService = {
  id: 'update_vendor',
  name: 'Update Vendor',
  description: [
    `Update vendor api used to update vendors details under merchants. For this Api you need a merchant api key and secret key under “Authentication” in the header. you need to pass all required values for KYC verification.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/vendors/{vendor_id}',
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
        attributeId: 'vendor_phone',
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
        attributeId: 'vendor_country',
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
        attributeId: 'taxId',
      },
      {
        required: false,
        attributeId: 'vendorUrl',
      },
      {
        required: false,
        attributeId: 'vendor_ipnUrl',
      },
      {
        required: false,
        attributeId: 'vendor_defaultPayoutCurrency',
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
        attributeId: 'dob',
      },
      {
        required: true,
        attributeId: 'vendor_principal',
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
        attributeId: 'email',
      },
      {
        required: true,
        attributeId: 'commissionPercent',
      },
      {
        required: true,
        attributeId: 'commissionAmount',
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
        attributeId: 'bankName',
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
        attributeId: 'vendor_minimalPayoutAmount',
      },
      {
        required: false,
        attributeId: 'vendor_paymentReference',
      },
      {
        required: false,
        attributeId: 'vendor_refundReserve',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        "message": "Vendor updated successfully.",
        "status": 200
      },
    },
  },
};

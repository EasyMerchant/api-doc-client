import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'vendor_id',
    name: 'vendor_id',
    data_type: 'bigint',
    description: 'Unique identifier of the object.',
  },
  {
    id: 'vendor_email',
    name: 'email',
    data_type: 'string',
    description:
      'The email address of vendor to send activity or account related messgaes.',
  },
  {
    id: 'vendor_firstName',
    name: 'firstName',
    data_type: 'string',
    description: 'The given first name of the vendor',
  },
  {
    id: 'vendor_lastName',
    name: 'lasstName',
    data_type: 'string',
    description: 'The given last name of the vendor',
  },
  {
    id: 'vendor_personalIdentificationNumber',
    name: 'personalIdentificationNumber',
    data_type: 'string',
    description: '',
  },
  {
    id: 'vendor_driverLicenseNumber',
    name: 'driverLicenseNumber',
    data_type: 'string',
    description: '',
  },
  {
    id: 'vendor_principal',
    name: 'vendorPrincipal',
    data_type: 'array',
    description: '',
  },
  {
    id: 'vendor_agreement',
    name: 'vendorAgreement',
    data_type: 'array',
    description: '',
  },
  {
    id: 'vendor_payoutInfo',
    name: 'payoutInfo',
    data_type: 'array',
    description: '',
  },
  {
    id: 'vendor_payoutType',
    name: 'payoutType',
    data_type: 'string',
    description: 'Any of the following: ACH,CHAPS, CHAPS FAST, SEPA, WIRE',
  },
  {
    id: 'vendor_phone',
    name: 'phone',
    data_type: 'string',
    description: 'The phone or contact number of vendor.',
  },
  {
    id: 'vendor_address',
    name: 'address',
    data_type: 'string',
    description: 'Street address of vendor bank. Maximum 60 characters.',
  },
  {
    id: 'vendor_state',
    name: 'state',
    data_type: 'string',
    description: 'State & Province code.',
  },
  {
    id: 'vendor_city',
    name: 'city',
    data_type: 'string',
    description: 'City of vendor bank. Maximum 40 characters.',
  },
  {
    id: 'vendor_zip',
    name: 'zip',
    data_type: 'string',
    description: 'Zip/Postal code of vendor bank. Maximum 10 characters.',
  },
  {
    id: 'vendor_country',
    name: 'country',
    data_type: 'string',
    description: 'Country code of vendor bank. Defaults to US',
  },
  {
    id: 'vendor_bankId',
    name: 'bankId',
    data_type: 'string',
    description:
      'Either bankId or swiftBic is required, but not both. . Bank identifier, routing number, sort code, or BSB. Maximum 35 characters.',
  },
  {
    id: 'vendor_bankAccountType',
    name: 'bankAccountType',
    data_type: 'string',
    description: 'CHECKING, SAVINGS',
  },
  {
    id: 'vendor_bankAccountId',
    name: 'bankAccountId',
    data_type: 'string',
    description:
      'Either bankAccountId or iban is required, but not both..Vendor bank account number. Maximum 34 characters.',
  },
  {
    id: 'vendor_iban',
    name: 'iban',
    data_type: 'string',
    description:
      'Either bankAccountId or iban is required, but not both..Vendor International Bank Account Number (IBAN). 15-31 alphanumeric characters.',
  },
  {
    id: 'vendor_swiftBic',
    name: 'swiftBic',
    data_type: 'string',
    description:
      'Either bankId or swiftBic is required, but not both.The Bank Identifier Code of vendor bank for wire transfers. Maximum 50 alphanumeric characters.',
  },
  {
    id: 'vendor_bankAccountClass',
    name: 'bankAccountClass',
    data_type: 'string',
    description: 'PERSONAL, CORPORATE, INTERNATIONAL',
  },
  {
    id: 'vendor_nameOnAccount',
    name: 'nameOnAccount',
    data_type: 'string',
    description: 'Valid value: 3-140 alphanumeric characters',
  },
  {
    id: 'vendor_baseCurrency',
    name: 'baseCurrency',
    data_type: 'string',
    description: 'USD — US Dollar',
  },
  {
    id: 'vendor_ipnUrl',
    name: 'ipnUrl',
    data_type: 'string',
    description: '',
  },
  {
    id: 'vendor_defaultPayoutCurrency',
    name: 'defaultPayoutCurrency',
    data_type: 'string',
    description: '',
  },
  {
    id: 'vendor_minimalPayoutAmount',
    name: 'minimalPayoutAmount',
    data_type: 'string',
    description: 'Minimum amount for which a vendor may be paid out.',
  },
  {
    id: 'vendor_paymentReference',
    name: 'paymentReference',
    data_type: 'string',
    description: 'Reference text that appears on your vendor`s bank statement',
  },
  {
    id: 'vendor_refundReserve',
    name: 'refundReserve',
    data_type: 'string',
    description: 'Vendor`s Refund Reserve',
  },
];

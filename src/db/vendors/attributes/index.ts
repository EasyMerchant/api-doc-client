import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'first_name',
    name: 'first_name',
    data_type: 'string',
    description: 'The first name of the new vendor.',
  },{
    id: 'vendor_id',
    name: 'vendor_id',
    data_type: 'bigint',
    description: 'Unique identifier of the object.',
  },{
    id: 'last_name',
    name: 'last_name',
    data_type: 'string',
    description: 'The last name of the new vendor.',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description:
      'The email address of vendor to send activity or account related messgaes.',
  },
  {
    id: 'personal_identification_number',
    name: 'personal_identification_number',
    data_type: 'string',
    description: 'It refers to the identification number of the vendor’s owner. It accepts only numbers',
  },
  {
    id: 'driver_license_number',
    name: 'driver_license_number',
    data_type: 'string',
    description: 'It refers to the driver license number of the vendor’s owner. It accepts only numbers',
  },
  {
    id: 'vendor_agreement',
    name: 'vendor_agreement',
    data_type: 'array',
    description: 'It contains commission details of the vendor',
  },
  {
    id: 'payout_info',
    name: 'payout_info',
    data_type: 'array',
    description: 'It contains bank details of the vendor',
  },
  {
    id: 'business',
    name: 'business',
    data_type: 'array',
    description: 'It contains business details of the vendor',
  },
  {
    id: 'vendor_payoutType',
    name: 'payoutType',
    data_type: 'string',
    description: 'Any of the following: ACH,CHAPS, CHAPS FAST, SEPA, WIRE',
  },
  {
    id: 'phone',
    name: 'phone',
    data_type: 'string',
    description: 'The phone or contact number of vendor.',
  },
  {
    id: 'address',
    name: 'address',
    data_type: 'string',
    description: 'Street address of vendor. Maximum 60 characters.',
  },
  {
    id: 'state',
    name: 'state',
    data_type: 'string',
    description: 'State & Province code.',
  },
  {
    id: 'city',
    name: 'city',
    data_type: 'string',
    description: 'City of vendor. Maximum 40 characters.',
  },
  {
    id: 'zip',
    name: 'zip',
    data_type: 'string',
    description: 'Zip/Postal code of vendor bank. Maximum 10 characters.',
  },
  {
    id: 'amount',
    name: 'amount',
    data_type: 'string',
    description: 'Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the smallest currency unit',
  },
  {
    id: 'currency',
    name: 'currency',
    data_type: 'string',
    description: 'Three-letter ISO currency code, in lowercase. Ex: usd',
  },
  {
    id: 'payment_method',
    name: 'payment_method',
    data_type: 'string',
    description: 'The list of payment method types (e.g. card, ach, cash, cheque) that this charge is allowed to use.',
  },
  {
    id: 'description',
    name: 'description',
    data_type: 'string',
    description: 'An arbitrary string which you can attach to an Charge object. It is displayed when in the web interface along side the charge.',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description: 'Email address of the customer. It is required for creating invoice for the New customer.',
  },
  {
    id: 'tax_id',
    name: 'tax_id',
    data_type: 'string',
    description: 'It accepts only numbers. Maximum of 9 characters allowed.',
  },
  {
    id: 'vat_id',
    name: 'vat_id',
    data_type: 'string',
    description: 'It accepts only numbers. Maximum of 18 characters allowed.',
  },
  {
    id: 'vendor_country',
    name: 'country',
    data_type: 'string',
    description: 'Country code of vendor bank. Defaults to US',
  },
  {
    id: 'bank_id',
    name: 'bank_id',
    data_type: 'string',
    description:
      'Either bank_id or swiftBic is required, but not both. . Bank identifier, routing number, sort code, or BSB. Maximum 35 characters.',
  },
  {
    id: 'bank_account_type',
    name: 'bank_account_type',
    data_type: 'string',
    description: 'CHECKING, SAVINGS',
  },
  {
    id: 'bank_account_id',
    name: 'bank_account_id',
    data_type: 'string',
    description:
      'Either bank_account_id or iban is required, but not both..Vendor bank account number. Maximum 34 characters.',
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
    id: 'bank_account_class',
    name: 'bank_account_class',
    data_type: 'string',
    description: 'PERSONAL, CORPORATE, INTERNATIONAL',
  },
  {
    id: 'bank_name',
    name: 'bank_name',
    data_type: 'string',
    description: 'It accepts alphabet characters. It refers to the name of the vendor’s bank ',
  },
  {
    id: 'account_name',
    name: 'account_name',
    data_type: 'string',
    description: 'Valid value: 3-140 alphanumeric characters',
  },
  {
    id: 'base_currency',
    name: 'base_currency',
    data_type: 'string',
    description: 'USD — US Dollar',
  },
  {
    id: 'website_url',
    name: 'website_url',
    data_type: 'string',
    description: 'It is the address of a given unique resource on the Web. ',
  },
  {
    id: 'ipn_url',
    name: 'ipn_url',
    data_type: 'string',
    description: 'It is the address of a given unique resource on the Web. ',
  },
  {
    id: 'default_payout_currency',
    name: 'default_payout_currency',
    data_type: 'string',
    description: 'Three-letter ISO currency code, in lowercase. Ex: usd',
  },
  {
    id: 'minimal_payout_amount',
    name: 'minimal_payout_amount',
    data_type: 'string',
    description: 'Minimum amount for which a vendor may be paid out.',
  },
  {
    id: 'minimum_withdraw_limit',
    name: 'minimum_withdraw_limit',
    data_type: 'string',
    description: 'Minimum amount the vendor can withdraw.',
  },
  {
    id: 'payment_reference',
    name: 'payment_reference',
    data_type: 'string',
    description: 'Reference text that appears on your vendor`s bank statement',
  },
  {
    id: 'refund_reserve',
    name: 'refund_reserve',
    data_type: 'string',
    description: 'Vendor`s Refund Reserve',
  },
  {
    id: 'country',
    name: 'country',
    data_type: 'string',
    description: 'It refer the country of the vendor. It is required for the new customer while creating the charge.',
  },
  {
    id: 'payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: 'The mode of payment used for creating the invoice. The payment mode can be "auth_only", "auth_and_capture". "auth_only" is available only for payment method "Card".',
  },
  {
    id: 'cheque_number',
    name: 'cheque_number',
    data_type: 'string',
    description: 'It is unique identifier which contains numbers. It is required when the payment method is cheque.',
  },
  {
    id: 'vendorId',
    name: 'vendorId',
    data_type: 'bigint',
    description: 'Unique identifier of the object to refer the vendor.',
  },
  {
    id: 'dob',
    name: 'dob',
    data_type: 'date',
    description: 'It refers to the date of birth of Vendor owner.',
  }
];

import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'first_name',
    name: 'first_name',
    data_type: 'string',
    description: 'The first name of the new vendor.',
  },
  {
    id: 'last_name',
    name: 'last_name',
    data_type: 'string',
    description: 'The last name of the new vendor.',
  },
  {
    id: 'vendor_id',
    name: 'vendor_id',
    data_type: 'bigint',
    description: 'Unique identifier of the object.',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description:
      'The email address of vendor to send activity or account related messgaes.',
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
    id: 'dob',
    name: 'dob',
    data_type: 'date',
    description: 'It refers to the date of birth of Vendor owner.',
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
    id: 'country',
    name: 'country',
    data_type: 'string',
    description: 'Country code of vendor.',
  },
  {
    id: 'zip',
    name: 'zip',
    data_type: 'string',
    description: 'Zip/Postal code of vendor bank. Maximum 10 characters.',
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
    id: 'frequency',
    name: 'frequency',
    data_type: 'string',
    description: 'The frequency of the vendor\'s withdraw . It can be twicepermonth,weekly,monthly,quarterly.',
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
    id: 'minimum_withdraw_limit',
    name: 'minimum_withdraw_limit',
    data_type: 'string',
    description: 'Minimum amount the vendor can withdraw.',
  },
  {
    id: 'business',
    name: 'business',
    data_type: 'array',
    description: 'It contains business details of the vendor',
  },
  {
    id: 'business[name]',
    name: 'business[name]',
    data_type: 'string',  
    description: 'The name of the business of the vendor.',
  },
  {
    id: 'business[email]',
    name: 'business[email]',
    data_type: 'string',  
    description: 'The email address of the business of the vendor.',
  },
  {
    id: 'business[address]',
    name: 'business[address]',
    data_type: 'string',  
    description: 'The address of the business of the vendor.',
  },
  {
    id: 'business[phone]',
    name: 'business[phone]',
    data_type: 'string',  
    description: 'The phone number of the business of the vendor.',
  },
  {
    id: 'business[city]',
    name: 'business[city]',
    data_type: 'string',
    description: 'The city of the business of the vendor.',
    
  },
  {
    id: 'business[state]',
    name: 'business[state]', 
    data_type: 'string',
    description: 'The state code of the business of the vendor.',     
 } ,
 {
  id: 'business[zip]',
  name: 'business[zip]', 
  data_type: 'string',
  description: 'The zip code of the business of the vendor.',     
} ,  

 {
  id: 'business[country]',
  name: 'business[country]', 
  data_type: 'string',
  description: 'The country code of the business of the vendor.',     
  },
  {
    id: 'business[vat_id]',
    name: 'business[vat_id]', 
    data_type: 'string',
    description: 'vat id of the business of the vendor.',     
  },
{
  id: 'business[tax_id]',
  name: 'business[tax_id]', 
  data_type: 'string',
  description: 'tax id of the business of the vendor.',     
  },  
  {
    id: 'business[website_url]',
    name: 'business[website_url]', 
    data_type: 'string',
    description: 'website name of the business of the vendor.',     
  }, 
  {
    id: 'vendor_agreement',
    name: 'vendor_agreement',
    data_type: 'array',
    description: 'It contains commission details of the vendor',
  },      
  {
    id: 'vendor_agreement[commission_percent]',
    name: 'vendor_agreement[commission_percent]',
    data_type: 'number',
    description: 'The commission percentage of the vendor.',
    
  },    
  {
    id: 'payout_info',
    name: 'payout_info',
    data_type: 'array',
    description: 'It contains bank details of the vendor',
  },  

  {
    id: 'payout_info[][payout_type]',
    name: 'payout_info[][payout_type]',
    data_type: 'string',
    description: 'Any of the following: ACH,CHAPS, CHAPS FAST, SEPA, WIRE',
  },
  {
    id: 'payout_info[][base_currency]',
    name: 'payout_info[][base_currency]',
    data_type: 'string',
    description: 'USD — US Dollar',
  },
  {
    id: 'payout_info[][account_name]',
    name: 'payout_info[][account_name]',
    data_type: 'string',
    description: 'Valid value: 3-140 alphanumeric characters',
  },
  {
    id: 'payout_info[][bank_account_type]',
    name: 'payout_info[][bank_account_type]',
    data_type: 'string',
    description: 'CHECKING, SAVINGS',
  },
  {
    id: 'payout_info[][bank_account_class]',
    name: 'payout_info[][bank_account_class]',
    data_type: 'string',
    description: 'PERSONAL, CORPORATE, INTERNATIONAL',
  },
  {
    id: 'payout_info[][bank_name]',
    name: 'payout_info[][bank_name]',
    data_type: 'string',
    description: 'It accepts alphabet characters. It refers to the name of the vendor’s bank ',
  },
 
  {
    id: 'payout_info[][bank_id]',
    name: 'payout_info[][bank_id]',
    data_type: 'string',
    description:
      'Either bank_id or swiftBic is required, but not both. . Bank identifier, routing number, sort code, or BSB. Maximum 35 characters.',
  },
  {
    id: 'payout_info[][bank_account_id]',
    name: 'payout_info[][bank_account_id]',
    data_type: 'string',
    description:
      'Either bank_account_id or iban is required, but not both..Vendor bank account number. Maximum 34 characters.',
  },
  {
    id: 'payout_info[][swift_bic]',
    name: 'payout_info[][swift_bic]',
    data_type: 'string',
    description:
      'Either bankId or swiftBic is required, but not both.The Bank Identifier Code of vendor bank for wire transfers. Maximum 50 alphanumeric characters.',
  },
  {
    id: 'payout_info[][iban]',
    name: 'payout_info[][iban]',
    data_type: 'string',
    description:
      'Either bankAccountId or iban is required, but not both..Vendor International Bank Account Number (IBAN). 15-31 alphanumeric characters.',
  },
  {
    id: 'payout_info[][address]',
    name: 'payout_info[][address]',
    data_type: 'string',
    description:
      'street address of vendor bank. Maximum 60 characters.',
  },
  {
    id: 'payout_info[][city]',
    name: 'payout_info[][city]', 
    data_type: 'string',
    description: 'City of vendor bank. Maximum 40 characters.',
  },
  {
    id: 'payout_info[][state]',
    name: 'payout_info[][state]', 
    data_type: 'string',
    description: 'State OR Province code.',
  },
  {
    id: 'payout_info[][zip]',
    name: 'payout_info[][zip]', 
    data_type: 'string',
    description: 'Zip/Postal code of vendor bank. Maximum 10 characters.',
  },
  {
    id: 'payout_info[][country]',
    name: 'payout_info[][country]', 
    data_type: 'string',
    description: 'Country code of vendor bank.',
  },
  {
    id: 'payout_info[][minimal_payout_amount]',
    name: 'payout_info[][minimal_payout_amount]', 
    data_type: 'string',
    description: 'Minimum amount the vendor can withdraw.',
  },
  {
    id: 'payout_info[][payment_reference]',
    name: 'payout_info[][payment_reference]',
    data_type: 'string',
    description: 'Reference text that appears on your vendor`s bank statement',
  },
 
  {
    id: 'payout_info[][refund_reserve]',
    name: 'payout_info[][refund_reserve]',
    data_type: 'string',
    description: 'The amount that is reserved for refunds. It is used to cover potential refunds or chargebacks from the vendor\'s transactions.',
  },
 
 
 
 

  
 
 
 
 


 
 


 
];

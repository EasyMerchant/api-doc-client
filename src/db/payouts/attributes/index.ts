import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'An user defined name for the payout username',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description: 'Email address of the customer. It is required for creating payouts for the New customer.',
  },
  {
    id: 'address',
    name: 'address',
    data_type: 'string',
    description: `It refer the address of the customer. It is required for the new customer while creating the payouts.`,
  },
  {
    id: 'city',
    name: 'city',
    data_type: 'string',
    description: `It refer the city of the customer. It is required for the new customer while creating the payouts.`,
  },
  {
    id: 'state',
    name: 'state',
    data_type: 'string',
    description: `It refer the state of the customer. It is required for the new customer while creating the payouts.`,
  },
  {
    id: 'zip',
    name: 'zip',
    data_type: 'string',
    description: `It refer the zip of the customer. It is required for the new customer while creating the payouts.`,
  },
  {
    id: 'country',
    name: 'country',
    data_type: 'string',
    description: `It refer the country of the customer. It is required for the new customer while creating the payouts.`,
  },
  {
    id: 'description',
    name: 'description',
    data_type: 'string',
    description:
      'An arbitrary string which you can attach to an Send ACH. It is displayed when in the web interface alongside the payouts.',
  },
  {
    id: 'send_now',
    name: 'send_now',
    data_type: 'boolean',
    description: `Immediately send the payouts when it is created. The value will be either 'yes' or 'no'`,
  },
  {
    id: 'amount',
    name: 'amount',
    data_type: 'string',
    description: 'Amount to be added for the payouts',
  },
  {
    id: 'currency',
    name: 'currency',
    data_type: 'string',
    description: `A system of money in general use in a particular country. In case of Bitcoin, use 'fiat' or 'satoshi'`,
  },
  {
    id: 'payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: `The mode of payment used for creating the payouts. The payment mode can be 'auth_only', 'auth_and_capture'`,
  },
  {
    id: 'payment_method',
    name: 'payment_method',
    data_type: 'string',
    description: `The method of payment used for creating the charge. Use either 'ach' or 'card' to make charge.`,
  },
  {
    id: 'routing_number',
    name: 'routing_number',
    data_type: 'string',
    description:
      'A routing number is a nine-digit code used by financial institutions to identify other financial institutions. When combined with your account number, it allows institutions to locate your individual account. Routing Number is not required when charge is created for the existing customer.',
  },
  {
    id: 'account_number',
    name: 'account_number',
    data_type: 'string',
    description:
      'A number used to identify a bank account. Bank card number, the primary account number found on credit cards and bank cards. Account Number is not required when charge is created for the existing customer.',
  },
  {
    id: 'account_type',
    name: 'account_type',
    data_type: 'string',
    description: 'Checking account, Savings account, General Ledger account etc. Account type is not required when charge is created for the existing customer with Saved account. Account Type is default set to checking. This attribute is used when the payment method is ACH.',
  },
  {
    id: 'business_account',
    name: 'business_account',
    data_type: 'boolean',
    description: 'This will a value either `Yes` or `No`.',
  },
  {
    id: 'account_validation',
    name: 'account_validation',
    data_type: 'boolean',
    description: 'This will a value either `Yes` or `No`.',
  },
  {
    id: 'entry_class_code',
    name: 'entry_class_code',
    data_type: 'string',
    description:
      'A Standard Entry Class Code (SEC Code) identifies a specific payment application. The attributes value can be PPD, TEL, WEB, CCD. It is optional for the payment mode ACH. ',
  },
  {
    id: 'payment_type',
    name: 'payment_type',
    data_type: 'string',
    description: `This attribute is required when the charge is created for the subscription. The attribute value can be either 'one time' or recurring'.'`,
  },
  {
    id: 'charge_id',
    name: 'charge_id',
    data_type: 'string',
    description: 'Unique identifier to refer the charge using the transaction_id.',
  },
  {
    id: 'payout_id',
    name: 'payout_id',
    data_type: 'string',
    description: 'Unique identifier to refer the charge using the transaction_id.',
  },
  {
    id: 'cancel_reason',
    name: 'cancel_reason',
    data_type: 'string',
    description: 'Reason for cancelling the payout',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description:
      'The customer id of the customer for whom the payouts is created.',
  },
  {
    id: 'account_id',
    name: 'account_id',
    data_type: 'string',
    description: `This attribute is required when a payout is created for existing customer with saved account.`,
  }

];

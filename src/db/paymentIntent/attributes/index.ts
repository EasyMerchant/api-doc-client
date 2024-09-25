import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
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
    id: 'payment_type',
    name: 'payment_type',
    data_type: 'string',
    description: 'The list of payment method types (e.g. card, ach) that this PaymentIntent is allowed to use.',
  },
  {
    id: 'customerId',
    name: 'customerId',
    data_type: 'string',
    description: 'This is the customer_id for the customer associated with this ach accounts.',
  },
  {
    id: 'payment_intent',
    name: 'payment_intent',
    data_type: 'string',
    description: 'The list of payment method types (e.g. card, ach) that this PaymentIntent is allowed to use.',
  },
  {
    id: 'routingNumber',
    name: 'routingNumber',
    data_type: 'string',
    description:
      'A routing number is a nine-digit code used by financial institutions to identify other financial institutions. When combined with your account number, it allows institutions to locate your individual account. Routing Number is not required when charge is created for the existing customer.',
  },
  {
    id: 'accountNumber',
    name: 'accountNumber',
    data_type: 'string',
    description:
      'A number used to identify a bank account. Bank card number, the primary account number found on credit cards and bank cards. Account Number is not required when charge is created for the existing customer.',
  },
  {
    id: 'accountType',
    name: 'accountType',
    data_type: 'string',
    description: 'Checking account, Savings account, General Ledger account etc. Account type is not required when charge is created for the existing customer with Saved account. Account Type is default set to checking. This attribute is used when the payment method is ACH.',
  },
  {
    id: 'account_validation',
    name: 'account_validation',
    data_type: 'boolean',
    description: 'This attribute values is either yes or no.',
  },
  {
    id: 'card_number',
    name: 'card_number',
    data_type: 'string',
    description: `A credit card number is usually 15-16 digits long, but it could be as many as 19 digits or as few as 13 in some cases. example: 4111-1111-1111-1111`,
  },
  {
    id: 'cardholder_name',
    name: 'cardholder_name',
    data_type: 'string',
    description: `Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'`,
  },
  {
    id: 'exp_month',
    name: 'exp_month',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 2 digit month format. example: '02' for 'February'.`,
  },
  {
    id: 'exp_year',
    name: 'exp_year',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'`,
  },
  {
    id: 'cvc',
    name: 'cvc',
    data_type: 'string',
    description: `The Card Verification Code, or CVC*, is an extra code printed on your debit or credit card. With most cards (Visa, MasterCard, bank cards, etc.) it is the final three digits of the number printed on the signature strip on the reverse of your card. On American Express (AMEX) cards, it is usually a four digit code on the front.`,
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description: 'This is the customer_id for the customer associated with this card data',
  },
  {
    id: 'payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: 'The mode of payment used for creating the charge. Use auth_and_capture to make charge.',
  },
  {
    id: 'description',
    name: 'description',
    data_type: 'string',
    description: 'An arbitrary string which you can attach to an Invoice object. It is displayed when in the web interface alongside the invoice.',
  },
  {
    id: 'levelIndicator',
    name: 'levelIndicator',
    data_type: 'integer',
    description: 'It is an optional attribute. It is boolean value accepts either `1` or `0`',
  }
];

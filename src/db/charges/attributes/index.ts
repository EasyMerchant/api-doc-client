import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'charge_id',
    name: 'transaction_id',
    data_type: 'string',
    description: 'Unique identifier for the object.',
  },
  {
    id: 'charge_amount',
    name: 'amount',
    data_type: 'string',
    description: 'Amount and currency of the authorized transaction.',
  },
  {
    id: 'charge_name',
    name: 'name',
    data_type: 'string',
    description: 'The name of charge you are creating.',
  },
  {
    id: 'charge_description',
    name: 'description',
    data_type: 'string',
    description:
      'An arbitrary string which you can attach to a Charge object. It is displayed when in the web interface alongside the charge.',
  },
  {
    id: 'routing_number',
    name: 'routing_number',
    data_type: 'string',
    description:
      'A routing number is a nine-digit code used by financial institutions to identify other financial institutions. When combined with your account number, it allows institutions to locate your individual account.',
  },
  {
    id: 'account_number',
    name: 'account_number',
    data_type: 'string',
    description:
      'A number used to identify a bank account. Bank card number, the primary account number found on credit cards and bank cards.',
  },
  {
    id: 'account_type',
    name: 'account_type',
    data_type: 'string',
    description: 'Current account, Savings account, Salary account etc.',
  },
  {
    id: 'entry_class_code',
    name: 'entry_class_code',
    data_type: 'string',
    description:
      'A Standard Entry Class Code (SEC Code) identifies a specific payment application. The code incorporates type of payment (debit or credit), account nature (consumer or corporate), and record format used to carry format. Implicit in the code is how authorization is arranged (standing, oral, type of transaction, etc).',
  },
  {
    id: 'charge_email',
    name: 'email',
    data_type: 'string',
    description: 'Email address of the customer.',
  },
  {
    id: 'charge_card_number',
    name: 'card_number',
    data_type: 'string',
    description: `A credit card number is usually 15-16 digits long, but it could be as many as 19 digits or as few as 13 in some cases. example: 4111-1111-1111-1111`,
  },
  {
    id: 'charge_cardholder_name',
    name: 'cardholder_name',
    data_type: 'string',
    description: `Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'.`,
  },
  {
    id: 'charge_exp_month',
    name: 'exp_month',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 2 digit month format. example: '02' for 'February'.`,
  },
  {
    id: 'charge_exp_year',
    name: 'exp_year',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'`,
  },
  {
    id: 'charge_cvc',
    name: 'cvc',
    data_type: 'string',
    description: `The Card Verification Code, or CVC*, is an extra code printed on your debit or credit card. With most cards (Visa, MasterCard, bank cards, etc.) it is the final three digits of the number printed on the signature strip on the reverse of your card. On American Express (AMEX) cards, it is usually a four digit code on the front.`,
  },
  {
    id: 'charge_currency',
    name: 'currency',
    data_type: 'string',
    description: `A system of money in general use in a particular country. In case of Bitcoin, use 'fiat' or 'satoshi'`,
  },
  {
    id: 'charge_payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: `The mode of payment used for creating the charge.`,
  },
  {
    id: 'charge_save_card',
    name: 'save_card',
    data_type: 'number',
    description: `Whether to save the current card that was used to capture the payment for future use.`,
  },
  {
    id: 'charge_is_default',
    name: 'is_default',
    data_type: 'number',
    description: `Whether to save to make this charge a default charge.`,
  },
];

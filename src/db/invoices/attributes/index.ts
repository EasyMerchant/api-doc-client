import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'invoice_num',
    name: 'invoice_num',
    data_type: 'string',
    description: 'Unique identifier for the invoice object.',
  },
  {
    id: 'invoice_customer',
    name: 'customer',
    data_type: 'string',
    description:
      'The customer id of the customer for whom the invoice is created.',
  },
  {
    id: 'invoice_amount',
    name: 'amount',
    data_type: 'string',
    description: 'Amount to be displayed on the invoice.',
  },
  {
    id: 'invoice_description',
    name: 'description',
    data_type: 'string',
    description:
      'An arbitrary string which you can attach to an Invoice object. It is displayed when in the web interface alongside the invoice.',
  },
  {
    id: 'invoice_card_number',
    name: 'card_number',
    data_type: 'string',
    description: `A credit card number is usually 15-16 digits long, but it could be as many as 19 digits or as few as 13 in some cases. example: 4111-1111-1111-1111`,
  },
  {
    id: 'invoice_cardholder_name',
    name: 'cardholder_name',
    data_type: 'string',
    description: `Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'.`,
  },
  {
    id: 'invoice_exp_month',
    name: 'exp_month',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 2 digit month format. example: '02' for 'February'.`,
  },
  {
    id: 'invoice_exp_year',
    name: 'exp_year',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'`,
  },
  {
    id: 'invoice_cvc',
    name: 'cvc',
    data_type: 'string',
    description: `The Card Verification Code, or CVC*, is an extra code printed on your debit or credit card. With most cards (Visa, MasterCard, bank cards, etc.) it is the final three digits of the number printed on the signature strip on the reverse of your card. On American Express (AMEX) cards, it is usually a four digit code on the front.`,
  },
  {
    id: 'invoice_currency',
    name: 'currency',
    data_type: 'string',
    description: `A system of money in general use in a particular country. In case of Bitcoin, use 'fiat' or 'satoshi'`,
  },
  {
    id: 'invoice_payment_type',
    name: 'payment_type',
    data_type: 'string',
    description: `The type of payment used for creating the invoice.`,
  },
  {
    id: 'invoice_payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: `The mode of payment used for creating the invoice.`,
  },
  {
    id: 'invoice_date_due',
    name: 'date_due',
    data_type: 'date',
    description: `The due date of the invoice until it becomes past due.`,
  },
  {
    id: 'invoice_send_now',
    name: 'send_now',
    data_type: 'boolean',
    description: `Immediately send the invoice when it is created.`,
  },
  {
    id: 'invoice_items',
    name: 'items',
    data_type: 'array',
    description: `Invoice Items represent the component lines of an invoice. An invoice item is added to an invoice by creating or updating it with an invoice field, at which point it will be included as an invoice line item within invoice.lines.`,
  },
];

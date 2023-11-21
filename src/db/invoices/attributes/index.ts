import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'invoice_num',
    name: 'invoice_num',
    data_type: 'string',
    description: 'Unique identifier for the invoice object. This attribute is required for the invoice created with payment mode pay later.',
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
    description: `The type of payment used for creating the invoice. It is required for the invoice created for either 'one time' or 'recurring'. If the Payment type is recurring then the payment mode should be 'auth_and_capture'.`,
  },
  {
    id: 'invoice_payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: `The mode of payment used for creating the invoice. The payment mode can be 'auth_only', 'auth_and_capture', or 'pay_later'`,
  },
  {
    id: 'invoice_date_due',
    name: 'date_due',
    data_type: 'date',
    description: `The due date of the invoice until it becomes past due.`,
  },
  {
    id: 'invoice_start_due',
    name: 'start_due',
    data_type: 'date',
    description: `The start date of the invoice is required for the payment type 'recurring'. The start date can be either current date or future date. The Subscription starts renewal based on the start date.`,
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
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'The name of the new customer you are creating invoice. It is required when invoice is created for New Customer',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description: 'Email address of the customer. It is required for creating invoice for the New customer.',
  },
  {
    id: 'username',
    name: 'username',
    data_type: 'string',
    description: `It is unique identifier for the customer. It is required for the new customer while creating the invoice.`,
  },
  {
    id: 'address',
    name: 'address',
    data_type: 'string',
    description: `It refer the address of the customer. It is required for the new customer while creating the invoice.`,
  },
  {
    id: 'city',
    name: 'city',
    data_type: 'string',
    description: `It refer the city of the customer. It is required for the new customer while creating the invoice.`,
  },
  {
    id: 'state',
    name: 'state',
    data_type: 'string',
    description: `It refer the state of the customer. It is required for the new customer while creating the invoice.`,
  },
  {
    id: 'zip',
    name: 'zip',
    data_type: 'string',
    description: `It refer the zip of the customer. It is required for the new customer while creating the invoice.`,
  },
  {
    id: 'country',
    name: 'country',
    data_type: 'string',
    description: `It refer the country of the customer. It is required for the new customer while creating the invoice.`,
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
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description:
      'Customer Id is required when charge is created for the existing customer. By using customer id charge can be created with default ACH account or default Card.',
  },
  {
    id: 'cheque_number',
    name: 'cheque_number',
    data_type: 'string',
    description: `It is unique identifier which contains numbers. It is required when the payment method is cheque.`,
  },
  {
    id: 'cheque_notes',
    name: 'cheque_notes',
    data_type: 'string',
    description: `An arbitrary string which you can attach to a Charge object for the cheque payment method.`,
  },
  {
    id: 'interval',
    name: 'interval',
    data_type: 'string',
    description: `This attribute is required when the invoice is created for the subscription. The attribute value can be either 'daily', 'weekly', 'monthly', 'quartely' & 'yearly'.'`,
  },
  {
    id: 'allowed_cycles',
    name: 'allowed_cycles',
    data_type: 'string',
    description: `This attribute is required when the invoice is created for the subscription. The attribute value should contains only numbers.`,
  }
];

import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'subscription_id',
    name: 'subscription_id',
    data_type: 'string',
    description: 'Unique identifier for the subscription created from invoice or charge.',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description: 'It lists all the ach accounts related to the customer_id.',
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
    description: 'checking, saving, ledger. Account type is not required when charge is created for the existing customer with Saved account. Account Type is default set to checking. This attribute is used when the payment method is ACH.',
  },
  {
    id: 'card_id',
    name: 'card_id',
    data_type: 'string',
    description: `This attribute is required when a subscription is created for existing customer with saved card.`,
  },
  {
    id: 'account_id',
    name: 'account_id',
    data_type: 'string',
    description: `This attribute is required when a subscriptionb is created for existing customer with saved account.`,
  }
];

import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'id',
    name: 'id',
    data_type: 'string',
    description: 'Unique identifier for the object.',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description: 'Unique identifier for the object.',
  },
  {
    id: 'username',
    name: 'username',
    data_type: 'string',
    description: 'Unique identifier for the object. Which represents the customer id.',
  },
  {
    id: 'email',
    name: 'email',
    data_type: 'string',
    description: 'It is a required field. It will allow only valid email addresses and it should be unique for each customer.',
  },
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'It is a required field. It allows all types of characters with a maximum of 50 characters.',
  },
  {
    id: 'address',
    name: 'address',
    data_type: 'string',
    description: 'It is a required field. It allows all types of characters with a minimum of 8 characters.',
  },
  {
    id: 'city',
    name: 'city',
    data_type: 'string',
    description: 'It is a required field. It allows all types of characters.',
  },
  {
    id: 'state',
    name: 'state',
    data_type: 'string',
    description: 'It is a required field. It allows all types of characters.',
  },
  {
    id: 'zip',
    name: 'zip',
    data_type: 'string',
    description: 'It is a required field. It will allow only numbers.',
  },
  {
    id: 'country',
    name: 'country',
    data_type: 'string',
    description: 'It is a required field.',
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
    description: `Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'.`,
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
    id: 'payment_intent',
    name: 'payment_intent',
    data_type: 'string',
    description: `It is an optional field. The value can be either '1' or '0'`,
  },
  {
    id: 'save_card',
    name: 'save_card',
    data_type: 'string',
    description: `It is an optional field. The value can be either '1' or '0'. '1' is active and '0' is inactive.`,
  }
];

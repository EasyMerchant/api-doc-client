import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
    {
      id: 'name',
      name: 'name',
      data_type: 'string',
      description: 'It is a optionally required field when customer_id is not given. It allows all types of characters with a maximum of 50 characters.',
    },
    {
      id: 'email',
      name: 'email',
      data_type: 'string',
      description: 'It is an optionally required field when customer_id is not given. It will allow only valid email addresses.',
    },
    {
      id: 'customer_id',
      name: 'customer_id',
      data_type: 'string',
      description: 'Its an opionally required when name and email is not given. This is the customer_id for the customer associated with this card data.',
    },
    {
      id : "create_customer",
      name: "create_customer",
      data_type: "boolean",
      description:"It is an optional field. The value can be either 'true' or 'false'."
    },
    {
      id : "address",
      name: "address",
      data_type: "string",
      description:"It is a optionally required field. It allows all types of characters with a minimum of 8 characters."
    },
    {
      id : "city",
      name: "city",
      data_type: "string",
      description:"It is an optionally required field. It allows all types of characters."
    },
    {
      id : "state",
      name: "state",
      data_type: "string",
      description:"It is an optionally required field. It allows all types of characters."
    },
    {
      id : "zip",
      name: "zip",
      data_type: "integer",
      description:"It is an optionally required field. It will allow only numbers."
    },
    {
      id : "country",
      name: "country",
      data_type: "string",
      description:"It is an optionally required field."
    },
    {
      id : "cardholder_name",
      name: "cardholder_name",
      data_type: "string",
      description:"Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'."
    },
    {
      id: 'card_number',
      name: 'card_number',
      data_type: 'string',
      description: 'Its an opionally required when name and email is not given. This is the customer_id for the customer associated with this card data.',
    },
    {
      id : "exp_month",
      name: "exp_month",
      data_type: "integer",
      description:"Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 2 digit month format. example: '02' for 'February'."
    },
    {
      id : "exp_year",
      name: "exp_year",
      data_type: "integer",
      description:"Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'"
    },
    {
      id : "cvc",
      name: "cvc",
      data_type: "integer",
      description:"The Card Verification Code, or CVC*, is an extra code printed on your debit or credit card. With most cards (Visa, MasterCard, bank cards, etc.) it is the final three digits of the number printed on the signature strip on the reverse of your card. On American Express (AMEX) cards, it is usually a four digit code on the front."
    },
    {
      id : "token_only",
      name: "token_only",
      data_type: "boolean",
      description:"It is an optional field for storing the card without making any payment after 3D authentication. The value can be either 'true' or 'false'"
    },
    {
      id : "save_card",
      name: "save_card",
      data_type: "boolean",
      description:"It is an optional field. The value can be either 'true' or 'false'."
    }
];

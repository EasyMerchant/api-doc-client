import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'page_name',
    name: 'page_name',
    data_type: 'string',
    description: 'Allow all types of characters to add. It allows a maximum of 50 characters. Currently, it allows duplicate name also',
  },
  {
    id: 'amount_type',
    name: 'amount_type',
    data_type: 'string',
    description: 'It is a required field. The Value can be either ‘custom’ or ‘fixed’. If the value is set to ‘custom’ then the customer can give any amount while making payment. If the value is set to ‘fixed’ then the custom can pay only the amount mentioned in the payment page (fixed_amount).',
  },
  {
    id: 'fixed_amount',
    name: 'fixed_amount',
    data_type: 'string',
    description: 'It is Optional attribute. This attribute will be required when the amount_type is set to ‘fixed’. It allows only numbers with a maximum of 10 digits.',
  },
  {
    id: 'recurring_type',
    name: 'recurring_type',
    data_type: 'string',
    description: 'It is a required field. The Value can be either ‘custom’ or ‘fixed’. If the value is set to ‘custom’ then the customer can give any no. of cycles while making payment. If the value is set to ‘fixed’ then the custom can pay only for mentioned cycles in the payment page (no. of cycles).',
  },
  {
    id: 'no_of_cycle',
    name: 'no_of_cycle',
    data_type: 'string',
    description: 'It is Optional attribute. This attribute will be required when the recurring_type is set to ‘fixed’. It allows only numbers. If the value is set to ‘0’ it means that it has unlimited cycles.',
  },
  {
    id: 'payment_method',
    name: 'payment_method',
    data_type: 'string',
    description: 'It is an Optional field. The value can be either ‘1’ or ‘0’. If the value is set to ‘1’, customer notification will be sent once the payment is done.  If the value is set to ‘0’, customer notification will not be sent',
  },
  {
    id: 'payment_type',
    name: 'payment_type',
    data_type: 'string',
    description: 'It is a required field. The Value can be either ‘one_time’ or ‘recurring’ or ‘both’. Based on the payment type set , customers are able to make payment only for the specific payment type for the payment page.',
  },
  {
    id: 'customer_notify',
    name: 'customer_notify',
    data_type: 'string',
    description:
      'A number used to identify a bank account. Bank card number, the primary account number found on credit cards and bank cards. Account Number is not required when charge is created for the existing customer.',
  },
  {
    id: 'status',
    name: 'status',
    data_type: 'string',
    description: 'It is an Optional field. The value can be either ‘1’ or ‘0’. If the value is set to ‘1’, the page will be active and customers will be able to make payment using the payment link. If the value is set to ‘0’, the page will be inactive and if a customer tries to access the payment page then it will throw the page not found.',
  },
  {
    id: 'allow_quantity',
    name: 'allow_quantity',
    data_type: 'string',
    description: 'It is an Optional field. The value can be either ‘1’ or ‘0’. If the value is set to ‘1’, a new field will be added in the payment page. If the value is set to ‘0’, It will not ask for any new field label.',
  },
  {
    id: 'quantity_label',
    name: 'quantity_label',
    data_type: 'string',
    description: `It is Optional attribute. This attribute will be required when the ‘allow_quantity’ is set to ‘1’. It allows all types of characters with a maximum of 50 characters.`,
  },
  {
    id: 'interval_type',
    name: 'interval_type',
    data_type: 'string',
    description: `It is an Optional field. This field will be required when the payment_type is set to ‘recurring’ or ‘both’. It is an array the values can be ‘daily’, ‘monthly’, ‘weekly’, ‘quarterly’, ‘yearly’`,
  },
  {
    id: 'product_image_url',
    name: 'product_image_url',
    data_type: 'string',
    description: `It is an Optional field. It allows you to add Url of Images JPG, PNG, Gif format.`,
  },
  {
    id: 'exp_year',
    name: 'exp_year',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'`,
  },
  {
    id: 'onetime_payment',
    name: 'onetime_payment',
    data_type: 'string',
    description: `It is an Optional field. The value can be either ‘1’ or ‘0’. If the value is set to ‘1’, once the payment is done against the page then the page will be expired. If the value is set to ‘0’, the customers can make payment against the payment link for unlimited times.`,
  },
  {
    id: 'page_id',
    name: 'page_id',
    data_type: 'string',
    description: `It is an Unique Identifier object for a payment page.`,
  },
  {
    id: 'id',
    name: 'id',
    data_type: 'string',
    description: `It is an Unique Identifier object for a payment page.`,
  }
];

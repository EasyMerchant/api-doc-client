import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'page_name',
    name: 'page_name',
    data_type: 'string',
    description: 'Allow all types of characters to add. It allows a maximum of 50 characters. Currently, it allows duplicate name also',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description: 'When customer_id is given, we will pre-populate the customer data on payment screen.',
  },
  {
    id: 'card_partner_id',
    name: 'card_partner_id',
    data_type: 'string',
    description: 'ID of the payment partner that you want to proces the credit card payments, when not provided default credit card partner will be used.',
  },
  {
    id: 'ach_partner_id',
    name: 'ach_partner_id',
    data_type: 'string',
    description: 'ID of the payment partner that you want to proces the ACH payments, when not provided default ACH partner will be used.',
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
    description: 'It is an required field. The value can be either ‘card’ or ‘ach’ or `both`. If the value is set to `both` it supports both Card and ACH payment method or it will support only card or either ach.',
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
      'It is an Optional field. The value can be either true or false. If the value is set to true, customer notification will be sent once the payment is done.  If the value is set to false, customer notification will not be sent',
  },
  {
    id: 'status',
    name: 'status',
    data_type: 'string',
    description: 'It is an Optional field. The value can be either true or false. If the value is set to true, the page will be active and customers will be able to make payment using the payment link. If the value is set to false, the page will be inactive and if a customer tries to access the payment page then it will throw the page not found.<br><br> For List filters, Its an Optional field, This attribute is set to TRUE, Only active Payment Pages will be displayed. If set to FALSE then it will display only the inactive Payment Pages.',
  },
  {
    id: 'allow_quantity',
    name: 'allow_quantity',
    data_type: 'string',
    description: 'It is an Optional field. The value can be either true or false. If the value is set to true, a new field will be added in the payment page. If the value is set to false, It will not ask for any new field label.',
  },
  {
    id: 'quantity_label',
    name: 'quantity_label',
    data_type: 'string',
    description: `It is Optional attribute. This attribute will be required when the ‘allow_quantity’ is set to ‘yes’. It allows all types of characters with a maximum of 50 characters.`,
  },
  {
    id: 'interval_type',
    name: 'interval_type',
    data_type: 'string',
    description: `It is an Optional field. This field will be required when the payment_type is set to ‘recurring’ or ‘both’. It is an array the values can be 'daily', 'weekly', 'monthly', 'quartely' , 'half yearly', 'yearly', 'every 2 years', 'every 3 years', 'every 4 years', & 'every 5 years' will be displayed.`,
  },
  {
    id: 'start_date',
    name: 'start_date',
    data_type: 'date',
    description: `Date when card/account will be charged, you can use the future date (up to 30 days) to start the subscription.`,
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
    id: 'return_url',
    name: 'return_url',
    data_type: 'string',
    description: `It is an Optional field. Users will be redirected to the given return url after successful payment`,
  },
  {
    id: 'single_use',
    name: 'single_use',
    data_type: 'string',
    description: `It is an Optional field. The value can be either true or false. If the value is set to true, once the payment is done against the page then the page will be expired. If the value is set to false, the customers can make payment against the payment link for unlimited times. <br> <br> For List page filters, If it set to TRUE, It will display only the Pages marked as single_use while creation/updation`,
  },
  {
    id: 'unique_id',
    name: 'unique_id',
    data_type: 'string',
    description: `It is an Unique Identifier object for a payment page.`,
  },
  {
    id: 'link',
    name: 'link',
    data_type: 'string',
    description: `It returns the Unique URL for the Payment Page.`,
  },
  {
    id: 'transactions',
    name: 'transactions',
    data_type: 'object',
    description:
      'Paginated list of transactions made on this HPP page. Returns empty [] when there is no transactions',
  },
  {
    id: 'metadata',
    name: 'metadata',
    data_type: 'object',
    description:
      'Set of key-value pairs that you can attach to a transaction.  You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.<br><br>To update, Replace values for existing keys and add new key-value pairs in an API call.For example, you can update a metadata object with an existing key-value pair of "version": "1.2.1" to "version": "2.0.0". You can also add new metadata, such as the "author_name": "john doe" key-value pair in the example below, to the existing metadata.',
  },
  {
    id: 'start_date',
    name: 'start_date',
    data_type: 'string',
    description:
      'The start date of the invoice is required for the payment type "recurring". The start date can be either current date or future date. The Subscription starts renewal based on the start date. If the start_date in the hosted payment page is empty, it considers start date for the subscription as current date.',
  },
  {
    id: 'search',
    name: 'search',
    data_type: 'string',
    description:
      'The search keyword filters the page name.',
  },
  {
    id: 'page_expired',
    name: 'page_expired',
    data_type: 'boolean',
    description:
      'It is Optional attribute. This attribute is set to TRUE, It will filters only the expired payment page.',
  },
  {
    id: 'hpp_fees',
    name: 'fees',
    data_type: 'array',
    description: `fees represent the component items .Here you can pass fee id or name with amount or prcent.`,
  },
  {
    id: 'hpp_discounts',
    name: 'discounts',
    data_type: 'array',
    description: `discounts represent the component items .Here you can pass discount id or coupon_code.`,
  }
];

import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'invoice_num',
    name: 'invoice_num',
    data_type: 'string',
    description: 'Unique identifier for the invoice object. This attribute is required for the invoice created with payment mode pay later.',
  },
  {
    id: 'charge_id',
    name: 'transaction_id',
    data_type: 'string',
    description: 'Unique identifier to refer the charge using the transaction_id.',
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
    description: 'The name of the new customer you are creating.',
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
    id: 'entry_class_code',
    name: 'entry_class_code',
    data_type: 'string',
    description:
      'A Standard Entry Class Code (SEC Code) identifies a specific payment application. The attributes value can be PPD, TEL, WEB, CCD. It is optional for the payment mode ACH. ',
  },
  {
    id: 'metadata',
    name: 'metadata',
    data_type: 'object',
    description:
      'Set of key-value pairs that you can attach to a transaction.  You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description:
      'Customer Id is required when charge is created for the existing customer. By using customer id charge can be created with default ACH account or default Card.',
  },
  {
    id: 'charge_email',
    name: 'email',
    data_type: 'string',
    description: 'Email address of the customer. It is required for creating charge for the New customer.',
  },
  {
    id: 'charge_card_number',
    name: 'card_number',
    data_type: 'string',
    description: `A credit card number is usually 15-16 digits long, but it could be as many as 19 digits or as few as 13 in some cases. example: 4111-1111-1111-1111. It is used when the payment method is 'Card'.`,
  },
  {
    id: 'charge_cardholder_name',
    name: 'cardholder_name',
    data_type: 'string',
    description: `Refers to the person who owns a credit or debit card. The cardholder name is the name of the owner, printed on the front of the card. Example: 'John Doe'. It is used when the payment method is 'Card'.`,
  },
  {
    id: 'charge_exp_month',
    name: 'exp_month',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 2 digit month format. example: '02' for 'February'. It is used when the payment method is 'Card'.`,
  },
  {
    id: 'charge_exp_year',
    name: 'exp_year',
    data_type: 'string',
    description: `Expiration dates appear on the front or back of a credit card in a two-digit month/year format. This parameter is required as a 4 digit year format. example: '2023'. It is used when the payment method is 'Card'.`,
  },
  {
    id: 'charge_cvc',
    name: 'cvc',
    data_type: 'string',
    description: `The Card Verification Code, or CVC*, is an extra code printed on your debit or credit card. With most cards (Visa, MasterCard, bank cards, etc.) it is the final three digits of the number printed on the signature strip on the reverse of your card. On American Express (AMEX) cards, it is usually a four digit code on the front. It is used when the payment method is 'Card'.`,
  },
  {
    id: 'charge_currency',
    name: 'currency',
    data_type: 'string',
    description: `A system of money in general use in a particular country. In case of Bitcoin, use 'fiat' or 'satoshi'. The default currency value will be 'USD'.`,
  },
  {
    id: 'charge_payment_mode',
    name: 'payment_mode',
    data_type: 'string',
    description: `The mode of payment used for creating the charge. Use either 'auth_and_capture' or 'auth_only' to make charge. Payment Mode 'auth_only can be applicable only to the payment method 'Card'.`,
  },
  {
    id: 'charge_payment_method',
    name: 'payment_method',
    data_type: 'string',
    description: `The method of payment used for creating the charge. Use either 'Cheque' or 'Cash' to make charge.`,
  },
  {
    id: 'charge_save_card',
    name: 'save_card',
    data_type: 'number',
    description: `It is to save the current card that was used to capture the payment for future use. The value can be either '0' or '1'. It is used when the payment method is 'Card'. The Value '1' will Save the creating card.`,
  },
  {
    id: 'charge_is_default',
    name: 'is_default',
    data_type: 'number',
    description: `It is to save the newly added account or card to set default to make payments. The value can be either '0' or '1'. The Value '1' will make the creating account or card is set to default.`,
  },
  {
    id: 'charge_save_account',
    name: 'save_account',
    data_type: 'number',
    description: `It is to save the current account that was used to capture the payment for future use. The value can be either '0' or '1'. It is used when the payment method is 'ACH'. The Value '1' will Save the creating account.`,
  },
  {
    id: 'username',
    name: 'username',
    data_type: 'string',
    description: `It is unique identifier for the customer. It is required for the new customer while creating the charge.`,
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
    id: 'payment_type',
    name: 'payment_type',
    data_type: 'string',
    description: `This attribute is required when the charge is created for the subscription. The attribute value can be either 'one time' or recurring'.'`,
  },
  {
    id: 'interval',
    name: 'interval',
    data_type: 'string',
    description: `This attribute is required when the charge is created for the subscription. The attribute value can be either 'daily', 'weekly', 'monthly', 'quartely' , 'half yearly', 'yearly', 'every 2 years', 'every 3 years', 'every 4 years', & 'every 5 years'. If the payment method is ach then daily interval will not be displayed.'`,
  },
  {
    id: 'allowed_cycles',
    name: 'allowed_cycles',
    data_type: 'string',
    description: `This attribute is required when the charge is created for the subscription. The attribute value should contains only numbers. If it is mentioned as '0' then it will be considered as infinite cycles`,
  },
  {
    id: 'start_date',
    name: 'start_date',
    data_type: 'date',
    description: `(optional) The start date of the recurring payment in MM/DD/YYYY format. The start date can be either current date or future date. The Subscription starts renewal based on the start date and start date is based on the time zone set in the users > My account.`,
  },
  {
    id: 'order_number',
    name: 'order_number',
    data_type: 'string',
    description: `order_number passed in with the transaction. As long as the order number is unique we allow duplicate payments (same amount and same payment method more than once within 2 minutes)`,
  },
  {
    id: 'charge_fees',
    name: 'fees',
    data_type: 'array',
    description: `Fees represent the various component items. You can input either the fee id or name along with the associated amount or percentage.`,
  },
  {
    id: 'fees[][id]',
    name: 'fees[][id]',
    data_type: 'string',
    description: `The unique identifier for the fee.you can pass fee id or name along with the associated amount or percentage.`,
  },
  {
    id: 'fees[][name]',
    name: 'fees[][name]',
    data_type: 'string',
    description: `The name of the fee.This field along with fee amount or percentage.`,
  },
  {
    id: 'fees[][amount]',
    name: 'fees[][amount]',
    data_type: 'string',
    description: `The fee amount is a conditional required field. If you provide a percentage, this field is not required.`,
  },
  {
    id: 'fees[][percent]',
    name: 'fees[][percent]',
    data_type: 'string',
    description: `The fee percentage is a conditional required field. If you provide an amount, this field is not required. It should be in decimal format. For example, 10% = 0.1.`,
  },

  {
    id: 'charge_discounts',
    name: 'discounts',
    data_type: 'array',
    description: `Discounts represent the various component items. You can provide either the discount id or coupon_code here.`,
  },
  {
    id: 'discounts[][id]',
    name: 'discounts[][id]',
    data_type: 'string',
    description: `The unique identifier for the discount.The discount id is conditional required field. If you provide a coupon_code, this field is not required.`,
  },
  {
    id: 'discounts[][coupon_code]',
    name: 'discounts[][coupon_code]',
    data_type: 'string',
    description: `coupon code for the discount.The coupon_code is conditional required field. If you provide a discount id, this field is not required.`,
  },
  {
    id: 'discounts[][name]',
    name: 'discounts[][name]',
    data_type: 'string',
    description: `coupon name for the discount.The name is conditional required field. If you provide a discount id, this field is not required.`,
  },
  {
    id: 'vendorInfo',
    name: 'vendorInfo',
    data_type: 'array',
    description: `vendorInfo represent the various component item. You can provide the vendor id along with commisionAmount or commissionPercent here.`,
  },
  {
    id: 'vendorInfo[][vendorId]',
    name: 'vendorInfo[][vendorId]',
    data_type: 'string',
    description: `The unique identifier for the vendor.`,
  },
  {
    id: 'vendorInfo[][commissionPercent]',
    name: 'vendorInfo[][commissionPercent]',
    data_type: 'string',
    description: `The percentage of vendor's commission.The commission percentage is a conditional required field. If you provide a commission amount, this field is not required.`,
  },
  {
    id: 'vendorInfo[][commissionAmount]',
    name: 'vendorInfo[][commissionAmount]',
    data_type: 'string',
    description: `The commission amount is a conditional required field. If you provide a commission percent, this field is not required. `,
  },
  {
    id: 'secure_token',
    name: 'secure_token',
    data_type: 'string',
    description: `It is unique identifier which contains alphanumeric value. This will be used to validate and pass 3D secure authentication to the payment processor.`,
  }

];

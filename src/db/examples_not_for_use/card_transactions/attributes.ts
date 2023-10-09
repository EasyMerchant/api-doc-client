import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'request-id',
    name: 'RequestId',
    data_type: 'string',
    description: 'Request identifier, unique for a merchant.',
  },
  {
    id: 'request-type',
    name: 'RequestType',
    data_type: 'string',
    description: `The type of request that you want to process. For example, "Sale", "Refund", "Close Batch", "Void", "Resale", "ReAuthorize", "Settle", "Generate Token", "Tip Adjust"`,
  },
  {
    id: 'transaction-source',
    name: 'TransactionSource',
    data_type: 'string',
    description: `Method or application or service that initiates a call.`,
  },
  {
    id: 'transaction-id',
    name: 'TransactionId',
    data_type: 'string',
    description: `A unique identifier of transaction.`,
  },
  {
    id: 'amount',
    name: 'Amount',
    data_type: 'object',
    description: `Amount and currency of the authorized transaction.`,
    child_attributes: [
      {
        name: 'Amount.Amount',
        data_type: 'float',
        description: `Amount of the transaction.`,
        required: true,
      },
      {
        name: 'Amount.Currency',
        data_type: 'string',
        description: `Currency of transaction.`,
      },
      {
        name: 'Amount.FeeCovered',
        data_type: 'float',
        description: `Indicates an amount of transaction fee/charge covered by the customer.`,
        remove_in: ['adjust-tip-on-card'],
      },
    ],
  },
  {
    id: 'payment-method',
    name: 'PaymentMethod',
    data_type: 'object',
    description: `Payment method being used for a transaction (Token, Expiration date, Security Code or BillingInfo etc.)`,
    child_attributes: [
      {
        name: 'PaymentMethod.Token',
        data_type: 'string',
        description: `Tokenized representaion of a credit or debit card.`,
        required: true,
        for: ['sale-using-token'],
      },
      {
        name: 'PaymentMethod.VaultKey',
        data_type: 'string',
        description: `String representation of a credit or debit card`,
        required: true,
        for: ['authorize-card', 'sale-using-vault'],
      },
      {
        name: 'PaymentMethod.VaultId',
        data_type: 'string',
        description: `Reference Id of a vault record.`,
        required: true,
        for: ['sale-using-vault'],
      },
      {
        name: 'PaymentMethod.CVV',
        data_type: 'string',
        description: `Security Code.`,
        required: true,
        for: ['sale-using-vault', 'sale-using-token'],
      },
      {
        name: 'PaymentMethod.ExpMonthYear',
        data_type: 'string',
        description: `Expiration Month and Year ("MM/YY" format).`,
        required: true,
        for: ['sale-using-token'],
      },
      {
        name: 'PaymentMethod.CategoryText',
        data_type: 'string',
        description: `Payment method category.`,
        required: false,
        for: ['sale-using-vault'],
      },
      {
        name: 'PaymentMethod.CreditCard',
        data_type: 'object',
        description: `Includes CcNumber (Credit Card Number), ExpMonthYear (Expiration Month and Year), CVV (Security code).`,
        required: true,
        for: [
          'run-a-sale',
          'authorize-card',
          'standalone-refund-a-card',
          'recurring-card-sale',
          'generate-token',
        ],
        child_attributes: [
          {
            name: 'CreditCard.CcNumber',
            data_type: 'string',
            description: `Reference Id of a vault record.`,
            required: true,
          },
          {
            name: 'CreditCard.ExpMonthYear',
            data_type: 'string',
            description: `Expiration Month and Year ("MM/YY" format).`,
            required: true,
            optional_for: ['generate-token'],
          },
          {
            name: 'CreditCard.CVV',
            data_type: 'string',
            description: `Security Code.`,
            required: true,
          },
        ],
      },
      {
        name: 'PaymentMethod.BillingAddress',
        data_type: 'object',
        description: `Billing Information. First and Last Name, Address etc.`,
        for: [
          'authorize-card',
          'run-a-sale',
          'sale-using-token',
          'sale-using-vault',
          'standalone-refund-a-card',
          'recurring-card-sale',
        ],
        child_attributes: [
          {
            name: 'BillingAddress.FirstName',
            data_type: 'string',
            description: `First Name of card owner.`,
          },
          {
            name: 'BillingAddress.LastName',
            data_type: 'string',
            description: `Last Name of card owner.`,
          },
          {
            name: 'BillingAddress.Address',
            data_type: 'string',
            description: `Address (Street and number).`,
          },
          {
            name: 'BillingAddress.Address2',
            data_type: 'string',
            description: `Address 2 (Street and number).`,
          },
          {
            name: 'BillingAddress.PostalCode',
            data_type: 'string',
            description: `Zip or Postal of the card owner`,
          },
          {
            name: 'BillingAddress.State',
            data_type: 'string',
            description: `State, Province or Region.`,
          },
          {
            name: 'BillingAddress.Country',
            data_type: 'string',
            description: `Country of the card owner. Abbreviated country name.`,
          },
          {
            name: 'BillingAddress.Telephone',
            data_type: 'string',
            description: `Phone number of the card owner`,
          },
          {
            name: 'BillingAddress.Email',
            data_type: 'string',
            description: `Email Address of the card owner`,
          },
        ],
      },
    ],
  },
  {
    id: 'shipping-address',
    name: 'ShippingAddress',
    data_type: 'object',
    description: `Shipping Information. First and Last Name, Address etc.`,
    child_attributes: [
      {
        name: 'ShippingAddress.FirstName',
        data_type: 'string',
        description: `First Name of a customer the goods to be shipped to.`,
      },
      {
        name: 'ShippingAddress.LastName',
        data_type: 'string',
        description: `Last Name of a customer the goods to be shipped to.`,
      },
      {
        name: 'ShippingAddress.Address',
        data_type: 'string',
        description: `Address (Street and number) of a customer to the goods to be shipped.`,
      },
      {
        name: 'ShippingAddress.Address2',
        data_type: 'string',
        description: `Address (continued) of a customer the goods to be shipped to..`,
      },
      {
        name: 'ShippingAddress.PostalCode',
        data_type: 'string',
        description: `Zip or Postal code where the goods are to be shipped.`,
      },
      {
        name: 'ShippingAddress.State',
        data_type: 'string',
        description: `State, Province or Region where the goods are to be shipped.`,
      },
      {
        name: 'ShippingAddress.Country',
        data_type: 'string',
        description: `Country of a customer. Abbreviated country name where the goods are to be shipped.`,
      },
      {
        name: 'ShippingAddress.Telephone',
        data_type: 'string',
        description: `Phone number of a customer the goods to be shipped to.`,
      },
      {
        name: 'ShippingAddress.Email',
        data_type: 'string',
        description: `Email Address of a customer the goods to be shipped to.`,
      },
    ],
  },
  {
    id: 'level-2-data',
    name: 'Level2Data',
    data_type: 'object',
    description: `Level 2 Data (Tax1Amount, Tax1Number, etc.)`,
    child_attributes: [
      {
        name: 'Level2Data.CustomerRefNo',
        data_type: 'string',
        description: `Customer Reference Number.`,
      },
      {
        name: 'Level2Data.LocalTaxFlag',
        data_type: 'boolean',
        description: `Indicates if local taxes apply`,
      },
      {
        name: 'Level2Data.PurchaseCard',
        data_type: 'boolean',
        description: `Indicates if purchase card.`,
      },
      {
        name: 'Level2Data.ShippingZip',
        data_type: 'string',
        description: `Postal code where the goods will be shipped..`,
      },
      {
        name: 'Level2Data.TaxAmount',
        data_type: 'string',
        description: `Tax Amount to be charged.`,
      },
    ],
  },
  {
    id: 'level-3-data',
    name: 'Level3Data',
    data_type: 'object',
    description: `Level 3 Data (Order details, etc.)`,
    child_attributes: [
      {
        name: 'Level3Data.Number',
        data_type: 'string',
        description: 'SKU of the purchased item Optional',
      },
      {
        name: 'Level3Data.Quantity',
        data_type: 'string',
        description: 'Quantity',
      },
      {
        name: 'Level3Data.Description',
        data_type: 'string',
        description: 'Description of the purchased item',
      },
      {
        name: 'Level3Data.UnitOfMeasure',
        data_type: 'string',
        description: 'Unit Of Measure of the purchased item',
      },
      {
        name: 'Level3Data.ItemDiscountAmount',
        data_type: 'float',
        description: 'Discount Amount of the purchased item',
      },
      {
        name: 'Level3Data.ItemDiscountRate',
        data_type: 'float',
        description: 'Discount Rate of the purchased item ',
      },
    ],
  },
  {
    id: 'dt-close-date',
    name: 'DtCloseDate',
    data_type: 'date',
    description: `The date that the transaction should post/settle.`,
  },
  {
    id: 'recurring-data',
    name: 'RecurringData',
    data_type: 'object',
    description: `Configurational settings for a recurring transaction. `,
    child_attributes: [
      {
        name: 'RecurringData.RecurringType',
        data_type: 'number',
        description: `Predefined numeric entity of recurring frequency. Daily, weekly, monthly etc.`,
      },
      {
        name: 'RecurringData.RecurringStartDate',
        data_type: 'date',
        description: `Start date and time of recurring series. Format YYYY-MM-DD or MM/DD/YYYY.`,
      },
      {
        name: 'RecurringData.RecurringEndDate',
        data_type: 'date',
        description: `End date and time of recurring series. Format YYYY-MM-DD or MM/DD/YYYY`,
      },
    ],
  },
  {
    id: 'industry',
    name: 'Industry',
    data_type: 'string',
    description: `String value that can be used to provide an industry information. Available options are: MOTO, Retail, ECommerce, Restaurant and Lodging. Optional. If not provided then the account configured value will be used.`,
  },
  {
    id: 'custom-data',
    name: 'CustomData',
    data_type: 'object',
    description: `Configurational settings for recurring transaction.`,
  },
  {
    id: 'custom-data-model',
    name: 'CustomDataModel',
    data_type: 'object',
    description: `Represent the key-value (dictionary) object.`,
    child_attributes: [
      {
        name: 'CustomDataName',
        data_type: 'string',
        description: 'Name of the custom data',
      },
      {
        name: 'CustomDataValue',
        data_type: 'string',
        description: 'Value of the custom data.',
      },
    ],
  },
  {
    id: 'success-email-string',
    name: 'SuccessEmail',
    data_type: 'string',
    description: `The email to send a successfull notification.`,
  },
  {
    id: 'success-email-array',
    name: 'SuccessEmail',
    data_type: 'object',
    description: `An array of emails to send successfull notification.`,
  },
  {
    id: 'fail-email',
    name: 'FailEmail',
    data_type: 'object',
    description: `An array of emails to send failed notification.`,
  },
];

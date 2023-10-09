import { IService } from '~/interfaces';

export const services: IService[] = [
  {
    id: 'authorize-card',
    name: 'Authorize Card',
    description: [
      `This method authorizes payment on a credit/debit card transaction. The payment will need to be captured later to settle it.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: false,
          attributeId: 'payment-method',
        },
        {
          required: false,
          attributeId: 'shipping-address',
        },
        {
          required: false,
          attributeId: 'level-2-data',
        },
        {
          required: false,
          attributeId: 'dt-close-date',
        },
        {
          required: false,
          attributeId: 'recurring-data',
        },
        {
          required: false,
          attributeId: 'industry',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: 'boolean',
          OrderId: 'null or string',
          CustomerToken: 'null or string',
          RecurringId: 'null or string',
          AmountApproved: 'number',
          AuthResponse: 'string',
          RequestId: 'string',
          ErrorCode: 'number',
          Errors: 'null or object',
          TransactionId: 'string',
        },
      },
    },
  },
  {
    id: 'run-a-sale',
    name: 'Run a Sale',
    description: [
      'This method authorizes and captures a payment on a credit/debit card. It is recommended to use this method to process a transaction from being authorized to captured in one call.',
    ],
    endpoint: {
      method: 'post',
      url: '/v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
        {
          required: false,
          attributeId: 'shipping-address',
        },
        {
          required: false,
          attributeId: 'level-2-data',
        },
        {
          required: false,
          attributeId: 'level-3-data',
        },
        {
          required: false,
          attributeId: 'dt-close-date',
        },
        {
          required: false,
          attributeId: 'recurring-data',
        },
        {
          required: false,
          attributeId: 'custom-data',
        },
        {
          required: false,
          attributeId: 'custom-data-model',
        },
        {
          required: false,
          attributeId: 'industry',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          FeeResponse: {
            FeeAmount: {
              Amount: '{money}',
              Currency: '{string}',
            },
            FeeRuleItemId: '{number}',
          },
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'sale-using-token',
    name: 'Sale Using Token',
    description: [
      `This method runs a card sale (authorize and capture) using a payment token. This method can be used if you already have payment details stored as a token. A token is an alphanumeric string created using encryption to safely store, use and transfer payment details. Running a sale using token is available for Card transactions.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
        {
          required: false,
          attributeId: 'shipping-address',
        },
        {
          required: false,
          attributeId: 'level-2-data',
        },
        {
          required: false,
          attributeId: 'level-3-data',
        },
        {
          required: false,
          attributeId: 'dt-close-date',
        },
        {
          required: false,
          attributeId: 'recurring-data',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          FeeResponse: {
            FeeAmount: {
              Amount: '{money}',
              Currency: '{string}',
            },
            FeeRuleItemId: '{number}',
          },
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'sale-using-vault',
    name: 'Sale Using Vault',
    description: [
      `This method runs a sale (authorize and capture card payment) using a customer vault. This method can be used if you already have customer and their payment details stored in the customer vault. Customer Vault is your merchant account's customer database. An individual customer's vault can hold their personal and payment details.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
        {
          required: false,
          attributeId: 'shipping-address',
        },
        {
          required: false,
          attributeId: 'level-2-data',
        },
        {
          required: false,
          attributeId: 'level-3-data',
        },
        {
          required: false,
          attributeId: 'dt-close-date',
        },
        {
          required: false,
          attributeId: 'recurring-data',
        },
        {
          required: false,
          attributeId: 'industry',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          FeeResponse: {
            FeeAmount: {
              Amount: '{money}',
              Currency: '{string}',
            },
            FeeRuleItemId: '{number}',
          },
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'refund-transaction',
    name: 'Refund Transaction',
    description: [
      `This method can be used to refund(credit) a payment that has been previously captured and settled.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'close-batch',
    name: 'Close Batch',
    description: [
      `This method is used to settle all pending transactions immediately that have been previously captured.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'transaction-id',
        },
        {
          required: false,
          attributeId: 'success-email-string',
        },
        {
          required: false,
          attributeId: 'success-email-array',
        },
        {
          required: false,
          attributeId: 'fail-email',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          ResponseId: '{uuid}',
          Status: '{string}',
          StatusMessage: '{string}',
        },
      },
    },
  },
  {
    id: 'void-a-transaction',
    name: 'Void a Transaction',
    description: [
      `This method is used to cancel a previously captured but not settled payment request.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'transaction-id',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'standalone-refund-a-card',
    name: 'Standalone Refund a Card',
    description: [
      `This method is used to process a refund(credit) a card with no relationship to any original payment captured. It can be used to issue refunds for transactions older than 60 days or expired, lost or stolen card.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
  {
    id: 'resale-card',
    name: 'Resale Card',
    description: [
      `This method authorizes and captures a new transaction using a previously settled transaction's payment details. This method is useful to avoid re-entering payment details.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'amount',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string}',
        },
      },
    },
  },
  {
    id: 'reauthorize-card',
    name: 'Reauthorize Card',
    description: [
      `This method is used to authorize a new transaction based on a previously settled payment's details. This method helps you avoid re-entering payment details.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'transaction-id',
        },
        {
          required: true,
          attributeId: 'amount',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string}',
        },
      },
    },
  },
  {
    id: 'settle',
    name: 'Settle',
    description: [
      `This method is used to submit authorized card payments for batch settlement. This method can be used if you place hold on card(s) using the Authorize or Reauthorize call.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'transaction-id',
        },
        {
          required: true,
          attributeId: 'amount',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{number}',
          RecurringId: '{string:uuid}',
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string}',
        },
      },
    },
  },
  {
    id: 'recurring-card-sale',
    name: 'Recurring Card Sale',
    description: [
      `This method is used to setup a recurring transaction running on a Credit/Debit card. Available recurring frequency options are: <ul><li>Daily</li><li>Weekly [Monday=1, Sunday=7]</li><li>BiWeekly</li><li>Monthly</li><li>BiMonthly</li><li>Quarterly</li><li>SemiAnnually</li><li>Annually</li></ul>`,
      `<strong>Note:</strong> If a recurring transaction is inactive, it will not be displayed under Customer Vault Detail > Recurring Summary in the Deluxe Payment Platform web portal`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },

        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
        {
          required: true,
          attributeId: 'recurring-data',
          all_child_attributes_required: true,
        },
        {
          required: false,
          attributeId: 'shipping-address',
        },
        {
          required: false,
          attributeId: 'level-2-data',
        },
        {
          required: false,
          attributeId: 'level-3-data',
        },
        {
          required: false,
          attributeId: 'dt-close-date',
        },
        {
          required: false,
          attributeId: 'custom-data',
        },
        {
          required: false,
          attributeId: 'custom-data-model',
        },
        {
          required: false,
          attributeId: 'industry',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          IsPartial: '{boolean}',
          OrderId: '{string}',
          CustomerToken: '{null or string}',
          RecurringId: '{string}',
          VaultId: '{string}',
          Fee: '{null}',
          Token: '{string}',
          TransactionRecordID: '{number}',
          AmountApproved: '{number}',
          AuthResponse: '{string}',
          RequestId: '{string}',
          ErrorCode: '{number}',
          Errors: '{null}',
          TransactionId: '{string}',
        },
      },
    },
  },
  {
    id: 'generate-token',
    name: 'Generate Token',
    description: [
      `This method is used to generate a payment detail token. A token is an encrypted string that de-identifies cardholder data or bank account data and makes it secure for online transactions. The returned token can be used as a payment method to Authorize or Capture a transaction.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },

        {
          required: true,
          attributeId: 'amount',
        },
        {
          required: true,
          attributeId: 'payment-method',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          ErrorCode: '{number}',
          Status: '{string}',
          StatusMessage: '{string}',
        },
      },
    },
  },
  {
    id: 'adjust-tip-on-card',
    name: 'Adjust Tip on Card',
    description: [
      `This method can be used to adjust the tip amount of a previously captured but unsettled payment request.`,
    ],
    endpoint: {
      method: 'post',
      url: 'v1/family/transactions',
      params: [
        {
          required: true,
          attributeId: 'request-id',
        },
        {
          required: true,
          attributeId: 'request-type',
        },
        {
          required: true,
          attributeId: 'transaction-source',
        },
        {
          required: true,
          attributeId: 'transaction-id',
        },
        {
          required: true,
          attributeId: 'amount',
        },
      ],
      response: {
        type: 'application/json',
        data: {
          BatchNumber: '{string}',
          AmountApproved: '{money}',
          AuthResponse: '{string}',
          RequestId: '{string:uuid}',
          ErrorCode: '{number}',
          Errors: ['{string}'],
          TransactionId: '{string:uuid}',
        },
      },
    },
  },
];

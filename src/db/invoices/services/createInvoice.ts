import { IService } from '~/interfaces';

export const createInvoice: IService = {
  id: 'create_invoice',
  name: 'Create Invoice',
  description: [
    `This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you finalize the invoice, which allows you to pay or send the invoice to your customers.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/invoices',
    params: [
      {
        required: false,
        attributeId: 'name',
      },
      {
        required: false,
        attributeId: 'email',
      },
      {
        required: false,
        attributeId: 'username',
      },
      {
        required: false,
        attributeId: 'address',
      },
      {
        required: false,
        attributeId: 'city',
      },
      {
        required: false,
        attributeId: 'state',
      },
      {
        required: false,
        attributeId: 'zip',
      },
      {
        required: false,
        attributeId: 'country',
      },
      {
        required: true,
        attributeId: 'invoice_description',
      },
      {
        required: true,
        attributeId: 'invoice_date_due',
      },
      {
        required: false,
        attributeId: 'invoice_send_now',
      },
      {
        required: true,
        attributeId: 'invoice_payment_mode',
      },
      {
        required: true,
        attributeId: 'invoice_currency',
      },
      {
        required: false,
        attributeId: 'invoice_items',
      },
      {
        required: true,
        attributeId: 'invoice_payment_type',
      },
      {
        required: true,
        attributeId: 'invoice_card_number',
      },
      {
        required: true,
        attributeId: 'invoice_exp_month',
      },
      {
        required: true,
        attributeId: 'invoice_exp_year',
      },
      {
        required: true,
        attributeId: 'invoice_cvc',
      },
      {
        required: true,
        attributeId: 'routing_number',
      },
      {
        required: true,
        attributeId: 'account_number',
      },
      {
        required: true,
        attributeId: 'account_type',
      },
      {
        required: true,
        attributeId: 'invoice_cardholder_name',
      },
      {
        required: true,
        attributeId: 'invoice_customer_id',
      },
      {
        required: false,
        attributeId: 'cheque_number',
      },
      {
        required: false,
        attributeId: 'cheque_notes',
      },
      {
        required: false,
        attributeId: 'card_id',
      },
      {
        required: false,
        attributeId: 'save_card',
      },
      {
        required: false,
        attributeId: 'is_default',
      }
   ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Invoice is created successfully. ',
        charge_id: 'cha_6424eea5f091c5160',
        invoice_num: 2,
      },
    },
  },
};

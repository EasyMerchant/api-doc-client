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
        required: true,
        attributeId: 'invoice_customer',
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
        required: true,
        attributeId: 'invoice_payment_mode',
      },
      {
        required: true,
        attributeId: 'invoice_payment_type',
      },
      {
        required: true,
        attributeId: 'invoice_currency',
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
        attributeId: 'invoice_cardholder_name',
      },
      {
        required: false,
        attributeId: 'invoice_items',
      },
      {
        required: false,
        attributeId: 'invoice_send_now',
      },
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

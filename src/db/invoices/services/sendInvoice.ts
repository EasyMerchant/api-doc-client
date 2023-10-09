import { IService } from '~/interfaces';

export const sendInvoice: IService = {
  id: 'send_invoice',
  name: 'Send Invoice',
  description: [
    `Invoices will be automatically sent to customers according to your subscriptions settings. However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/invoices/send',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Invoice notification sent successfully. ',
      },
    },
    params: [
      {
        required: true,
        attributeId: 'invoice_num',
      },
    ],
  },
};

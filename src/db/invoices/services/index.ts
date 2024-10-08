import { IService } from '~/interfaces';
import { listAllInvoices } from './listAllInvoices';
import { createInvoice } from './createInvoice';
import { sendInvoice } from './sendInvoice';
import { invoiceTransactions } from './invoiceTransactions';

export const services: IService[] = [
  // list array items serial wise
  listAllInvoices,
  createInvoice,
  sendInvoice,
  invoiceTransactions
];

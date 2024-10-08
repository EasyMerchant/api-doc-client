import { IService } from '~/interfaces';
import { listAllInvoices } from './listAllInvoices';
import { createInvoice } from './createInvoice';
import { sendInvoice } from './sendInvoice';
import { findInvoice } from './findInvoice';

export const services: IService[] = [
  // list array items serial wise
  listAllInvoices,
  createInvoice,
  sendInvoice,
  findInvoice
];

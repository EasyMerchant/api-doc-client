import { IApiData } from '~/interfaces';
import { error_codes } from './error_codes';
import { authentication } from './authentication';
import { introduction } from './introduction';
import { cards } from './cards';
import { customer } from './customer';
import { charges } from './charges';
import { invoices } from './invoices';
import { refunds } from './refunds';
import { terminal } from './terminal';
import { vendors } from './vendors';

export const data: IApiData[] = [
  introduction,
  authentication,
  error_codes,
  customer,
  cards,
  charges,
  invoices,
  refunds,
  terminal,
  vendors,
];

import { IApiData } from '~/interfaces';
import { error_codes } from './error_codes';
import { authentication } from './authentication';
import { introduction } from './introduction';
import { cards } from './cards';
import { customer } from './customer';
import { charges } from './charges';
import { invoices } from './invoices';
import { refunds } from './refunds';
import { vendors } from './vendors';
import { subscription } from './subscription';
import { accounts } from './accounts';
import { paymentintent } from './paymentIntent';
import { hostedPaymentPage } from './hostedPaymentPage';
import { paymentPartners } from './paymentPartners';

export const data: IApiData[] = [
  introduction,
  authentication,
  error_codes,
  customer,
  cards,
  accounts,
  charges,
  subscription,
  invoices,
  refunds,
  paymentintent,
  hostedPaymentPage,
  paymentPartners,
  vendors,
];

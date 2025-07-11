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
import { fees } from './fees';
import { paymentintent } from './paymentIntent';
import { hostedPaymentPage } from './hostedPaymentPage';
import { paymentPartners } from './paymentPartners';
import { webhookConfig } from './webhookConfig';
import { payouts } from './payouts';
import { discounts } from './discounts';
import { secureAuthentication } from './secureAuthentication';

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
  webhookConfig,
  payouts,
  fees,
  discounts,
  secureAuthentication
];

import { IService } from '~/interfaces';

import { hostedPaymentPageAdd } from './hostedPaymentPageAdd';
import { hostedPaymentPageUpdate } from './hostedPaymentPageUpdate';
import { hostedPaymentPageDelete } from './hostedPaymentPageDelete';
import { getHostedPaymentPage } from './getHostedPaymentPage';
import { activateHostedPaymentPage } from './activateHostedPaymentPage';


export const services: IService[] = [
  // list array items serial wise
  
  hostedPaymentPageAdd,
  hostedPaymentPageUpdate,
  hostedPaymentPageDelete,
  getHostedPaymentPage,
  activateHostedPaymentPage
];

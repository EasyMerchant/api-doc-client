import { IService } from '~/interfaces';

import { paymentIntentAdd } from './paymentIntentAdd';
import { paymentIntentACHUpdate } from './paymentIntentACHUpdate';
import { paymentIntentCardUpdate } from './paymentIntentCardUpdate';
import { paymentIntentACHCharge } from './paymentIntentACHCharge';
import { paymentIntentCardCharge } from './paymentIntentCardCharge';


export const services: IService[] = [
  // list array items serial wise
  
  paymentIntentAdd,
  paymentIntentACHUpdate,
  paymentIntentCardUpdate,
  paymentIntentACHCharge,
  paymentIntentCardCharge
];

import { IService } from '~/interfaces';

import { listPaymentPartners } from './listPaymentPartners';
import { filterCardPaymentPartners } from './filterCardPaymentPartners';
import { filterACHPaymentPartners } from './filterACHPaymentPartners';

export const services: IService[] = [
  listPaymentPartners,
  filterCardPaymentPartners,
  filterACHPaymentPartners,
];

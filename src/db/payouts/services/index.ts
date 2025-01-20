import { IService } from '~/interfaces';

import { listPayouts } from './listPayouts';
import { payoutACH } from './payoutACH';
import { payoutCancel } from './payoutCancel';

export const services: IService[] = [
  listPayouts,
  payoutACH,
  payoutCancel,
];

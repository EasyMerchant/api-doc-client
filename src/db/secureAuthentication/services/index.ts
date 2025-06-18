import { IService } from '~/interfaces';

import { transaction } from './transaction';
import { transactionStatus } from './transactionStatus';

export const services: IService[] = [
  // list array items serial wise
  transaction,
  transactionStatus
];

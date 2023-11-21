import { IService } from '~/interfaces';

import { findAccount } from './findAccount';
import { listAccounts } from './listAccounts';
import { findCustomerAccount } from './findCustomerAccount';

export const services: IService[] = [
  // list array items serial wise
  listAccounts,
  findAccount,
  findCustomerAccount,
];

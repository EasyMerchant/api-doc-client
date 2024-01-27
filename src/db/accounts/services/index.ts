import { IService } from '~/interfaces';

import { findAccount } from './findAccount';
import { listAccounts } from './listAccounts';
import { findCustomerAccount } from './findCustomerAccount';
import { saveAccount } from './saveAccount';

export const services: IService[] = [
  // list array items serial wise
  listAccounts,
  findAccount,
  findCustomerAccount,
  saveAccount
];

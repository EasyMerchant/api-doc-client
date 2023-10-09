import { IService } from '~/interfaces';
import { findCustomer } from './findCustomer';
import { listAllCustomers } from './listAllCustomers';

export const services: IService[] = [
  // list array items serial wise
  listAllCustomers,
  findCustomer,
];

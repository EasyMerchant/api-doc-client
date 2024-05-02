import { IService } from '~/interfaces';
import { findCustomer } from './findCustomer';
import { listAllCustomers } from './listAllCustomers';
import { addCustomer } from './addCustomer';
import { addCustomerWithCard } from './addCustomerWithCard';
import { updateCustomer } from './updateCustomer';
import { deleteCustomer } from './deleteCustomer';

export const services: IService[] = [
  // list array items serial wise
  addCustomer,
  addCustomerWithCard,
  updateCustomer,
  listAllCustomers,
  findCustomer,
  deleteCustomer,
];

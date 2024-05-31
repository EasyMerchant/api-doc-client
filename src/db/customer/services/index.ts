import { IService } from '~/interfaces';
import { addCustomer } from './addCustomer';
import { findCustomer } from './findCustomer';
import { updateCustomer } from './updateCustomer';
import { deleteCustomer } from './deleteCustomer';
import { listAllCustomers } from './listAllCustomers';
import { addCustomerWithCard } from './addCustomerWithCard';
import { filterCustomerByEmail } from './filterCustomerByEmail';

export const services: IService[] = [
  // list array items serial wise
  addCustomer,
  addCustomerWithCard,
  updateCustomer,
  listAllCustomers,
  findCustomer,
  deleteCustomer,
];

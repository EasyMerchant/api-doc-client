import { IService } from '~/interfaces';
import { createVendor } from './createVendor';
import { listAllVendors } from './listVendors';
import { findVendor } from './findVendor';
import { chargeVendor } from './chargeVendor';
import { updateVendor } from './updateVendor';

export const services: IService[] = [
  // list array items serial wise
  createVendor,
  updateVendor,
  listAllVendors,
  findVendor
];

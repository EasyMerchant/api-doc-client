import { IService } from '~/interfaces';
import { findCharge } from './findCharge';
import { listAllCharges } from './listAllCharges';
import { createAchCharge } from './createAchCharge';
import { capturePayment } from './capturePayment';
import { authorizePayment } from './authorizePayment';
import { createBitcoinCharge } from './createBitcoinCharge';

export const services: IService[] = [
  // list array items serial wise
  listAllCharges,
  findCharge,
  createAchCharge,
  capturePayment,
  authorizePayment,
  createBitcoinCharge,
];

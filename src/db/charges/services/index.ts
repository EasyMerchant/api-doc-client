import { IService } from '~/interfaces';
import { findCharge } from './findCharge';
import { listAllCharges } from './listAllCharges';
import { createAchCharge } from './createAchCharge';
import { capturePayment } from './capturePayment';
import { authorizePayment } from './authorizePayment';
import { createBitcoinCharge } from './createBitcoinCharge';
import { createCardCharge } from './createCardCharge';
import { createCashCharge } from './createCashCharge';
import { createCheckCharge } from './createCheckCharge';


export const services: IService[] = [
  // list array items serial wise
  createCardCharge,
  createAchCharge,
  createCashCharge,
  createCheckCharge,
  authorizePayment,
  capturePayment,
  createBitcoinCharge,
  findCharge,
  listAllCharges

];

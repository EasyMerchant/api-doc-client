import { IService } from '~/interfaces';

import { listFees } from './listFees';
import { createFee } from './createFee';
import { updateFee } from './updateFee';
import { deleteFee} from './deleteFee';
import { findFee } from './findFee';
export const services: IService[] = [
  listFees,
  findFee,
  createFee,
  updateFee,
   deleteFee,
 
];

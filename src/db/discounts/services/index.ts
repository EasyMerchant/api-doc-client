import { IService } from '~/interfaces';

import { listDiscounts } from './listDiscounts';
import { createDiscount } from './createDiscount';
import { updateDiscount } from './updateDiscount';
import { deleteDiscount} from './deleteDiscount';
import { findDiscount} from './findDiscount';

export const services: IService[] = [
  listDiscounts,
  findDiscount,
 createDiscount,
  updateDiscount,
   deleteDiscount
   
 
];

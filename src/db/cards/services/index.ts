import { IService } from '~/interfaces';
import { listCards } from './listCards';
import { findCard } from './findCard';
import { saveCard } from './saveCard';
import { updateCardDetails } from './updateCardDetails';
import { listCustomerCards } from './listCustomerCards';

export const services: IService[] = [
  // list array items serial wise
  listCards,
  findCard,
  listCustomerCards,
  saveCard,
  updateCardDetails,
];

import { IService } from '~/interfaces';
import { listCards } from './listCards';
import { findCard } from './findCard';
import { saveCard } from './saveCard';

export const services: IService[] = [
  // list array items serial wise
  listCards,
  findCard,
  saveCard,
];

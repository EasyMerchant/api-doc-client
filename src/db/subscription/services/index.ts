import { IService } from '~/interfaces';

import { listAllSubscription } from './listAllSubscription';
import { findSubscription } from './findSubscription';
import { subscriptionSuspend } from './subscriptionSuspend';
import { subscriptionResume } from './subscriptionResume';
import { subscriptionCancel } from './subscriptionCancel';
import { updateCard } from './updateCard';
import { updateAccount } from './updateAccount';

export const services: IService[] = [
  // list array items serial wise
  listAllSubscription,
  findSubscription,
  subscriptionSuspend,
  subscriptionResume,
  subscriptionCancel,
  updateCard,
  updateAccount
];

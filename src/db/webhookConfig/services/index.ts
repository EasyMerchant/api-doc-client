import { IService } from '~/interfaces';

import { createWebhook } from './createWebhook';
import { listWebhook } from './listWebhook';
import { updateWebhook } from './updateWebhook';
import { deleteWebhook } from './deleteWebhook';
import { eventTypes } from './eventTypes';

export const services: IService[] = [
  // list array items serial wise
  createWebhook,
  listWebhook,
  updateWebhook,
 deleteWebhook,
 eventTypes
];

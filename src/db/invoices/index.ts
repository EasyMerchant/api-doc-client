import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const invoices: IApiData = {
  name: 'Invoices',
  controller: 'invoices',
  defaultOpen: true,
  description: [
    `Invoices are statements of amounts owed by a customer, and are either generated one-off, or generated periodically from a subscription.`,
    `They contain invoice items, and proration adjustments that may be caused by subscription upgrades/downgrades (if necessary).`,
  ],
  attributes,
  services,
};

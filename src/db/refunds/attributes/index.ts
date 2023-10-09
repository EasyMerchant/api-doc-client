import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'refund_id',
    name: 'charge_id',
    data_type: 'string',
    description: 'The transaction id of the charge to refund.',
  },
  {
    id: 'refund_amount',
    name: 'amount',
    data_type: 'number',
    description:
      'A positive integer representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining of the charge.',
  },
];

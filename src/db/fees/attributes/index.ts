import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'it\'s required field.',
  },
  {
    id: 'id',
    name: 'id',
    data_type: 'string',
    description: 'Unique identifier for fee.it\'s required field.',
  },
  {
    id: 'amount',
    name: 'amount',
    data_type: 'number',
    description: 'The amount of the fee. It\'s required field.If you give percent, It does not require',
  },
  {
    id: 'percent',
    name: 'percent',
    data_type: 'number',
    description:
      'The percentage of the fee. It\'s required field. If you give amount, It does not require',
  }
];

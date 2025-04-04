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
    description: 'The amount is a conditional required field. If you provide an percent, this field is not required',
  },
  {
    id: 'percent',
    name: 'percent',
    data_type: 'number',
    description:
      'The fee percentage is a conditional required field. If you provide an amount, this field is not required',
  }
];

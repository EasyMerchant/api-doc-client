import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'account_id',
    name: 'account_id',
    data_type: 'string',
    description: 'Unique identifier for the ACH account of the customer.',
  },
  {
    id: 'customer_id',
    name: 'customer_id',
    data_type: 'string',
    description: 'It lists all the ach accounts related to the customer_id.',
  },
  
];

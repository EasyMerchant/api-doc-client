import { Attribute } from '~/interfaces';

export const attributes: Attribute[] = [
  {
    id: 'name',
    name: 'name',
    data_type: 'string',
    description: 'Name of your webhook config setting',
  },
  {
    id: 'url',
    name: 'url',
    data_type: 'string',
    description: 'Your receiver webhook url. Ex:"https://example.io/test" .',
  },
  {
    id: 'events',
    name: 'events',
    data_type: 'array',
    description:
      'You have to get this events from Event types api. Ex ["subscription.created","charge.captured"]',
  },
  
];

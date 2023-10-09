import { IService } from '~/interfaces';

export const exampleService: IService = {
  id: '',
  name: '',
  description: ['', ''],
  endpoint: {
    method: 'get',
    url: '/v1/',
    params: [],
    response: {
      type: 'application/json',
      data: {},
    },
  },
};

import { Attribute } from '~/interfaces';

export const exampleAttributes: Attribute[] = [
  {
    id: '',
    name: '',
    data_type: 'string',
    description: '',
  },
];

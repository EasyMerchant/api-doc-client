import { IService } from '~/interfaces';

export const listFees: IService = {
  id: 'list_fees',
  name: 'List Fees',
  description: [
    `It will list all the fees.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/fees',

    response: {
      type: 'application/json',
      data: {
        "status": true,
    "message": "Fees Retrieved successfully",
    "fees": [
        {
            "id": "fee_6e1045c0-310a-43fe-9609-9ad5c9b6dd9e",
            "name": "Convenient Fee",
            "amount": "10.00",
            "percent": "0.00",
            "created": "2024-06-20 08:56:33",
            "modified": null
        },
        {
            "id": "fee_0f50e73b-87e5-484f-a14f-6299db2175fe",
            "name": "Test",
            "amount": "0.00",
            "percent": "98.00",
            "created": "2024-06-26 01:06:50",
            "modified": null
        },
        {
            "id": "fee_4b880233-07f6-4ea8-82ce-9eb8f43266aa",
            "name": "Registration Fee",
            "amount": "10.00",
            "percent": "0.00",
            "created": "2024-07-01 06:38:32",
            "modified": null
        },
        
       
    ],
    "total": 3
      },
    },
  },
};

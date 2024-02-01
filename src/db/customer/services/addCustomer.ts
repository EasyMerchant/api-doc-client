import { IService } from '~/interfaces';

export const addCustomer: IService = {
  id: 'add_customer',
  name: 'Add Customer',
  description: [`It is to add Customer to Merchant`],
  endpoint: {
    method: 'POST',
    url: '/v1/customers',
    params: [
      {
        required: true,
        attributeId: 'username'
      },
      {
        required: true,
        attributeId: 'email'
      },
      {
        required: true,
        attributeId: 'name'
      },
      {
        required: true,
        attributeId: 'address'
      },
      {
        required: true,
        attributeId: 'city'
      },
      {
        required: true,
        attributeId: 'state'
      },
      {
        required: true,
        attributeId: 'zip'
      },
      {
        required: true,
        attributeId: 'country'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Customer creation successfully. ",
        "customer_id": "cus_65ba3b60843195064"
      },
    },
  },
};

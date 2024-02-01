import { IService } from '~/interfaces';

export const updateCustomer: IService = {
  id: 'update_customer',
  name: 'Update Customer',
  description: [`It is to update Customer.`],
  endpoint: {
    method: 'POST',
    url: '/v1/customers',
    params: [
      {
        required: true,
        attributeId: 'id'
      },
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

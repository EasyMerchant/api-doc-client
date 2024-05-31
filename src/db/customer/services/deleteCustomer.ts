import { IService } from '~/interfaces';

export const deleteCustomer: IService = {
  id: 'delete_customer',
  name: 'Delete a Customer',
  description: [`Destroys a customer object`],
  endpoint: {
    method: 'delete',
    url: '/v1/customers/:customer_id',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Customer data is deleted successfully. ',
      },
    },
  },
};

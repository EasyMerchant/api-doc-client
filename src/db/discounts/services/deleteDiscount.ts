import { IService } from '~/interfaces';

export const deleteDiscount: IService = {
  id: 'delete_discount',
  name: 'Deletediscount',
  description: [`Destroys a discount object`],
  endpoint: {
    method: 'delete',
    url: '/v1/discounts/:discount_id',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Discount deleted successfully',
      },
    },
  },
};
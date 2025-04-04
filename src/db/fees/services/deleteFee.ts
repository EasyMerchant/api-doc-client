import { IService } from '~/interfaces';

export const deleteFee: IService = {
  id: 'delete_fee',
  name: 'DeleteFee',
  description: [`Destroys a fee object`],
  endpoint: {
    method: 'delete',
    url: '/v1/fees/:fee_id',
    response: {
      type: 'application/json',
      data: {
        status: true,
        message: 'Fee deleted successfully',
      },
    },
  },
};
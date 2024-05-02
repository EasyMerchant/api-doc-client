import { IService } from '~/interfaces';

export const hostedPaymentPageDelete: IService = {
  id: 'phostedPaymentPage_Delete',
  name: 'Delete Hosted Payment Page',
  description: [
    `Using a unique identifier (id) hosted payment page can be deleted.`,
  ],
  endpoint: {
    method: 'delete',
    url: '/v1/hostedpages/:unique_id',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Hosted payment page deleted successfully.!"
      },
    },
  },
};

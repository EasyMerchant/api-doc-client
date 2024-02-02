import { IService } from '~/interfaces';

export const activateHostedPaymentPage: IService = {
  id: 'activate_hostedPaymentPage',
  name: 'Activate Hosted Payment Page',
  description: [
    `Use below api to create a payment link that you can share with your customers. Unique_Id is the hosted payment page id which redirects customers who open this link to a hosted payment page. This hosted payment page will support recurring payments or recurring donations as well.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/hostedpages/activate',
    params: [
      {
        required: true,
        attributeId: 'unique_id'
      }
    ],
    response: {
      type: 'application/json',
      data: {
        "status": false,
        "message": "Onetime payment page activated already.!"
      },
    },
  },
};

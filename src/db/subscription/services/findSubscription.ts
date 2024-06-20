import { IService } from '~/interfaces';

export const findSubscription: IService = {
  id: 'find_subscriptions',
  name: 'Find Subscriptions',
  description: [
    `It displays the json response related to the subscription id passed in parameter`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/subscriptions/{subscription_id}',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Subscription retrieved successfully. ",
        "amount": "12.50",
        "active": 1,
        "expires_at": "1700656437",
        "subscription": 
        {
          "customer_id": "cus_6554ba94715fb5064",
          "created_by": null,
          "invoice_id": "0",
          "payment_customer_id": "is_19297236",
          "payment_subscription_id": "sub_6554bab5a6d1d5064",
          "plan_interval": "weekly",
          "plan_name": "$12.50 every week(s)",
          "allowed_cycles": "4",
          "paid_count": "1",
          "name": "Rachin",
          "email": "rachin@gt.com",
          "address": "dsadsadaf",
          "city": "dsdsa",
          "state": "AL",
          "zip": "12345",
          "country": "us",
          "description": "dsda",
          "amount": "12.50",
          "status": "Active",
          "date_canceled": null,
          "date_created": "2023-11-15 06:33:57",
          "date_expired": "1700656437",
          "payment_type": "ACH",
          "start_date": "2023-11-15 06:33:57"
        }
      },
    },
  },
};

import { IService } from '~/interfaces';

export const listAllSubscription: IService = {
  id: 'list_all_subscriptions',
  name: 'List All Subscriptions',
  description: [
    `It lists all Subscriptions.`,
  ],
  endpoint: {
    method: 'get',
    url: '/v1/subscriptions',
    response: {
      type: 'application/json',
      data: {
        "status": true,
        "message": "Subscription retrieved successfully. ",
        "data": {
          "total_count": 140,
          "subscriptions": [
            {
              "customer_id": "cus_62e911323af725064",
              "created_by": "5064",
              "invoice_id": "3",
              "payment_customer_id": "tymp_x1iy5hw91mag1118",
              "payment_subscription_id": "sub_6504551c786bc5064",
              "plan_interval": "daily",
              "plan_name": "$15.00 every day",
              "allowed_cycles": "3",
              "paid_count": "3",
              "name": "Markhenry",
              "email": "Stephen-43@yrdy.com",
              "address": "Test Address Details",
              "city": "Test City",
              "state": "AL",
              "zip": "146321",
              "country": "US",
              "description": "ddsa",
              "amount": "15.20",
              "status": "Completed",
              "date_canceled": null,
              "date_created": "2023-09-15 07:59:07",
              "date_expired": "1694840400",
              "payment_type": null,
              "start_date": null
            },
            {
              "customer_id": "cus_62f50c58dbecc5064",
              "created_by": "5064",
              "invoice_id": "0",
              "payment_customer_id": "tymp_WjC5G6Tz6aKN0055",
              "payment_subscription_id": "sub_650457358c8de5064",
              "plan_interval": "weekly",
              "plan_name": "$20.00 every week(s)",
              "allowed_cycles": "2",
              "paid_count": "2",
              "name": "George",
              "email": "George@yey.com",
              "address": "Test Address Details",
              "city": "Test City",
              "state": "AL",
              "zip": "456565",
              "country": "US",
              "description": "dsad",
              "amount": "15.21",
              "status": "Completed",
              "date_canceled": "2023-09-15 08:11:29",
              "date_created": "2023-09-15 08:08:05",
              "date_expired": "1694840400",
              "payment_type": "Card",
              "start_date": null
            }
          ]
        }
      },
    },
  },
};

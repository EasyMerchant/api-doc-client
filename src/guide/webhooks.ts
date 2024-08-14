import { Guide } from './_types';

export const webhooks: Guide = {
  id: 'webhooks',
  title: 'Webhooks',
  defaultOpen: true,
  description: [
    `{app_name}'s Webhooks are one of a few ways web applications can communicate with each other.

    It allows you to send real-time data from one application to another whenever a given event occurs.`,
  ],
  content: [
    {
      id: 'subscription_creation',
      title: 'Subscription Creation',
      description: [
        {
          paragraph: `Subscription Creation Webhook will be triggered when user creates recurring from Invoices / Charges / Hosted Payment Page. Sample Payload for subscription creation is given below.`,
          snippet: `{
                "type": "subscription.created",
                "id": "evt_34ced3bfe096a4623",
                "data": {
                         "name": "Jim",
                    "email": "Jim@test.com",
                    "amount": 15.50,
                    "customer_id": "cus_1234567890",
                    "status":  "active",
                    "interval": "monthly",
                    "cycles_paid": 5,
                    "total_cycles": 10,
                    "created_at": "04-09-2024 00:01:53",
                    "start_date": "04-10-2024 00:01:53",
                    "next_payment": "05-10-2024 00:01:53",
                    "reference_number": "sub_65cf098a809b75130",
                    "hpp_id": "af89ae76ec9a675b",
                    "transaction": {
                          "name": "Jim",
                      "email": "Jim@test.com",
                      "amount": 15.50,
                      "description": "",
                      "customer_id": "cus_1234567890",
                      "status":  "paid",
                      "payment_mode": "card",
                      "last4": "4242",
                      "reference_number": "cha_65cf098a809b75130",
                      "created_at": "04-10-2024 00:01:53",
                    }
                },
                "attempt": 1,
                "remaining_attempts": 2,
                "livemode": "true",
                "created_at": "04-10-2024 00:01:53"
              }`,
        }
      ]
    },
    {
      id: 'subscription_renewal_succeeded',
      title: 'Subscription Renewal Succeeded',
      description: [
        {
          paragraph: `Subscription Renewal Succeeded Webhook will be triggered when subscription renewal is successfully completed. Sample Payload for subscription renewal succeed is given below.`,
          snippet: `{
            "type": "subscription.renewal.succeeded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                "name": "Jim",
                "email": "Jim@test.com",
                "amount": 15.50,
                "customer_id": "cus_1234567890",
                "status":  "active",
                "interval": "monthly",
                "cycles_paid": 5,
                "total_cycles": 10,
                "created_at": "04-09-2024 00:01:53",
                "start_date": "04-10-2024 00:01:53",
                "next_payment": "05-10-2024 00:01:53",
                "reference_number": "sub_65cf098a809b75130",
                "hpp_id": null,
                "transaction": {
                  "name": "Jim",
                  "email": "Jim@test.com",
                  "amount": 15.50,
                  "description": "",
                  "customer_id": "cus_1234567890",
                  "status":  "paid",
                  "payment_mode": "card",
                  "last4": "4242",
                  "reference_number": "cha_65cf098a809b75130",
                  "created_at": "04-10-2024 00:01:53",
                }
            },
            "attempt": 1,
            "remaining_attempts": 2,
            "livemode": "true",
            "created_at": "04-10-2024 00:01:53"
            }`,
        }
      ]
    },
    {
      id: 'subscription_renewal_failed',
      title: 'Subscription Renewal Failed',
      description: [
        {
          paragraph: `Subscription Renewal Failed Webhook will be triggered when subscription renewal is failed due to Card Expired, Insufficient balance in the account etc. Subscription attempt will occur based on the 'Subscription attempt' in Merchant settings. Sample Payload for subscription renewal failed is given below.`,
          snippet: `{
            "type": "subscription.renewal.failed",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                "name": "Jim",
                "email": "Jim@test.com",
                "amount": 15.50,
                "customer_id": "cus_1234567890",
                "status":  "active",
                "interval": "monthly",
                "cycles_paid": 5,
                "total_cycles": 10,
                "created_at": "04-09-2024 00:01:53",
                "start_date": "04-10-2024 00:01:53",
                "next_payment": "05-10-2024 00:01:53",
                "reference_number": "sub_65cf098a809b75130",
                "hpp_id": null,
                "transaction": {
                  "name": "Jim",
                  "email": "Jim@test.com",
                  "amount": 15.50,
                  "description": "",
                  "customer_id": "cus_1234567890",
                  "status":  "failed",
                  "reason": "Insufficient Funds",
                  "payment_mode": "card",
                  "last4": "4242",
                  "reference_number": "cha_65cf098a809b75130",
                  "created_at": "04-10-2024 00:01:53",
                }
            },
            "attempt": 2,
            "remaining_attempts": 1,
            "livemode": "true",
            "created_at": "04-10-2024 00:01:53"
            }`,
        }
      ]
    },
    {
      id: 'subscription_suspended',
      title: 'Subscription Suspended',
      description: [
        {
          paragraph: `Subscription Suspended Webhook will be triggered when subscription renewal is failed more than 1 or 2 times based on the 'Subscription attempt' in Merchant settings. Sample Payload for subscription suspended is given below.`,
          snippet: `{
            "type": "subscription.suspended",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                "name": "Jim",
                "email": "Jim@test.com",
                "amount": 15.50,
                "customer_id": "cus_1234567890",
                "status":  "suspended",
                "interval": "monthly",
                "cycles_paid": 5,
                "total_cycles": 10,
                "created_at": "04-09-2024 00:01:53",
                "start_date": "04-10-2024 00:01:53",
                "next_payment": "05-10-2024 00:01:53",
                "reference_number": "sub_65cf098a809b75130"
          },
            "livemode": "true",
            "created_at": "04-10-2024 00:01:53"
          }`,
        }
      ]
    },
    {
      id: 'subscription_resumed',
      title: 'Subscription Resumed',
      description: [
        {
          paragraph: `Subscription Resumed Webhook will be triggered when user resume the Suspended subscription and make the subscription active. Sample Payload for subscription resumed is given below.`,
          snippet: `{
            "type": "subscription.resumed",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                     "name": "Jim",
                "email": "Jim@test.com",
                "amount": 15.50,
                "customer_id": "cus_1234567890",
                "status":  "active",
                "interval": "monthly",
                "cycles_paid": 5,
                "total_cycles": 10,
                "created_at": "04-09-2024 00:01:53",
                "start_date": "04-10-2024 00:01:53",
                "next_payment": "05-10-2024 00:01:53",
                "reference_number": "sub_65cf098a809b75130"
          },
                 "attempt": 2,
            "remaining_attempts": 1,
            "livemode": "true",
            "created_at": "04-10-2024 00:01:53"
            }`,
        }
      ]
    },
    {
      id: 'subscription_canceled',
      title: 'Subscription Canceled',
      description: [
        {
          paragraph: `Subscription Canceled Webhook will be triggered when user cancel the active subscription. Sample Payload for subscription canceled is given below.`,
          snippet: `{
            "type": "subscription.canceled",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                     "name": "Jim",
                "email": "Jim@test.com",
                "amount": 15.50,
                "customer_id": "cus_1234567890",
                "status":  "canceled",
                "interval": "monthly",
                "cycles_paid": 5,
                "total_cycles": 10,
                "created_at": "04-09-2024 00:01:53",
                "start_date": "04-10-2024 00:01:53",
                "next_payment": "05-10-2024 00:01:53",
                "reference_number": "sub_65cf098a809b75130"
          },
                 "attempt": 2,
            "remaining_attempts": 1,
            "livemode": "true",
            "created_at": "04-10-2024 00:01:53"
            }`,
        }
      ]
    },
    {
      id: 'charge_created_authCapture',
      title: 'Charge Created - Auth and Capture',
      description: [
        {
          paragraph: `Charge Created - Auth and Capture Webhook will be triggered when user created charge with Captured attribute value is 'true' Auth and Capture Payment. Sample Payload for Charge Created - Authorize and Capture Payment is given below.`,
          snippet: `{
            "type": "charge.succeeded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
              "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "",
              "status": "paid",
              "payment_mode": "card",
              "captured": true,
              "last4": "4242",
              "hpp_id": "af89ae76ec9a675b",
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_created_authOnly',
      title: 'Charge Created - Authorize Card Only',
      description: [
        {
          paragraph: `Charge Created - Authorize Card Only Webhook will be triggered when user created charge with Captured attribute value is 'false' Authorize Card only. Capture or Void Payment can be done within 24hrs. Sample Payload for Charge Created - Authorize Card Only is given below.`,
          snippet: `{
            "type": "charge.succeeded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
              "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "",
              "status": "paid",
              "payment_mode": "card",
              "captured": false,
              "last4": "4242",
              "hpp_id": "af89ae76ec9a675b",
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53",
          "expires_on": "04-11-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_failed',
      title: 'Charge Failed',
      description: [
        {
          paragraph: `Charge Failed Webhook will be triggered while user creating a charge with invalid card number or with insufficient balance. Sample Payload for Charge failed is given below.`,
          snippet: `{
            "type": "charge.failed",
            "id": "evt_34ced3bfe096a4623",
            "data": {
              "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "",
              "status": "failed",
              "reason": "invalid card number",
              "payment_mode": "card",
              "captured": true,
              "last4": "4242",
              "hpp_id": "af89ae76ec9a675b",
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
           },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_expired',
      title: 'Charge Expired',
      description: [
        {
          paragraph: `Charge Expired Webhook will be triggered when user creats a charge with Authorize Card Only and User does not Capture within 24 hrs from the charge creation. Sample Payload for Charge expired is given below.`,
          snippet: `{
            "type": "charge.expired",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "expired",
              "payment_mode": "card",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_partially_refunded',
      title: 'Charge Partially refunded',
      description: [
        {
          paragraph: `Charge Partially refunded Webhook will be triggered when user do partial refund on the captured payment. Sample Payload for Charge Partially refunded is given below.`,
          snippet: `{
            "type": "charge.refunded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
              "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "partially_refunded",
              "balance": 1.50,
              "payment_mode": "card",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_full_refunded',
      title: 'Charge Full refunded',
      description: [
        {
          paragraph: `Charge Full refunded Webhook will be triggered when user do full amount refund on the captured payment. Sample Payload for Charge Full refunded is given below.`,
          snippet: `{
            "type": "charge.refunded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "refunded",
              "payment_mode": "card",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_voided',
      title: 'Charge Voided',
      description: [
        {
          paragraph: `Charge Voided Webhook will be triggered when user voids the auth only transaction within 24hrs from the charge creation. Sample Payload for Charge voided is given below.`,
          snippet: `{
            "type": "charge.refunded",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "voided",
              "payment_mode": "card",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_captured',
      title: 'Charge Captured',
      description: [
        {
          paragraph: `Charge Captured Webhook will be triggered when user captures previously authorized transaction within 24hrs from the charge creation. Sample Payload for Charge captured is given below.`,
          snippet: `{
            "type": "charge.captured",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "paid",
              "payment_mode": "card",
              "captured": true,
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_ach_canceled',
      title: 'Charge ACH Canceled',
      description: [
        {
          paragraph: `Charge ACH Canceled Webhook will be triggered when user cancel the unsettled ACH payment. Settlement may take up to 3 banking days. Sample Payload for Charge ACH cancel is given below.`,
          snippet: `{
            "type": "charge.ach.canceled",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "canceled",
              "payment_mode": "ach",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_ach_declined',
      title: 'Charge ACH Declined',
      description: [
        {
          paragraph: `Charge ACH Declined Webhook will be triggered when ach settlement fails, for example "Insufficient balance in the ACH account". Sample Payload for Charge ACH declined is given below.`,
          snippet: `{
            "type": "charge.ach.updated",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "declined",
            "reason":  "Insufficient balance",
              "payment_mode": "ach",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
    {
      id: 'charge_ach_paid',
      title: 'Charge ACH Paid',
      description: [
        {
          paragraph: `Charge ACH Paid Webhook will be triggered when user creats a charge with ACH, Settlement is done successfully. Sample Payload for Charge ACH paid is given below.`,
          snippet: `{
            "type": "charge.ach.updated",
            "id": "evt_34ced3bfe096a4623",
            "data": {
                  "name": "Jim",
              "email": "Jim@test.com",
              "amount": 15.50,
              "description": "",
              "customer_id": "cus_1234567890",
              "status":  "paid",
              "payment_mode": "ach",
              "last4": "4242",
              "hpp_id": null,
              "reference_number": "cha_65cf098a809b75130",
              "created_at": "04-10-2024 00:01:53",
          },
          "livemode": "true",
          "created_at": "04-10-2024 00:01:53"
        }`,
        }
      ]
    },
  ]
};

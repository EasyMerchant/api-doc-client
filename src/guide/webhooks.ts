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
          paragraph: `Using {app_name}'s Hosted Checkout in an easy 3 step process!`,
          list: {
            unOrdered: [
              'First, you will need to generate a publishable key to use your hosted checkout.(Refer this doc to generate your publishable key).',
              'Simply copy the HTML code below into your website or application. (Note: Button ID should not be changed)',
            ],
          },
        },
        {
          paragraph: `This will place customizable 'Pay Now' button on your website or application`,
          image: {
            src: '{cdnUrl}/assets/paynow.jpg',
            alt: 'Hosted Checkout Pay Now Button',
            objectFit: 'cover',
            width: 700,
            height: 100,
          },
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
}
  ]
};

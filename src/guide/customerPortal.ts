import { Guide } from './_types';

export const customerPortal: Guide = {
  id: 'customer_portal',
  title: 'Customer Portal',
  description: [
      `{app_name}'s offers customer portal to view transactions, subscriptions and Payment Request created by the merchant hosted payment page. Use it to let your customers manage their billing information, subscriptions, and invoices as your business scales.`,
  ],
  defaultOpen: true,
  content: [
    {
      id: 'access_customer_portal',
      title: 'Access Customer Portal',
      description: [
        {
          paragraph: `To begin using {app_name}'s Customer Portal, need to get a customer portal link from the merchant hosted payment Page. Allows customers to manage their invoices, transactions, subscriptions and payment requests.`,
        },
        {
            paragraph: `<b>CUSTOMER PORTAL URL</b>`,
            snippet: `
            {
              https://loveyoursupport.stage-easymerchant.io/customer/login ,
            }`,
        }
    ]
    },
    {
        id: 'customer_portal_link',
        title: 'Portal Link',
        description: [
          {
            paragraph:"<b>Portal Link from Hosted Payment Page</b>",
            list: {
              unOrdered: [
                'To access customer portal from Merchant > Hosted Payment Page > Log in to see your dashboard'
              ],
            },
            image: {
              src: '{cdnUrl}/assets/js-sdk-theme-settings.png',
              alt: 'JS SDK Theme Settings',
              objectFit: 'cover',
              width: 1000,
              height: 600,
            },
        }
    ]
},
{
    id: 'customer_login',
    title: 'Customer Login',
    description: [
      {
        paragraph:"<b>Customer can login to portal using the customer email id or mobile number.</b>",
        image: {
          src: '{cdnUrl}/assets/js-sdk-theme-settings.png',
          alt: 'JS SDK Theme Settings',
          objectFit: 'cover',
          width: 1000,
          height: 600,
        },
    }
]
},
{
    id: 'subscription_module',
    title: 'Subscriptions',
    description: [
      {
        paragraph:"<b>Lists of subscriptions displayed based on the merchant domain. Customer can view the subscriptions and Update the card / account for the upcoming renewals. </b>",
        image: {
          src: '{cdnUrl}/assets/',
          alt: 'JS SDK Theme Settings',
          objectFit: 'cover',
          width: 1000,
          height: 600,
        },
    }
]
},
{
    id: 'trasnaction_module',
    title: 'Transactions',
    description: [
      {
        paragraph:"<b>Lists of transaction displayed based on the merchant domain. Customer can only view the transactions. </b>",
        image: {
          src: '{cdnUrl}/assets/',
          alt: 'JS SDK Theme Settings',
          objectFit: 'cover',
          width: 1000,
          height: 600,
        },
    }
]
},
{
    id: 'payment_requests_module',
    title: 'Payment Requests',
    description: [
      {
        paragraph:"<b>Lists of payment requests done by the merchant are displayed based on the merchant domain. Customer can pay against the payment requests. Once payment is done the payment request will be removed from the lists. </b>",
        image: {
          src: '{cdnUrl}/assets/',
          alt: 'JS SDK Theme Settings',
          objectFit: 'cover',
          width: 1000,
          height: 600,
        },
    }
]
}
]

}
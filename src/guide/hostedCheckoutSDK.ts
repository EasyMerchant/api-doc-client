import { Guide } from './_types';

export const hostedCheckoutSDK: Guide = {
  id: 'hosted-checkout-sdk',
  title: 'Hosted Checkout SDK',
  description: [
    `{app_name}'s Hosted checkout SDK is a javascript integration that allows merchants to easily embed a secure checkout solution supporting multiple payment methods into their website or application. When merchant customer's secure card data is submitted through {app_name}'s checkout, this card data is not accessible by the merchant website or application, reducing the merchant's PCI compliance and regulatory requirements`,
  ],
  defaultOpen: true,
  content: [
    {
      id: 'generate-publishable-key',
      title: 'Generate Publishable Key',
      description: [
        {
          paragraph: `To begin using {app_name}'s Hosted Checkout SDK, first you will need to generate a publishable key. Your publishable key can be found by logging into your merchant portal > Settings > Secret Keys.`,
        },
        {
          paragraph: `To generate your publishable key, click the refresh icon and then copy/paste this key into your hosted checkout integration.`,
          image: {
            src: '{cdnUrl}/assets/generatepublishable.png',
            alt: 'Hosted Checkout Dashboard',
            objectFit: 'cover',
            width: 1000,
            height: 600,
          },
        },
      ],
    },
    {
      id: 'configure-hosted-checkout',
      title: 'Configure Hosted Checkout',
      description: [
        {
          paragraph: `Using {app_name}'s Hosted Checkout in an easy 3 step process!`,
          list: {
            ordered: [
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
            width: 1214,
            height: 116,
          },
        },
      ],
    },
  ],
};

import { IApiData } from '~/interfaces';
import { attributes } from './attributes';
import { services } from './services';

export const paymentintent: IApiData = {
  name: 'Payment Intent',
  controller: 'Payment Intent',
  defaultOpen: true,
  description: [
    `A PaymentIntent guides you through the process of collecting a payment from your customer. We recommend that you create exactly one PaymentIntent for each order or customer session in your system. You can reference the PaymentIntent later to see the history of payment attempts.`,
  ],
  attributes,
  services,
};

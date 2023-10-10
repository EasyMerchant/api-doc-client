import { hostedCheckoutSDK } from './hostedCheckoutSDK';
import { Guide } from './_types';
import { webhooks } from './webhooks';
import { officialPlugins } from './officialPlugins';
import { crypto } from './crypto';
import { kyc } from './kyc';

export const guide: Guide[] = [
  hostedCheckoutSDK, // first item in navigation
  webhooks,
  officialPlugins,
  crypto,
  kyc,
];

// SDKs
// - Hosted Checkout SDK
// - Mobile SDK
// Webhooks
// Official Plugins
// - WooCommerce
// - GiveWP
// Crypto
// - Payments
// - Onramp / Offramp
// - Wallets
// KYC

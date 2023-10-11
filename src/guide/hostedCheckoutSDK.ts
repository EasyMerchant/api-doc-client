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
          snippet: `<button class="em-btn em-btn-success em-btn-lg em-col-xs-6 em-col-xs-offset-3" style="margin-top: 20%;" type="button" id="easyBtn">Pay Now</button>`,
        },
        {
          list: {
            unOrdered: [
              ' Once your button is placed within your website or application, copy / paste the following javascript into your website or application footer, or beneath the button code.',
            ],
          },
        },
        {
          paragraph: `This will embed the javascript modal for the EasyMerchant Checkout dialogue, which will appear when the embedded checkout button is clicked.`,
          snippet: `<script type="text/javascript" src="https://www.easymerchant.io/em-hosted-fields/easyMerchant.js"></script>
          <script>
            var easyObj = {
              publishable_key:'Ow9CaBwjk23cHGakuhBDl5sj9',
              amount:30,
              name:"Joe",
              email:"jim@easymerchant.io",
              description:"Payment Description"
          }
            window.onload = function () {
            easyUIConnect.easyMerchantOnInit();
          };
            var btn = document.getElementById("easyBtn");
            btn.onclick = function () {
              easyMerchant.bindPaymentDetails(easyObj,afterSuccess);
            }
          
          function afterSuccess(response){
            if (response.status === 200 && response.charge_id != "") {
                    setTimeout(function() {window.location.reload()}, 3000);
              }
            }
            </script>`,
        },
        {
          paragraph: `Here “bindPaymentDetails” function used for bind your “publishkey”,”amount” and your “return function”.`,
          snippet: `easyMerchant.bindPaymentDetails("Your Publishable Key","Your  amount","return function name after payment success");`,
        },
        {
          paragraph: `We have created one more functionality for handling our payment response. Here, you can create your own function name as whatever you want but you should pass this function name to “bindPaymentDetails“.`,
        },
        {
          paragraph: `In this function we have to return some of response code and success message. If response code is “200” means the payment created successfully and  based on that code you can redirect or show message what ever you want in your webpage. 
          To find out more information about error click <a href="{root}?id=errors">here.</a>`,
        },
      ],
    },
  ],
};

import { Guide } from './_types';

export const hostedCheckoutSDK: Guide = {
  id: 'hosted-checkout-sdk',
  title: 'Hosted Checkout SDK',
  description: [
      `{app_name}'s Hosted checkout SDK is a javascript integration that allows merchants to easily embed a secure checkout solution supporting multiple payment methods into their website or application. When merchant customer's secure card data is submitted through {app_name}'s checkout, this card data is not accessible by the merchant website or application, reducing the merchant's PCI compliance and regulatory requirements. `,
  ],
  defaultOpen: true,
  content: [
    {
      id: 'generate-client-token',
      title: 'Step 1: Generate Client Token',
      description: [
        {
          paragraph: `To begin using {app_name}'s Hosted Checkout SDK, you will need to generate a client token using payment intent endpoint from your backend. You have to generate client token for every payment or vault request.  <br /> <br /><b>Note:</b> Here is the complete code sample with PHP & Javascript <a href="https://github.com/EasyMerchant/elements-sample-php" target="__blank">Elements SDK with PHP & Javascript</a>`,
          
        },
        {
          paragraph: `<b>API URL</b>`,
          snippet: `
            POST "https://api.lyfepay.io/api/v1/paymentintent"
          `,
        },
        {
          paragraph: `<b>Request Params</b>`,
          snippet: `
          {
            "amount" : "109.00" // optional
          
          }
          `,
         
        },
        {
          paragraph: `<b>API Response</b>`,
          snippet: `
          {
            "status": true,
            "message": "Payment Intent created successfully.",
            "payment_intent": "pi_862136128h9ad",
            "client_token": "token_663116909c7eb"
          }
          `,
          
         
        },
      ],
    },
    {
      id: 'configure-hosted-checkout',
      title: 'Step 2: Configure Hosted Checkout',
      description: [
        {
          paragraph: `The {app_name}'s JS SDK is a UI component for the web that accepts various types of payment methods, validates input, and handles errors. Use it alone or with other elements in your web app's frontend.`,
        },
        {
          paragraph: `Add the JS SDK checkout.js script on your payment page by adding it to the head of your HTML`,
          snippet: `<script src="https://cdn.lyfepay.io/js-sdk/v1/checkout-v1.0.76.min.js?v=9" ></script>`
        },
        {
          paragraph: `Create a placeholder element in your page where you want to mount the JS SDK UI:`,
          snippet: `<div id="payments"></div>`
        },
        {
          paragraph: `Include the following code to create an instance of JS SDK UI, replace the <b>"client_token"</b> placeholder with actual token generated from Step above.`,
          snippet: `
            <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              showReceipt:false,
              showTotal:true,
              showSubmitButton:true,
              paymentMethods:['card', 'ach','crypto','wallet'],
            })
            </script>
          `,
        },
        {
          paragraph:'<h3>Options</h3>',
        },
        {
          paragraph:'<b>showReceipt: true | false</b>',
          list: {
            unOrdered: [
              'we will show the receipt after payment successfull based true or false',
            ],
          },
        },
        {
          paragraph:'<b>showSubmitButton: true | false</b>',
          list: {
            unOrdered: [
              'we will show the button like "Pay Now" based true or false',
              'you can set this option to false and add your own submit button which must call "elements.submit();" to submit the payment'
            ],
          },
        },
        {
          paragraph:'<b>showTotal: true | false</b>',
          list: {
            unOrdered: [
              'we will show the total amount value inside "Pay Now" button based true or false',
              'Note: Total will be hidden when showSubmitButton:false.'
            ],
          },
        },
        {
          paragraph:'<b> paymentMethods: card | ach | crypto | wallet</b>',
          list: {
            unOrdered: [
              'we will show the paymentMethods based on this passing values & your backend payment processor setting . ',
              'Note:For Example , you don\'t have default crypto payment processor in your backend setting . But you are passing "crypto" value in this array. we won\'t show crypto payment method tab.'
            ],
          },
        },
        {
          paragraph:'<b> tokenOnly: true | false</b>',
          list: {
            unOrdered: [
              "If you'd like to obtain a card or ACH token, you can utilize this method; however, we do not process payments through this option. Once the card or ACH details are successfully saved, you will receive the details in the \"Done\" callback function. "
            ],
          },
        },
        {
          paragraph:'<b> saveCard: true | false</b>',
          list: {
            unOrdered: [
              "If you prefer not to save your card details, you can set the option to false; otherwise, the default option is assumed to be \"true\""
            ],
          },
        },

        {
          paragraph:'<b> saveAccount: true | false</b>',
          list: {
            unOrdered: [
              "If you do not want to store your ach details, you can switch the option to false; otherwise, it is automatically set to \"true\""
            ],
          },
        },

        {
          paragraph:'<b> submitButtonText:string</b>',
          list: {
            unOrdered: [
              "If you wish to modify the payment button text, you have the option to change it."
            ],
          },
        },
        

       
             ],
    },
    {
      id: 'hosted-checkout-events-handling',
      title: 'Step 3: Element Events',
      description: [
        {
          paragraph:"The only way to communicate with your Element is by listening to an event. An Element might emit any of the events below.",
          snippet: `
          elements.on('eventName', (event)=>{
              console.log(event)
          });
          `
        },
        {
          paragraph:'<h3>Events List</h3><p>Our elements emit any of the following events</p>',
          
        },
        {
          paragraph:'<b>Ready</b><p>Trigger the event once fully elements are rendered</p>',
          snippet: `
            elements.on('ready', (event)=>{
              console.log("Ready",event)
            });           
            `
           
            
        },
        {
          paragraph:'Callback Object',
          snippet: `
              {
                "type":"ready",
                "data":{
                  "message":"Elements Rendered.."
                }
              }
            `
           
            
        },

        {
          paragraph:'<b>Process</b><p>Trigger the event once payment processing..</p>',
          snippet: `

          elements.on('process', (event)=>{
              console.log("Process",event)
          });
           
            `
           
            
        },
        {
          paragraph:'Callback Object',
          snippet: `
              {
                "type":"process",
                "data":{
                  "message":"Processing.."
                }
              }
            `
           
            
        },

        {
          paragraph:'<b>Error</b><p>Trigger the event once get error from payment or validation error</p>',
          snippet: `

          elements.on('error', (event)=>{
              console.log("Error",event)
          });
           
            `
           
            
        },
        {
          paragraph:'Callback Object',
          snippet: `
              {
                "type":"error",
                "data": { ...error_details... }
              }
            `
           
            
        },

        {
          paragraph:'<b>Done</b><p>Trigger the event once payment done successfully.if you want to redirect to another page you can use the event</p>',
          list: {
            unOrdered: [
              'Note:if you want to redirect another page , don\'t forget to disable showReceipt:false '
            ],
          },
          snippet: `

          lements.on('done', (event)=>{
              // you can redirect to your page here
              console.log("done",event)
          });
           
            `,
            

           
            
        },
        {
          paragraph:'<b> Done - Tokenonly - New Card / ACH </b><p> If its token only , Trigger the event once  card / account saved successfully.</p>',
          snippet: `
        {
           “card_id”: "card_66d7379059bf8”,
            “card_last_4”: "4242”,
            “message”: "Card saved successfully. ",
            “status”: true,
            “token”: "424242Jygz5P4242"   
        }
            `,
        },
        {
          paragraph:'<b> Done - Tokenonly- Saved Card/ ACH </b><p> If its token only , Trigger the event once  card / account saved successfully.</p>',
          snippet: `
        {
            “card_brand_name”: "Visa”,
            “card_id”: "card_668ba0188df2c",
            “card_type”: "live_card",
            “cc_last_4”: "1118",
            “cc_valid_thru”: "04/2026",
            “customer_id”: "cus_650e50db711a45064",
            “cvc”: "111",
        } `,
        },
        {
          paragraph:'Callback Object',
          snippet: `
              {
                "type":"done",
                "data":{
                  "status": true,
                  "message": "Payment processed successfully. ",
                  "charge_id": "cha_6633cb65be5cf5064",
                  "data": "NA",
                  "card_id": null,
                  "card_last_4": "1111"
              }
              }
            `
           
            
        },
      ] 
    },
    {
      id: 'hosted-checkout-customisation',
      title: 'Customize JS SDK UI',
    },
    {
      id: 'hosted-checkout-billing-elements',
      title: 'Billing Elements',
      description: [
        {
          paragraph:'This Billing elements have predefined blocks, you can control the whole billing elements will be display or not. And also you can define which one are required or optional , and prefill the values for each element',
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              showReceipt:false,
              showTotal:true,
              showSubmitButton:true,
              paymentMethods:['card', 'ach','crypto','wallet'],
              fields: {
                billing: [
                { name: 'country', required: true, value: 'US' },
                { name: 'state', required: true, value: 'AL' },
                { name: 'city', required: false,value: 'Los Angels' },
                { name: 'postal_code', required: true ,value: '91423' },
            
              ]
            }
            })
            </script>
          `,

        },
        {
          paragraph:'You don\'t need to define all fields, you can set your configuration for just changes needed field(s).',
          list: {
            unOrdered: [
              'Note:For Example , if you don\'t include the fields , it will still be displayed.'
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              fields: {
                billing: [
                { name: 'country', required: true, value: 'US' },
                { name: 'state', required: true, value: 'AL' },
             
            
              ]
            }
            })
            </script>
            `
          
        },
        {
          paragraph:'<b>Hiding Billing Elements</b>',
          list: {
            unOrdered: [
              'If you want hide the billing info.  you can give the whole block by setting the billing field to false'
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              fields: {
                billing: false
            }
            })
            </script>
            `
          
        },
      ] 
    },

    {
      id: 'hosted-checkout-additional-elements',
      title: 'Additional Elements',
      description: [
        {
          paragraph:'If you want to collect extra information from user you can use this block.But this fields are not included by default , and it will be displayed only if you add them.',
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              fields: {
                additional: [
                  { name: 'name', required: true,value: 'Test LyfPay' },
                  { name: 'email_address', required: true ,value: 'test@lyfpay.io'},
                  { name: 'phone_number', required: false ,value: '' },
                  { name: 'description', required: true ,value: 'Test Payment' }
                   
                  ]
                       
                }
            })
            </script>
          `,

        },
        {
          paragraph:'<b>Hiding Additional Info</b>',
          list: {
            unOrdered: [
              'If you want hide the additional info.  you can give the whole block by setting the additional field to false'
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              fields: {
                additional: false
            }
            })
            </script>
            `
          
        },
      ] 
    },

    {
      id: 'hosted-checkout-appearance-settings',
      title: 'Appearance Settings',
      description: [
        {
          paragraph:"<b>Change appearance from backend</b>",
          list: {
            unOrdered: [
              'you can change JS SDK theme from your Merchant Portal under Settings > JS SDK Theme'
            ],
          },
          image: {
            src: '{cdnUrl}/assets/js-sdk-theme-settings.png',
            alt: 'JS SDK Theme Settings',
            objectFit: 'cover',
            width: 1000,
            height: 600,
          },

        },
        {
          paragraph:'<b>Change appearance from code</b>',
          list: {
            unOrdered: [
              'You can pass appearance setting object to change JS SDK appearance'
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              appearanceSettings:{
                bodyBackgroundColor: "#eeeff2",
                containerBackgroundColor: "#ffffff",
                primaryFontColor: "#000000",
                secondaryFontColor: "#666666",
                primaryButtonBackgroundColor: "#1757d9",
                primaryButtonHoverColor: "#3a70df",
                primaryButtonFontColor: "#ffffff",
                secondaryButtonBackgroundColor: "#ffffff",
                secondaryButtonHoverColor: "#1757d9",
                secondaryButtonFontColor: "#1757d9",
                borderRadious: "8"
            }
            })
            </script>
            `
          
        },
      ] 
    },
  ],
};

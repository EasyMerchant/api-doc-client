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
            "amount" : "109.00", // optional
            "vendorInfo": [{ // optional
                "vendorId": "vendor_ee73e202-6686-4e00-985e-132b857e1287",
                "commissionPercent": "10", // or "commissionAmount": "10"
              }]
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
          snippet: `<script src="https://cdn.lyfepay.io/js-sdk/v1/checkout-v1.0.89.min.js?v=9" ></script>`
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
          paragraph:'<b>authenticatedACH: true | false</b>',
          list: {
            unOrdered: [
              'This will function exclusively for ACH, serving to authenticate & linked your bank account with payment processor',
            ],
          },
        },
        {
          paragraph:'<b>showDonate: true | false</b>',
          list: {
            unOrdered: [
              'We will display the donation/roundup section based on a true or false condition'
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

          elements.on('done', (event)=>{
              // you can redirect to your page here
              console.log("done",event)
          });
           
            `,
            
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
        {
          paragraph:'<b> Done - Tokenonly - New Card  </b><p> If it\'s the token_only option, this event is triggered when the card is saved successfully.</p>',
          snippet: `
        {
           "type":"done",
           "data": {
           “card_id”: "card_66d7379059bf8”,
            “card_last_4”: "4242”,
            “message”: "Card saved successfully. ",
            “status”: true,
            }
        }
            `,
        },
        {
          paragraph:'<b> Done - Tokenonly - New Account </b><p>  If it\'s the token_only option, this event is triggered when the ach account is saved successfully.</p>',
          snippet: `
        {
           "type":"done",
           "data": {
              account_id: "acc_67f62af26f503",
              message: "Account saved successfully. ",
              “status”: true,
            }
        }
            `,
        },
        {
          paragraph:'<b> Done - Tokenonly - Saved Card </b><p> If the token_only option is used with saved card , it returns only the selected card details.</p>',
          snippet: `
        {
           "type":"done",
           "data": {
            “card_brand_name”: "Visa”,
            “card_id”: "card_668ba0188df2c",
            “cc_last_4”: "1118",
            “cc_valid_thru”: "04/2026",
            “customer_id”: "cus_650e50db711a45064",
            “cvc”: "111",
            "status":"active"
        }
        } `,
         
        },
        {
          paragraph:'<b> Done - Tokenonly- Saved Account </b><p>If the token_only option is used with saved account , it returns only the selected ach account details.</p>',
          snippet: `
        {
           "type":"done",
           "data": {
           account_id: "acc_67f62af26f503",
          account_number_last_4: "1119"
          account_type: "saving"
          customer_id: "cus_67a1187a585505064"
          date_created: "2025-04-09 03:08:18"
        }
        } `,
         
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
          
        }
        
      ] 
    },
    {
      id: 'sdk-demo-link',
      title: 'JS SDK Demo Link',
      description: [
        {
          paragraph:'<b> Explore our application with a demo </p>',                 
        },
        {
          paragraph:'<p> We invite you to experience the full capabilities of JS SDK through our interactive demo. Whether you are exploring new solutions or evaluating if we are the right fit for your needs, this demo will give you hands-on access to the key features and functionality of our platform.</p>',         
        },
        {
          paragraph: `<a href="https://jssdk-demo.lyfepay.io" target="__blank">Demo Link</a>`,
        },  
        {
          paragraph:'<b>How to Get Started:</b>',
          list: {
            unOrdered: [
              'Click the Demo Link above',
              'Access Our Features: Explore tools, dashboards, and functionalities designed to help you streamline your processes and improve efficiency.',
              'Experience It Firsthand: Navigate the software at your own pace and see how it can address your unique needs.'
            ],
          }
        }    
      ],
        
    },
    
  ],
};

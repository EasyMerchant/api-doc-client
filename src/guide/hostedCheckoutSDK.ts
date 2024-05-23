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
      title: 'Generate Client Token',
      description: [
        {
          paragraph: `To begin using {app_name}'s Hosted Checkout SDK, first you will need to generate a client token from your backend with your amount. You have to generate client token for every payment request.  <br /> <br /><b>Note:</b> You can use our whole bunch of sample code with PHP & Javascript <a href="https://github.com/EasyMerchant/elements-sample-php" target="__blank">Elements SDK with PHP & Javascript</a>`,
          
        },
        {
          paragraph: `<b>API URL</b>`,
          snippet: `
          {
            
            https://api.easymerchant.io/api/paymentintent ,

          }
          `,
        },
        {
          paragraph: `<b>Request Params</b>`,
          snippet: `
          {
            "amount" : "109.00"
          
          }
          `,
         
        },
        {
          paragraph: `<b>API Response</b>`,
          snippet: `
          {
            "status": true,
            "message": "Payment Intent created successfully.",
            "client_token": "token_663116909c7eb"
          }
          `,
          
         
        },
      ],
    },
    {
      id: 'configure-hosted-checkout',
      title: 'Configure Hosted Checkout',
      description: [
        {
          paragraph: `Using {app_name}'s Hosted Checkout in an easy step process!`,
          list: {
            unOrdered: [
              'First, you will need to generate a client token to use your hosted checkout.(Refer this doc to generate your client token).',
              'Simply copy the HTML code below into your website or application. ',
            ],
          },
        },
        {
          paragraph: `First you have to render elements using by this code. you can create your own div with id in your html page & pass in to our element creation method `,
         
          snippet: `
          <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charset="utf-8" />
                <title>LyfePay Payment Element</title>
                <meta name="description" content="A demo of a payment on LyfePay" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdn.lyfepay.io/js-sdk/v1/checkout-v1.0.0.min.js" ></script>
            </head>
            <body>
            <div id="payments"></div>
           
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
            </body>
            </html>
          `,
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
              'If you give this option to "false" , Don\'t forget to add your own button & call "elements.submit();" when onclick your button'
            ],
          },
        },
        {
          paragraph:'<b>showTotal: true | false</b>',
          list: {
            unOrdered: [
              'we will show the total amount value inside "Pay Now" button based true or false',
              'Note:If you give showSubmitButton:false , we don\'t how the total value .'
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
        

       
             ],
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
      id: 'hosted-checkout-apperance-settings',
      title: 'Apperance Settings',
      description: [
        {
          paragraph:"<b>Change apperance from backend</b>",
          list: {
            unOrdered: [
              'you can change yous js sdk theme apperance from your Merchant Portals > Settings > JS SDK Theme'
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
          paragraph:'<b>Change apperance from code</b>',
          list: {
            unOrdered: [
              'You can pass appearance setting object to change js sdk apperance'
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");
            elements.create({
              container: 'payments',
              apperanceSettings:{
                bodyBackgroundColor: "#eeeff2",
                containerBackgroundColor: "#ffffff",
                primaryFontColor: "#000000",
                secondaryFontColor: "#666666",
                primaryButtonBackgroundColor: "#1757d9",
                primaryButtonHoverColor: "#3a70df",
                primaryButtonFontColor: "#ffffff",
                borderRadious: "8"
            }
            })
            </script>
            `
          
        },
      ] 
    },

    {
      id: 'hosted-checkout-events-handling',
      title: 'Events',
      description: [
        {
          paragraph:"<b>Listener</b><p>To add a listerner to an event use the method .on(eventName, callback)</p>",
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");

            elements.create({
              container: 'payments'
            })
            elements.on('eventName', (event)=>{
              console.log(event)
             });
     
            </script>
            `

        },
        {
          paragraph:'<h3>Events List</h3><p>Our elements emit any of the following events</p>',
          
        },
        {
          paragraph:'<b>Ready</b><p>Trigger the event once fully elements are rendered</p>',
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");

            elements.create({
              container: 'payments'
            })
            elements.on('ready', (event)=>{
              console.log("Ready",event)
            });
     
     
            </script>
           
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

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");

            elements.create({
              container: 'payments'
            })
            elements.on('process', (event)=>{
              console.log("Process",event)
            });
     
     
            </script>
           
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

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");

            elements.create({
              container: 'payments'
            })
            elements.on('error', (event)=>{
              console.log("Error",event)
            });
     
     
            </script>
           
            `
           
            
        },
        {
          paragraph:'Callback Object',
          snippet: `
              {
                "type":"error",
                "data"{ ...error_details... }
              }
            `
           
            
        },

        {
          paragraph:'<b>Done</b><p>Trigger the event once payment done successfully.if you want to redirect to another page you can use the event</p>',
          list: {
            unOrdered: [
              'Note:if you want to redirect another page , don\'t forgrt to disable showReceipt:false '
            ],
          },
          snippet: `

          <script type="text/javascript">
            var elements = new lyfPayCheckout("{{client_token}}");

            elements.create({
              container: 'payments'
            })
            elements.on('done', (event)=>{
              console.log("done",event)
            });
     
     
            </script>
           
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
      ] 
    },

  ],
};

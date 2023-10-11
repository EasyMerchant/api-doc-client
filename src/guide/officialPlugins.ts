import { Guide } from './_types';

export const officialPlugins: Guide = {
  id: 'official-plugins',
  title: 'Official Plugins',
  defaultOpen: true,
  content: [
    {
      id: 'give-wp',
      title: 'GiveWP',
      description: [
        {
          paragraph: 'Download and install the {app_name} addon for GiveWP from <a href="{cdnUrl}/downloads/givewp-em-plugin.zip">{cdnUrl}/downloads/givewp-em-plugin.zip.</a>',
        },
   {
      paragraph: 'Once the {app_name} for GiveWP is activated, go to Donations -> Settings -> Payment Gateways.',
  },
        {
          paragraph: 'Click on {app_name}, Enter your Publishable Key, found in your {app_name} Dashboard and Add checkout heading text. here',
          image: {
            src: '{cdnUrl}/assets/givewp-settings.png',
            alt: 'GiveWP Settings',
            objectFit: 'cover',
            width: 1000,
            height: 600,
          },
        },
    {
    paragraph: '{app_name} will be displayed on the donation form as a payment option.',
    image: {
            src: '{cdnUrl}/assets/Donate-Now-givewp.png',
            alt: 'Donate Now GiveWP',
            objectFit: 'cover',
            width: 1000,
            height: 600,
          },
          },  
      ],      


    {
      id: 'woocommerce',
      title: 'Woocommerce',
    },
  },
  ],
};

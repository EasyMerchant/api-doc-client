import { IApiData } from '~/interfaces';

export const authentication: IApiData = {
  id: 'authentication',
  name: 'Authentication',
  defaultOpen: true,
  description: [
    '{app_name} uses API key/secret pair to allow access to the API. You can get a new {app_name} API key by emailing developer support.',
    `{app_name} expects the API key and secret to be included in all API requests to the server in a header that looks like the following: <ul>
    <li>
      X-Api-Key: <YOUR_API_KEY>
    </li>
    <li>
      X-Api-Secret: <YOUR_API_SECRET>
    </li>
   </ul>`,
  ],
  info: {
    code_box: [
      {
        title: 'Global Header',
        rows: ['X-Api-Key = "xxxxxxx"', 'X-Api-Secret = "xxxxxxx"','Content-Type = application/json'],
      },
    ],
  },
};

import { IApiData } from '~/interfaces';

export const introduction: IApiData = {
  id: 'introduction',
  name: 'Introduction',
  defaultOpen: true,
  description: [
    'Welcome to the  API! You can use our API to access {app_name} payment endpoints, which you can use to develop mobile app or website that allows you to process payments.',
    'This API reference is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.',
    'Use the code snippets available to call the api endpoints and start processing payments.',
  ],
  info: {
    heading: 'Just getting started?',
    description: 'Checkout out our quickstart guide at {brand_website_url}',
    code_box: [
      {
        title: 'Sandbox Base url',
        rows: ['{sandbox}'],
      },
      {
        title: 'Production url',
        rows: ['{production}'],
      },
    ],
  },
};

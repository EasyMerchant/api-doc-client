import { IApiData } from '~/interfaces';

export const error_codes: IApiData = {
  id: 'errors',
  name: 'Errors',
  defaultOpen: true,
  description: [
    '{app_name} Platform uses a list of HTTP response codes to indicate the success or failure of an API request.',
    'Some errors that could be handled programmatically include an error code that briefly explains the error reported.',
  ],
  attributes: [
    {
      id: 1,
      name: 'type',
      data_type: 'string',
      description:
        'The type of error returned. One of <b><code>api_error</code></b>, <b><code>idempotency_error</code></b>, or <b><code>invalid_request_error</code></b>',
    },
    {
      id: 2,
      name: 'code',
      data_type: 'string',
      description:
        'For some errors that could be handled programmatically, a short string indicating the error code reported.',
    },
    {
      id: 3,
      name: 'message',
      data_type: 'string',
      description:
        'A human-readable message providing more details about the error. These messages may or may not be shown to your users.',
    },
    {
      id: 4,
      name: 'param',
      data_type: 'string',
      description:
        'If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.',
    },
  ],
  info: {
    code_box: [
      {
        title: 'http Status code summary',
        rows: [
          '200 - OK &#8212; Everything worked as expected',
          '400 - Bad Request &#8212; The request was unacceptable.',
          '401 - Unauthorized &#8212; No valid API key provided.',
          '402 - Request Failed &#8212; The params were valid but failed.',
          '403 - Forbidden &#8212; The API key doesn`t have permissions.',
          '404 - Not Found &#8212; The requested resource was not found.',
          '409 - Conflict &#8212; The request conflicts with another request.',
          '500 - Server Error &#8212; Something went wrong on the server.',
        ],
      },
    ],
  },
};

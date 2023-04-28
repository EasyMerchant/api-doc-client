import HTTPSnippet from 'httpsnippet';
import { useAppContext } from '~/hooks';
import { Endpoint, Param } from '~/interfaces';
/*
  Example object: 

    {
      method: 'GET',
      url: 'http://mockbin.com/request',
      headers: [],
      cookies: [],
      queryString: [],
      httpVersion: 'http/2.0',
      headersSize: -1,
      bodySize: 0,
    }
*/

export const PARAM_TYPES = {
  QUERY: 'QUERY_PARAM',
  BODY: 'BODY_PARAM',
  URL: 'BODY_PARAM',
};
export const snippet = ({
  endpoint,
  params,
}: {
  endpoint: Endpoint;
  params: Param[];
}) => {
  const ctx = useAppContext();

  let request: HTTPSnippet.Data = {
    method: endpoint.attributes.method,
    url: `${ctx?.baseUrl}${endpoint.attributes.url}`.replace(/[{}]/g, ''),
    httpVersion: 'http/2.0',
    headers: [
      {
        name: 'accept',
        value: endpoint.attributes.response_type,
      },
      {
        name: 'X-Api-Key',
        value: '<YOUT_API_KEY>',
      },
      {
        name: 'X-Api-Secret',
        value: '<YOUT_API_SECRET>',
      },
    ],
    cookies: [],
    headersSize: -1,
    bodySize: 0,
    queryString: [],
  };

  if (endpoint.attributes.hasQueryParams) {
    let queryParams: Array<{ name: string; value: string }> = [];

    params?.forEach((param) => {
      if (param.attributes.param_type === PARAM_TYPES.QUERY) {
        queryParams.push({
          name: param.attributes.name,
          value: param.attributes.data_type,
        });
      }
    });

    if (queryParams.length) {
      request.queryString = queryParams;
    }
  }

  if (endpoint.attributes.hasBodyParams) {
    let bodyParams: Array<{ name: string; value: string }> = [];

    params?.forEach((param) => {
      if (param.attributes.param_type === PARAM_TYPES.BODY) {
        bodyParams.push({
          name: param.attributes.name,
          value: param.attributes.data_type,
        });
      }
    });

    if (bodyParams.length) {
      request.postData = {
        mimeType: 'application/x-www-form-urlencoded',
        params: bodyParams,
      };
    }
  }

  return new HTTPSnippet(request);
};

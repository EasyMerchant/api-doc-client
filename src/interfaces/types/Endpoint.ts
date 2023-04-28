export enum EnumContentType {
  'application/json',
  'text/plain',
  'text/html',
}

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export type Endpoint = {
  id: number;
  attributes: {
    method: string;
    url: string;
    response?: JSONValue;
    response_type: string;
    request: JSONValue;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    hasBodyParams: boolean;
    hasQueryParams: boolean;
  };
};

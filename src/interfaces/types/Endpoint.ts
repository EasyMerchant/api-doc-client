import { Param } from './Param';

export enum EnumContentType {
  'application/json',
  'text/plain',
  'text/html',
}

export type Endpoint = {
  method: string;
  url: string;
  params?: Param[];
  response?: {
    type: string | EnumContentType;
    data: Object;
  };
};

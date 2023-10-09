import { Endpoint } from './types/Endpoint';

export interface IService {
  id: number | string;
  name: string;
  description?: string[];
  endpoint: Endpoint;
}

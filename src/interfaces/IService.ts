import { Endpoint, Param } from './types';

export interface IService {
  id: number;
  attributes: {
    name: string;
    description?: string;
    endpoint: {
      data: Endpoint;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    parameters: {
      data: Param[];
    };
  };
}

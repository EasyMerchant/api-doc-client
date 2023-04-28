import { IService } from './IService';

export interface IApiData {
  id: number;
  attributes: {
    name: string;
    defaultOpen: boolean;
    description?: Array<string>;
    createdAt: string;
    updatedAt: string;
    info?: {
      data: {
        id: number;
        attributes: {
          heading?: string;
          description?: string;
          code_box?: Array<{
            title?: string;
            rows?: Array<string>;
          }>;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
    services?: {
      data: IService[];
    };
  };
}

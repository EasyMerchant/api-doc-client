import { Attribute } from './types/Attribute';
import { IService } from './IService';

export interface IApiData {
  id?: string;
  name: string;
  defaultOpen: boolean;
  description: Array<string>;
  info?: {
    heading?: string;
    description?: string;
    code_box: Array<{
      title: string;
      rows: Array<string>;
    }>;
  };
  attributes?: Attribute[];
  controller?: string;
  services?: IService[];
}

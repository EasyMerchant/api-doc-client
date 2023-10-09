import { ChildAttributeItem } from './Attribute';

export type Param = {
  required: boolean;
  attributeId?: number | string;
  isQueryParam?: boolean;
  isUrlParam?: boolean;
  custom?: {
    name: string;
    data_type: string;
    description?: string;
    child_attributes?: ChildAttributeItem[];
  };
  all_child_attributes_required?: boolean;
};

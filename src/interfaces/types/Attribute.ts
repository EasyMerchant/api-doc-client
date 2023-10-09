type DataType =
  | 'string'
  | 'boolean'
  | 'number'
  | 'float'
  | 'object'
  | 'date'
  | 'integer'
  | 'array'
  | 'bigint';

export type ChildAttributeItem = {
  // id: string | number;
  name: string;
  data_type: DataType;
  description: string;
  child_attributes?: ChildAttributeItem[];
  required?: boolean;
  for?: Array<string | number>;
  optional_for?: Array<string | number>;
  remove_in?: Array<string | number>;
};

export type Attribute = {
  id: string | number;
  name: string;
  data_type: DataType;
  description: string;
  child_attributes?: ChildAttributeItem[];
};

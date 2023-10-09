import { ChildAttributeItem } from '~/interfaces';
import AttributeName from './AttributeName';
import DataType from './DataType';
import RequiredParam from './RequiredParam';

type Props = {
  childAttributes: ChildAttributeItem[];
  serviceId: string | number;
  allChildAttributesRequired?: boolean;
};

export default function ChildAttribute({
  childAttributes,
  serviceId,
  allChildAttributesRequired,
}: Props) {
  return (
    <div className='border-l pl-4 ml-5 mt-4 mb-10 border-gray-200 dark:border-gray-500'>
      <ul className='divide-y divide-gray-200 dark:divide-gray-500'>
        {childAttributes?.map((child_attr, i) => {
          if (child_attr?.for && !child_attr.for?.includes(serviceId)) return;

          if (child_attr?.remove_in && child_attr.remove_in.includes(serviceId))
            return;

          let isForcedOptional = child_attr?.optional_for?.includes(serviceId);

          return (
            <li key={i} className='py-3  space-y-2'>
              <div className='font-medium flex items-center space-x-2'>
                <AttributeName>{child_attr.name}</AttributeName>
                <DataType>{child_attr.data_type}</DataType>
                <RequiredParam
                  isRequired={
                    allChildAttributesRequired
                      ? true
                      : isForcedOptional
                      ? false
                      : child_attr?.required || false
                  }
                />
              </div>

              <div
                className='text-sm font-normal text-gray-500 dark:text-slate-300'
                dangerouslySetInnerHTML={{
                  __html: child_attr.description,
                }}
              />

              {child_attr.child_attributes && (
                <ChildAttribute
                  childAttributes={child_attr.child_attributes}
                  serviceId={serviceId}
                  allChildAttributesRequired={allChildAttributesRequired}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

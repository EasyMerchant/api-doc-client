import { useAppContext } from '~/context/AppProvider';
import { IApiData, IService, Param } from '~/interfaces';
import { classJoiner, injectVariables } from '~/lib';
import { useFindAttribute } from '~/lib/useFindAndDisplay';
import AttributeName from './AttributeName';
import DataType from './DataType';
import RequiredParam from './RequiredParam';
import ChildAttribute from './ChildAttribute';

export default function Services({
  service,
  entity,
}: {
  service: IService;
  entity: IApiData;
}) {
  const { injectables, heading, divider, border } = useAppContext();

  const { findAttribute } = useFindAttribute({ attributes: entity.attributes });

  return (
    <div className='w-full '>
      <h3 className={classJoiner('text-2xl font-medium', heading)}>
        {service.name}
      </h3>
      {service?.description?.map((p, i) => (
        <p
          key={i}
          className='mt-6 text-gray-700 dark:text-slate-300'
          dangerouslySetInnerHTML={{
            __html: injectVariables(p || '', {
              ...injectables,
            }),
          }}
        />
      ))}
      {service.endpoint.params && (
        <div className='mt-8 w-full'>
          <div className={classJoiner('border-b', border?.bottom)}>
            <h4 className='text-left py-2 text-gray-600 dark:text-slate-300 font-medium'>
              Parameters
            </h4>
          </div>
          <div className={classJoiner('divide-y', divider?.secondary)}>
            {service.endpoint.params?.map((param: Param, i: number) => {
              if (!entity.attributes) return;

              const attribute = findAttribute(entity.attributes, param);

              return (
                <div key={i} className='flex flex-col'>
                  <div className='text-xs pt-4 font-medium flex items-center space-x-2'>
                    <AttributeName>{attribute?.name}</AttributeName>
                    <DataType>{attribute?.data_type}</DataType>
                    <RequiredParam isRequired={param?.required} />
                  </div>
                  <div
                    className='text-sm pb-4 pt-2 font-normal text-gray-700 dark:text-slate-300'
                    dangerouslySetInnerHTML={{
                      __html: attribute?.description || '',
                    }}
                  />

                  {attribute?.child_attributes && (
                    <ChildAttribute
                      childAttributes={attribute?.child_attributes}
                      serviceId={service?.id}
                      allChildAttributesRequired={
                        param?.all_child_attributes_required
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

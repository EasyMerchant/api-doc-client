import { useAppContext } from '~/hooks';
import { IService, Param } from '~/interfaces';
import { classJoiner, injectVariables } from '~/lib';

export default function Services({ service }: { service: IService }) {
  const ctx = useAppContext();
  return (
    <div className='w-full '>
      <h3
        className={`text-2xl font-medium ${ctx?.dark?.heading} ${ctx?.light?.heading}`}
      >
        {service.attributes.name}
      </h3>
      <p
        className='mt-6 text-gray-700 dark:text-slate-300'
        dangerouslySetInnerHTML={{
          __html: injectVariables(service?.attributes?.description || '', {
            ...ctx,
          }),
        }}
      />
      {service.attributes.parameters.data.length > 0 && (
        <table className='mt-8 w-full'>
          <thead>
            <tr
              className={`border-b ${ctx?.dark?.border?.bottom} ${ctx?.light?.border?.bottom}`}
            >
              <th className='text-left py-2 text-gray-600 dark:text-slate-300 font-medium'>
                Parameters
              </th>
            </tr>
          </thead>
          <tbody
            className={`divide-y ${ctx?.dark?.divider?.secondary} ${ctx?.light?.divider?.secondary}`}
          >
            {service.attributes.parameters.data.map(
              (param: Param, i: number) => (
                <tr key={i} className='flex flex-col'>
                  <td className='text-xs pt-4 font-medium flex items-center space-x-2'>
                    <code className='text-gray-900 dark:text-slate-300'>
                      {param.attributes?.name}
                    </code>
                    <span className='text-gray-700 dark:text-slate-300 border border-gray-600 dark:border-slate-400 px-1 rounded h-5 w-auto'>
                      {param.attributes?.data_type}
                    </span>
                    <code
                      className={classJoiner(
                        param?.attributes?.required
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-gray-700 dark:text-slate-300',
                        'ml-2',
                      )}
                    >
                      {param?.attributes?.required ? 'required' : 'optional'}
                    </code>
                  </td>
                  <td
                    className='text-sm pb-4 pt-2 font-normal text-gray-700 dark:text-slate-300'
                    dangerouslySetInnerHTML={{
                      __html: param?.attributes?.description,
                    }}
                  />

                  {param.attributes?.expanded_description && (
                    <td
                      className='text-sm pb-4 pt-2 font-normal text-gray-700 dark:text-slate-300'
                      dangerouslySetInnerHTML={{
                        __html: param?.attributes?.expanded_description,
                      }}
                    />
                  )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

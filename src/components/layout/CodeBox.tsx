import { useAppContext } from '~/context/AppProvider';
import { IApiData } from '~/interfaces';
import { classJoiner, injectVariables } from '~/lib';

export default function CodeBox({ entity }: { entity: IApiData }) {
  const { injectables, heading, codeBox } = useAppContext();

  return (
    <div className='w-full max-w-md 2xl:max-w-xl mt-14 space-y-4'>
      <h2 className={classJoiner(heading, 'text-xl font-semibold')}>
        {entity?.info?.heading || null}
      </h2>
      <p className='text-sm font-semibold text-gray-700 dark:text-gray-400'>
        {injectVariables(entity?.info?.description ?? '', {
          ...injectables,
        })}
      </p>
      {entity?.info?.code_box.map((box, i) => (
        <div
          className='h-auto max-h-96 flex flex-col w-full sticky top-20 rounded-[10px] overflow-clip'
          key={i}
        >
          <div
            className={classJoiner(
              'text-sm flex space-x-2 px-4 py-2',
              codeBox?.headPrimaryBackground,
            )}
          >
            <h3 className='text-white dark:text-white uppercase font-medium'>
              {box.title}
            </h3>
          </div>
          <div
            className={classJoiner(
              `text-sm overflow-y-auto scrollbar px-5 py-2 text-slate-300  ${codeBox?.contentBackground}`,
            )}
          >
            <table>
              <tbody>
                {box.rows?.map((row, i) => (
                  <tr key={i}>
                    <td className='py-1'>
                      <code
                        className=' whitespace-nowrap'
                        dangerouslySetInnerHTML={{
                          __html: injectVariables(row, {
                            ...injectables?.api_url,
                          }),
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useAppContext } from '~/context/AppProvider';
import { IApiData } from '~/interfaces';
import { classJoiner } from '~/lib';
import { useFindEnpoints } from '~/lib/useFindAndDisplay';

export default function Endpoints({ entity }: { entity: IApiData }) {
  const { codeBox, methods } = useAppContext();
  const { findEnpoints } = useFindEnpoints({ services: entity.services });
  return (
    <div className='rounded-[10px] h-fit flex flex-col mt-14 w-full max-w-md 2xl:max-w-xl sticky top-20 overflow-clip'>
      <div
        className={classJoiner(
          'text-sm flex space-x-2 px-4 py-2',
          codeBox?.headPrimaryBackground,
        )}
      >
        <span className='text-white dark:text-slate-300 uppercase font-medium'>
          Endpoints
        </span>
      </div>
      <div
        className={classJoiner(
          'text-sm overflow-y-auto px-5 py-2 scrollbar',
          codeBox?.contentBackground,
        )}
      >
        <table>
          <tbody>
            {entity.services &&
              findEnpoints(entity.services).map((ept, i) => (
                <tr key={i}>
                  <td className='uppercase pr-4 py-px text-right'>
                    <span
                      className={classJoiner(
                        `text-xs font-bold`,
                        methods && methods[ept.method],
                      )}
                    >
                      {ept.method}
                    </span>
                  </td>
                  <td className='text-black dark:text-white'>
                    <code>{ept.url}</code>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

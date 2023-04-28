import { useAppContext } from '~/hooks';
import { IApiData } from '~/interfaces';
import { findEnpoints, methodClass } from '~/lib';

export default function Endpoints({ entity }: { entity: IApiData }) {
  const ctx = useAppContext();

  return (
    <div className='rounded-[10px] h-fit flex flex-col mt-14 w-full max-w-md 2xl:max-w-xl sticky top-20 overflow-clip'>
      <div
        className={`text-sm flex space-x-2 px-4 py-2 
        ${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground}`}
      >
        <span className='text-white dark:text-slate-300 uppercase font-medium'>
          Endpoints
        </span>
      </div>
      <div
        className={`text-sm overflow-y-auto px-5 py-2 scrollbar 
        ${ctx?.light?.codeBox?.contentBackground} ${ctx?.dark?.codeBox?.contentBackground}`}
      >
        <table>
          <tbody className='w-full'>
            {entity.attributes.services &&
              findEnpoints(entity.attributes.services.data).map((ept, i) => (
                <tr key={i}>
                  <td className='uppercase pr-4 py-px text-right'>
                    <span
                      className={`text-xs ${ctx?.dark?.methods[ept.method]} ${
                        ctx?.light?.methods[ept.method]
                      }
                      font-bold`}
                    >
                      {ept.method}
                    </span>
                  </td>
                  <td className='text-slate-300'>
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

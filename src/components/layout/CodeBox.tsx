import { useAppContext } from '~/hooks';
import { injectVariables } from '~/lib';

export default function CodeBox({
  heading,
  description,
  code_box,
}: {
  heading: string | undefined;
  description: string | undefined;
  code_box:
    | Array<{ title?: string | undefined; rows?: string[] | undefined }>
    | undefined;
}) {
  const ctx = useAppContext();

  return (
    <div className='w-full max-w-md 2xl:max-w-xl mt-14 space-y-4'>
      <h2
        className={`${ctx?.dark?.heading} ${ctx?.light?.heading} text-xl font-semibold`}
      >
        {heading}
      </h2>
      <p className='text-sm font-semibold text-gray-700 dark:text-gray-400'>
        {description}
      </p>
      {code_box?.map((box, i) => (
        <div
          className='h-auto max-h-96 flex flex-col w-full sticky top-20 rounded-[10px] overflow-clip'
          key={i}
        >
          <div
            className={`text-sm flex space-x-2 px-4 py-2 
            ${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground}`}
          >
            <h3 className='text-white dark:text-white uppercase font-medium'>
              {box.title}
            </h3>
          </div>
          <div
            className={`text-sm overflow-y-auto scrollbar px-5 py-2 text-slate-300 
            ${ctx?.dark?.codeBox?.contentBackground} ${ctx?.light?.codeBox?.contentBackground}`}
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
                            baseUrl: ctx?.baseUrl,
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

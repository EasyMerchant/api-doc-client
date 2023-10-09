import { useAppContext } from '~/context/AppProvider';
import { useHighlighter } from '~/hooks';
import { IService } from '~/interfaces';
import { classJoiner } from '~/lib';

export default function RequestResponse({ service }: { service: IService }) {
  const { codeBox, methods, scrollbar } = useAppContext();

  const response_json = JSON.stringify(
    service?.endpoint?.response?.data,
    undefined,
    2,
  );

  const response_html = useHighlighter(response_json, 'json');

  return (
    <div className='sticky top-20 space-y-4 w-full'>
      <div className='rounded-[10px] w-full flex flex-col sticky top-20 overflow-clip'>
        <div
          className={classJoiner(
            'text-sm flex space-x-2 px-4 py-2',
            codeBox?.headPrimaryBackground,
          )}
        >
          <h4
            className={classJoiner(
              methods && methods[service?.endpoint?.method],
              'uppercase font-bold',
            )}
          >
            {service.endpoint.method}
          </h4>
          <span className='text-white dark:text-slate-200'>
            <code>{service?.endpoint?.url}</code>
          </span>
        </div>
        <div
          className={classJoiner(
            'text-sm flex justify-between space-x-2 px-4 py-2 font-medium text-white dark:text-slate-300',
            codeBox?.headSecondaryBackground,
          )}
        >
          <span className='uppercase'>Response</span>
          <span>{service.endpoint.response?.type}</span>
        </div>
        <div
          className={classJoiner(
            'text-sm rounded-b-md overflow-clip',
            codeBox?.contentBackground,
          )}
        >
          <pre
            className={classJoiner(
              'language-json max-h-[400px] overflow-auto text-[12px] text-gray-400 dark:text-slate-400 w-full h-full border-transparent border-none focus:outline-none scrollbar scrollbar-w-[10px] scrollbar-h-[10px]',
              scrollbar?.thumb,
              scrollbar?.track,
            )}
          >
            <code
              className='w-full h-full'
              dangerouslySetInnerHTML={{
                __html: response_html,
              }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

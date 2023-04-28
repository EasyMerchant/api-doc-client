import { useAppContext, useHighlighter } from '~/hooks';
import { IService } from '~/interfaces';

export default function RequestResponse({ service }: { service: IService }) {
  const ctx = useAppContext();

  const response_json = JSON.stringify(
    service?.attributes.endpoint?.data?.attributes?.response,
    undefined,
    2,
  );

  const response_html = useHighlighter(response_json, 'json');

  return (
    <div className='sticky top-20 space-y-4 w-full'>
      <div className='rounded-[10px] w-full flex flex-col sticky top-20 overflow-clip'>
        <div
          className={`text-sm flex space-x-2 px-4 py-2 
          ${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground}`}
        >
          <h4
            className={`${
              ctx?.dark?.methods[
                service?.attributes.endpoint?.data.attributes.method
              ]
            } 
            ${
              ctx?.light?.methods[
                service?.attributes.endpoint?.data.attributes.method
              ]
            }
            uppercase font-bold`}
          >
            {service.attributes.endpoint.data.attributes.method}
          </h4>
          <span className='text-white dark:text-slate-200'>
            <code>{service?.attributes?.endpoint?.data?.attributes?.url}</code>
          </span>
        </div>
        <div
          className={`text-sm flex justify-between space-x-2 px-4 py-2 font-medium text-white dark:text-slate-300 
          ${ctx?.dark?.codeBox?.headSecondaryBackground} ${ctx?.light?.codeBox?.headSecondaryBackground}`}
        >
          <span className='uppercase'>Response</span>
          <span>
            {service.attributes.endpoint.data.attributes.response_type}
          </span>
        </div>
        <div
          className={`text-sm rounded-b-md overflow-clip 
          ${ctx?.light?.codeBox?.contentBackground} ${ctx?.dark?.codeBox?.contentBackground}`}
        >
          <pre
            className={`language-json max-h-[400px] overflow-auto text-[12px] text-gray-400 dark:text-slate-400 
            w-full h-full border-transparent border-none focus:outline-none
            scrollbar scrollbar-w-[10px] scrollbar-h-[10px] 
            ${ctx?.dark?.scrollbar?.thumb} ${ctx?.light?.scrollbar?.thumb} 
            ${ctx?.dark?.scrollbar?.track} ${ctx?.light?.scrollbar?.track}
            `}
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

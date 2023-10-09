import { useMemo, useState } from 'react';
import LibrarySelect from './Libraries';
import { useHighlighter } from '~/hooks/useHighlighter';
import { Transition } from '@headlessui/react';
import { useAppContext } from '~/context/AppProvider';
import { Attribute } from '~/interfaces';
import HTTPSnippet from 'httpsnippet';
import { useFindAttribute } from '~/lib/useFindAndDisplay';
import { Endpoint } from '~/interfaces/types/Endpoint';
import { classJoiner } from '~/lib';
import { CopyToClipBoard, ForwardIcon } from '~/components/icons';
/**
 * options to display inside select drop-down.
 */
const options = [
  { name: 'Select library', target: '', type: '' },
  { name: 'cURL', target: 'shell', type: 'curl', lang: 'sh' },
  { name: 'Ruby', target: 'ruby', type: 'native', lang: 'rb' },
  { name: 'Python', target: 'python', type: 'requests', lang: 'py' },
  { name: 'PHP', target: 'php', type: 'curl', lang: 'php' },
  { name: 'Java', target: 'java', type: 'asynchttp', lang: 'java' },
  { name: 'JavaScript', target: 'javascript', type: 'fetch', lang: 'js' },
  { name: 'Swift', target: 'swift', type: 'nsurlsession', lang: 'swift' },
  { name: 'Go', target: 'go', type: 'native', lang: 'go' },
];

type Props = {
  attributes: Attribute[];
  endpoint: Endpoint;
};

export default function Snippet({ attributes, endpoint }: Props) {
  const { baseUrl, setContext, codeBox, scrollbar } = useAppContext();
  const [client, setClient] = useState(options[1]);
  const [isShowing, setIsShowing] = useState(false);

  const { findAttribute } = useFindAttribute({ attributes });

  const code = useMemo(() => {
    if (!client.target) return '';

    let options: any = {
      method: endpoint.method,
      url: `${baseUrl}${endpoint.url}`.replace(/[{}]/g, ''),
      httpVersion: 'http/2.0',
      headers: [
        {
          name: 'accept',
          value: endpoint.response?.type,
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [],
      },
    };

    if (endpoint.params && attributes) {
      let bodyParams: Array<{ name: string; value: string }> = [];
      let queryParams: Array<{ name: string; value: string }> = [];

      endpoint.params.forEach((param) => {
        const attr = findAttribute(attributes, param);
        if (!attr) return;

        if (param.isQueryParam) {
          queryParams.push({ name: attr.name, value: attr.data_type });
        } else {
          bodyParams.push({ name: attr.name, value: attr.data_type });
        }
      });

      if (bodyParams.length) {
        options.postData.params = bodyParams;
      }

      if (queryParams.length) {
        options.queryString = queryParams;
      }
    }

    const snippet = new HTTPSnippet(options);
    try {
      return snippet.convert(client.target, client.type, {}) || '';
    } catch (error) {
      console.log(error);
      return '';
    }
  }, [client]);
  /**
   * httpsnippet has its own highlighter as mentioned on its docs
   * but it did not work.
   */
  const html = useHighlighter(code, client.target);

  return (
    <div className='rounded-[10px] h-auto flex flex-col mt-14 w-full'>
      <div
        className={classJoiner(
          'text-sm flex justify-between space-x-2 px-4 py-2 rounded-t-[10px]',
          codeBox?.headPrimaryBackground,
        )}
      >
        <div className='text-white dark:text-slate-300 flex space-x-3 items-center'>
          <span className='uppercase font-medium'>Snippet</span>
          <span className='text-gray-300'>|</span>
          <button
            onClick={() => {
              setContext({
                showSandBox: true,
                testingData: {
                  url: endpoint.url,
                  method: endpoint.method,
                  params: endpoint.params,
                  attributes,
                },
              });
            }}
            className='group/underline'
          >
            <div className='flex items-center space-x-1'>
              <ForwardIcon className='w-4 h-4 hidden group-hover/underline:inline-block' />
              <span>Sandbox</span>
            </div>
            <hr className='w-0 group-hover/underline:w-full' />
          </button>
        </div>
        <div className='flex items-center divide-x divide-gray-400 dark:divide-gray-500'>
          <LibrarySelect
            onChange={(client) => setClient(client)}
            options={options}
            selected={client}
          />
          <button
            className='pl-2 group relative'
            onClick={() => {
              window.navigator.clipboard.writeText(code);
              setIsShowing(true);

              setTimeout(() => {
                setIsShowing(false);
              }, 2000);
            }}
          >
            <CopyToClipBoard className='w-4 h-4 text-white dark:text-gray-300 hover:opacity-50' />
            <span className='sr-only'>Copy to clip board icon</span>

            <ToolTip isShowing={isShowing} />
          </button>
        </div>
      </div>

      <div
        className={classJoiner(
          `overflow-clip rounded-b-[10px]`,
          codeBox?.contentBackground,
        )}
      >
        <pre
          className={classJoiner(
            `language-${client.target} max-h-[200px] overflow-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px]`,
            scrollbar?.thumb,
            scrollbar?.track,
          )}
        >
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </div>
    </div>
  );
}

/**
 * A tooltip to give feedback for user action on copying the code snippet
 *
 * @param isShowing:boolean
 * @returns
 */
const ToolTip = ({ isShowing }: { isShowing: boolean }) => {
  const { toolTip } = useAppContext();
  return (
    <Transition
      show={isShowing}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='absolute -top-12 -left-6 inline-block w-auto pointer-events-none z-20'>
        <div
          className={classJoiner(
            `relative text-center rounded-xl shadow-md text-white text-xs transition ease-in-out duration-200 py-1.5 whitespace-nowrap px-3`,
            toolTip?.background,
          )}
        >
          Copied
          <div
            className={classJoiner(
              `absolute border-solid border-t-[6px] border-x-transparent border-x-[6px] borderb-0 right-[15px] -bottom-[6px] z-40`,
              toolTip?.pointer,
            )}
          />
        </div>
      </div>
    </Transition>
  );
};

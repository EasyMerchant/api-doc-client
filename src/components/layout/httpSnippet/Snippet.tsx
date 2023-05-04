import { SVGAttributes, useMemo, useState } from 'react';
import LibrarySelect from './Libraries';
import { snippet } from './HttpSnippet';
import { useHighlighter } from '~/hooks/useHighlighter';
import { Transition } from '@headlessui/react';
import { Endpoint, Param } from '~/interfaces';
import { useAppContext } from '~/hooks';
import { IAppContext } from '~/context/AppProvider';

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

export default function Snippet({
  endpoint,
  params,
}: {
  endpoint: Endpoint;
  params: Param[];
}) {
  const ctx = useAppContext();

  const [client, setClient] = useState(options[1]);
  const [isShowing, setIsShowing] = useState(false);

  const _snippet = snippet({ endpoint, params, ctx });

  const code = useMemo(() => {
    if (!client.target) return '';
    return _snippet.convert(client.target, client.type, {}) || '';
  }, [client]);

  /**
   * httpsnippet has its own highlighter as mentioned on its docs
   * but it did not work.
   */
  const html = useHighlighter(code, client.target);

  return (
    <div className='rounded-[10px] h-auto flex flex-col mt-14 w-full'>
      <div
        className={`text-sm flex justify-between space-x-2 px-4 py-2 rounded-t-[10px] 
      ${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground}`}
      >
        <div className='text-white dark:text-slate-300 flex space-x-3 items-center'>
          <span className='uppercase font-medium'>Snippet</span>
          <span className='text-gray-300'>|</span>
          <button
            onClick={() => {
              if (!ctx) return;

              const { setContext } = ctx;

              setContext({
                showSandBox: true,
                testingData: {
                  url: endpoint.attributes.url,
                  method: endpoint.attributes.method,
                  params,
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

            <ToolTip isShowing={isShowing} ctx={ctx} />
          </button>
        </div>
      </div>

      <div
        className={`overflow-clip rounded-b-[10px] ${ctx?.light?.codeBox?.contentBackground} ${ctx?.dark?.codeBox?.contentBackground}`}
      >
        <pre
          className={`language-${client.target} max-h-[200px] overflow-auto 
          scrollbar scrollbar-w-[10px] scrollbar-h-[10px] 
          ${ctx?.dark?.scrollbar?.thumb} ${ctx?.light?.scrollbar?.thumb}
          ${ctx?.dark?.scrollbar?.track} ${ctx?.light?.scrollbar?.track}
          `}
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
const ToolTip = ({
  isShowing,
  ctx,
}: {
  isShowing: boolean;
  ctx: IAppContext | undefined;
}) => {
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
          className={`relative text-center rounded-xl shadow-md text-white text-xs transition ease-in-out duration-200 py-1.5 whitespace-nowrap px-3
            ${ctx?.dark?.toolTip?.background} ${ctx?.light?.toolTip?.background}`}
        >
          Copied
          <div
            className={`absolute border-solid border-t-[6px] border-x-transparent border-x-[6px] borderb-0 right-[15px] -bottom-[6px] z-40 
            ${ctx?.dark?.toolTip?.pointer} ${ctx?.light?.toolTip?.pointer}`}
          />
        </div>
      </div>
    </Transition>
  );
};

const CopyToClipBoard = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
      />
    </svg>
  );
};

const ForwardIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path d='M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z' />
    </svg>
  );
};

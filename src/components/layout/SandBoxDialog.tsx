import { Dialog, Switch, Transition } from '@headlessui/react';
import axios from 'axios';
import {
  ChangeEvent,
  FormEvent,
  Fragment,
  SVGAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAppContext, useHighlighter } from '~/hooks';
import { classJoiner, injectVariables } from '~/lib';
import { PARAM_TYPES } from './httpSnippet/HttpSnippet';
import { Param } from '~/interfaces';

const tabs = ['Headers', 'Parameters'];

const SandBoxDialog = () => {
  const [
    {
      payload,
      response,
      currentTab,
      isFetching,
      isError,
      showSecret,
      queryParams,
    },
    setState,
  ] = useState<{
    queryParams: Param[];
    response: any;
    payload: any;
    currentTab: string;
    isFetching: boolean;
    isError: boolean;
    showSecret: boolean;
  }>({
    response: '',
    payload: {},
    currentTab: tabs[1],
    isFetching: false,
    isError: false,
    showSecret: false,
    queryParams: [],
  });

  const ctx = useAppContext();

  const onClose = () => {
    ctx?.setContext && ctx?.setContext({ showSandBox: false });
    setState((prev) => ({
      ...prev,
      response: '',
      payload: {},
      isError: false,
      queryParams: [],
    }));
  };

  const response_json = JSON.stringify(response, undefined, 2);

  const response_html = useHighlighter(response_json, 'json');

  const sandBoxUrl = useMemo(() => {
    if (!ctx?.testingData?.url) return '';
    if (Object.keys(payload).length < 1) return ctx.testingData.url;

    let url = ctx.testingData.url;

    if (queryParams.length > 0) {
      url = `${url}?`;

      let lastIndex = queryParams.length - 1;
      queryParams.forEach((param, index) => {
        url = url + param.attributes.name + '=' + `{${param.attributes.name}}`;

        if (index !== lastIndex && index > 0) {
          url = url + '&';
        }
      });
    }

    return injectVariables(url, payload);
  }, [payload, ctx?.testingData?.url, queryParams]);

  const onParamChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      payload: {
        ...prev.payload,
        [name]: value,
      },
    }));
  };

  const onHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!ctx || !ctx?.sandBox) return;
    ctx.setContext({ sandBox: { ...ctx.sandBox, [name]: value } });
  };

  const showHideSecret = () =>
    setState((prev) => ({ ...prev, showSecret: !prev.showSecret }));

  const getTestData = async (e: FormEvent) => {
    e.preventDefault();

    setState((prev) => ({ ...prev, isFetching: true }));

    const config = {
      url: `${ctx?.sandBoxApiUrl}${sandBoxUrl}`,
      method: ctx?.testingData?.method.toLowerCase(),
      headers: {
        'X-Api-Key': ctx?.sandBox?.apiKey,
        'X-Api-Secret': ctx?.sandBox?.apiSecret,
      },
      data: { ...payload },
    };

    axios(config)
      .then(({ data }) => {
        return Promise.resolve(data);
      })
      .then((response) =>
        setState((prev) => ({
          ...prev,
          response,
        })),
      )
      .catch((e) => {
        const errResponse = e?.response?.data || 'Something went wrong!';

        setState((prev) => ({
          ...prev,
          response: errResponse,
        }));
      })
      .finally(() =>
        setState((prev) => ({
          ...prev,
          isFetching: false,
        })),
      );
  };

  useEffect(() => {
    if (!ctx || !ctx?.testingData?.params?.length) {
      return;
    }

    let params = ctx.testingData.params;

    let _qp: Param[] = [];

    params.forEach((param) => {
      if (param.attributes.param_type === PARAM_TYPES.QUERY) {
        _qp.push(param);
      }
    });

    if (_qp.length) {
      setState((prev) => ({ ...prev, queryParams: _qp }));
    }
  }, [ctx?.testingData?.params?.length]);

  return (
    <Transition appear show={ctx?.showSandBox} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-75' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full min-w-[360px] max-w-2xl transform overflow-clip rounded-xl text-left align-middle shadow-xl transition-all bg-white dark:bg-gray-900'>
                <div className='w-full flex flex-col'>
                  <div
                    className={`text-sm flex justify-between items-center px-4 py-2 md:py-3 ${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground}`}
                  >
                    <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
                      <span className='text-white'>
                        {ctx?.identifier} SANDBOX
                      </span>

                      <h4
                        className={`${
                          ctx?.dark?.methods[ctx?.testingData?.method || '']
                        } ${
                          ctx?.light?.methods[ctx?.testingData?.method || '']
                        } uppercase font-bold`}
                      >
                        {ctx?.testingData?.method}
                      </h4>

                      <code className='truncate text-white dark:text-slate-200 max-w-sm md:max-w-lg'>
                        {sandBoxUrl}
                      </code>
                    </div>

                    <button
                      onClick={onClose}
                      className='text-white hover:opacity-75'
                    >
                      <XMarkIcon />
                    </button>
                  </div>

                  <div className='bg-white dark:bg-black dark:text-white flex justify-between items-center px-2 md:px-4 h-14 border-b dark:border-slate-700'>
                    <div className='flex space-x-5'>
                      {tabs.map((tab, idx) => (
                        <button
                          key={idx}
                          className={classJoiner(
                            'font-bold',
                            currentTab === tab &&
                              `${ctx?.dark?.codeBox?.headPrimaryBackground} ${ctx?.light?.codeBox?.headPrimaryBackground} 
                              text-white px-2 h-8 rounded-md transition-all`,
                          )}
                          onClick={() =>
                            currentTab !== tab &&
                            setState((prev) => ({ ...prev, currentTab: tab }))
                          }
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`overflow-y-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px] text-sm bg-white dark:bg-gray-900  
                    scrollbar-track-white scrollbar-thumb-slate-300 dark:scrollbar-track-black dark:scrollbar-thumb-slate-700`}
                  >
                    {currentTab === tabs[0] && (
                      <table className='table-auto w-full'>
                        <thead>
                          <tr
                            className={`h-10 border-b border-t divide divide-x dark:text-white divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-slate-700 bg-zinc-100 dark:bg-transparent`}
                          >
                            <th className='px-4 py-2'>
                              <code>Key</code>
                            </th>
                            <th className='px-2 py-2 w-full'>
                              <code>Value</code>
                            </th>
                          </tr>
                        </thead>

                        <tbody
                          className={`divide divide-y border-b divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-slate-700`}
                        >
                          <tr
                            className={`divide divide-x dark:text-gray-300 divide-slate-200 dark:divide-slate-700`}
                          >
                            <td className='px-4 py-2 whitespace-nowrap'>
                              <code>X-Api-Key</code>
                            </td>
                            <td className='px-4 py-2 bg-zinc-50 dark:bg-black'>
                              <input
                                id='apiKey'
                                name='apiKey'
                                type='text'
                                className='border-none focus:outline-none bg-transparent dark:text-white w-full'
                                autoFocus
                                onChange={onHeaderChange}
                                value={ctx?.sandBox?.apiKey || ''}
                              />
                            </td>
                          </tr>
                          <tr
                            className={`divide divide-x dark:text-gray-300 divide-slate-200 dark:divide-slate-700`}
                          >
                            <td className='px-4 py-2 whitespace-nowrap'>
                              <code>X-Api-Secret</code>
                            </td>
                            <td className='px-4 py-2 bg-zinc-50 dark:bg-black relative'>
                              <input
                                id='apiSecret'
                                name='apiSecret'
                                type={showSecret ? 'text' : 'password'}
                                className='border-none focus:outline-none bg-transparent dark:text-white w-full'
                                onChange={onHeaderChange}
                                value={ctx?.sandBox?.apiSecret || ''}
                              />

                              <span
                                onClick={showHideSecret}
                                className='absolute right-2 md:right-4 top-2 cursor-pointer'
                              >
                                {showSecret ? (
                                  <EyeOpenIcon className='w-5 h-5' />
                                ) : (
                                  <EyeClosedIcon className='w-5 h-5' />
                                )}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {currentTab === tabs[1] && (
                      <form onSubmit={getTestData} className='max-h-[200px]'>
                        {ctx?.testingData?.params &&
                        ctx?.testingData?.params.length > 0 ? (
                          <table className='table-auto w-full'>
                            <thead>
                              <tr
                                className={`h-10 bg-zinc-100 dark:bg-transparent border-b border-t divide divide-x dark:text-white divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-slate-700`}
                              >
                                <th className='px-4 py-2'>
                                  <code>Key</code>
                                </th>

                                <th className='px-2 py-2 w-full'>
                                  <code>Value</code>
                                </th>
                              </tr>
                            </thead>

                            <tbody
                              className={`divide divide-y border-b dark:divide-slate-600 border-slate-200 dark:border-slate-700 `}
                            >
                              {ctx?.testingData?.params?.map((param, index) => {
                                return (
                                  <tr
                                    key={index}
                                    className={`divide divide-x dark:text-gray-300 dark:divide-slate-700 `}
                                  >
                                    <td className='px-4 py-2 space-x-2 whitespace-nowrap'>
                                      <code>{param.attributes.name}</code>
                                      <span className='md:hidden text-red-500'>
                                        {param.attributes.required && '*'}
                                      </span>
                                      <span className='text-slate-400 dark:text-slate-500 hidden md:inline-block'>
                                        &#40;
                                        {param.attributes.required ? (
                                          <code>required</code>
                                        ) : (
                                          <code>optional</code>
                                        )}
                                        &#41;
                                      </span>
                                    </td>

                                    <td className='px-4 py-0 bg-zinc-50 dark:bg-black'>
                                      {param.attributes.data_type ===
                                      'boolean' ? (
                                        <Switch
                                          checked={
                                            payload[param.attributes.name]
                                          }
                                          onChange={(value) => {
                                            console.log(value);

                                            setState((prev) => ({
                                              ...prev,
                                              payload: {
                                                ...prev.payload,
                                                [param.attributes.name]: value,
                                              },
                                            }));
                                          }}
                                          className={`${
                                            payload[param.attributes.name]
                                              ? 'bg-blue-500'
                                              : 'bg-gray-300'
                                          }
                                                 relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                        >
                                          <span className='sr-only'>
                                            Use setting
                                          </span>
                                          <span
                                            aria-hidden='true'
                                            className={`${
                                              payload[param.attributes.name]
                                                ? 'translate-x-6'
                                                : 'translate-x-0'
                                            }
                                              pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                          />
                                        </Switch>
                                      ) : (
                                        <input
                                          id={param.attributes.name}
                                          name={param.attributes.name}
                                          type={
                                            param.attributes.data_type ===
                                            'number'
                                              ? 'number'
                                              : 'text'
                                          }
                                          className='border-none h-10 focus:outline-none bg-transparent dark:text-white w-full placeholder:text-slate-500 dark:placeholder:text-slate-500'
                                          autoFocus={index === 0}
                                          placeholder={
                                            param.attributes.data_type
                                          }
                                          required={param.attributes.required}
                                          onChange={onParamChange}
                                        />
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        ) : (
                          <div className='text-sm text-center mt-5 dark:text-gray-500'>
                            No params required
                          </div>
                        )}

                        <button
                          disabled={isFetching}
                          type='submit'
                          className={`text-white w-28 rounded-md transition-all absolute top-[86px] md:top-[54px] right-2 md:right-4 h-9 hover:bg-opacity-75
                          ${ctx?.dark?.codeBox?.headSecondaryBackground} 
                          ${ctx?.light?.codeBox?.headSecondaryBackground}`}
                        >
                          {isFetching ? (
                            <span className='animate-pulse'>Sending...</span>
                          ) : (
                            'Send'
                          )}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* response object */}

                  <div className='mt-5'>
                    <div
                      className={`text-sm flex justify-between space-x-2 px-4 py-2 font-medium dark:text-slate-300 bg-zinc-200 dark:bg-black`}
                    >
                      <span className='uppercase'>Response</span>
                    </div>
                    <div className={`text-sm bg-gray-800`}>
                      {response ? (
                        <pre
                          className={`language-json max-h-[400px] overflow-auto text-[12px] text-gray-400 dark:text-slate-400 w-full h-full border-transparent border-none focus:outline-none 
                          scrollbar scrollbar-w-[10px] scrollbar-h-[10px] ${ctx?.dark?.scrollbar?.thumb} ${ctx?.light?.scrollbar?.thumb} ${ctx?.dark?.scrollbar?.track} ${ctx?.light?.scrollbar?.track}`}
                        >
                          <code
                            className='w-full h-full'
                            dangerouslySetInnerHTML={{
                              __html: response_html,
                            }}
                          />
                        </pre>
                      ) : (
                        <div className='px-4 py-4 text-slate-400'>
                          Click Send to receive repsonse from the api...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SandBoxDialog;

const XMarkIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={4}
      stroke='currentColor'
      className='w-5 h-5'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

const EyeOpenIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      />
    </svg>
  );
};

const EyeClosedIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
      />
    </svg>
  );
};

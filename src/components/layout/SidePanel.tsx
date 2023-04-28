import { Dialog, Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import Router from 'next/router';
import { Fragment, SVGAttributes, useCallback, useMemo, useState } from 'react';
import { useAppContext, useScrollDown } from '~/hooks';
import { IApiData } from '~/interfaces';
import { classJoiner, getElementId } from '~/lib';

export default function SidePanel({
  data,
  theme,
}: {
  data: IApiData[];
  theme: string | null;
}) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const scrollingDown = useScrollDown();

  const ctx = useAppContext();

  return (
    <>
      {/* for desktop */}
      <div
        id='side-panel'
        className={`hidden xl:flex w-60 2xl:w-[256px] max-w-[256px] flex-col z-20 fixed inset-0 border-r 
        ${ctx?.dark?.border?.bottom} ${ctx?.light?.border?.bottom} 
        ${ctx?.dark?.sidePanel?.background} ${ctx?.light?.sidePanel?.background}`}
      >
        <TableOfContents data={data} theme={theme} />
      </div>

      {/* for mobile  */}
      <button
        onClick={() => setSideBarOpen(true)}
        className={classJoiner(
          `fixed left-2 top-[70px] w-10 h-10 xl:hidden z-10 transform transition ease-in-out duration-300 
          ${ctx?.dark?.sidePanel?.service?.background} ${ctx?.light?.sidePanel?.service.background} rounded-full shadow-lg`,
          scrollingDown && '-translate-x-14',
        )}
      >
        <span className='sr-only'>API Reference Docs</span>
        <BurgerIcon className='w-6 h-6 text-white m-auto' />
      </button>

      <Transition.Root show={sideBarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex xl:hidden'
          onClose={setSideBarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-[256px] bg-white dark:bg-[#261603]'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-5 right-0 -mr-12'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-full'
                    onClick={() => setSideBarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <CloseIcon />
                  </button>
                </div>
              </Transition.Child>

              <TableOfContents
                data={data}
                setSideBarOpen={setSideBarOpen}
                theme={theme}
              />
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-20' aria-hidden='true'></div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const TableOfContents = ({
  data,
  setSideBarOpen,
  theme,
}: {
  data: IApiData[];
  setSideBarOpen?: (value: boolean) => void;
  theme: string | null;
}) => {
  const ctx = useAppContext();

  const id = useMemo(() => {
    return Router?.query?.id || '';
  }, [Router?.query]);

  const closeSideBar = () => {
    if (setSideBarOpen) {
      setSideBarOpen(false);
    }
  };

  const updateQuery = useCallback(
    (name: string) => {
      const elementId = getElementId(name);

      if (id === elementId) return;

      Router.push({
        query: {
          id: elementId,
        },
      });
      // if mobile panel is open
      closeSideBar();
    },
    [id],
  );

  return (
    <div className='flex flex-col flex-grow pt-5 overflow-y-auto scrollbar-hide'>
      <div className='flex items-center flex-shrink-0 px-4 space-x-4 text-gray-900 dark:text-slate-300'>
        {ctx && (
          <>
            {theme === 'light' ? (
              <span className='w-full 2xl:w-[95%] h-8 relative'>
                <Image src={`${ctx.root}/logo.png`} alt='logo_light' fill />
              </span>
            ) : (
              <span className='w-full 2xl:w-[95%] h-8 relative'>
                <Image src={`${ctx.root}/logo_dark.png`} alt='logo_dark' fill />
              </span>
            )}
          </>
        )}
      </div>
      <div className='my-5 flex-1 flex flex-col'>
        <nav className='flex-1 space-y-2'>
          {/* all your entity names are mapped here for the desktop sidebar */}
          {data.length > 0 &&
            data?.map((entity, i) => (
              <Disclosure
                defaultOpen={entity?.attributes.defaultOpen}
                as='div'
                key={i}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className={classJoiner(
                        id === getElementId(entity.attributes.name)
                          ? `border-l-4 font-semibold 
                          ${ctx?.dark?.sidePanel?.entity?.border} ${ctx?.light?.sidePanel?.entity?.border}
                          ${ctx?.dark?.sidePanel?.entity?.color} ${ctx?.light?.sidePanel?.entity?.color}`
                          : 'text-gray-900 dark:text-slate-300',
                        'text-base font-medium w-full group px-4 text-left flex items-center justify-between cursor-pointer',
                      )}
                    >
                      <span
                        onClick={() => updateQuery(entity.attributes.name)}
                        className='inline-block'
                      >
                        {entity?.attributes.name}
                      </span>
                      {entity.attributes.services &&
                        entity.attributes.services?.data.length > 0 && (
                          <ChevronDownIcon
                            className={classJoiner(
                              open
                                ? 'rotate-0 text-gray-900 dark:text-slate-300'
                                : '-rotate-90',
                              'w-5 h-5 transform',
                            )}
                          />
                        )}
                    </Disclosure.Button>
                    {entity.attributes.services &&
                      entity.attributes.services.data.length > 0 && (
                        <Transition
                          show={open}
                          enter='transition duration-100 ease-out'
                          enterFrom='transform scale-95 opacity-0'
                          enterTo='transform scale-100 opacity-100'
                          leave='transition duration-75 ease-out'
                          leaveFrom='transform scale-100 opacity-100'
                          leaveTo='transform scale-95 opacity-0'
                        >
                          <Disclosure.Panel
                            className='text-sm font-medium py-2 mr-10'
                            static
                          >
                            {entity.attributes.services.data?.map(
                              (service, i) => (
                                <ul key={i}>
                                  <li
                                    onClick={() =>
                                      updateQuery(service.attributes.name)
                                    }
                                    className={classJoiner(
                                      id ===
                                        getElementId(service.attributes.name)
                                        ? `text-white pl-6 ${ctx?.dark?.sidePanel?.service?.background} ${ctx?.light?.sidePanel?.service?.background}`
                                        : 'text-gray-700 pl-7 hover:text-gray-500 dark:hover:text-slate-400 dark:text-slate-300',
                                      'cursor-pointer py-1 rounded-r-md truncate',
                                    )}
                                  >
                                    {service.attributes.name}
                                  </li>
                                </ul>
                              ),
                            )}
                          </Disclosure.Panel>
                        </Transition>
                      )}
                  </>
                )}
              </Disclosure>
            ))}
        </nav>
      </div>
    </div>
  );
};

const ChevronDownIcon = (props: SVGAttributes<SVGElement>) => {
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
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
};

const BurgerIcon = (props: SVGAttributes<SVGElement>) => {
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
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className='w-6 h-6 text-white'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

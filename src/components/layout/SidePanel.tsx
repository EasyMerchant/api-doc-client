import { Dialog, Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import Router from 'next/router';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { useAppContext } from '~/context/AppProvider';
import { useScrollDown } from '~/hooks';
import { classJoiner } from '~/lib';
import { BurgerIcon, ChevronDownIcon, CloseIcon } from '../icons';

export type Navigation = {
  id?: string;
  defaultOpen?: boolean;
  title?: string;
  subNavigation?: Array<{ id: string | number; label: string }>;
};

export default function SidePanel({
  theme,
  navigation,
}: {
  navigation: Navigation[];
  theme: string | null;
}) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const scrollingDown = useScrollDown();

  const { border, sidePanel } = useAppContext();

  return (
    <>
      {/* for desktop */}
      <div
        id='side-panel'
        className={classJoiner(
          'hidden xl:flex w-60 2xl:w-[256px] max-w-[256px] flex-col z-20 fixed inset-0 border-r',
          border?.bottom,
          sidePanel?.background,
        )}
      >
        <TableOfContents navigation={navigation} theme={theme} />
      </div>

      {/* for mobile  */}
      <button
        onClick={() => setSideBarOpen(true)}
        className={classJoiner(
          'fixed left-2 top-[70px] w-10 h-10 xl:hidden z-10 transform transition ease-in-out duration-300 rounded-full shadow-lg',
          sidePanel?.service?.background,
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
                theme={theme}
                setSideBarOpen={setSideBarOpen}
                navigation={navigation}
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
  navigation,
  setSideBarOpen,
  theme,
}: {
  navigation: Navigation[];
  setSideBarOpen?: (value: boolean) => void;
  theme: string | null;
}) => {
  const { sidePanel, root } = useAppContext();

  const navigationId = useMemo(() => {
    return Router?.query?.id || '';
  }, [Router?.query]);

  const closeSideBar = () => {
    if (setSideBarOpen) {
      setSideBarOpen(false);
    }
  };

  const updateQuery = useCallback(
    (id: any) => {
      if (!id) return;
      Router.push({
        query: {
          id,
        },
      });
      // if mobile panel is open
      closeSideBar();
    },
    [navigationId],
  );

  return (
    <div className='flex flex-col flex-grow pt-5 overflow-y-auto scrollbar-hide'>
      <div className='flex items-center flex-shrink-0 px-4 space-x-4 text-gray-900 dark:text-slate-300'>
        {theme === 'light' ? (
          <span className='w-full 2xl:w-[95%] h-8 relative'>
            <Image src={`${root}/logo.png`} alt='logo_light' fill />
          </span>
        ) : (
          <span className='w-full 2xl:w-[95%] h-8 relative'>
            <Image src={`${root}/logo_dark.png`} alt='logo_dark' fill />
          </span>
        )}
      </div>

      <div className='my-5 flex-1 flex flex-col'>
        <nav className='flex-1 space-y-2'>
          {/* all your entity names are mapped here for the desktop sidebar */}
          {navigation?.map(({ defaultOpen, id, title, subNavigation }, i) => (
            <Disclosure defaultOpen={defaultOpen} as='div' key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as='div'
                    className={classJoiner(
                      navigationId === id
                        ? classJoiner(
                            `border-l-4 font-semibold`,
                            sidePanel?.entity?.border,
                            sidePanel?.entity?.color,
                          )
                        : 'text-gray-900 dark:text-slate-300',
                      'text-base font-medium w-full group px-4 text-left flex items-center justify-between cursor-pointer',
                    )}
                  >
                    <span
                      onClick={() => updateQuery(id)}
                      className='inline-block'
                    >
                      {title}
                    </span>
                    {subNavigation && (
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
                  {subNavigation && subNavigation.length > 0 && (
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
                        {subNavigation?.map(({ id, label }, i) => (
                          <ul key={i}>
                            <li
                              onClick={() => updateQuery(id)}
                              className={classJoiner(
                                navigationId === id
                                  ? classJoiner(
                                      `text-white pl-6`,
                                      sidePanel?.service?.background,
                                    )
                                  : 'text-gray-700 pl-7 hover:text-gray-500 dark:hover:text-slate-400 dark:text-slate-300',
                                'cursor-pointer py-1 rounded-r-md truncate',
                              )}
                            >
                              {label}
                            </li>
                          </ul>
                        ))}
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

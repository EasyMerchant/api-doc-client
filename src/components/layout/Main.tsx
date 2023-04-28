import { Switch } from '@headlessui/react';
import { IApiData } from '~/interfaces';
import SidePanel from './SidePanel';
import { classJoiner } from '~/lib';
import Entities from './Entities';
import { MainTheme } from '../providers';
import Image from 'next/image';
import { useAppContext } from '~/hooks';
import SandBoxDialog from './SandBoxDialog';

export default function Main({
  data,
  root,
}: {
  data: IApiData[];
  root: string;
}) {
  const ctx = useAppContext();

  return (
    <MainTheme>
      {({ theme, setTheme }) => (
        <>
          <div className='flex relative min-w-[360px]'>
            <SidePanel data={data} theme={theme} />
            <div className='xl:ml-60 2xl:ml-64 flex flex-col flex-1 w-full 2xl:min-w-max -mb-10 overflow-clip'>
              <div
                className={`sticky top-0 z-10 flex-shrink-0 flex h-16 border-b w-full 
              ${ctx?.dark?.pageBackground} ${ctx?.light?.pageBackground} 
              ${ctx?.dark?.border?.bottom} ${ctx?.light?.border?.bottom}`}
              >
                <div className='flex items-center justify-between w-full px-4'>
                  <span className='xl:hidden h-6 w-48 relative'>
                    {/* heading mobile */}

                    {theme === 'light' ? (
                      <Image src={`${root}/logo.png`} alt='logo_light' fill />
                    ) : (
                      <Image
                        src={`${root}/logo_dark.png`}
                        alt='logo_dark'
                        fill
                      />
                    )}
                  </span>

                  <span className='hidden md:block font-medium text-gray-600 dark:text-gray-300'>
                    {/* heading desktop */}
                  </span>
                  <span>
                    {/* dark mode switch */}
                    <Switch
                      checked={theme === 'dark'}
                      onChange={(value) => setTheme(value ? 'dark' : 'light')}
                      className={classJoiner(
                        theme === 'dark' &&
                          `${ctx?.dark?.darkModeSwitch?.background}`,
                        theme === 'light' &&
                          `${ctx?.light?.darkModeSwitch?.background}`,
                        'relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                      )}
                    >
                      <span className='sr-only'>Use dark mode</span>

                      <span
                        aria-hidden='true'
                        className={classJoiner(
                          theme === 'dark' && 'translate-x-4',
                          theme === 'light' && '-translate-x-2',
                          `absolute -mt-1.5 pointer-events-none inline-flex h-7 w-7 transform rounded-full shadow-lg ring-0 transition duration-100 ease-in-out 
                        ${ctx?.dark?.darkModeSwitch?.foreground} ${ctx?.light?.darkModeSwitch?.foreground}`,
                        )}
                      >
                        {theme === 'dark' && <MoonIcon />}

                        {theme === 'light' && <SunIcon />}
                      </span>
                    </Switch>
                  </span>
                </div>
              </div>

              {/* All entities are mapped starting from here */}

              <main
                className={`w-full xl:min-w-max divide-y 
              ${ctx?.dark?.divider?.primary} ${ctx?.light?.divider?.primary}
              ${ctx?.dark?.pageBackground} ${ctx?.light?.pageBackground}
              `}
              >
                <Entities data={data} />
              </main>
            </div>
          </div>

          {ctx?.showSandBox && <SandBoxDialog />}
        </>
      )}
    </MainTheme>
  );
}

const SunIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 m-auto'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
      />
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-4 h-4 text-gray-400 m-auto'
    >
      <path
        fillRule='evenodd'
        d='M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z'
        clipRule='evenodd'
      />
    </svg>
  );
};

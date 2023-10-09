import { Switch } from '@headlessui/react';
import Image from 'next/image';
import { useAppContext } from '~/context/AppProvider';
import { classJoiner } from '~/lib';
import { MoonIcon, SunIcon } from '../icons';
import { TopNavigation } from './TopNavigation';

export const TopBar = ({
  theme,
  root,
  setTheme,
}: {
  theme: string | null;
  root?: string;
  setTheme: (value: 'light' | 'dark') => void;
}) => {
  const { pageBackground, border, darkModeSwitch } = useAppContext();

  return (
    <>
      <div
        className={classJoiner(
          'sticky top-0 z-10 flex-shrink-0 flex h-16 border-b w-full',
          pageBackground,
          border?.bottom,
        )}
      >
        <div className='flex items-center justify-between w-full px-4'>
          <span className='xl:hidden h-6 w-48 relative'>
            {/* heading mobile */}

            {theme === 'light' ? (
              <Image src={`${root}/logo.png`} alt='logo_light' fill />
            ) : (
              <Image src={`${root}/logo_dark.png`} alt='logo_dark' fill />
            )}
          </span>

          <div className='hidden xl:block font-medium text-gray-600 dark:text-gray-300'>
            <TopNavigation />
          </div>

          <span>
            {/* dark mode switch */}
            <Switch
              checked={theme === 'dark'}
              onChange={(value) => setTheme(value ? 'dark' : 'light')}
              className={classJoiner(
                darkModeSwitch?.background,
                'relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              )}
            >
              <span className='sr-only'>Use dark mode</span>

              <span
                aria-hidden='true'
                className={classJoiner(
                  theme === 'dark' && 'translate-x-4',
                  theme === 'light' && '-translate-x-2',
                  `absolute -mt-1.5 pointer-events-none inline-flex h-7 w-7 transform rounded-full shadow-lg ring-0 transition duration-100 ease-in-out ${darkModeSwitch?.foreground}`,
                )}
              >
                {theme === 'dark' && <MoonIcon />}
                {theme === 'light' && <SunIcon />}
              </span>
            </Switch>
          </span>
        </div>
      </div>
    </>
  );
};

import { ReactNode } from 'react';
import SidePanel, { Navigation } from './SidePanel';
import { useAppContext } from '~/context/AppProvider';
import { MainTheme } from '../providers';
import { TopBar } from './TopBar';
import { classJoiner } from '~/lib';
import { TopNavigation } from './TopNavigation';

type DoumentationProps = {
  children: ReactNode;
  navigation: Navigation[];
};

export function DocumentationLayout({
  children,
  navigation,
}: DoumentationProps) {
  const { divider, pageBackground, root, border } = useAppContext();

  return (
    <MainTheme>
      {({ theme, setTheme }) => (
        <>
          <div className='flex relative min-w-[360px]'>
            <SidePanel theme={theme} navigation={navigation} />
            <div className='xl:ml-60 2xl:ml-64 flex flex-col flex-1 w-full 2xl:min-w-max -mb-10 overflow-clip min-h-screen'>
              <TopBar root={root} theme={theme} setTheme={setTheme} />
              {/* All entities are mapped starting from here */}

              <div
                className={classJoiner(
                  'px-5 pt-5 flex justify-end xl:hidden text-gray-600 dark:text-gray-300 border-b',
                  pageBackground,
                  border?.bottom,
                )}
              >
                <TopNavigation />
              </div>
              <main
                className={classJoiner(
                  `w-full xl:min-w-max divide-y h-full`,
                  divider?.primary,
                  pageBackground,
                )}
              >
                {children}
              </main>
            </div>
          </div>
        </>
      )}
    </MainTheme>
  );
}

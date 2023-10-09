import { classJoiner } from '~/lib';
import { useRouter } from 'next/router';
import { useAppContext } from '~/context/AppProvider';

const navigation = [
  // { label: 'Home', id: 'home', href: '/' },
  { label: 'API Reference', id: 'api-reference', href: '/' },
  { label: 'SDK', id: 'sdk', href: '/sdk' },
];
export const TopNavigation = () => {
  const router = useRouter();
  const { border } = useAppContext();
  const pathname = router?.pathname?.replace('/', '').split('/')[1] ?? '';

  return (
    <nav className='flex items-center space-x-5'>
      {navigation.map(({ id, label, href }, i) => {
        return (
          <button
            key={i}
            onClick={() => router.push(href)}
            className={classJoiner(
              href === `/${pathname}` ? border?.bottom : 'border-transparent',
              'border-b-[4px]',
            )}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
};

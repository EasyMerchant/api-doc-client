import Link from 'next/link';
import { HyperLink } from '~/components/HyperLink';
import { classJoiner } from '~/lib';

const navigation = [
  {
    label: 'Easymerchant',
    href: '/easymerchant',
    classNames: 'text-lime-500 border border-lime-500',
  },
  {
    label: 'Lyfepay',
    href: '/lyfepay',
    classNames: 'text-blue-500 border border-blue-500',
  },
];

const Root = () => {
  return (
    <div className='bg-black text-white h-screen w-screen flex flex-col'>
      <h2 className='text-center sr-only'>
        Welcome! to multi site api documentation
      </h2>

      <div className='m-auto flex space-x-5 items-center'>
        <h2 className='text-lg font-bold text-gray-500'>Navigate to: </h2>

        <div className='flex items-center italic space-x-2 font-bold'>
          {navigation.map(({ href, classNames, label }, i) => {
            return (
              <HyperLink
                key={i}
                href={href}
                className={classJoiner(
                  classNames,
                  'px-4 h-10 flex hover:opacity-50 transition duration-200 ease-in-out',
                )}
              >
                <span className='m-auto'>{label}</span>
              </HyperLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Root;

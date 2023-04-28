import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppContext } from '~/hooks';

type Client = {
  name: string;
  target: string;
  type: string;
  lang?: string;
};

export default function LibrarySelect({
  options,
  onChange,
  defaultOption,
  selected,
}: {
  options: Client[];
  onChange: (client: Client) => void;
  defaultOption?: string;
  selected: Client;
}) {
  const ctx = useAppContext();

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className='relative'>
        <Listbox.Button className='relative w-full h-full pl-3 pr-10 text-left focus:outline-none text-sm'>
          <span className='block truncate text-white dark:text-gray-300'>
            {selected.name}
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronUpDown />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute right-0 origin-right z-10 mt-1 w-32 overflow-auto rounded-md bg-white dark:bg-[#1B0E00] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {options.map((client: Client, index: number) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-4 ${
                    active
                      ? `${ctx?.light?.libraryDropDown?.active?.background} 
                          ${ctx?.dark?.libraryDropDown?.active?.background}
                        
                          ${ctx?.light?.libraryDropDown?.active?.color}
                          ${ctx?.dark?.libraryDropDown?.active?.color}
                          `
                      : 'text-gray-900 dark:text-gray-300'
                  }
                  ${index === 0 && 'pointer-events-none'}
                  `
                }
                value={client}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {client.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

const ChevronUpDown = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 text-white dark:text-gray-300'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
      />
    </svg>
  );
};

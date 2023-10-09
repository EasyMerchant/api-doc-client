type Props = { children: React.ReactNode };

const DataType = ({ children }: Props) => {
  return (
    <span className='border px-1 rounded h-5 w-auto text-xs text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-300'>
      {children}
    </span>
  );
};

export default DataType;

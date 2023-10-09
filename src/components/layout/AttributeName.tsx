const AttributeName = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className='text-gray-900 dark:text-slate-200 text-sm font-semibold'>
      {children}
    </code>
  );
};

export default AttributeName;

import { classJoiner } from '~/lib';

export default function RequiredParam({ isRequired }: { isRequired: boolean }) {
  return (
    <code
      className={classJoiner(
        isRequired
          ? 'text-red-600 dark:text-red-400'
          : 'text-gray-700 dark:text-slate-300',
        'ml-2 text-xs',
      )}
    >
      {isRequired ? 'required' : 'optional'}
    </code>
  );
}

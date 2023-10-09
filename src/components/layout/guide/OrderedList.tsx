import { useAppContext } from '~/context/AppProvider';
import { classJoiner } from '~/lib';

export const OrderedList = ({ list }: { list: string[] }) => {
  const { paragraphs } = useAppContext();
  return (
    <ol className='prose prose-md list-decimal ml-5'>
      {list?.map((item, i) => {
        return (
          <li key={i} className={classJoiner(paragraphs)}>
            {item}
          </li>
        );
      })}
    </ol>
  );
};

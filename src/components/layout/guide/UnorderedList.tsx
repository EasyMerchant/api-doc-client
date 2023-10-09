import { useAppContext } from '~/context/AppProvider';
import { classJoiner } from '~/lib';

export const UnorderedList = ({ list }: { list: string[] }) => {
  const { paragraphs } = useAppContext();

  return (
    <ul className='prose prose-md list-disc ml-5'>
      {list?.map((item, i) => {
        return (
          <li key={i} className={classJoiner(paragraphs)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

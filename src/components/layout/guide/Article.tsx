import { useAppContext } from '~/context/AppProvider';
import { Guide } from '~/guide/_types';
import { classJoiner } from '~/lib';
import { Paragraph } from './Pargraph';
import { useScrollPosition } from '~/hooks/useScrollPositions';
import { OrderedList } from './OrderedList';
import { UnorderedList } from './UnorderedList';
import { ArticleImage } from './ArticleImage';
import { ArticleSnippet } from './ArticleSnippet';

export const Article = ({ id, title, description, content }: Guide) => {
  useScrollPosition();
  const { heading, border, divider } = useAppContext();
  // const [imageHasError, setImageHasError] = useState(false);
  return (
    <div id={id} className='space-y-4'>
      <h1 className={classJoiner(heading, 'text-2xl font-bold')}>{title}</h1>

      {description?.map((paragraph, i) => {
        return <Paragraph key={i}>{paragraph}</Paragraph>;
      })}

      {content && (
        <>
          <hr className={classJoiner(border?.bottom, 'mt-5')} />

          <div className={classJoiner('divide-y', divider?.secondary)}>
            {content?.map(({ id, title, description }, i) => {
              return (
                <div id={id} key={i} className={classJoiner('space-y-4 py-5')}>
                  <h2 className={classJoiner('text-xl font-bold', heading)}>
                    {title}
                  </h2>

                  {description?.map(
                    ({ paragraph, image, list, snippet }, i) => {
                      return (
                        <div key={i} className='space-y-5'>
                          {paragraph && <Paragraph>{paragraph}</Paragraph>}
                          {image && <ArticleImage {...image} />}
                          {snippet && <ArticleSnippet snippet={snippet} />}
                          {list && (
                            <div>
                              {list.ordered && (
                                <OrderedList list={list.ordered} />
                              )}

                              {list.unOrdered && (
                                <UnorderedList list={list.unOrdered} />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

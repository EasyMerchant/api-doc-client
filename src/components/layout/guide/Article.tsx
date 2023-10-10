import { useAppContext } from '~/context/AppProvider';
import { Guide } from '~/guide/_types';
import { classJoiner } from '~/lib';
import { Paragraph } from './Pargraph';
import Image from 'next/image';
import { useScrollPosition } from '~/hooks/useScrollPositions';
import { OrderedList } from './OrderedList';
import { UnorderedList } from './UnorderedList';
import { useState } from 'react';

export const Article = ({ id, title, description, content }: Guide) => {
  useScrollPosition();
  const { heading, root, border, divider } = useAppContext();
  const [imageHasError, setImageHasError] = useState(false);
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

                  {description?.map(({ paragraph, image, list }, i) => {
                    return (
                      <div key={i} className='space-y-5'>
                        <Paragraph>{paragraph}</Paragraph>
                        {image && !imageHasError && (
                          <Image
                            style={{
                              objectFit: image.objectFit,
                            }}
                            src={`${root}${image?.src}`}
                            alt={image?.alt}
                            className='rounded-lg'
                            width={image.width}
                            height={image.height}
                            onError={(e) => {
                              console.error(e);
                              setImageHasError(true);
                            }}
                          />
                        )}
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
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

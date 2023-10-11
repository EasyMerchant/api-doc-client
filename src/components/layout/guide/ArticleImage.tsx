import { injectVariables } from '~/lib';
import Image from 'next/image';
import { ImageType } from '~/guide/_types';
import { useAppContext } from '~/context/AppProvider';

export const ArticleImage = ({
  src,
  width,
  height,
  objectFit,
  alt,
}: ImageType) => {
  const { root, injectables } = useAppContext();

  return (
    <Image
      style={{
        objectFit: objectFit,
      }}
      src={injectVariables(src, {
        root,
        cdnUrl: injectables?.cdnUrl,
      })}
      alt={alt}
      className='rounded-lg'
      width={width}
      height={height}
      onError={(e) => {
        console.error(e);
        // setImageHasError(true);
      }}
    />
  );
};

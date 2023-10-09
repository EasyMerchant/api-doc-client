import { useAppContext } from '~/context/AppProvider';
import { classJoiner, injectVariables } from '~/lib';

export const Paragraph = ({ children }: { children: string }) => {
  const { paragraphs, injectables } = useAppContext();

  return (
    <p
      className={classJoiner(
        'max-w-4xl 2xl:max-w-5xl break-words w-full',
        paragraphs,
      )}
      dangerouslySetInnerHTML={{
        __html: injectVariables(children, { ...injectables }),
      }}
    />
  );
};

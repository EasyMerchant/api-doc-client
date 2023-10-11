import { useAppContext } from '~/context/AppProvider';
import { useHighlighter } from '~/hooks';
import { classJoiner } from '~/lib';
import prettify from 'html-prettify';

export const ArticleSnippet = ({ snippet }: { snippet: string }) => {
  const html = useHighlighter(snippet, 'js');
  const { scrollbar, codeBox } = useAppContext();
  return (
    <div
      className={classJoiner(
        `overflow-clip rounded-[10px] max-w-3xl`,
        codeBox?.contentBackground,
      )}
    >
      <pre
        className={classJoiner(
          `language-js max-h-[200px] overflow-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px]`,
          scrollbar?.thumb,
          scrollbar?.track,
        )}
      >
        <code dangerouslySetInnerHTML={{ __html: prettify(html) }} />
      </pre>
    </div>
  );
};

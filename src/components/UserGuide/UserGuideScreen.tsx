import { Guide } from '~/guide/_types';
import { DocumentationLayout } from '../layout/DocumentationLayout';
import { Navigation } from '../layout/SidePanel';
import { Article } from '../layout/guide';

type Props = { data: Guide[] };

export function UserGuideScreen({ data }: Props) {
  const guide_navigation: Navigation[] = data.map(
    ({ id, defaultOpen, content, title }) => {
      return {
        id,
        title,
        defaultOpen,
        subNavigation: content?.map(({ id, title }) => {
          return { id, label: title };
        }),
      };
    },
  );
  return (
    <>
      <DocumentationLayout navigation={guide_navigation}>
        <div className='w-full h-full p-5 md:p-10 2xl:px-20 xl:py-14 space-y-10'>
          {data.map((props, i) => {
            return <Article key={i} {...props} />;
          })}
        </div>
      </DocumentationLayout>
    </>
  );
}

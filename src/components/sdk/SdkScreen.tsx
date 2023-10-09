import { Guide } from '~/guide/types';
import { DocumentationLayout } from '../layout/DocumentationLayout';
import { Navigation } from '../layout/SidePanel';
import { Article } from '../layout/guide';

type Props = { data: Guide[] };

export function SdkScreen({ data }: Props) {
  const sdk_navigation: Navigation[] = data.map(
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
      <DocumentationLayout navigation={sdk_navigation}>
        <div className='w-full h-full p-5 md:p-10 2xl:px-20 xl:py-14'>
          {data.map((props, i) => {
            return <Article key={i} {...props} />;
          })}
        </div>
      </DocumentationLayout>
    </>
  );
}

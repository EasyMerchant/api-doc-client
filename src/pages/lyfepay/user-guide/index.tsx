import PageHeader from '~/components/layout/PageHeader';
import { UserGuideScreen } from '~/components/UserGuide';
import withLyfePayContext from '~/context/withLyfePayContext';
import { guide } from '~/guide';

export default withLyfePayContext(
  ({ pageTitle, root }: { pageTitle: string; root: string }) => {
    return (
      <>
        <PageHeader route='SDK' root={root} pageTitle={pageTitle} />
        <UserGuideScreen data={guide} />
      </>
    );
  },
);

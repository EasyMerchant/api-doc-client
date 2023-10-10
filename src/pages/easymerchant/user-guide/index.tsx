import PageHeader from '~/components/layout/PageHeader';
import { UserGuideScreen } from '~/components/UserGuide';
import withEasyMerchantContext from '~/context/withEasyMerchantContext';
import { guide } from '~/guide';

export default withEasyMerchantContext(
  ({ pageTitle, root }: { pageTitle: string; root: string }) => {
    return (
      <>
        <PageHeader route='SDK' root={root} pageTitle={pageTitle} />
        <UserGuideScreen data={guide} />
      </>
    );
  },
);

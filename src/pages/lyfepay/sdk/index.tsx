import PageHeader from '~/components/layout/PageHeader';
import { SdkScreen } from '~/components/sdk';
import withLyfePayContext from '~/context/withLyfePayContext';
import { sdk_guide } from '~/guide/sdk_guide';

export default withLyfePayContext(
  ({ pageTitle, root }: { pageTitle: string; root: string }) => {
    return (
      <>
        <PageHeader route='SDK' root={root} pageTitle={pageTitle} />
        <SdkScreen data={sdk_guide} />
      </>
    );
  },
);

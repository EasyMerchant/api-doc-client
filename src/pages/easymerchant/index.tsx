import Main from '~/components/layout/Main';
import { IApiData } from '~/interfaces';
import PageHeader from '~/components/layout/PageHeader';
import withEasyMerchantContext from '~/context/withEasyMerchantContext';

export { default as getStaticProps } from '~/lib/getStaticProps';

interface IPageProps {
  data: IApiData[];
  pageTitle: string;
  root: string;
}

export default withEasyMerchantContext(
  ({ data, pageTitle, root }: IPageProps) => {
    return (
      <>
        <PageHeader root={root} route='API Reference' pageTitle={pageTitle} />
        <Main data={data} />
      </>
    );
  },
);

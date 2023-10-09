import Main from '~/components/layout/Main';
import PageHeader from '~/components/layout/PageHeader';
import { IAppContext } from '~/context/AppProvider';
import withLyfePayContext from '~/context/withLyfePayContext';
import { IApiData } from '~/interfaces';

export { default as getStaticProps } from '~/lib/getStaticProps';

interface IPageProps extends IAppContext {
  data: IApiData[];
  root: string;
  pageTitle: string;
}

export default withLyfePayContext(({ data, pageTitle, root }: IPageProps) => {
  return (
    <>
      <PageHeader pageTitle={pageTitle} root={root} route='API Reference' />
      <Main data={data} />
    </>
  );
});

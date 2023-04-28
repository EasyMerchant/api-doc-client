import { useEffect } from 'react';
import StaticPropsError from '~/components/errors/StaticPropsError';
import Main from '~/components/layout/Main';
import PageHeader from '~/components/layout/PageHeader';
import { IAppContext } from '~/context/AppProvider';
import withContext from '~/context/withContext';
import { IApiData } from '~/interfaces';
import { font } from '~/lib/fonts';
import { lyfePayPageCtx } from '~/config/lyfepay';

export { default as getStaticProps } from '~/lib/getStaticProps';

interface IPageProps extends IAppContext {
  data: IApiData[];
  error: string | any;
}

const LyfepayHome = ({ data, error, setContext }: IPageProps) => {
  useEffect(() => {
    setContext && setContext({ ...lyfePayPageCtx });
  }, []);

  if (error) {
    return <StaticPropsError error={error} root={lyfePayPageCtx.root} />;
  }
  return (
    <>
      <PageHeader
        root={lyfePayPageCtx.root}
        pageTitle={lyfePayPageCtx.pageTitle}
      />
      <div className={font.className}>
        <Main data={data} root={lyfePayPageCtx.root} />
      </div>
    </>
  );
};

export default withContext(LyfepayHome);

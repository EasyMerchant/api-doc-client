import { IAppContext } from '~/context/AppProvider';
import Main from '~/components/layout/Main';
import { IApiData } from '~/interfaces';
import { font } from '~/lib/fonts';
import StaticPropsError from '~/components/errors/StaticPropsError';
import PageHeader from '~/components/layout/PageHeader';
import { useEffect } from 'react';
import withContext from '~/context/withContext';
import { easyMerchantPageCtx } from '~/config/easymerchant';

export { default as getStaticProps } from '~/lib/getStaticProps';

interface IPageProps extends IAppContext {
  data: IApiData[];
  error: string | any;
}

const EasyMerchantHome = ({ data, error, setContext }: IPageProps) => {
  useEffect(() => {
    setContext && setContext({ ...easyMerchantPageCtx });
  }, []);

  if (error) {
    return <StaticPropsError error={error} root={easyMerchantPageCtx.root} />;
  }
  return (
    <>
      <PageHeader
        root={easyMerchantPageCtx.root}
        pageTitle={easyMerchantPageCtx.pageTitle}
      />
      <div className={font.className}>
        <Main data={data} root={easyMerchantPageCtx.root} />
      </div>
    </>
  );
};

export default withContext(EasyMerchantHome);

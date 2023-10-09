import { JSXElementConstructor } from 'react';
import { useAppContext } from './AppProvider';
import { easyMerchantPageCtx } from '~/config/easymerchant';
import { IApiData } from '~/interfaces';
import { usePageContextInjector } from '~/hooks/usePageContextInjector';

const withEasyMerchantContext = (
  WrappedComponent: JSXElementConstructor<any>,
) => {
  return ({ data }: { data?: any[]; error?: string | any }) => {
    const { pageTitle, root, setContext } = useAppContext();
    usePageContextInjector({ setContext, pageContext: easyMerchantPageCtx });

    const appProps = { data, pageTitle, root };

    // WrappedComponent will always receive the overridden context props
    return <WrappedComponent {...appProps} />;
  };
};

export default withEasyMerchantContext;

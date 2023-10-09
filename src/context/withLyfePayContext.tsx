import { JSXElementConstructor } from 'react';
import { useAppContext } from './AppProvider';
import { usePageContextInjector } from '~/hooks/usePageContextInjector';
import { lyfePayPageCtx } from '~/config/lyfepay';

const withLyfePayContext = (WrappedComponent: JSXElementConstructor<any>) => {
  return ({ data }: { data?: any[]; error?: string | any }) => {
    const { pageTitle, root, setContext } = useAppContext();
    usePageContextInjector({ setContext, pageContext: lyfePayPageCtx });

    const appProps = { data, pageTitle, root };
    return <WrappedComponent {...appProps} />;
  };
};

export default withLyfePayContext;

import { JSXElementConstructor } from 'react';
import { useAppContext } from '~/hooks';

const withContext = (WrappedComponent: JSXElementConstructor<any>) => {
  return (props: any) => {
    const ctx = useAppContext();

    const appProps = { ...props, ...ctx };

    // WrappedComponent will always receive the overridden context props
    return <WrappedComponent {...appProps} />;
  };
};

export default withContext;

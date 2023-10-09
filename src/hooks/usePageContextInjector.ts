import { useEffect } from 'react';
import { IAuthState } from '~/context/AppProvider';

export const usePageContextInjector = ({
  pageContext,
  setContext,
}: {
  setContext: (values: IAuthState) => void;
  pageContext: IAuthState;
}) => {
  useEffect(() => {
    setContext({ ...pageContext });
  }, [pageContext]);
};

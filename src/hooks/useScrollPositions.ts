import { useEffect } from 'react';
import Router from 'next/router';

export const useScrollPosition = (): void => {
  useEffect(() => {
    const id = Router?.query?.id || null;
    if (id) {
      document.getElementById(id.toString())?.scrollIntoView();
    }
  }, [Router?.query]);
};

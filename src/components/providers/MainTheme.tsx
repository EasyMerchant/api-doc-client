import { useEffect, useState } from 'react';

type UserTheme = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

export const MainTheme = ({
  children,
}: {
  children: (params: UserTheme) => JSX.Element;
}) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    /**
     * Get the root document element from the dom
     */
    const root = window.document.documentElement;

    /**
     * A generic object with functions to add or removed the desired class
     */
    const classes = {
      remove: (root: HTMLHeadElement): void => root.classList.remove('dark'),
      add: (root: HTMLHeadElement): void => root.classList.add('dark'),
    };

    if (theme === '') {
      const currentTheme = localStorage.getItem('theme');

      let initialTheme = 'dark';

      switch (currentTheme) {
        case 'dark':
          initialTheme = 'dark';
          classes.add(root);
          break;
        case 'light':
          initialTheme = 'light';
          classes.remove(root);
          break;
      }

      setTheme(initialTheme);
    } else {
      let themeToSet = '';

      switch (theme) {
        case 'light':
          themeToSet = 'light';
          classes.remove(root);
          break;
        case 'dark':
          themeToSet = 'dark';
          classes.add(root);
      }

      localStorage.setItem('theme', themeToSet);
    }
  }, [theme]);

  /**
   * Avoid rendering anything under the wrapper if theme state is not yet initialized
   */

  if (theme === '') return null;

  /**
   * Return children as a function that provides the current theme and setTheme() function to all elements
   * under the wrapper
   */
  return children({ theme, setTheme });
};

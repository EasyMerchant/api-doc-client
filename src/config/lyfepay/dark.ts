// lyfepay dark classes

import { IClasses } from '~/context/AppProvider';

export const dark: IClasses = {
  heading: 'dark:text-blue-500',
  pageBackground: 'dark:bg-gray-900',
  codeBox: {
    headPrimaryBackground: 'dark:bg-blue-800',
    headSecondaryBackground: 'dark:bg-blue-600',
    contentBackground: 'bg-gray-800',
  },
  divider: {
    primary: 'dark:divide-blue-600',
    secondary: 'dark:divide-blue-900',
  },
  toolTip: {
    background: 'bg-blue-800',
    pointer: 'border-blue-800',
  },
  border: {
    bottom: 'dark:border-blue-700',
  },
  sidePanel: {
    background: 'dark:bg-gray-800',
    entity: {
      color: 'text-blue-500',
      border: 'dark:border-blue-600',
    },
    service: {
      background: 'dark:bg-blue-700',
    },
  },
  darkModeSwitch: {
    background: 'bg-gray-800',
    foreground: 'dark:bg-blue-900',
  },
  scrollbar: {
    thumb: 'dark:scrollbar-thumb-gray-600',
    track: 'dark:scrollbar-track-gray-900',
  },
  libraryDropDown: {
    active: {
      background: 'dark:bg-blue-600',
      color: 'dark:text-white',
    },
  },
  methods: {
    POST: 'text-green-400',
    GET: 'text-sky-400',
    PATCH: 'text-amber-400',
    DELETE: 'text-red-400',
    PUT: 'text-purple-400',
  },
};

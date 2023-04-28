import { IClasses } from '~/context/AppProvider';

export const dark: IClasses = {
  heading: 'dark:text-[#F39D36]',
  pageBackground: 'dark:bg-[#160C00]',
  codeBox: {
    headPrimaryBackground: 'dark:bg-[#6F3C00]',
    headSecondaryBackground: 'dark:bg-[#975200]',
    contentBackground: 'bg-[#261603]',
  },
  divider: {
    primary: 'dark:divide-[#F39D36]',
    secondary: 'dark:divide-[#B27121]',
  },
  toolTip: {
    background: 'bg-[#B0BF40]',
    pointer: 'border-[#B0BF40]',
  },
  border: {
    bottom: 'dark:border-[#B27121]',
  },
  sidePanel: {
    background: 'dark:bg-[#1B0E00]',
    entity: {
      color: 'text-[#B0BF40]',
      border: 'dark:border-[#F39D36]',
    },
    service: {
      background: 'dark:bg-[#F39D36]',
    },
  },
  darkModeSwitch: {
    background: 'bg-[#2d2011]',
    foreground: 'dark:bg-[#342717]',
  },
  scrollbar: {
    thumb: 'dark:scrollbar-thumb-[#4a2900]',
    track: 'dark:scrollbar-track-transparent',
  },
  libraryDropDown: {
    active: {
      background: 'bg-[#F39D36]',
      color: 'text-white',
    },
  },
  methods: {
    POST: 'text-green-500',
    GET: 'text-sky-500',
    PATCH: 'text-amber-500',
    DELETE: 'text-red-500',
    PUT: 'text-purple-500',
  },
};

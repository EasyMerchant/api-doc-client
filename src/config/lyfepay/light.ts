import { IClasses } from '~/context/AppProvider';

export const light: IClasses = {
  heading: 'text-indigo-700',
  pageBackground: 'bg-white',
  codeBox: {
    headPrimaryBackground: 'bg-indigo-500 ',
    headSecondaryBackground: 'bg-indigo-700 ',
    contentBackground: 'bg-gray-800',
  },
  divider: {
    primary: 'divide-indigo-100',
    secondary: 'divide-indigo-50',
  },
  toolTip: {
    background: 'bg-blue-800',
    pointer: 'border-blue-800',
  },
  border: {
    bottom: 'border-indigo-200',
  },
  sidePanel: {
    background: 'bg-zinc-50',
    entity: {
      color: 'text-[#B0BF40]',
      border: 'border-[#B0BF40]',
    },
    service: {
      background: 'bg-indigo-600',
    },
  },
  darkModeSwitch: {
    background: 'bg-gray-200',
    foreground: 'bg-white',
  },
  scrollbar: {
    thumb: 'scrollbar-thumb-gray-500',
    track: 'scrollbar-track-gray-800',
  },
  libraryDropDown: {
    active: {
      background: 'bg-indigo-500',
      color: 'text-white',
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

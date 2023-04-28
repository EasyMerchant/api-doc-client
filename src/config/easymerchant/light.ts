import { IClasses } from '~/context/AppProvider';

export const light: IClasses = {
  heading: 'text-[#B0BF40]',
  pageBackground: 'bg-white',
  codeBox: {
    headPrimaryBackground: 'bg-[#B0BF40]',
    headSecondaryBackground: 'bg-[#94A132]',
    contentBackground: 'bg-[#261603]',
  },
  divider: {
    primary: 'divide-[#B0BF40]',
    secondary: 'divide-[#B0BF40]',
  },
  toolTip: {
    background: 'bg-[#B0BF40]',
    pointer: 'border-[#B0BF40]',
  },
  border: {
    bottom: 'border-[#B0BF40]',
  },
  sidePanel: {
    background: 'bg-zinc-50',
    entity: {
      color: 'text-[#B0BF40]',
      border: 'border-[#B0BF40]',
    },
    service: {
      background: 'bg-[#B0BF40]',
    },
  },
  darkModeSwitch: {
    background: 'bg-gray-200',
    foreground: 'bg-white',
  },
  scrollbar: {
    thumb: 'scrollbar-thumb-[#b0bf40]',
    track: 'scrollbar-track-transparent',
  },
  libraryDropDown: {
    active: {
      background: 'bg-[#F39D36]',
      color: 'text-white',
    },
  },
  methods: {
    POST: 'text-green-700',
    GET: 'text-sky-700',
    PATCH: 'text-amber-700',
    DELETE: 'text-red-700',
    PUT: 'text-purple-700',
  },
};

import { useState, createContext } from 'react';
import { Param } from '~/interfaces';

const initialState = {
  isLoggedIn: false,
  baseUrl: '',
  root: '',
  identifier: '',
  showSandBox: false,
  sandBoxApiUrl: '',
  sandBox: {
    apiKey: '',
    apiSecret: '',
  },
  testingData: {
    url: '',
    params: [],
    method: '',
  },
};

interface IMethods {
  [key: string]: string;
}

export interface IClasses {
  heading: string;
  codeBox: {
    headPrimaryBackground?: string;
    headSecondaryBackground?: string;
    contentBackground?: string;
  };
  divider: {
    primary: string;
    secondary: string;
  };
  pageBackground: string;
  toolTip: {
    background: string;
    pointer: string;
  };
  border: {
    bottom: string;
  };
  sidePanel: {
    background: string;
    entity: {
      color: string;
      border: string;
    };
    service: {
      background: string;
    };
  };
  darkModeSwitch: {
    background: string;
    foreground: string;
  };
  scrollbar: {
    thumb: string;
    track: string;
  };
  libraryDropDown: {
    active: {
      background: string;
      color: string;
    };
  };
  methods: IMethods;
}

export type SandBoxData = {
  apiKey: string;
  apiSecret: string;
};

export type TestingData = {
  url: string;
  params: Param[];
  method: string;
};

export interface IAuthState {
  isLoggedIn?: boolean;
  baseUrl?: string;
  root?: string;
  identifier?: string;
  showSandBox?: boolean;
  sandBoxApiUrl?: string;
  sandBox?: SandBoxData;
  testingData?: TestingData;

  // dark classes
  dark?: IClasses;

  // light classes
  light?: IClasses;
}

export interface IAppContext extends IAuthState {
  setContext: (values: IAuthState) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setAppContext] = useState<IAuthState>(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setContext: (values) =>
          setAppContext((prev) => ({ ...prev, ...values })),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

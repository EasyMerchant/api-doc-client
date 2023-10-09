import { useState, createContext, useContext } from 'react';
import { Injectables } from '~/config/interface';
import { Attribute, Param } from '~/interfaces';

const initialState: IAuthState = {
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
    attributes: [],
  },
};

interface IMethods {
  [key: string]: string;
}

export interface IClasses {
  heading?: string;
  paragraphs?: string;
  codeBox?: {
    headPrimaryBackground?: string;
    headSecondaryBackground?: string;
    contentBackground?: string;
  };
  divider?: {
    primary: string;
    secondary: string;
  };
  pageBackground?: string;
  toolTip?: {
    background: string;
    pointer: string;
  };
  border?: {
    bottom: string;
  };
  sidePanel?: {
    background: string;
    entity: {
      color: string;
      border: string;
    };
    service?: {
      background: string;
    };
  };
  darkModeSwitch?: {
    background: string;
    foreground: string;
  };
  scrollbar?: {
    thumb: string;
    track: string;
  };
  libraryDropDown?: {
    active: {
      background: string;
      color: string;
    };
  };
  methods?: IMethods;
}

export type SandBoxData = {
  apiKey: string;
  apiSecret: string;
};

export type TestingData = {
  url: string;
  params: Param[] | undefined;
  method: string;
  attributes: Attribute[];
};

export interface IAuthState extends IClasses {
  isLoggedIn?: boolean;
  baseUrl?: string;
  root?: string;
  showSandBox?: boolean;
  sandBoxApiUrl?: string;
  sandBox?: SandBoxData;
  testingData?: TestingData;
  identifier?: string;
  injectables?: Injectables;
  pageTitle?: string;
}

export interface IAppContext extends IAuthState {
  setContext: (values: IAuthState) => void;
}

export const AppContext = createContext<IAppContext>({
  ...initialState,
  setContext: () => {},
});

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

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;

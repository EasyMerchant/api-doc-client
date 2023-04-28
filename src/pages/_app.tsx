import '~/styles/globals.css';
import '~/styles/syntax.css';
import type { AppProps } from 'next/app';
import AppProvider from '~/context/AppProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;

import '~/styles/globals.css';
import '~/styles/syntax.css';
import type { AppProps } from 'next/app';
import AppProvider from '~/context/AppProvider';
import { font } from '~/lib/fonts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
};

export default App;

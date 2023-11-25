import '@/styles/globals.css';
import { Layout } from '@/layouts';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};
export default App;

import '@/styles/globals.css';
import { Layout } from '@/layouts';
import type { AppProps } from 'next/app';
import { Navbar } from '@/componentes/Navbars';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;

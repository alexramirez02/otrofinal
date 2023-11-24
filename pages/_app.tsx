import '@/styles/globals.css';
import { Layout } from '@/layouts';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
     
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;

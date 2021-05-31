import { Navigation } from '@code-ui/react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default App;

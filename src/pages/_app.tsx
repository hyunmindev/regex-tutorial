import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/colors.scss';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '@/configs/seo';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;

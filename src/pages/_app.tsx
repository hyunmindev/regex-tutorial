import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/colors.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';

import * as gtag from '@/configs/gtag';
import SEO from '@/configs/seo';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        id="gtag-init"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;

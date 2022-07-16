import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/colors.scss';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

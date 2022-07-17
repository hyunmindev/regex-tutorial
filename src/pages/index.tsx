import Head from 'next/head';

import { APP_TITLE } from '@/constants/meta';
import styles from '@/styles/pages/Index.module.scss';

function Index() {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <div className={styles.container}>test</div>;
    </>
  );
}

export default Index;

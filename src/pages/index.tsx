import Head from 'next/head';
import Link from 'next/link';

import AppTitle from '@/components/AppTitle';
import { APP_TITLE } from '@/constants/meta';
import questions from '@/constants/questions';
import styles from '@/styles/pages/Index.module.scss';

function Index() {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <div className={styles.container}>
        <AppTitle />
        <div className={styles.questions}>
          {questions.map(({ id, title }) => (
            <Link
              key={id}
              href={`/questions/${id}`}
            >
              <a className={styles.question}>
                <h2>{title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;

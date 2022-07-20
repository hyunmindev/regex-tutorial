import Head from 'next/head';
import Link from 'next/link';

import AppTitle from '@/components/AppTitle';
import { APP_TITLE } from '@/constants/meta';
import questionCollection from '@/constants/questionCollection';
import styles from '@/styles/pages/Index.module.scss';
import { camelToKebab, decamelize } from '@/utils/caseConverter';

function Index() {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <div className={styles.container}>
        <AppTitle />
        <div className={styles.questions}>
          {Object.keys(questionCollection).map((category) => (
            <Link
              key={category}
              href={`/questions/${camelToKebab(category)}/0`}
            >
              <a className={styles.question}>
                <h2>{decamelize(category, ' ')}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;

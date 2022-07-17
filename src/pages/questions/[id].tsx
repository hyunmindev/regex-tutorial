import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import AnswerInput from '@/components/AnswerInput';
import ParagraphLabel from '@/components/ParagraphLabel';
import TitleLabel from '@/components/TitleLabel';
import { APP_TITLE } from '@/constants/meta';
import questions from '@/constants/questions.json';
import styles from '@/styles/pages/Index.module.scss';
import { Question } from '@/types/question';

function Question() {
  const router = useRouter();
  const [isValidate, setIsValidate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<string[]>([]);
  const [paragraph, setParagraph] = useState('');
  const [title, setTitle] = useState('');

  const handleInput = useCallback((answer: string) => {
    try {
      const regExp = new RegExp(answer, 'g');
      const result = paragraph.match(regExp);
      setMatches([...(result ?? [])]);
      setIsValidate(true);
    } catch (e) {
      setIsValidate(false);
    }
  }, []);

  useEffect(() => {
    const { id } = router.query;
    if (!id) {
      return;
    }
    const question = questions[+id] as Question;
    if (!question) {
      // eslint-disable-next-line no-void
      void router.replace('/');
      return;
    }
    setTitle(question.title);
    setParagraph(question.paragraph);
    setIsLoading(false);
  }, [router.query.id]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {APP_TITLE} : {title}
        </title>
      </Head>
      <div className={styles.container}>
        <TitleLabel content={title} />
        <ParagraphLabel
          content={paragraph}
          matches={matches}
        />
        <AnswerInput onInput={handleInput} />
        <p className={styles.error}>{isValidate ? '' : 'is not validate'}</p>
      </div>
    </>
  );
}

export default Question;

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import AnswerInput from '@/components/AnswerInput';
import Header from '@/components/Header';
import ParagraphLabel from '@/components/ParagraphLabel';
import TitleLabel from '@/components/TitleLabel';
import { APP_TITLE } from '@/constants/meta';
import questions from '@/constants/questions';
import useConfetti from '@/hooks/useConfetti';
import styles from '@/styles/pages/Question.module.scss';

function Question() {
  const router = useRouter();
  const [isValidate, setIsValidate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);

  useConfetti(isCorrect);

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    const question = questions[+id];
    if (question) {
      setIsLoading(false);
      return;
    }
    // eslint-disable-next-line no-void
    void router.replace('/');
  }, [id]);

  const {
    title = '',
    paragraph = '',
    answer: questionAnswer = '',
  } = questions[+(id ?? '')] ?? {};

  const handleInput = useCallback((answer: string) => {
    try {
      const regExp = new RegExp(answer, 'g');
      const result = paragraph.match(regExp);
      setMatches([...(result ?? [])]);
      setIsValidate(true);
    } catch (e) {
      setIsValidate(false);
    } finally {
      setIsCorrect(questionAnswer === answer);
    }
  }, []);

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
      <Header />
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

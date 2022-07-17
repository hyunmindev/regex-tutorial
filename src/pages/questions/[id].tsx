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
import useEnter from '@/hooks/useEnter';
import styles from '@/styles/pages/Question.module.scss';

function Question() {
  const router = useRouter();
  const [isValidate, setIsValidate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);

  const { id } = router.query;

  useConfetti(isCorrect);
  useEnter(() => {
    const ID_DIFF = 1;
    const nextID = Number(id) + ID_DIFF;
    // eslint-disable-next-line no-void
    void router.push(`/questions/${nextID}`);
  });

  useEffect(() => {
    if (!id) {
      return;
    }

    const question = questions[Number(id)];
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
  } = questions[Number(id)] ?? {};

  const handleInput = useCallback(
    (answer: string) => {
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
    },
    [id]
  );

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
        <div className={styles.message}>
          {!isValidate && <p className={styles.error}>is not validate</p>}
          {isCorrect && (
            <p className={styles.success}>
              press {`'`}ENTER{`'`} to next question
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Question;

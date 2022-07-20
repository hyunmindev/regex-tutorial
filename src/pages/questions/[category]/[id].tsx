import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';

import Next from '@/assets/icons/next.svg';
import Prev from '@/assets/icons/prev.svg';
import AnswerInput from '@/components/AnswerInput';
import Header from '@/components/Header';
import ParagraphLabel from '@/components/ParagraphLabel';
import TitleLabel from '@/components/TitleLabel';
import { APP_TITLE } from '@/constants/meta';
import useConfetti from '@/hooks/useConfetti';
import useEnter from '@/hooks/useEnter';
import useQuestion from '@/hooks/useQuestion';
import styles from '@/styles/pages/Question.module.scss';

const ID_DIFF = 1;

function Question() {
  const router = useRouter();
  const [isValidate, setIsValidate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');

  const { paragraph, title, id, answer: questionAnswer } = useQuestion();

  useConfetti(isCorrect);

  useEnter(() => {
    if (!isCorrect) {
      return;
    }
    void router.push(`/questions/${id + ID_DIFF}`);
  }, [id, isCorrect]);

  useLayoutEffect(() => {
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
  }, [answer, id]);

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
        <TitleLabel content={title ?? ''} />
        <ParagraphLabel
          content={paragraph ?? ''}
          matches={matches}
        />
        <AnswerInput bind={[answer, setAnswer]} />
        <div className={styles.message}>
          {!isValidate && <p className={styles.error}>is not validate</p>}
          {isCorrect && (
            <p className={styles.success}>
              press {`'`}ENTER{`'`} to next question
            </p>
          )}
        </div>
        <button
          className={styles.prev}
          onClick={() => {
            void router.push(`/questions/${id - ID_DIFF}`);
          }}
          type="button"
        >
          <Prev />
        </button>
        <button
          className={styles.next}
          onClick={() => {
            void router.push(`/questions/${id + ID_DIFF}`);
          }}
          type="button"
        >
          <Next />
        </button>
      </div>
    </>
  );
}

export default Question;

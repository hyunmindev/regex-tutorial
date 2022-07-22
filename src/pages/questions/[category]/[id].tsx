import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Next from '@/assets/icons/next.svg';
import Prev from '@/assets/icons/prev.svg';
import AnswerInput from '@/components/AnswerInput';
import Header from '@/components/Header';
import HintButton from '@/components/HintButton';
import ParagraphLabel from '@/components/ParagraphLabel';
import TitleLabel from '@/components/TitleLabel';
import { APP_TITLE } from '@/constants/meta';
import useAnswer from '@/hooks/useAnswer';
import useConfetti from '@/hooks/useConfetti';
import useEnter from '@/hooks/useEnter';
import useQuestion from '@/hooks/useQuestion';
import styles from '@/styles/pages/Question.module.scss';

const ID_DIFF = 1;

function Question() {
  const router = useRouter();

  const {
    id,
    title,
    flags,
    isLast,
    isFirst,
    answers,
    category,
    paragraph,
    isLoading,
  } = useQuestion();

  const { matches, isCorrect, isValidate, answerState } = useAnswer(
    id,
    flags,
    paragraph,
    answers
  );

  const pushPrevQuestion = () =>
    void router.push(`/questions/${category}/${id - ID_DIFF}`);
  const pushNextQuestion = () =>
    void router.push(`/questions/${category}/${id + ID_DIFF}`);

  useConfetti(isCorrect);

  useEnter(() => {
    if (!isCorrect) {
      return;
    }
    pushNextQuestion();
  }, [id, isCorrect]);

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
      <Header title={`${category} ${id}`} />
      <div className={styles.container}>
        <TitleLabel content={title ?? ''} />
        <ParagraphLabel
          content={paragraph ?? ''}
          matches={matches}
        />
        <AnswerInput
          bind={answerState}
          flags={flags ?? []}
        />
        <div className={styles.message}>
          {!isValidate && <p className={styles.error}>is not validate</p>}
          {isCorrect && (
            <p className={styles.success}>
              press {`'`}ENTER{`'`} to {isLast ? 'quit' : 'proceed'}
            </p>
          )}
        </div>
        {!isFirst && (
          <button
            className={styles.prev}
            onClick={pushPrevQuestion}
            type="button"
          >
            <Prev />
          </button>
        )}
        {!isLast && (
          <button
            className={styles.next}
            onClick={pushNextQuestion}
            type="button"
          >
            <Next />
          </button>
        )}
      </div>
      <HintButton />
    </>
  );
}

export default Question;

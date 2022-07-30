import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Next from '@/assets/icons/next.svg';
import Prev from '@/assets/icons/prev.svg';
import AnswerInput from '@/components/AnswerInput';
import Header from '@/components/Header';
import HintContainer from '@/components/HintContainer';
import ParagraphLabel from '@/components/ParagraphLabel';
import TitleLabel from '@/components/TitleLabel';
import { APP_TITLE } from '@/constants/meta';
import useAnswer from '@/hooks/useAnswer';
import useConfetti from '@/hooks/useConfetti';
import useEnter from '@/hooks/useEnter';
import useQuestion from '@/hooks/useQuestion';
import styles from '@/styles/pages/Question.module.scss';
import { camelToKebab, decamelize } from '@/utils/caseConverter';

const ID_DIFF = 1;

function Question() {
  const router = useRouter();

  const {
    id,
    hint,
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
    answers,
    paragraph
  );

  const kebabID = camelToKebab(category);
  const prevQuestionURL = `/questions/${kebabID}/${id - ID_DIFF}`;
  const nextQuestionURL = `/questions/${kebabID}/${id + ID_DIFF}`;

  useConfetti(isCorrect);

  useEnter(() => {
    if (!isCorrect) {
      return;
    }
    void router.push(nextQuestionURL);
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
      <Header title={`${decamelize(category, ' ')} ${id}`} />
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
          <Link href={prevQuestionURL}>
            <a className={styles.prev}>
              <Prev />
            </a>
          </Link>
        )}
        {!isLast && (
          <Link href={nextQuestionURL}>
            <a className={styles.next}>
              <Next />
            </a>
          </Link>
        )}
      </div>
      <HintContainer content={hint ?? 'coming soon'} />
    </>
  );
}

export default Question;

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import questionCollection from '@/constants/questionCollection';
import { kebabToCamel } from '@/utils/caseConverter';

const ZERO = 0;

export default () => {
  const router = useRouter();

  const { id: rawId, category: rawCategory } = router.query;

  const id = Number(rawId);
  const category = kebabToCamel((rawCategory as string) ?? '');

  const questions = questionCollection[category] ?? [];
  const question = questions[id] ?? {};

  useEffect(() => {
    if (questions.length === ZERO) {
      void router.push('/');
    }
  }, [category]);

  useEffect(() => {
    if (Object.keys(question).length === ZERO) {
      void router.push('/');
    }
  }, [id]);
  console.log(question);
  return question;
};

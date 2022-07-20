import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import questionCollection from '@/constants/questionCollection';
import { kebabToCamel } from '@/utils/caseConverter';

const ZERO = 0;

export default () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { id: rawId, category: rawCategory } = router.query;

  const id = Number(rawId);
  const category = kebabToCamel((rawCategory as string) ?? '');

  const questions = questionCollection[category] ?? [];
  const question = questions[id] ?? {};

  useEffect(() => {
    if (Number.isNaN(id)) {
      return;
    }
    if (questions.length === ZERO) {
      void router.push('/');
    }
  }, [category]);

  useEffect(() => {
    if (Number.isNaN(id)) {
      return;
    }
    if (Object.keys(question).length === ZERO) {
      void router.push('/');
      return;
    }
    setIsLoading(false);
  }, [id]);

  return { category, isLoading, ...question };
};

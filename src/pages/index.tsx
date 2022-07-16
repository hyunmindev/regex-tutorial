import { useCallback, useState } from 'react';

import AnswerInput from '@/components/AnswerInput';
import QuestionLabel from '@/components/QuestionLabel';
import styles from '@/styles/pages/Index.module.scss';

const content = 'page loading mechanism';

function Index() {
  const [isValidate, setIsValidate] = useState(true);
  const [matches, setMatches] = useState<string[]>([]);

  const handleInput = useCallback((answer: string) => {
    try {
      const regExp = new RegExp(answer, 'g');
      const result = content.match(regExp) ?? [];
      setIsValidate(true);
      setMatches([...result]);
    } catch (e) {
      setIsValidate(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <QuestionLabel
        content={content}
        matches={matches}
      />
      <AnswerInput onInput={handleInput} />
      <p className={styles.error}>{isValidate ? '' : 'is not validate'}</p>
    </div>
  );
}

export default Index;

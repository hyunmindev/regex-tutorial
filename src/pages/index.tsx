import { useState } from 'react';

import AnswerInput from '@/components/AnswerInput';
import QuestionLabel from '@/components/QuestionLabel';
import styles from '@/styles/pages/Index.module.scss';

const content = 'page loading mechanism';

function Index() {
  const [isValidate, setIsValidate] = useState(true);

  const handleInput = (answer: string) => {
    try {
      const regExp = new RegExp(answer);
      const result = content.match(regExp);
      setIsValidate(true);
      console.log(result);
    } catch (e) {
      setIsValidate(false);
    }
  };

  return (
    <div className={styles.container}>
      <QuestionLabel content={content} />
      <AnswerInput onInput={handleInput} />
      {!isValidate && <p>error</p>}
    </div>
  );
}

export default Index;

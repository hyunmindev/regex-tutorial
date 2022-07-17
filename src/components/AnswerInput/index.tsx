import { useRouter } from 'next/router';
import { ChangeEvent, memo, useEffect, useRef } from 'react';

import styles from './index.module.scss';

interface Props {
  onInput: (answer: string) => void;
}

function AnswerInput({ onInput }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      // inputRef.current.value = '';
    }
  }, [router.query.id]);

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    onInput(value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.fix}>/</p>
      <input
        ref={inputRef}
        autoComplete="off"
        onInput={handleInput}
        type="text"
      />
      <p className={styles.fix}>/g</p>
    </div>
  );
}

export default memo(AnswerInput);

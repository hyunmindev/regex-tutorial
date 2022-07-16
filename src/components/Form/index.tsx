import { ChangeEvent, useEffect, useRef } from 'react';

import styles from './index.module.scss';

interface Props {
  onInput: (answer: string) => void;
}

export default function Form({ onInput }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    onInput(value);
  };

  return (
    <form className={styles.container}>
      <p className={styles.prefix}>/</p>
      <input
        ref={inputRef}
        autoComplete="off"
        onInput={handleInput}
        type="text"
      />
      <p className={styles.postfix}>/g</p>
    </form>
  );
}

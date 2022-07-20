import { useRouter } from 'next/router';
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

import styles from './index.module.scss';

interface Props {
  bind: [string, Dispatch<SetStateAction<string>>];
  flags: string[];
}

function AnswerInput({ bind, flags }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [value, setValue] = bind;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setValue('');
    }
  }, [router.query.id]);

  const handleInput = ({
    target: { value: _value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(_value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.fix}>/</p>
      <input
        ref={inputRef}
        autoComplete="off"
        onInput={handleInput}
        type="text"
        value={value}
      />
      <p className={styles.fix}>/{flags.map((flag) => flag)}</p>
    </div>
  );
}

export default memo(AnswerInput);

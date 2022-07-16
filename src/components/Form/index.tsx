import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import styles from './index.module.scss';

interface FormValues {
  answer: string;
}

interface Props {
  onSubmit: (data: string) => void;
}

export default function Form({ onSubmit }: Props) {
  const { register, handleSubmit, setFocus, resetField } =
    useForm<FormValues>();

  useEffect(() => {
    setFocus('answer');
  }, []);

  return (
    <form
      className={styles.container}
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      onSubmit={handleSubmit(({ answer }) => {
        onSubmit(answer);
        resetField('answer');
      })}
    >
      <input {...register('answer')} />
    </form>
  );
}

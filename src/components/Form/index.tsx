import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      onSubmit={handleSubmit(({ answer }) => {
        onSubmit(answer);
        resetField('answer');
      })}
    >
      <input
        autoComplete="off"
        {...register('answer')}
      />
    </form>
  );
}

import Form from '@/components/Form';
import QuestionLabel from '@/components/QuestionLabel';
import styles from '@/styles/pages/Index.module.scss';

export default function Index() {
  const handleInput = (answer: string) => {
    console.log(answer);
  };

  return (
    <div className={styles.container}>
      <QuestionLabel content="Regular expression tester" />
      <Form onInput={handleInput} />
    </div>
  );
}

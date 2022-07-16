import Form from '@/components/Form';
import QuestionLabel from '@/components/QuestionLabel';
import styles from '@/styles/pages/Index.module.scss';

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (answer: string) => {
    // console.log(answer);
  };

  return (
    <div className={styles.container}>
      <QuestionLabel content="test" />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

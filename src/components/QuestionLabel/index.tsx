import styles from './index.module.scss';

interface Props {
  content: string;
}

function QuestionLabel({ content }: Props) {
  return <p className={styles.container}>{content}</p>;
}

export default QuestionLabel;

import styles from './index.module.scss';

interface Props {
  content: string;
}

export default function QuestionLabel({ content }: Props) {
  return <p className={styles.container}>{content}</p>;
}

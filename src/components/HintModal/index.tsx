import styles from './index.module.scss';

interface Props {
  content: string;
  onClose: () => void;
}

function HintModal({ content, onClose }: Props) {
  return (
    <div className={styles.container}>
      <button
        aria-label="background"
        className={styles.background}
        onClick={onClose}
      />
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default HintModal;

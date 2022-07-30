import { useRef } from 'react';

import styles from './index.module.scss';

interface Props {
  content: string;
  onClose: () => void;
}

const delayMS = 300;

function HintModal({ content, onClose }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const delayedOnClose = () => {
    contentRef.current?.classList.add(styles.unmount);
    setTimeout(onClose, delayMS);
  };

  return (
    <div className={styles.container}>
      <button
        aria-label="background"
        className={styles.background}
        onClick={delayedOnClose}
      />
      <div
        ref={contentRef}
        className={styles.content}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default HintModal;

import { useRef } from 'react';

import styles from './index.module.scss';

interface Props {
  content: string;
  onCloseBegin: () => void;
  onCloseEnd: () => void;
}

const delayMS = 200;

function HintModal({ content, onCloseBegin, onCloseEnd }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onCloseBegin();
    contentRef.current?.classList.add(styles.unmount);
    setTimeout(onCloseEnd, delayMS);
  };

  return (
    <div className={styles.container}>
      <button
        aria-label="background"
        className={styles.background}
        onClick={handleClose}
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

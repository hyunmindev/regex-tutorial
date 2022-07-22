import Hint from '@/assets/icons/hint.svg';

import styles from './index.module.scss';

function HintButton() {
  return (
    <button
      className={styles.container}
      type="button"
    >
      <Hint />
    </button>
  );
}

export default HintButton;

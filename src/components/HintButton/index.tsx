import Hint from '@/assets/icons/hint.svg';

import styles from './index.module.scss';

interface Props {
  inset: boolean;
  onClick: () => void;
}

function HintButton({ onClick, inset }: Props) {
  return (
    <button
      className={`${styles.container} ${inset ? styles.inset : ''}`}
      onClick={onClick}
      type="button"
    >
      <Hint />
    </button>
  );
}

export default HintButton;

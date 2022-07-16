import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  type?: 'button' | 'submit';
}

export default function Button({ type, children }: Props) {
  return (
    <button
      className={styles.container}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

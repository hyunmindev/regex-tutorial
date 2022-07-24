import { memo } from 'react';

import styles from './index.module.scss';

interface Props {
  content: string;
}

function TitleLabel({ content }: Props) {
  return <h2 className={styles.container}>{content}</h2>;
}

export default memo(TitleLabel);

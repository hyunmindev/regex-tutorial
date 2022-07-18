import { memo } from 'react';

import styles from './index.module.scss';

interface Props {
  content: string;
}

function TitleLabel({ content }: Props) {
  return <h1 className={styles.container}>{content}</h1>;
}

export default memo(TitleLabel);

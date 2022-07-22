import Link from 'next/link';
import { memo } from 'react';

import Home from '@/assets/icons/home.svg';

import styles from './index.module.scss';

interface Props {
  title?: string;
}

function Header({ title }: Props) {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <Home />
        </a>
      </Link>
      {!!title && <h1 className={styles.title}>{title}</h1>}
    </nav>
  );
}

Header.defaultProps = {
  title: '',
};

export default memo(Header);

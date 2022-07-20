import Link from 'next/link';
import { memo } from 'react';

import Home from '@/assets/icons/home.svg';

import styles from './index.module.scss';

function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <Home />
        </a>
      </Link>
    </nav>
  );
}

export default memo(Header);

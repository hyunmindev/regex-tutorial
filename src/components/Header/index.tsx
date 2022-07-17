import Link from 'next/link';

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

export default Header;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNavigation.module.css';

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>

        <Link
          href="/"
          className={`${styles.item} ${
            pathname === '/' ? styles.active : ''
          }`}
        >
          <i className="bi bi-house"></i>
          <span>홈</span>
        </Link>

        <Link
          href="/accommodation"
          className={`${styles.item} ${
            pathname.startsWith('/accommodation')
              ? styles.active
              : ''
          }`}
        >
          <i className="bi bi-building"></i>
          <span>숙소</span>
        </Link>

        <Link
          href="/reservation"
          className={`${styles.item} ${
            pathname.startsWith('/reservation')
              ? styles.active
              : ''
          }`}
        >
          <i className="bi bi-calendar-check"></i>
          <span>예약</span>
        </Link>

        <Link
          href="/chat"
          className={`${styles.item} ${
            pathname.startsWith('/chat')
              ? styles.active
              : ''
          }`}
        >
          <i className="bi bi-chat-dots"></i>
          <span>문의</span>
        </Link>

      </div>
    </nav>
  );
}
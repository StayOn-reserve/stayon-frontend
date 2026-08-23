import Link from 'next/link';
import styles from './BottomNavigation.module.css';

export default function BottomNavigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.item}>
        <span>⌂</span>
        <span>홈</span>
      </Link>

      <Link href="/accommodation" className={styles.item}>
        <span>🏨</span>
        <span>숙소</span>
      </Link>

      <Link href="/reservation" className={styles.item}>
        <span>📅</span>
        <span>예약</span>
      </Link>

      <Link href="/chat" className={styles.item}>
        <span>💬</span>
        <span>채팅</span>
      </Link>
    </nav>
  );
}
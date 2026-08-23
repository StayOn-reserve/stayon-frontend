import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="숙박 서비스 로고"
            width={120}
            height={40}
          />
        </Link>

        <Link href="/login" className={styles.login} aria-label="로그인">
          <i className="bi bi-person-circle"></i>
        </Link>
      </div>
    </header>
  );
}
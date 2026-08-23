import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>
          더 편안한 숙박을 위한
          <br />
          서비스
        </h1>

        <p>
          머무는 동안 필요한 추가 서비스를 간편하게 신청하고,
          <br />
          궁금한 사항은 관리자에게 바로 문의하세요.
        </p>
      </section>

      <section className={styles.services}>
        <Link href="/reservation" className={styles.card}>
          <i className="bi bi-stars"></i>

          <div>
            <h2>추가 서비스</h2>
            <p>
              숙박 중 필요한 다양한 서비스를
              <br />
              간편하게 신청하세요.
            </p>
          </div>

          <i className={`bi bi-chevron-right ${styles.arrow}`}></i>
        </Link>

        <Link href="/chat" className={styles.card}>
          <i className="bi bi-chat-dots"></i>

          <div>
            <h2>관리자 문의</h2>
            <p>
              궁금한 사항이나 요청사항을
              <br />
              관리자에게 바로 문의하세요.
            </p>
          </div>

          <i className={`bi bi-chevron-right ${styles.arrow}`}></i>
        </Link>
      </section>
    </div>
  );
}
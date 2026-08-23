'use client';

import { FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 로그인 API 호출
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          <i className="bi bi-person-circle"></i>
          <h1>로그인</h1>
          <p>서비스 이용을 위해 로그인해주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">
              <i className="bi bi-person"></i>
              아이디
            </label>

            <div className={styles.inputWrapper}>
              <input
                id="username"
                type="text"
                placeholder="아이디를 입력하세요"
                autoComplete="username"
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">
              <i className="bi bi-lock"></i>
              비밀번호
            </label>

            <div className={styles.inputWrapper}>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                autoComplete="current-password"
              />
            </div>
          </div>

          <button type="submit" className={styles.loginButton}>
            <i className="bi bi-box-arrow-in-right"></i>
            로그인
          </button>
        </form>

        <div className={styles.links}>
          <Link href="/signup">회원가입</Link>

          <span>|</span>

          <Link href="/find-password">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
}
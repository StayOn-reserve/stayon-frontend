'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [businessStartDate, setBusinessStartDate] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailChecked, setEmailChecked] = useState(false);
  const [businessChecked, setBusinessChecked] = useState(false);

  // 이메일 중복 확인
  const handleEmailCheck = async () => {
    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // TODO: 백엔드 이메일 중복 확인 API 호출

    setEmailChecked(true);
  };

  // 사업자 정보 확인
  const handleBusinessCheck = async () => {
    if (
      !businessNumber.trim() ||
      !businessName.trim() ||
      !businessStartDate
    ) {
      alert(
        '사업자등록번호, 사업자명, 사업시작일을 모두 입력해주세요.'
      );
      return;
    }

    // TODO: 백엔드 사업자 정보 확인 API 호출

    setBusinessChecked(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailChecked) {
      alert('이메일 중복 확인을 해주세요.');
      return;
    }

    if (!businessChecked) {
      alert('사업자 정보 확인을 해주세요.');
      return;
    }

    // 비밀번호 8자리 이상 확인
    if (password.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다.');
      return;
    }

    // 비밀번호 확인
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 회원가입 API 호출

    console.log({
      email,
      name,
      businessNumber,
      businessStartDate,
      businessName,
      password,
    });
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>

        <div className={styles.title}>
          <i className="bi bi-person-plus"></i>

          <h1>회원가입</h1>

          <p>
            사업자 정보를 등록하고
            <br />
            서비스를 이용해보세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>

          {/* 이메일 */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <i className="bi bi-envelope"></i>
              이메일
            </label>

            <div className={styles.inputWithButton}>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailChecked(false);
                  }}
                  placeholder="이메일을 입력하세요"
                  autoComplete="email"
                />
              </div>

              <button
                type="button"
                className={styles.checkButton}
                onClick={handleEmailCheck}
              >
                중복확인
              </button>
            </div>

            {emailChecked && (
              <span className={styles.success}>
                <i className="bi bi-check-circle"></i>
                사용 가능한 이메일입니다.
              </span>
            )}
          </div>

          {/* 이름 */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              <i className="bi bi-person"></i>
              이름
            </label>

            <div className={styles.inputWrapper}>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                autoComplete="name"
              />
            </div>
          </div>

          {/* 사업자 정보 */}
          <div className={styles.businessSection}>
            <div className={styles.sectionTitle}>
              <i className="bi bi-building"></i>
              사업자 정보
            </div>

            {/* 사업자등록번호 */}
            <div className={styles.inputGroup}>
              <label htmlFor="businessNumber">
                사업자등록번호
              </label>

              <div className={styles.inputWrapper}>
                <input
                  id="businessNumber"
                  type="text"
                  value={businessNumber}
                  onChange={(e) => {
                    setBusinessNumber(e.target.value);
                    setBusinessChecked(false);
                  }}
                  placeholder="사업자등록번호를 입력하세요"
                  maxLength={12}
                />
              </div>
            </div>

            {/* 사업자명 */}
            <div className={styles.inputGroup}>
              <label htmlFor="businessName">
                사업자명
              </label>

              <div className={styles.inputWrapper}>
                <input
                  id="businessName"
                  type="text"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    setBusinessChecked(false);
                  }}
                  placeholder="사업자명을 입력하세요"
                />
              </div>
            </div>

            {/* 사업시작일 */}
            <div className={styles.inputGroup}>
              <label htmlFor="businessStartDate">
                사업시작일
              </label>

              <div className={styles.inputWrapper}>
                <input
                  id="businessStartDate"
                  type="date"
                  value={businessStartDate}
                  onChange={(e) => {
                    setBusinessStartDate(e.target.value);
                    setBusinessChecked(false);
                  }}
                />
              </div>
            </div>

            {/* 사업자 정보 확인 */}
            <button
              type="button"
              className={styles.businessCheckButton}
              onClick={handleBusinessCheck}
            >
              <i className="bi bi-building-check"></i>
              사업자 정보 확인
            </button>

            {businessChecked && (
              <span className={styles.success}>
                <i className="bi bi-check-circle"></i>
                확인된 사업자 정보입니다.
              </span>
            )}
          </div>

          {/* 비밀번호 */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">
              <i className="bi bi-lock"></i>
              비밀번호
            </label>

            <div className={styles.inputWrapper}>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요 (8자 이상)"
                autoComplete="new-password"
              />
            </div>

            {password.length > 0 && password.length < 8 && (
              <span className={styles.error}>
                <i className="bi bi-exclamation-circle"></i>
                비밀번호는 8자 이상이어야 합니다.
              </span>
            )}

            {password.length >= 8 && (
              <span className={styles.success}>
                <i className="bi bi-check-circle"></i>
                사용 가능한 비밀번호입니다.
              </span>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className={styles.inputGroup}>
            <label htmlFor="passwordConfirm">
              <i className="bi bi-lock-fill"></i>
              비밀번호 확인
            </label>

            <div className={styles.inputWrapper}>
              <input
                id="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) =>
                  setPasswordConfirm(e.target.value)
                }
                placeholder="비밀번호를 다시 입력하세요"
                autoComplete="new-password"
              />
            </div>

            {passwordConfirm.length > 0 &&
              password !== passwordConfirm && (
                <span className={styles.error}>
                  <i className="bi bi-exclamation-circle"></i>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}

            {passwordConfirm.length > 0 &&
              password === passwordConfirm && (
                <span className={styles.success}>
                  <i className="bi bi-check-circle"></i>
                  비밀번호가 일치합니다.
                </span>
              )}
          </div>

          {/* 회원가입 */}
          <button
            type="submit"
            className={styles.signupButton}
          >
            <i className="bi bi-person-plus"></i>
            회원가입
          </button>
        </form>

        <div className={styles.loginLink}>
          이미 계정이 있으신가요?

          <Link href="/login">
            로그인
          </Link>
        </div>

      </div>
    </div>
  );
}
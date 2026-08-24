'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css';

const services = [
  {
    id: 1,
    name: '수건 추가',
    description: '추가 수건을 객실로 전달해드립니다.',
    icon: 'bi bi-bag',
  },
  {
    id: 2,
    name: '바베큐 시간 예약',
    description: '원하는 바베큐 이용 시간을 예약하세요.',
    icon: 'bi bi-fire',
  },
];

// 15:00 ~ 19:00
// 5분 단위
const timeGroups = Array.from({ length: 5 }, (_, hourIndex) => {
  const hour = 15 + hourIndex;

  const times = Array.from({ length: 12 }, (_, minuteIndex) => {
    const minute = minuteIndex * 5;

    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');

    return {
      value: `${formattedHour}:${formattedMinute}`,
      label: `${formattedMinute}분`,
    };
  });

  return {
    hour,
    times,
  };
});

export default function ReservationPage() {
  const [selectedService, setSelectedService] = useState<number | null>(
    null
  );

  // 수건 개수
  const [towelCount, setTowelCount] = useState(1);

  // 바베큐 시간
  const [reservationTime, setReservationTime] = useState('');

  // 요청사항
  const [request, setRequest] = useState('');

  // 시간 선택 모달
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);

    // 서비스 변경 시 기존 선택값 초기화
    setTowelCount(1);
    setReservationTime('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService) {
      alert('서비스를 선택해주세요.');
      return;
    }

    // 수건 추가
    if (selectedService === 1) {
      console.log({
        serviceId: selectedService,
        quantity: towelCount,
        request,
      });

      // TODO: 수건 추가 예약 API
      return;
    }

    // 바베큐
    if (selectedService === 2) {
      if (!reservationTime) {
        alert('바베큐 이용 시간을 선택해주세요.');
        return;
      }

      console.log({
        serviceId: selectedService,
        reservationTime,
        request,
      });

      // TODO: 바베큐 예약 API
    }
  };

  return (
    <div className={styles.reservationPage}>
      <div className={styles.container}>

        {/* =========================
            제목
        ========================= */}

        <div className={styles.title}>
          <i className="bi bi-calendar-check"></i>

          <h1>서비스 예약</h1>

          <p>
            필요한 서비스를 선택하고
            <br />
            원하는 서비스를 신청하세요.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* =========================
              서비스 선택
          ========================= */}

          <section className={styles.section}>
            <h2>
              <i className="bi bi-stars"></i>
              서비스 선택
            </h2>

            <div className={styles.serviceList}>
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.serviceCard} ${
                    selectedService === service.id
                      ? styles.selected
                      : ''
                  }`}
                  onClick={() =>
                    handleServiceSelect(service.id)
                  }
                >
                  <i className={service.icon}></i>

                  <div className={styles.serviceInfo}>
                    <strong>{service.name}</strong>

                    <span>{service.description}</span>
                  </div>

                  <i
                    className={
                      selectedService === service.id
                        ? 'bi bi-check-circle-fill'
                        : 'bi bi-circle'
                    }
                  ></i>
                </button>
              ))}
            </div>
          </section>

          {/* ==================================================
              수건 추가
              서비스 ID = 1
          ================================================== */}

          {selectedService === 1 && (
            <section className={styles.section}>
              <h2>
                <i className="bi bi-bag"></i>
                수건 개수
              </h2>

              <div className={styles.quantityBox}>
                <button
                  type="button"
                  className={styles.quantityButton}
                  onClick={() =>
                    setTowelCount((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  disabled={towelCount <= 1}
                >
                  <i className="bi bi-dash"></i>
                </button>

                <div className={styles.quantity}>
                  <strong>{towelCount}</strong>
                  <span>장</span>
                </div>

                <button
                  type="button"
                  className={styles.quantityButton}
                  onClick={() =>
                    setTowelCount((prev) =>
                      Math.min(10, prev + 1)
                    )
                  }
                  disabled={towelCount >= 10}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>

              <p className={styles.info}>
                <i className="bi bi-info-circle"></i>
                수건은 최대 10장까지 신청할 수 있습니다.
              </p>
            </section>
          )}

          {/* ==================================================
              바베큐 시간 예약
              서비스 ID = 2
          ================================================== */}

          {selectedService === 2 && (
            <section className={styles.section}>
              <h2>
                <i className="bi bi-clock"></i>
                바베큐 이용 시간
              </h2>

              <button
                type="button"
                className={styles.timeButton}
                onClick={() => setIsTimeModalOpen(true)}
              >
                <i className="bi bi-clock"></i>

                <span>
                  {reservationTime
                    ? reservationTime
                    : '이용 시간을 선택해주세요'}
                </span>

                <i className="bi bi-chevron-right"></i>
              </button>

              <p className={styles.info}>
                <i className="bi bi-info-circle"></i>
                이용 가능 시간은 15:00 ~ 19:00입니다.
              </p>
            </section>
          )}

          {/* ==================================================
              요청사항
              서비스가 선택되었을 때만 표시
          ================================================== */}

          {selectedService !== null && (
            <section className={styles.section}>
              <h2>
                <i className="bi bi-chat-left-text"></i>
                요청사항
                <span>선택</span>
              </h2>

              <textarea
                className={styles.textarea}
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="관리자에게 전달할 요청사항을 입력해주세요."
                maxLength={500}
              />

              <div className={styles.textCount}>
                {request.length} / 500
              </div>
            </section>
          )}

          {/* ==================================================
              예약 신청
              서비스가 선택되었을 때만 표시
          ================================================== */}

          {selectedService !== null && (
            <button
              type="submit"
              className={styles.reservationButton}
            >
              <i className="bi bi-calendar-check"></i>
              예약 신청
            </button>
          )}
        </form>
      </div>

      {/* ==================================================
          바베큐 시간 선택 모달
      ================================================== */}

      {isTimeModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsTimeModalOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >

            {/* 모달 헤더 */}

            <div className={styles.modalHeader}>
              <div>
                <h2>바베큐 이용 시간</h2>

                <p>
                  원하는 이용 시간을 선택해주세요.
                </p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsTimeModalOpen(false)}
                aria-label="시간 선택 창 닫기"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* 시간 목록 */}

            <div className={styles.timeList}>
              {timeGroups.map((group) => (
                <div
                  key={group.hour}
                  className={styles.timeGroup}
                >
                  <h3>{group.hour}시</h3>

                  <div className={styles.timeGrid}>
                    {group.times.map((time) => (
                      <button
                        key={time.value}
                        type="button"
                        className={`${styles.timeItem} ${
                          reservationTime === time.value
                            ? styles.timeSelected
                            : ''
                        }`}
                        onClick={() => {
                          setReservationTime(time.value);
                          setIsTimeModalOpen(false);
                        }}
                      >
                        {time.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
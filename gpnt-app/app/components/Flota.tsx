"use client";
import React, { useEffect, useRef } from 'react';
import styles from '../Hero.module.css';

const items = [
  {
    title: 'Firmowe malowanie',
    desc: 'Nowoczesne oklejenie w barwach firmy — rozpoznawalność i profesjonalizm na trasie.',
    icon: '/icons/paint.svg',
  },
  {
    title: 'Wymagania dotyczące kierowców',
    desc: 'Zależy nam na bezpieczeństwie i kulturze pracy.',
    list: [
      'Minimum 2000 km miesięcznie',
      'Kultura osobista kierowcy',
      'Wszelkie pytania kierować do Menedżera',
    ],
    icon: '/icons/driver.svg',
  },
  {
    title: 'Nasza flota',
    desc: 'Flota nowoczesnych pojazdów utrzymana w najwyższym standardzie.',
    icon: '/icons/truck.svg',
  },
];

export default function Flota() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = container.querySelectorAll(`.${styles.flotaItem}`);
    if (!els) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.flota} ref={containerRef}>
      {items.map((it, idx) => (
        <div key={idx} className={`${styles.flotaItem} ${styles.reveal}`}>
          {it.icon && <img src={it.icon} alt="" className={styles.flotaIcon} />}
          <h3 className={styles.flotaTitle}>{it.title}</h3>
          <p className={styles.flotaDesc}>{it.desc}</p>
          {it.list && (
            <ul className={styles.flotaList}>
              {it.list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

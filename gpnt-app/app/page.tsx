"use client";
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
export default function Home() {
  const flotaRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToFlota = () => {
    flotaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(`.${styles.flotaItem}`);
            items.forEach((item) => {
              (item as HTMLElement).classList.add(styles.visible);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (flotaRef.current) {
      observer.observe(flotaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/BackgroundViedo3.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>Recruitment 2026</div>
        <h1 className={styles.title}>
          Greater Poland <br /> Navigation Technologies<br />
        </h1>
        <p className={styles.description}>
          Flota TruckBook. Precyzja, i pasja, która napędza każdy pokonany kilometr.
        </p>
        
        <div className={styles.actions}>
          <a href="https://trucksbook.eu/company/178748" target='_blank' className={styles.btnPrimary}>
            ZŁÓŻ PODANIE
          </a>
          <button className={styles.btnSecondary} onClick={scrollToFlota}>WYMAGANIA ZOSATNIA KIEROWCĄ</button>
          <button className={styles.btnSecondary} onClick={scrollToAbout}>O NAS</button>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span>Kierowców</span>
          <strong>2</strong>
        </div>
        <div className={styles.statItem}>
          <span>Dystans</span>
          <strong>16 860 KM</strong>
        </div>
        <div className={styles.statItem}>
          <span>Ranking</span>
          <strong className={styles.accent}>#5238</strong>
        </div>
      </div>

      <div className={styles.about} ref={aboutRef}>
        <div className={styles.h1About}>
          <h1>O NAS</h1>
        </div>
        <div className={styles.descriptionAbout}>
          <h2>Firma Greater PolandNavigation Technologies</h2>
          <p>Została utworzona przez @jak.u.b.p i @wlodarz  17.8.2023</p>

          <h2>Cel naszej firmy</h2>
          <p>
            Firma powstała aby nasi kierowcy mogli osiągać jak najlepsze wrażenia z jazdy długich tras wźród naszej społeczności. 
            GPNT jest otwarta na nowych kierowców w sekcji złożenia podania do firmy prosimy się zapoznać z <a onClick={scrollToFlota}>wymaganiami</a>.
          </p>
        </div>
      </div>

      <div className={styles.flota} ref={flotaRef}>
        <div className={styles.flotaItem}>
          <span className={styles.flotaTitle}>Oferujemy📚</span>
          <ol>
            <li>Rangi dla kierowców nadawane w zależności od ilości kilometrów</li>
            <li>System monitorowania postępu kierowcy za pomocą Truckbook</li>
            <li>Regularne konwoje firmowe</li>
            <li>Własne malowania firmowe</li>
          </ol>
        </div>
        <div className={styles.flotaItem}>
          <span className={styles.flotaTitle}>Wymagania✅</span>
          <ol>
            <li>Stosowanie się do regulaminu</li>
            <li>Posiadanie oficialnej wersji ETS2</li>
            <li>Minimum 2000 km miesiecznie</li>
            <li>Kultura osobista kierowcy</li>
            <li>Wymagany wiek to minimum 14 lat</li>
            <li>Posiadanie tagu firmowego podczas jazdy na TruckersMP (GPNT)</li>
            <li>Posiadanie firmowego malowania jest wymagane na konwojach</li>
          </ol>
        </div>
        <div className={styles.flotaItem}>
          <span className={styles.flotaTitle}>Możliwość awansowania📈</span>
          <ol>
            <li>Duże zaangarzowanie się w rozwój firmy</li>

            <li>Brak skarg</li>
          </ol>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerOrganizer}>
          <div className={styles.footerContent}>
            <p>© 2026 Greater Poland Navigation Technologies</p>
            <p>| Website create by <a href="https://www.instagram.com/jak.u.b.p/" target='_blank'>Jakub</a></p>
            <div className={styles.footerLinks}>
              <p>| A company created by 2 people</p>
              <a href="https://trucksbook.eu/company/178748" target="_blank" rel="noopener noreferrer">
                TRUCKSBOOK
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
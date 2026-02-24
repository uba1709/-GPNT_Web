import styles from './Hero.module.css';
export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/truck-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      {/* Kontener Treści */}
      <div className={styles.content}>
        <div className={styles.badge}>Recruitment 2026</div>
        <h1 className={styles.title}>
          Greater Poland <br /> Navigation Technologies<br />
        </h1>
        <p className={styles.description}>
          Flota TruckBook. Precyzja, i pasja, która napędza każdy pokonany kilometr.
        </p>
        
        <div className={styles.actions}>
          <button className={styles.btnPrimary}><a href="https://trucksbook.eu/company/178748" target='_blank'>ZŁÓŻ PODANIE</a></button>
          <button className={styles.btnSecondary}>NASZA FLOTA 🏗️</button>
        </div>
      </div>

      {/* Bento Stats - Pływający panel */}
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
    </section>
  );
}
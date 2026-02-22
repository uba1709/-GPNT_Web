import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Greater Poland <br /> Navigation Technologies</div>
      <ul className={styles.menuList}>
        <li className={styles.navItem}>🏠 <span>Główna</span></li>
        <li className={styles.navItem}>🏗️ <span>O nas</span></li>
        <li className={styles.navItem}>🚛 <span>Flota</span></li>
        <li className={styles.navItem}>📝 <span>Rekrutacja</span></li>
      </ul>
    </nav>
  );
}
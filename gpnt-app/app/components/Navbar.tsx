// "use client";

// import { useEffect, useState } from "react";
// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   const [lang, setLang] = useState("PL");

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("site-lang");
//       if (stored) setLang(stored);
//     } catch (e) {}
//   }, []);

//   function toggleLang() {
//     const next = lang === "PL" ? "EN" : "PL";
//     setLang(next);
//     try {
//       localStorage.setItem("site-lang", next);
//     } catch (e) {}
//   }

//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>Greater Poland <br /> Navigation Technologies</div>

//       <ul className={styles.menuList}>
//         <li className={styles.navItem}>🏠 <a href="#">Główna</a></li>
//         <li className={styles.navItem}>🏗️ <a href="#">O nas</a></li>
//         <li className={styles.navItem}>🚛 <a href="#">Flota</a></li>
//         <li className={styles.navItem}>📝 <a href="https://trucksbook.eu/company/178748" target="_blank">Rekrutacja</a></li>
//       </ul>

//       <div className={styles.langToggle}>
//         <button aria-label="Przełącz język" onClick={toggleLang} style={{background:'transparent',border:'none',color:'inherit',cursor:'pointer',fontWeight:700}}>
//           {lang === "PL" ? "EN" : "PL"}
//         </button>
//       </div>
//     </nav>
//   );
// }
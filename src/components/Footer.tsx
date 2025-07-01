import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <strong>Hilwan General Land Transport L.L.C.</strong> <br />
          Since 1994
        </div>
        <div>
          <a href="tel:+971588888302" className={styles.link}>+971 58 888 8302</a> |{' '}
          <a href="mailto:hilwantransport@gmail.com" className={styles.link}>hilwantransport@gmail.com</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Hilwantransport.ae. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
import styles from "./Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image src="/logo.png" alt="Hilwan Logo" width={120} height={60} />
          <div className={styles.companyName}>Hilwan General Land Transport L.L.C.</div>
          <div className={styles.since}>Since 1994</div>
        </div>
        <div className={styles.links}>
          <div className={styles.linksTitle}>Quick Links</div>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.contact}>
          <div className={styles.linksTitle}>Contact</div>
          <div><FontAwesomeIcon icon={faPhone} /> <a href="tel:+971588888302" className={styles.link}>+971 58 888 8302</a></div>
          <div><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:hilwantransport@gmail.com" className={styles.link}>hilwantransport@gmail.com</a></div>
          <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Dubai, United Arab Emirates</div>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} Hilwantransport.ae. All rights reserved.
      </div>
    </footer>
  );
} 
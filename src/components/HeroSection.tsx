import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrap}>
        <Image src="/crane-home.png" alt="Rental Crane" fill priority className={styles.bgImg} />
        <div className={styles.gradientOverlay} />
      </div>
      <div className={styles.overlay}>
        <Image src="/crane-icon.png" alt="Crane-Icon" width={100} height={100} />
        <h1>
          <span className={styles.gold}>Biggest Rental Crane Service</span> in UAE
        </h1>
        <h2>Since 1994 &bull; Trusted by 1000+ businesses</h2>
        <a href="#services" className={styles.ctaBtn}>Get a Quote</a>
      </div>
    </section>
  );
} 
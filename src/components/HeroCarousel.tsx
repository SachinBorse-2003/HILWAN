"use client";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrap}>
        <Image src="/crane-home.jpg" alt="Rental Crane" fill priority className={styles.bgImg} />
        <div className={styles.gradientOverlay} />
        {/* Decorative SVG geometric shapes */}
        <svg className={styles.svg1} width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="60" fill="#2563eb22" /></svg>
        <svg className={styles.svg2} width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="0" y="0" width="80" height="80" rx="20" fill="#D4AF3722" /></svg>
      </div>
      <div className={styles.overlay}>
        <h1><span className={styles.gold}>Hilwan</span> General Land Transport L.L.C.</h1>
        <h2>Rental Cranes, Cargo Transport & Construction Logistics</h2>
        <p className={styles.since}>Serving the UAE since 1994</p>
        <a href="#services" className={styles.ctaBtn}>Get a Quote</a>
      </div>
      <a
        href="https://wa.me/971588888302"
        className={styles.whatsappFab}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path d="M22.5 18.5c-.3-.2-1.8-.9-2.1-1-..." fill="#fff"/>
        </svg>
      </a>
    </section>
  );
} 
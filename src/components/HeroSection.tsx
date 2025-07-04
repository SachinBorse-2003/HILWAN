import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrap}>
        <video
          className={styles.bgVideo}
          src="/home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        />
        <div className={styles.gradientOverlay} />
      </div>
      <div className={styles.overlay}>
        <h1>
          <span className={styles.gold}>Biggest Rental Crane Service</span> in UAE Since 1994
        </h1>
        <h2> Trusted by 1000+ businesses</h2>
        
      </div>
    </section>
  );
} 
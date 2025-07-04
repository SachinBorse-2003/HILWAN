"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  { name: "Ahmed R.", quote: "Best crane rental in the UAE! Always on time.", company: "BuildPro" },
  { name: "Sara K.", quote: "Professional and reliable service for our logistics.", company: "LogiTrans" },
  { name: "Mohammed A.", quote: "Great fleet and support. Highly recommended!", company: "MegaConstruct" },
  { name: "Priya S.", quote: "Excellent experience, very responsive team.", company: "UrbanWorks" },
  { name: "John D.", quote: "Affordable and efficient. Will use again.", company: "CargoXpress" },
  { name: "Fatima Z.", quote: "The only company we trust for heavy transport.", company: "Skyline Dev" },
  { name: "Omar L.", quote: "Top-notch service and modern equipment.", company: "GigaBuild" },
  { name: "Lina P.", quote: "Friendly staff and quality cranes.", company: "MetroBuild" },
  { name: "Raj K.", quote: "Exceptional service and delivery times.", company: "PrimeWorks" },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Update selected index for dots
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Dots navigation
  const scrollTo = useCallback((idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  }, [emblaApi]);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.heading}>What Our Clients Say</div>
      <div className="embla" ref={emblaRef} style={{ overflow: "hidden", width: "100%" }}>
        <div className="embla__container" style={{ display: "flex" }}>
          {testimonials.map((t, i) => (
            <div className={`embla__slide ${styles.slide}`} key={i} style={{ flex: "0 0 100%", minWidth: 0 }}>
              <div className={styles.avatarWrap}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
              </div>
              <div className={styles.quote}>&ldquo;{t.quote}&rdquo;</div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.company}>{t.company}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              border: "none",
              background: i === selectedIndex ? "var(--color-gold)" : "#ccc",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
          />
        ))}
      </div>
    </section>
  );
} 
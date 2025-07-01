"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./TestimonialsCarousel.module.css";
import { useEffect } from "react";

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
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      "(max-width: 900px)": { slides: { perView: 1, spacing: 12 } },
      "(max-width: 1200px)": { slides: { perView: 2, spacing: 16 } },
    },
    drag: true,
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const slider = instanceRef.current;
    let timeout: NodeJS.Timeout;
    function next() {
      slider.next();
      timeout = setTimeout(next, 3500);
    }
    timeout = setTimeout(next, 3500);
    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.heading}>What Our Clients Say</div>
      <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
        {testimonials.map((t, i) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={i}>
            <div className={styles.avatarWrap}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
            </div>
            <div className={styles.quote}>&ldquo;{t.quote}&rdquo;</div>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.company}>{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 
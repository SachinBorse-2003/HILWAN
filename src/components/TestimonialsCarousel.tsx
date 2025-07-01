"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 1 }
    }
  ]
};

export default function TestimonialsCarousel() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.heading}>What Our Clients Say</div>
      <Slider {...settings} className={styles.carousel}>
        {testimonials.map((t, i) => (
          <div className={styles.slide} key={i}>
            <div className={styles.avatarWrap}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
            </div>
            <div className={styles.quote}>&ldquo;{t.quote}&rdquo;</div>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.company}>{t.company}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
} 
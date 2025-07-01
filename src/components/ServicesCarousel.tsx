"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import styles from "./ServicesCarousel.module.css";

const services = [
  {
    title: "Rental Cranes",
    img: "/Crane1.png",
    tagline: "Modern cranes for every project. Safe. Reliable. Powerful.",
  },
  {
    title: "Light Trucks",
    img: "/Light-Truck1.png",
    tagline: "Efficient cargo transport for small and medium loads.",
  },
  {
    title: "Heavy Trucks",
    img: "/Heavy-Truck1.png",
    tagline: "Heavy-duty solutions for large cargo and construction.",
  },
];

export default function ServicesCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    drag: true,
  });

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.heading}>Our Services</div>
      <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
        {services.map((service, i) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={i}>
            <div className={styles.imgWrap}>
              <Image src={service.img} alt={service.title} width={120} height={120} className={styles.img} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
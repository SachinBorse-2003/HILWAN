import Image from 'next/image';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Rental Cranes',
    img: '/Crane1.png',
    desc: 'Professional crane rental and construction logistics for all project sizes. Modern fleet, expert operators.',
    main: true,
  },
  {
    title: 'Light Trucks',
    img: '/Light-Truck1.png',
    desc: 'Efficient cargo transport for small and medium loads across the UAE. Reliable and timely service.',
  },
  {
    title: 'Heavy Trucks',
    img: '/Heavy-Truck1.png',
    desc: 'Heavy-duty transport solutions for large cargo and construction materials. Safe and secure delivery.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cardsWrap}>
        {services.map((service) => (
          <div
            key={service.title}
            className={service.main ? `${styles.card} ${styles.main}` : styles.card}
          >
            <div className={styles.imgWrap}>
              <Image src={service.img} alt={service.title} width={120} height={120} className={styles.img} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
import Image from 'next/image';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Rental of Loading, Lifting & Construction',
    img: '/crane-home.jpg',
    desc: 'Professional crane rental and construction logistics for all project sizes. Modern fleet, expert operators.',
    main: true,
  },
  {
    title: 'Cargo Transport by Light Truck',
    img: '/crane1.jpg',
    desc: 'Efficient cargo transport for small and medium loads across the UAE. Reliable and timely service.',
  },
  {
    title: 'Cargo Transport by Heavy Truck',
    img: '/crane2.jpg',
    desc: 'Heavy-duty transport solutions for large cargo and construction materials. Safe and secure delivery.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cardsWrap}>
        {services.map((service, i) => (
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
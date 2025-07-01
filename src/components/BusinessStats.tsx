"use client"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faTruck, faClock, faHeadset } from "@fortawesome/free-solid-svg-icons";
import styles from "./BusinessStats.module.css";

const stats = [
  {
    label: 30,
    suffix: "+",
    desc: "Years Experience",
    icon: faCalendarAlt,
    duration: 1200,
  },
  {
    label: 5000,
    suffix: "+",
    desc: "Rentals Completed",
    icon: faTruck,
    duration: 1200,
  },
  {
    label: 99,
    suffix: "%",
    desc: "On-Time Delivery",
    icon: faClock,
    duration: 1000,
  },
  {
    label: 24,
    suffix: "/7",
    desc: "Support",
    icon: faHeadset,
    duration: 800,
  },
];

function useCountUp(target: number, duration: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
}

function StatCard({ label, suffix, desc, icon, duration }: (typeof stats)[0]) {
  const count = useCountUp(label, duration);
  return (
    <div className={styles.statCard}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <div className={styles.label}>
        {count}
        {suffix}
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default function BusinessStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsWrap}>
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}

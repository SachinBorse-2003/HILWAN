"use client";
import Image from "next/image";
import styles from "./PageBanner.module.css";

export default function PageBanner({
  title,
  img,
  children,
}: {
  title: string;
  img: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.banner}>
      <div className={styles.bgWrap}>
        <Image src={img} alt={title} fill priority className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>
      <div className={`${styles.content} glass`}>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

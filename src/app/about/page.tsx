"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BusinessStats from "../../components/BusinessStats";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "../../components/PageBanner.module.css";
import { useEffect } from "react";

const carouselImages = [
  "/crane-home.png",
  "/Crane2.png",
  "/Crane3.png",
  "/hilwanTransport.jpeg",
  "/Crane4.png",
  "/Heavy-Truck1.png",
  "/terrain.png",
  "/Light-Truck1.png",
  "/Trailer.png",
];

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <>
      <Header />
      <section className={styles.banner} style={{ minHeight: "80vh", width: "100vw", position: "relative" }}>
        <div
          className="embla"
          ref={emblaRef}
          style={{ width: "100vw", height: "80vh", overflow: "hidden", position: "relative" }}
        >
          <div
            className="embla__container"
            style={{ display: "flex", height: "80vh", width: "100vw", transition: "transform 0.3s" }}
          >
            {carouselImages.map((img, i) => (
              <div
                className="embla__slide"
                key={i}
                style={{ flex: "0 0 100%", position: "relative", width: "100vw", height: "80vh" }}
              >
                <Image src={img} alt={`About Banner ${i + 1}`} fill style={{ objectFit: "cover" }} />
                <div className={styles.overlay} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            zIndex: 3,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1>About Us</h1>
        </div>
      </section>
      <main>
        <section style={{ background: "#fff", color: "#000000", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Our Story</h2>
            <p style={{ marginBottom: 24 }}>
              Founded in 1994, Hilwan General Land Transport L.L.C. has grown from a small local business into one of the UAE&apos;s most trusted names in rental cranes and cargo transport. Our commitment to reliability, safety, and customer satisfaction has driven our success for over 30 years.
            </p>
          </div>
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Our Values</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginTop: 32 }}>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 220 }}>
                <b style={{ color: "var(--color-gold)" }}>Safety First</b>
                <p>We prioritize safety in every operation and project.</p>
              </div>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 220 }}>
                <b style={{ color: "var(--color-gold)" }}>Customer Focus</b>
                <p>Your satisfaction is our top priority, always.</p>
              </div>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 220 }}>
                <b style={{ color: "var(--color-gold)" }}>Integrity</b>
                <p>We operate with honesty, transparency, and trust.</p>
              </div>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 220 }}>
                <b style={{ color: "var(--color-gold)" }}>Innovation</b>
                <p>We embrace new technology and ideas to serve you better.</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#fff", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Our Journey</h2>
            <ul style={{ textAlign: "left", maxWidth: 500, margin: "32px auto 0 auto", color: "#000", fontSize: "1.1rem", lineHeight: 1.7 }}>
              <li><b>1994:</b> Company founded in the UAE</li>
              <li><b>2000:</b> Expanded fleet to include heavy trucks</li>
              <li><b>2010:</b> Served 1000+ businesses</li>
              <li><b>2020:</b> Modernized crane fleet</li>
              <li><b>Today:</b> Leading provider in the region</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0" }}>
          <BusinessStats />
        </section>
        <section style={{ background: "#1a2238", color: "#fff", padding: "2.5rem 0", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Want to Work With Us?</h2>
          <p style={{ marginBottom: 24 }}>Contact us today to learn more about our company or to discuss your project needs.</p>
          <a href="/contact" style={{ background: "var(--color-gold)", color: "#181818", padding: "1rem 2.5rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1.2rem" }}>Contact Us</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BusinessStats from "../components/BusinessStats";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* Diverse Sectors We Cater To */}
        <section style={{ background: "#1a2238", color: "#181818", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Diverse Sectors We Cater To</h2>
            <p style={{ marginBottom: 24, color: "#fff" }}>
              As a reputable heavy lift company in UAE, we offer highly competent and customer-centric services to fulfill the requirements of various sectors, which include:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginTop: 32 }}>
              {[
                { name: "Construction", img: "/hilwan-constuction.png" },
                { name: "HVAC", img: "/hilwan-havoc.png" },
                { name: "Oil and Gas", img: "/oil-gas.png" },
                { name: "Manufacturing", img: "/manufacturing.png" },
                { name: "Shipping and Storage", img: "/ShippingPort.png" },
                { name: "Marine or Offshore", img: "/marine.png" },
                
              ].map((sector, i) => (
                <div key={i} style={{ background: "#f5f5f5", borderRadius: 16, padding: 24, width: 280, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 8px #0001" }}>
                  <Image src={sector.img} alt={sector.name} width={250} height={150} style={{ objectFit: "contain", marginBottom: 12 }} />
                  <div style={{ fontWeight: 700, color: "#181818", fontSize: "1.1rem" }}>{sector.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Other Machines We Offer on Rent */}
        <section style={{ background: "#fff", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Other Machines We Offer on Rent</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginTop: 32 }}>
              {[
                { name: "Mobile Cranes", desc: "We also offer mobile cranes in our crane rental Dubai. They offer greater mobility in comparison to standard cranes. Check the mobile crane rental price to hire it for a construction project.", img: "/mobilecrane.png" },
                { name: "Crawler Cranes", desc: "Hire tracked vehicles with powerful crane apparatus from our crawler crane rental. These cranes ensure safe and reliable operations over long distances and at extreme heights, minimizing risks.", img: "/crawlers.png" },
                { name: "Rough Terrain Cranes", desc: "Mounted on a 4-wheeled undercarriage; rough terrain crane is a type of mobile crane offered by our crane rental company in Dubai. It is the safest equipment designed to maneuver over different surfaces.", img: "/terrain.png" },
                { name: "Spider Cranes", desc: "We offer spider crane hire service at a competitive price. These cranes have a sleek design and impressive lifting capacity. They are ideal for confined areas with limited access.", img: "/spider-crane.png" },
                { name: "Crane Trucks", desc: "We also provide crane trucks for rent. They are commercial trucks with a hydraulic crane attached to their chassis. They are the best vehicles in our crane rental for transporting or lifting materials.", img: "/Heavy-Truck1.png" },
                { name: "Manlifts", desc: "A man lift is used to lift a person to hard-to-reach areas so they may carry out the desired work. Our heavy lift company offers a manlifts rental for efficient and secure indoor and outdoor work.", img: "/manlift.png" },
                { name: "Scissor Lifts", desc: "They are a type of man lift used to elevate loads and workers performing indoor tasks like hanging items, building ceilings, etc. Book this equipment from our scissor lift rental at the best price.", img: "/scissorlift.png" },
                { name: "Spider Lifts", desc: "They also fall into the category of man lifts and have the same function. However, they are lightweight, compact, versatile, and specifically built for spaces that have restricted access. Hire the equipment from our spider lift rental.", img: "/spider-crane.png" },
                { name: "Trailers", desc: "We provide a safe and reliable trailer hire service for transporting heavy or large items and materials. They are towed by a powered vehicle and are used by every industry.", img: "/Trailer.png" },
              ].map((machine, i) => (
                <div key={i} style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 280, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 8px #0002" }}>
                  <Image src={machine.img} alt={machine.name} width={280} height={150} style={{ objectFit: "contain", marginBottom: 12 }} />
                  <div style={{ fontWeight: 700, color: "var(--color-gold)", fontSize: "1.15rem", marginBottom: 8 }}>{machine.name}</div>
                  <div style={{ color: "#eee", fontSize: "0.98rem" }}>{machine.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BusinessStats />
        {/* Our Partners Section */}
        <section style={{ background: "#fff", color: "#181818", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 24 }}>Our Partners</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", alignItems: "center" }}>
              {[
                { img: "/brand1.jpeg", alt: "Partner 1" },
                { img: "/brand2.jpeg", alt: "Partner 2" },
                { img: "/brand3.jpeg", alt: "Partner 3" }
              ].map((brand, i) => (
                <div key={i} style={{ background: "#f5f5f5", borderRadius: 12, padding: 16, minWidth: 220, minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px #0001" }}>
                  <Image src={brand.img} alt={brand.alt} width={220} height={160} style={{ objectFit: "contain", maxHeight: 160 }} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <TestimonialsCarousel />
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Hilwan General Land Transport L.L.C. | Crane Rental, Transport & Logistics in UAE",
  description: "Hilwan General Land Transport L.L.C. offers professional crane rental, heavy and light truck transport, and construction logistics services in Dubai and across the UAE. Trusted since 1994 for reliability and safety.",
};

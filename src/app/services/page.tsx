import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ServicesSection from "../../components/ServicesSection";
import BusinessStats from "../../components/BusinessStats";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Services" img="/Crane3.png" />
      <main>
        <section style={{ background: "#fff", padding: "2.5rem 0" }}>
          <ServicesSection />
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Why Choose Hilwan?</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginTop: 32 }}>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 260 }}>
                <b style={{ color: "var(--color-gold)" }}>30+ Years Experience</b>
                <p>We bring decades of expertise to every project, ensuring safety and reliability.</p>
              </div>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 260 }}>
                <b style={{ color: "var(--color-gold)" }}>Modern Fleet</b>
                <p>Our cranes and trucks are modern, well-maintained, and ready for any challenge.</p>
              </div>
              <div style={{ background: "#181c2a", borderRadius: 16, padding: 24, width: 260 }}>
                <b style={{ color: "var(--color-gold)" }}>24/7 Support</b>
                <p>Our team is available around the clock for urgent needs and support.</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#fff", color: "#fff", padding: "2.5rem 0" }}>
          <BusinessStats />
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ marginBottom: 24 }}>Contact us today for a free quote or to discuss your project needs.</p>
          <a href="/contact" style={{ background: "var(--color-gold)", color: "#181818", padding: "1rem 2.5rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1.2rem" }}>Contact Us</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Crane Rental & Transport Services | Hilwan General Land Transport L.L.C.",
  description: "Explore our full range of crane rental, heavy and light truck transport, and construction logistics services in Dubai and across the UAE. Hilwan General Land Transport L.L.C. is your trusted partner since 1994.",
};

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Services" img="/Crane3.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <section style={{ maxWidth: 1000, margin: "0 auto", color: "#fff" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
            <div style={{ background: "#222a3a", borderRadius: 16, padding: 24, width: 300, textAlign: "center" }}>
              <img src="/Crane1.png" alt="Rental Cranes" style={{ width: 80, marginBottom: 12 }} />
              <h3 style={{ color: "var(--color-gold)" }}>Rental Cranes</h3>
              <p>Modern, well-maintained cranes for every project size. Certified operators, safety-focused, and available 24/7 for urgent needs.</p>
            </div>
            <div style={{ background: "#222a3a", borderRadius: 16, padding: 24, width: 300, textAlign: "center" }}>
              <img src="/Light-Truck1.png" alt="Light Trucks" style={{ width: 80, marginBottom: 12 }} />
              <h3 style={{ color: "var(--color-gold)" }}>Light Trucks</h3>
              <p>Efficient cargo transport for small and medium loads. Flexible scheduling, GPS-tracked, and experienced drivers ensure timely delivery.</p>
            </div>
            <div style={{ background: "#222a3a", borderRadius: 16, padding: 24, width: 300, textAlign: "center" }}>
              <img src="/Heavy-Truck1.png" alt="Heavy Trucks" style={{ width: 80, marginBottom: 12 }} />
              <h3 style={{ color: "var(--color-gold)" }}>Heavy Trucks</h3>
              <p>Heavy-duty transport for large cargo and construction materials. Secure, reliable, and compliant with all UAE regulations.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

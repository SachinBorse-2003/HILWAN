import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh", background: "var(--color-blue)", padding: "3rem 0" }}>
        <h1 style={{ color: "var(--color-gold)", textAlign: "center", fontSize: "2.5rem", fontWeight: 900 }}>Our Services</h1>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Details about Rental Cranes, Light Trucks, Heavy Trucks, and more coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
} 
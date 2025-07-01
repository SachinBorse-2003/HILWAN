import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Services" img="/Crane3.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Details about Rental Cranes, Light Trucks, Heavy Trucks, and more coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
}

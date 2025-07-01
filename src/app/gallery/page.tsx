import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh", background: "var(--color-blue)", padding: "3rem 0" }}>
        <h1 style={{ color: "var(--color-gold)", textAlign: "center", fontSize: "2.5rem", fontWeight: 900 }}>Gallery</h1>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Our fleet and projects gallery coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
} 
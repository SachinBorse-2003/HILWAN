import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh", background: "var(--color-blue)", padding: "3rem 0" }}>
        <h1 style={{ color: "var(--color-gold)", textAlign: "center", fontSize: "2.5rem", fontWeight: 900 }}>About Us</h1>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Hilwan General Land Transport L.L.C. has been serving the UAE since 1994 with excellence in rental cranes and cargo transport.
        </p>
      </main>
      <Footer />
    </>
  );
} 
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh", background: "var(--color-blue)", padding: "3rem 0" }}>
        <h1 style={{ color: "var(--color-gold)", textAlign: "center", fontSize: "2.5rem", fontWeight: 900 }}>Contact Us</h1>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Call us at <a href="tel:+971588888302" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>+971 58 888 8302</a> or email <a href="mailto:hilwantransport@gmail.com" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>hilwantransport@gmail.com</a>
        </p>
      </main>
      <Footer />
    </>
  );
} 
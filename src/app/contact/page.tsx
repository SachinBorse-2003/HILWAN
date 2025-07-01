import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner title="Contact Us" img="/Crane1.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Call us at <a href="tel:+971588888302" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>+971 58 888 8302</a> or email <a href="mailto:hilwantransport@gmail.com" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>hilwantransport@gmail.com</a>
        </p>
      </main>
      <Footer />
    </>
  );
}

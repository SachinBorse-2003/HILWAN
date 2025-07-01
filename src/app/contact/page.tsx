import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner title="Contact Us" img="/Crane1.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <section style={{ maxWidth: 600, margin: "0 auto", color: "#fff" }}>
          <h2 style={{ color: "var(--color-gold)", textAlign: "center", marginBottom: 24 }}>Contact Us</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: 16, background: "#222a3a", padding: 24, borderRadius: 12, marginBottom: 32 }} onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required style={{ padding: 12, borderRadius: 6, border: "none" }} />
            <input type="email" placeholder="Your Email" required style={{ padding: 12, borderRadius: 6, border: "none" }} />
            <textarea placeholder="Your Message" required style={{ padding: 12, borderRadius: 6, border: "none", minHeight: 80 }} />
            <button type="submit" style={{ background: "var(--color-gold)", color: "#181818", padding: 12, borderRadius: 6, border: "none", fontWeight: 700, cursor: "pointer" }}>Send Message</button>
          </form>
          <div style={{ textAlign: "center" }}>
            <p><b>Phone:</b> <a href="tel:+971588888302" style={{ color: "var(--color-gold)" }}>+971 58 888 8302</a></p>
            <p><b>Email:</b> <a href="mailto:hilwantransport@gmail.com" style={{ color: "var(--color-gold)" }}>hilwantransport@gmail.com</a></p>
            <p><b>Address:</b> Dubai, United Arab Emirates</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

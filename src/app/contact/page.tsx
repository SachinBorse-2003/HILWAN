"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const whatsappNumber = "971588888302";
const whatsappMessage = encodeURIComponent("Hello, I am interested in learning more about your crane rental, transport, and logistics services. Please provide more details.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner title="Contact Us" img="/Crane1.png" />
      <main>
        <section style={{ background: "#1a2238", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
            <form style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 16, background: "#222a3a", padding: 32, borderRadius: 12, minWidth: 280 }} onSubmit={e => e.preventDefault()}>
              <h2 style={{ color: "var(--color-gold)", marginBottom: 8 }}>Send Us a Message</h2>
              <input type="text" placeholder="Your Name" required style={{ padding: 12, borderRadius: 6, border: "none" }} />
              <input type="email" placeholder="Your Email" required style={{ padding: 12, borderRadius: 6, border: "none" }} />
              <textarea placeholder="Your Message" required style={{ padding: 12, borderRadius: 6, border: "none", minHeight: 80 }} />
              <button type="submit" style={{ background: "var(--color-gold)", color: "#181818", padding: 12, borderRadius: 6, border: "none", fontWeight: 700, cursor: "pointer" }}>Send Message</button>
            </form>
            <div style={{ flex: "1 1 260px", background: "#222a3a", borderRadius: 12, padding: 32, color: "#fff", minWidth: 220, display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <h2 style={{ color: "var(--color-gold)", marginBottom: 8 }}>Contact Info</h2>
              <div><b>Phone:</b> <a href="tel:+971588888302" style={{ color: "var(--color-gold)" }}>+971 58 888 8302</a></div>
              <div><b>WhatsApp:</b> <a href={whatsappLink} target="_blank" rel="noopener" style={{ color: "#25D366", fontWeight: 700, marginLeft: 6 }}><FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp</a></div>
              <div><b>Address:</b> Dubai, United Arab Emirates</div>
              <div style={{ marginTop: 16 }}>
                <a href="https://facebook.com" target="_blank" rel="noopener" style={{ color: "var(--color-gold)", marginRight: 16 }}>Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener" style={{ color: "var(--color-gold)", marginRight: 16 }}>Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" style={{ color: "var(--color-gold)" }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>We&apos;d Love to Hear From You!</h2>
          <p style={{ marginBottom: 24 }}>Reach out for a quote, partnership, or any questions about our services.</p>
        </section>
        {/* Floating WhatsApp Button */}
        <a href={whatsappLink} target="_blank" rel="noopener" aria-label="WhatsApp" style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px #2228",
          fontSize: 32,
          transition: "box-shadow 0.2s"
        }}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </main>
      <Footer />
    </>
  );
}

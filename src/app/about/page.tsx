import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner title="About Us" img="/Crane2.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <section style={{ maxWidth: 800, margin: "0 auto", color: "#fff", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Our Story</h2>
          <p style={{ marginBottom: 24 }}>
            Founded in 1994, Hilwan General Land Transport L.L.C. has grown from a small local business into one of the UAE's most trusted names in rental cranes and cargo transport. Our commitment to reliability, safety, and customer satisfaction has driven our success for over 30 years.
          </p>
          <h3 style={{ color: "var(--color-gold)", marginBottom: 8 }}>Mission</h3>
          <p style={{ marginBottom: 16 }}>
            To provide safe, efficient, and innovative transport and lifting solutions that empower our clients to achieve their goals.
          </p>
          <h3 style={{ color: "var(--color-gold)", marginBottom: 8 }}>Our Values</h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
            <li>✔️ Safety First</li>
            <li>✔️ Customer Focus</li>
            <li>✔️ Integrity & Trust</li>
            <li>✔️ Innovation</li>
            <li>✔️ Teamwork</li>
          </ul>
          <h3 style={{ color: "var(--color-gold)", marginBottom: 8 }}>Timeline</h3>
          <ul style={{ textAlign: "left", maxWidth: 500, margin: "0 auto", color: "#fff" }}>
            <li><b>1994:</b> Company founded in the UAE</li>
            <li><b>2000:</b> Expanded fleet to include heavy trucks</li>
            <li><b>2010:</b> Served 1000+ businesses</li>
            <li><b>2020:</b> Modernized crane fleet</li>
            <li><b>Today:</b> Leading provider in the region</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

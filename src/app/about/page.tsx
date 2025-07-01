import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner title="About Us" img="/Crane2.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Hilwan General Land Transport L.L.C. has been serving the UAE since 1994 with excellence in rental cranes and cargo transport.
        </p>
      </main>
      <Footer />
    </>
  );
}

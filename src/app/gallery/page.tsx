import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageBanner title="Gallery" img="/Crane4.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <p style={{ color: "var(--color-black)", textAlign: "center", marginTop: 24 }}>
          Our fleet and projects gallery coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
}

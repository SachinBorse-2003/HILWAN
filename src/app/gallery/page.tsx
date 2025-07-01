import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageBanner title="Gallery" img="/Crane4.png" />
      <main style={{ minHeight: "40vh", background: "var(--color-blue)", padding: "2rem 0" }}>
        <section style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {['/Crane1.png','/Crane2.png','/Crane3.png','/Crane4.png','/Heavy-Truck1.png','/Heavy-Truck2.png','/Light-Truck1.png','/Light-Truck2.png'].map((img, i) => (
              <div key={i} style={{ background: "#222a3a", borderRadius: 12, padding: 12, textAlign: "center" }}>
                <img src={img} alt={`Gallery ${i+1}`} style={{ width: "100%", borderRadius: 8, maxHeight: 180, objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

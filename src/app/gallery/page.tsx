import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/Crane1.png","/Crane2.png","/Crane3.png","/Crane4.png","/Heavy-Truck1.png","/Heavy-Truck2.png","/Light-Truck1.png","/Light-Truck2.png",
    "/Trailer.png", "/scissorlift.png", "/manlift.png", "/spider-crane.png", "/terrain.png", "/crawlers.png", "/mobilecrane.png", "/powerplant.png", "/marine.png", "/ShippingPort.png", "/manufacturing.png", "/oil-gas.png", "/hilwan-havoc.png", "/hilwan-constuction.png"
  ];
  return (
    <>
      <Header />
      <PageBanner title="Gallery" img="/Crane4.png" />
      <main>
        <section style={{ background: "#fff", color: "#181818", padding: "2.5rem 0 1.5rem 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: 12 }}>Welcome to Our Gallery</h2>
            <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: 0 }}>
              Explore our fleet and see our cranes and trucks in action. Here you&apos;ll find highlights from our recent projects, showcasing the scale, reliability, and professionalism of Hilwan General Land Transport L.L.C. If you need more specific examples or want to see a particular type of equipment, feel free to contact us!
            </p>
          </div>
        </section>
        <section style={{ background: "#1a2238", color: "#fff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "var(--color-gold)", textAlign: "center", marginBottom: 32 }}>Our Fleet & Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
              {images.map((img, i) => (
                <div key={i} style={{ background: "#222a3a", borderRadius: 12, padding: 12, textAlign: "center", transition: "transform 0.2s", boxShadow: "0 2px 8px #0002" }}>
                  <Image src={img} alt={`Gallery ${i+1}`} width={400} height={180} style={{ width: "100%", borderRadius: 8, maxHeight: 180, objectFit: "cover", transition: "transform 0.2s" }} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ background: "#222a3a", color: "#fff", padding: "2.5rem 0", textAlign: "center" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: 16 }}>Want to See More?</h2>
          <p style={{ marginBottom: 24 }}>Contact us for a full portfolio or to request specific project images.</p>
          <a href="/contact" style={{ background: "var(--color-gold)", color: "#181818", padding: "1rem 2.5rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1.2rem" }}>Contact Us</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Gallery | Hilwan General Land Transport L.L.C. Fleet & Projects",
  description: "View our gallery of cranes, trucks, and recent projects. Hilwan General Land Transport L.L.C. showcases its modern fleet and successful operations across the UAE.",
};

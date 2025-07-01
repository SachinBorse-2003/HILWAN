import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BusinessStats from "../components/BusinessStats";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BusinessStats />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesCarousel from "../components/ServicesCarousel";
import BusinessStats from "../components/BusinessStats";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesCarousel />
        <BusinessStats />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </>
  );
}

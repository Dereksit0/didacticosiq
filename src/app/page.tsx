import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import CategoriesSection from "@/components/CategoriesSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CatalogSection />
        <CategoriesSection />
        <GallerySection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

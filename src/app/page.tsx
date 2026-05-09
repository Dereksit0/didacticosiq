import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WholesaleRetailSection from "@/components/WholesaleRetailSection";
import CatalogSection from "@/components/CatalogSection";
import CategoriesSection from "@/components/CategoriesSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import CustomProjectSection from "@/components/CustomProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SourcingSection from "@/components/SourcingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WholesaleRetailSection />
        <CatalogSection />
        <CategoriesSection />
        <GallerySection />
        <BenefitsSection />
        <CustomProjectSection />
        <SourcingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

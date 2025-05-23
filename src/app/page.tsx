import HeroSection from "@/components/layouts/Section/HeroSection";
import Navbar from "@/components/layouts/Navbar/Navbar";
import BasicSection from "@/components/layouts/Section/BasicSection";
import ComponentsSection from "@/components/layouts/Section/ComponentsSection";
import ResponsiveSection from "@/components/layouts/Section/ResponsiveSection";
import Footer from "@/components/Footer/Footer";
import ResourcesSection from "@/components/layouts/Section/ResourcesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BasicSection />
      <ComponentsSection />
      <ResponsiveSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
}

import HeroSection from "@/components/layouts/Section/HeroSection";
import Navbar from "@/components/layouts/Navbar/Navbar";
import BasicSection from "@/components/layouts/Section/BasicSection";
import ComponentsSection from "@/components/layouts/Section/ComponentsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BasicSection />
      <ComponentsSection />
    </main>
  );
}

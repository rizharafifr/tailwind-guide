import HeroSection from "@/components/layouts/Section/HeroSection";
import BasicSection from "@/components/layouts/Section/BasicSection";
import ComponentsSection from "@/components/layouts/Section/ComponentsSection";
import ResponsiveSection from "@/components/layouts/Section/ResponsiveSection";
import ResourcesSection from "@/components/layouts/Section/ResourcesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BasicSection />
      <ComponentsSection />
      <ResponsiveSection />
      <ResourcesSection />
    </main>
  );
}

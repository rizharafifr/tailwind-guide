import HeroSection from "@/components/layouts/Section/HeroSection";
import Navbar from "@/components/layouts/Navbar/Navbar";
import BasicSection from "@/components/layouts/Section/BasicSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BasicSection />
    </main>
  );
}

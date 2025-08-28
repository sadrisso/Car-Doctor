import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroBanner />
      <ServicesSection />
    </div>
  );
}

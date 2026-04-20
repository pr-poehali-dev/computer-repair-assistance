import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiagnosisForm from "@/components/DiagnosisForm";
import ContentSections from "@/components/ContentSections";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#070b12] text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <DiagnosisForm />
      <ContentSections />
    </div>
  );
}

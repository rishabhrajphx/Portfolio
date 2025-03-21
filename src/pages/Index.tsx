import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProjectTimeline } from "@/pages/ProjectTimeline";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectTimeline />
    </div>
  );
};

export default Index;
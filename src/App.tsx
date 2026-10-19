import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ResumeModal } from "./components/ResumeModal";

import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Clean, Compact Sticky Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Sections Flow */}
      <main style={{ flex: 1 }}>
        <HeroSection onOpenResume={handleOpenResume} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Subtle Footer */}
      <Footer />

      {/* Official Verified Resume PDF Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;

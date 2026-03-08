import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import MetricsSection from "./components/MetricsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ProcessSection from "./components/ProcessSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";

import ProjectsPage from "./pages/Projects";

import usePortfolioAnimations from "./hooks/usePortfolioAnimations";

import {
  projects,
  metrics,
  capabilities,
  processSteps,
} from "./data/content";

function HomePage() {
  const appRef = useRef(null);
  const floatingCardRef = useRef(null);

  usePortfolioAnimations(appRef, floatingCardRef);

  return (
    <main
      ref={appRef}
      className="max-w-7xl mx-auto px-6"
    >
      <Hero floatingCardRef={floatingCardRef} />

      <MetricsSection metrics={metrics} />

      <CapabilitiesSection capabilities={capabilities} />

      <ProjectsSection projects={projects} />

      <ProcessSection processSteps={processSteps} />

      <ResumeSection />

      <ContactSection />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">

        <Navbar />

        <Routes>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* All projects page */}
          <Route path="/projects" element={<ProjectsPage />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import AboutPositioningSection from '../components/home/AboutPositioningSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import RabbitStairsSection from '../components/home/RabbitStairsSection';
import SolutionSection from '../components/home/SolutionSection';
import BuiltBySection from '../components/home/BuiltBySection';
import TrustFaqContactSection from '../components/home/TrustFaqContactSection';
import ClosingCTA from '../components/home/ClosingCTA';

export default function HomePage({
  onOpenDocsChapter,
  onNavigateLandingSection,
  onNavigate,
  onShowToast,
}) {
  return (
    <div id="view-landing" className="view-panel active">
      <main>
        {/* 1. Hero */}
        <HeroSection
          onOpenDocsChapter={onOpenDocsChapter}
          onNavigateLandingSection={onNavigateLandingSection}
          onShowToast={onShowToast}
        />

        {/* 2. Masalah siswa SMK */}
        <ProblemSection />

        {/* 3. Apa itu LANJUT dan positioning */}
        <AboutPositioningSection />

        {/* 4. Cara kerja LANJUT */}
        <HowItWorksSection />

        {/* 5. Animasi kelinci menaiki tangga */}
        <RabbitStairsSection onOpenDocsChapter={onOpenDocsChapter} />

        {/* 6. Ringkasan solusi dan CTA ke Panduan */}
        <SolutionSection onOpenDocsChapter={onOpenDocsChapter} />

        {/* 7. Bagaimana LANJUT dibuat */}
        <BuiltBySection />

        {/* 8. Ringkasan privasi, FAQ, dan kontak + CTA Penutup */}
        <TrustFaqContactSection onOpenDocsChapter={onOpenDocsChapter} />
        <ClosingCTA
          onOpenDocsChapter={onOpenDocsChapter}
          onNavigate={onNavigate}
        />
      </main>
    </div>
  );
}

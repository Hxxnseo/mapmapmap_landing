import React from 'react';
import { Hero } from './components/Hero';
import { SpicySlider } from './components/SpicySlider';
import { EmpathySection } from './components/EmpathySection';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';
import { UrgencyBanner } from './components/UrgencyBanner';
import { SignupForm } from './components/SignupForm';
import { Footer } from './components/Footer';
import { StickyCtA } from './components/StickyCTA';

function App() {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-[#1A1A2E] overflow-x-hidden">
      <Hero />
      <SpicySlider />
      <EmpathySection />
      <HowItWorks />
      <Features />
      <AppPreview />
      <UrgencyBanner />
      <SignupForm />
      <Footer />
      
      {/* Sticky CTA */}
      <StickyCtA />
    </main>
  );
}

export default App;
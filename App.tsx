import React from 'react';
import { Hero } from './components/Hero';
import { SpicySlider } from './components/SpicySlider';
import { EmpathySection } from './components/EmpathySection';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';
import { UrgencyBanner } from './components/UrgencyBanner';
import { SignupForm } from './components/SignupForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen font-sans text-white bg-[#1A1A2E] overflow-x-hidden">
      <Hero />
      <SpicySlider />
      <EmpathySection />
      <Features />
      <AppPreview />
      <UrgencyBanner />
      <SignupForm />
      <Footer />
      
      {/* Scroll to Top helper / Sticky Mobile CTA placeholder if needed */}
    </main>
  );
}

export default App;
import React, { useState } from 'react';
import { CubeField } from './components/CubeField';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { ServicesDetail } from './components/ServicesDetail';
import { WhoWeServe } from './components/WhoWeServe';
import { Process } from './components/Process';
import { About } from './components/About';
import { ClosingCTA } from './components/ClosingCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [topic, setTopic] = useState<string | undefined>();

  const openConsultation = (t?: string) => {
    setTopic(t);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070b16] text-slate-100 overflow-x-hidden">
      {/* Ambient 3D cube field — reacts to cursor + scroll across the whole page */}
      <CubeField density={16} />

      {/* Subtle grain / vignette layer above cubes, below content */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_top,_transparent_40%,_#070b16_95%)]" />

      <Navbar onOpenConsultation={openConsultation} />

      <main className="relative z-10">
        <Hero onOpenConsultation={openConsultation} />
        <WhatWeDo onOpenConsultation={openConsultation} />
        <ServicesDetail onOpenConsultation={openConsultation} />
        <WhoWeServe />
        <Process />
        <About />
        <ClosingCTA onOpenConsultation={openConsultation} />
        <Contact />
      </main>

      <Footer />

      <ConsultationModal isOpen={modalOpen} topic={topic} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;

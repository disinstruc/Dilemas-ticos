/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { DeontologySection } from './components/DeontologySection';
import { ScenariosSection } from './components/ScenariosSection';
import { DeliberationMatrixSection } from './components/DeliberationMatrixSection';
import { EvaluationSection } from './components/EvaluationSection';
import { SynthesisSection } from './components/SynthesisSection';
import { Footer } from './components/Footer';
import { StudentPortfolioModal } from './components/StudentPortfolioModal';

const AppContent: React.FC = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const handleScrollToObjectives = () => {
    const elem = document.getElementById('objetivos');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950 flex flex-col">
      {/* Top Bar with Top Bar Contract */}
      <Navbar onOpenPortfolio={() => setPortfolioOpen(true)} />

      {/* Main Learning Stream */}
      <main className="flex-1">
        {/* Inicio / Portada Hero */}
        <HeroSection onScrollToObjectives={handleScrollToObjectives} />

        {/* Presentación de Objetivos y Competencias */}
        <ObjectivesSection />

        {/* Módulo 1: Fundamentos Deontológicos & Actividad de Asociación */}
        <DeontologySection />

        {/* Módulo 2: Simulador de Dilemas Éticos (Escenarios de Decisión) */}
        <ScenariosSection />

        {/* Módulo 3: Matriz de Deliberación Ética (Diego Gracia) */}
        <DeliberationMatrixSection />

        {/* Módulo 4: Evaluación de Competencias & Cuestionario Formativo */}
        <EvaluationSection />

        {/* Módulo 5: Cierre, Síntesis de Aprendizajes & Certificación Oficial */}
        <SynthesisSection />
      </main>

      {/* Academic Footer */}
      <Footer />

      {/* Student Logbook / Portfolio Drawer Modal */}
      <StudentPortfolioModal
        isOpen={portfolioOpen}
        onClose={() => setPortfolioOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}

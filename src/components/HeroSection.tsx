/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { ArrowRight, Compass, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import heroImage from '../assets/images/hero_pedagogical_ethics_1794422426772.jpg';

interface HeroSectionProps {
  onScrollToObjectives: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToObjectives }) => {
  const { setActiveSection, calculateOverallProgress } = useProgress();
  const progressPercent = calculateOverallProgress();

  const handleStart = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-stone-900 text-stone-100 py-16 sm:py-24 border-b border-stone-800">
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Academic Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-semibold mb-4">
              <span>Educación Superior Virtual</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Deontología & Bioética Docente</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Metodología Deliberativa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
              Dilemas Éticos en la Práctica Docente
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 font-light mb-6">
              De la Reflexión a la Acción Pedagógica
            </p>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-normal">
              La labor docente universitaria trasciende la mera transmisión técnica: es un acto ético y político continuo. 
              En entornos digitales e hiperconectados, los profesores enfrentan tensiones entre rigor normativo y equidad humana, 
              confidencialidad y protección, automatización con IA y autoría genuina. 
              Esta experiencia interactiva te guiará para transformar la incertidumbre moral en decisiones formativas, fundamentadas y humanizantes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => handleStart('fundamentos')}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-300 hover:bg-amber-200 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Iniciar Recorrido Formativo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToObjectives}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Ver Objetivos & Competencias</span>
              </button>
            </div>

            {/* Feature Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80 text-stone-400">
              <div>
                <span className="block text-xl font-bold text-white font-mono tabular-nums">5 Principios</span>
                <span className="text-xs text-stone-400">Bioéticos y Deontológicos</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-mono tabular-nums">4 Escenarios</span>
                <span className="text-xs text-stone-400">Decisión Ramificada</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-mono tabular-nums">1 Matriz</span>
                <span className="text-xs text-stone-400">Deliberación de D. Gracia</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-amber-300 font-mono tabular-nums">Certificación</span>
                <span className="text-xs text-stone-400">Acta de Competencia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl group">
              <img
                src={heroImage}
                alt="Cuaderno académico de deliberación ética pedagógica y pluma fuente en biblioteca universitaria"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-stone-300">
                <p className="text-xs font-serif italic text-amber-200 mb-1">
                  “No hay neutralidad en el aula: enseñar siempre transforma al otro y nos compromete moralmente.”
                </p>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>Práctica reflexiva docente</span>
                  <span className="font-mono tabular-nums text-amber-300">Progreso actual: {progressPercent}%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

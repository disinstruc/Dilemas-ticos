/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LEARNING_OBJECTIVES } from '../data/ethicsData';
import { Target, BookOpen, Layers, CheckCircle2, HeartHandshake } from 'lucide-react';

export const ObjectivesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredObjectives =
    selectedCategory === 'all'
      ? LEARNING_OBJECTIVES
      : LEARNING_OBJECTIVES.filter((obj) => obj.category === selectedCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Saber':
        return 'text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-300 dark:bg-blue-950/40 dark:border-blue-900';
      case 'Saber Hacer':
        return 'text-amber-800 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-900';
      case 'Saber Ser':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-900';
      case 'Saber Convivir':
        return 'text-purple-800 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-950/40 dark:border-purple-900';
      default:
        return 'text-stone-800 bg-stone-50 border-stone-200';
    }
  };

  return (
    <section id="objetivos" className="py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Marco Pedagógico</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Competencias Clave</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Objetivos de Aprendizaje & Competencias Deontológicas
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Estructurados bajo las cuatro dimensiones formativas de la UNESCO y la taxonomía de Bloom, 
            diseñados para articular el conocimiento normativo con la sensibilidad ética y la capacidad de resolución en situaciones críticas del aula virtual.
          </p>
        </div>

        {/* General Objective Highlight Banner */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm mb-10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-900 rounded-lg shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-800">Objetivo General del Módulo</span>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-stone-900 mt-1 mb-2">
                Desarrollo del Juicio Moral y la Deliberación Ética en la Docencia
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Fortalecer en los futuros y actuales docentes universitarios la competencia para identificar, analizar y resolver 
                dilemas éticos propios de la educación contemporánea y virtual, fundamentando sus decisiones en principios bioéticos, 
                marcos deontológicos y el principio superior del bienestar y desarrollo integral del estudiantado.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs (Interactive filter control allowed by §1.A) */}
        <div className="flex items-center gap-2 p-1 bg-stone-200/70 rounded-lg max-w-fit mb-8 overflow-x-auto">
          {[
            { id: 'all', label: 'Todas las Dimensiones' },
            { id: 'Saber', label: 'Saber (Conceptual)' },
            { id: 'Saber Hacer', label: 'Saber Hacer (Procedimental)' },
            { id: 'Saber Ser', label: 'Saber Ser (Actitudinal)' },
            { id: 'Saber Convivir', label: 'Saber Convivir (Relacional)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-white text-stone-950 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredObjectives.map((obj, index) => (
            <div
              key={obj.id}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${getCategoryColor(obj.category)}`}>
                    {obj.category}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    Nivel: {obj.bloomLevel}
                  </span>
                </div>

                <h4 className="text-lg font-serif font-semibold text-stone-900 mb-2">
                  {obj.title}
                </h4>

                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {obj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Competencia evaluable en el simulador y la evaluación de cierre</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

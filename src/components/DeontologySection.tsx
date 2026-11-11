/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ETHICAL_PRINCIPLES, MATCHING_PAIRS } from '../data/ethicsData';
import { useProgress } from '../context/ProgressContext';
import {
  ChevronDown,
  ChevronUp,
  Scale,
  Sparkles,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  BookOpen,
  Quote,
  Shield,
  Lightbulb,
} from 'lucide-react';
import balanceImage from '../assets/images/balance_justice_sculpture_1794422427614.jpg';

export const DeontologySection: React.FC = () => {
  const { progress, recordMatchingGame } = useProgress();
  
  // Accordion state
  const [expandedPrinciples, setExpandedPrinciples] = useState<Record<string, boolean>>({
    beneficence: true,
    'non-maleficence': false,
    autonomy: false,
    justice: false,
    'care-ethics': false,
  });

  // Matching game state
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>(() => {
    return progress.matchingGameCompleted ? MATCHING_PAIRS.map((m) => m.id) : [];
  });
  const [feedbackMessage, setFeedbackMessage] = useState<{
    text: string;
    isSuccess: boolean;
  } | null>(null);

  const togglePrinciple = (id: string) => {
    setExpandedPrinciples((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    ETHICAL_PRINCIPLES.forEach((p) => {
      allExpanded[p.id] = true;
    });
    setExpandedPrinciples(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    ETHICAL_PRINCIPLES.forEach((p) => {
      allCollapsed[p.id] = false;
    });
    setExpandedPrinciples(allCollapsed);
  };

  // Matching game logic
  const handleConceptClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedConceptId(id);
    setFeedbackMessage(null);
  };

  const handleCaseClick = (pairId: string) => {
    if (matchedPairs.includes(pairId)) return;
    if (!selectedConceptId) {
      setFeedbackMessage({
        text: 'Primero selecciona un concepto deontológico de la columna izquierda.',
        isSuccess: false,
      });
      return;
    }

    const target = MATCHING_PAIRS.find((m) => m.id === selectedConceptId);
    if (target && target.id === pairId) {
      const nextMatched = [...matchedPairs, pairId];
      setMatchedPairs(nextMatched);
      setSelectedConceptId(null);
      setFeedbackMessage({
        text: target.feedback,
        isSuccess: true,
      });

      if (nextMatched.length === MATCHING_PAIRS.length) {
        recordMatchingGame(100);
      }
    } else {
      setFeedbackMessage({
        text: 'Asociación incorrecta. Revisa con atención los principios y la tensión ética del caso para reintentar.',
        isSuccess: false,
      });
    }
  };

  const handleResetMatching = () => {
    setMatchedPairs([]);
    setSelectedConceptId(null);
    setFeedbackMessage(null);
  };

  return (
    <section id="fundamentos" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <span>Módulo 01</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Fundamentos Bioéticos & Deontológicos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
              Los Cinco Principios Éticos de la Docencia Universitaria
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              En la educación superior no existen decisiones neutrales. Todo acto de evaluación, comunicación y diseño curricular 
              está atravesado por concepciones éticas sobre el valor de la persona, la distribución del saber y el ejercicio del poder. 
              Explora los cinco pilares normativos y sus dilemas característicos en el aula contemporánea.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-md max-w-sm w-full">
              <img
                src={balanceImage}
                alt="Escultura conceptual que representa el equilibrio y la justicia ética"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 italic">
                La deliberación ética busca el equilibrio ponderado de valores en tensión, evitando los dogmatismos extremos.
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Collapsible Cards (Tarjetas Desplegables) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Marco de Principios en Conflicto
            </h3>
            <div className="flex items-center gap-2 text-xs font-medium">
              <button
                onClick={expandAll}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors cursor-pointer"
              >
                Desplegar Todos
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors cursor-pointer"
              >
                Plegar Todos
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {ETHICAL_PRINCIPLES.map((principle, index) => {
              const isExpanded = !!expandedPrinciples[principle.id];
              return (
                <div
                  key={principle.id}
                  className={`border rounded-xl transition-all ${
                    isExpanded
                      ? 'border-amber-300 bg-stone-50/50 shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  {/* Header / Toggle Button */}
                  <button
                    onClick={() => togglePrinciple(principle.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold text-amber-800 bg-amber-100/70 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg sm:text-xl font-serif font-semibold text-stone-900">
                            {principle.name}
                          </h4>
                          {principle.greekOrLatinRoot && (
                            <span className="hidden sm:inline text-xs text-stone-500 italic">
                              ({principle.greekOrLatinRoot})
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 mt-0.5">
                          {principle.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 p-1 rounded-md text-stone-500 hover:text-stone-900">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-amber-800" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-stone-200/60 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm">
                      
                      {/* Left: Context & Dilemma */}
                      <div className="md:col-span-7 space-y-4">
                        <div>
                          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-1">
                            Fundamentación Deontológica
                          </span>
                          <p className="text-stone-700 leading-relaxed">
                            {principle.academicContext}
                          </p>
                        </div>

                        <div className="bg-amber-50/80 rounded-lg p-4 border border-amber-200">
                          <div className="flex items-start gap-2.5">
                            <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs uppercase tracking-wider font-semibold text-amber-900 block mb-0.5">
                                Dilema Típico en el Aula Universitaria
                              </span>
                              <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
                                {principle.classroomDilemma}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-1">
                            Tensión Ética Frecuente
                          </span>
                          <p className="text-xs font-semibold text-stone-900">
                            {principle.tensionPair}:
                          </p>
                          <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
                            {principle.tensionDescription}
                          </p>
                        </div>
                      </div>

                      {/* Right: Good practices & Quote */}
                      <div className="md:col-span-5 flex flex-col justify-between space-y-4 bg-white p-4 rounded-lg border border-stone-200">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 mb-2">
                            <Lightbulb className="w-4 h-4 text-amber-600" />
                            <span>Pautas Deontológicas de Buena Práctica</span>
                          </div>
                          <ul className="space-y-2 text-xs text-stone-600">
                            {principle.goodPractices.map((practice, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>{practice}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-stone-100">
                          <div className="flex items-start gap-2 text-stone-500">
                            <Quote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-serif italic text-stone-700">
                                “{principle.keyQuote.text}”
                              </p>
                              <span className="text-[11px] text-stone-500 block mt-1">
                                — {principle.keyQuote.author}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Interactive Concept-Matching Activity */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <span>Actividad Práctica de Asociación</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Evaluación Formativa</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              Asociación de Conceptos & Situaciones de la Práctica Docente
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Haz clic en un concepto deontológico en la columna izquierda y luego pulsa sobre la situación docente que le corresponde en la columna derecha para emparejarlos.
            </p>
          </div>

          {/* Feedback banner */}
          {feedbackMessage && (
            <div
              className={`p-4 rounded-xl border mb-6 flex items-start gap-3 text-sm ${
                feedbackMessage.isSuccess
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              {feedbackMessage.isSuccess ? (
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="leading-relaxed">{feedbackMessage.text}</div>
            </div>
          )}

          {/* Progress bar of the matching activity */}
          <div className="flex items-center justify-between text-xs text-stone-600 mb-4 font-mono">
            <span>
              Pares resueltos: {matchedPairs.length} de {MATCHING_PAIRS.length}
            </span>
            <span>
              {matchedPairs.length === MATCHING_PAIRS.length ? '¡Completado con éxito!' : 'En progreso'}
            </span>
          </div>

          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mb-8">
            <div
              className="bg-emerald-600 h-2 transition-all duration-300"
              style={{
                width: `${(matchedPairs.length / MATCHING_PAIRS.length) * 100}%`,
              }}
            />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Left: Concepts */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-semibold text-stone-500 block mb-1">
                Columna A: Concepto / Tensión Deontológica
              </span>
              {MATCHING_PAIRS.map((item) => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedConceptId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleConceptClick(item.id)}
                    disabled={isMatched}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-sm ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-amber-100 border-amber-400 text-stone-900 shadow-sm ring-2 ring-amber-300'
                        : 'bg-white border-stone-200 text-stone-800 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    <span className="font-medium">{item.concept}</span>
                    {isMatched && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Right: Real Cases */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-semibold text-stone-500 block mb-1">
                Columna B: Situación Concreta en el Aula
              </span>
              {MATCHING_PAIRS.map((item) => {
                const isMatched = matchedPairs.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleCaseClick(item.id)}
                    disabled={isMatched}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm leading-relaxed ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900 opacity-80 cursor-default'
                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    <p>{item.realCase}</p>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Reset button */}
          <div className="flex justify-end pt-4 border-t border-stone-200">
            <button
              onClick={handleResetMatching}
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Actividad de Asociación</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DELIBERATION_STEPS, PRELOADED_DELIBERATION_CASES } from '../data/ethicsData';
import { useProgress } from '../context/ProgressContext';
import {
  Compass,
  CheckCircle,
  ShieldCheck,
  FileText,
  Save,
  Sparkles,
  ArrowRight,
  Info,
  CheckSquare,
  Square,
  HelpCircle,
} from 'lucide-react';

export const DeliberationMatrixSection: React.FC = () => {
  const { progress, updateDeliberationNotes } = useProgress();

  const [activeTab, setActiveTab] = useState<'wizard' | 'preloaded'>('wizard');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Local state for the deliberation wizard
  const [dilemmaFact, setDilemmaFact] = useState<string>(
    progress.deliberationNotes.dilemmaFact || ''
  );
  const [conflictingValues, setConflictingValues] = useState<string>(
    progress.deliberationNotes.conflictingValues || ''
  );
  const [extremeCourses, setExtremeCourses] = useState<string>(
    progress.deliberationNotes.extremeCourses || ''
  );
  const [optimalCourse, setOptimalCourse] = useState<string>(
    progress.deliberationNotes.optimalCourse || ''
  );
  const [publicityTest, setPublicityTest] = useState<boolean>(
    progress.deliberationNotes.publicityTest || false
  );
  const [legalTest, setLegalTest] = useState<boolean>(
    progress.deliberationNotes.legalTest || false
  );
  const [universalityTest, setUniversalityTest] = useState<boolean>(
    progress.deliberationNotes.universalityTest || false
  );
  const [justification, setJustification] = useState<string>(
    progress.deliberationNotes.justification || ''
  );

  const handleSaveNotes = () => {
    updateDeliberationNotes({
      dilemmaFact,
      conflictingValues,
      extremeCourses,
      optimalCourse,
      publicityTest,
      legalTest,
      universalityTest,
      justification,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleLoadPreloaded = (preloaded: typeof PRELOADED_DELIBERATION_CASES[0]) => {
    setDilemmaFact(preloaded.fact);
    setConflictingValues(preloaded.values);
    setExtremeCourses(`Extremo A (Punitivo): ${preloaded.extreme1}\nExtremo B (Permisivo): ${preloaded.extreme2}`);
    setOptimalCourse(preloaded.optimal);
    setPublicityTest(true);
    setLegalTest(true);
    setUniversalityTest(true);
    setJustification('Criterio fundamentado en la justicia como equidad y la proporcionalidad pedagógica formativa.');
    setActiveTab('wizard');
    setCurrentStep(1);
    handleSaveNotes();
  };

  return (
    <section id="deliberacion" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Módulo 03</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Taller de Deliberación Ética</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
            Matriz de Deliberación Ético-Pedagógica
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Adaptación del método deliberativo de Diego Gracia y Adela Cortina a la docencia superior. 
            El objetivo no es encontrar una única respuesta matemática, sino construir decisiones prudentes, 
            razonables y éticamente defendibles que superen los extremismos punitivos o negligentes.
          </p>
        </div>

        {/* Tab Controls (Wizard vs Preloaded) */}
        <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-lg max-w-fit mb-8">
          <button
            onClick={() => setActiveTab('wizard')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'wizard'
                ? 'bg-white text-stone-950 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Matriz Interactiva Paso a Paso
          </button>
          <button
            onClick={() => setActiveTab('preloaded')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === 'preloaded'
                ? 'bg-white text-stone-950 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Ver Ejemplos de Deliberación Resueltos
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === 'preloaded' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {PRELOADED_DELIBERATION_CASES.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 rounded-2xl border border-stone-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-800 mb-2">
                    <FileText className="w-4 h-4" />
                    <span>Caso Resuelto de Referencia</span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900 mb-3">
                    {item.title}
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                    <div>
                      <strong className="text-stone-900 block font-semibold">1. Hechos objetivos:</strong>
                      <p className="text-stone-600 mt-0.5">{item.fact}</p>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">2. Valores en tensión:</strong>
                      <p className="text-stone-600 mt-0.5">{item.values}</p>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">3. Vías extremas descartadas:</strong>
                      <p className="text-stone-500 mt-0.5">• {item.extreme1}</p>
                      <p className="text-stone-500">• {item.extreme2}</p>
                    </div>
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-950">
                      <strong className="block font-semibold mb-0.5">4. Curso óptimo deliberado:</strong>
                      <p>{item.optimal}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 mt-6 flex justify-end">
                  <button
                    onClick={() => handleLoadPreloaded(item)}
                    className="px-4 py-2 bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Cargar este Caso en mi Matriz
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Step-by-Step Interactive Deliberation Wizard */
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm mb-12">
            
            {/* Step Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {DELIBERATION_STEPS.map((stepItem) => {
                const isCurrent = currentStep === stepItem.step;
                const isPassed = currentStep > stepItem.step;

                return (
                  <button
                    key={stepItem.step}
                    onClick={() => setCurrentStep(stepItem.step)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-100/70 border-amber-400 text-stone-950 ring-1 ring-amber-300'
                        : isPassed
                        ? 'bg-white border-emerald-300 text-stone-800'
                        : 'bg-stone-100 border-stone-200 text-stone-500 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-semibold mb-1">
                      <span>Paso 0{stepItem.step}</span>
                      {isPassed && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                    </div>
                    <p className="text-xs font-serif font-bold truncate">
                      {stepItem.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Current Step Content */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 mb-8">
              {(() => {
                const activeStepObj = DELIBERATION_STEPS.find((s) => s.step === currentStep)!;
                return (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                      <span>Fase {activeStepObj.step} de 4</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span>{activeStepObj.subtitle}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                      {activeStepObj.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                      {activeStepObj.description}
                    </p>

                    {/* Guiding Questions Callout */}
                    <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/80 mb-6 text-xs text-stone-700">
                      <span className="font-semibold text-amber-900 block mb-1">
                        Preguntas Guía para la Reflexión:
                      </span>
                      <ul className="space-y-1 text-stone-600">
                        {activeStepObj.guidingQuestions.map((q, i) => (
                          <li key={i}>• {q}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Step specific input controls */}
                    {currentStep === 1 && (
                      <div className="space-y-2">
                        <label className="block text-xs uppercase font-semibold text-stone-700">
                          1. Describe los hechos objetivos y comprobables del dilema pedagógico:
                        </label>
                        <textarea
                          rows={4}
                          value={dilemmaFact}
                          onChange={(e) => setDilemmaFact(e.target.value)}
                          placeholder="Ejemplo: Un estudiante con brecha de conectividad en zona rural no pudo entregar a tiempo su proyecto final y solicita reconsideración..."
                          className="w-full p-3.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-2">
                        <label className="block text-xs uppercase font-semibold text-stone-700">
                          2. Identifica los principios y valores éticos en colisión:
                        </label>
                        <textarea
                          rows={4}
                          value={conflictingValues}
                          onChange={(e) => setConflictingValues(e.target.value)}
                          placeholder="Ejemplo: Principio de Justicia Formal / Cumplimiento de plazos institucionales vs. Principio de Equidad Sustantiva y No Maleficencia..."
                          className="w-full p-3.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                            3A. Vías Extremas a descartar (Punitivismo ciego o Permisividad negligente):
                          </label>
                          <textarea
                            rows={2}
                            value={extremeCourses}
                            onChange={(e) => setExtremeCourses(e.target.value)}
                            placeholder="Ejemplo Extremo: Reprobar automáticamente sin escuchar explicaciones // o regalar la nota sin pedir ninguna evidencia ni evaluación..."
                            className="w-full p-3 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                            3B. Curso de Acción Óptimo e Integrador (Solución formativa intermedia):
                          </label>
                          <textarea
                            rows={3}
                            value={optimalCourse}
                            onChange={(e) => setOptimalCourse(e.target.value)}
                            placeholder="Describe el curso de acción prudente que maximiza el aprendizaje con el menor daño posible..."
                            className="w-full p-3 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <span className="block text-xs uppercase font-semibold text-stone-700 mb-3">
                            Filtros del Test de Consistencia Ética (Diego Gracia):
                          </span>

                          <div className="space-y-3">
                            <label className="flex items-start gap-3 p-3.5 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer hover:bg-stone-100 transition-colors">
                              <input
                                type="checkbox"
                                checked={legalTest}
                                onChange={(e) => setLegalTest(e.target.checked)}
                                className="mt-1 h-4 w-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                              />
                              <div>
                                <strong className="text-xs font-semibold text-stone-900 block">
                                  1. Prueba de Legalidad y Derechos Humanos
                                </strong>
                                <span className="text-xs text-stone-600">
                                  La decisión no vulnera el marco constitucional, el debido proceso ni los derechos fundamentales del estudiante.
                                </span>
                              </div>
                            </label>

                            <label className="flex items-start gap-3 p-3.5 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer hover:bg-stone-100 transition-colors">
                              <input
                                type="checkbox"
                                checked={publicityTest}
                                onChange={(e) => setPublicityTest(e.target.checked)}
                                className="mt-1 h-4 w-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                              />
                              <div>
                                <strong className="text-xs font-semibold text-stone-900 block">
                                  2. Prueba de Publicidad
                                </strong>
                                <span className="text-xs text-stone-600">
                                  Serías capaz de exponer y defender tus argumentos con serenidad en un claustro docente o ante el estudiantado sin necesidad de ocultarlo.
                                </span>
                              </div>
                            </label>

                            <label className="flex items-start gap-3 p-3.5 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer hover:bg-stone-100 transition-colors">
                              <input
                                type="checkbox"
                                checked={universalityTest}
                                onChange={(e) => setUniversalityTest(e.target.checked)}
                                className="mt-1 h-4 w-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                              />
                              <div>
                                <strong className="text-xs font-semibold text-stone-900 block">
                                  3. Prueba de Universalidad y Temporalidad
                                </strong>
                                <span className="text-xs text-stone-600">
                                  Consideras que este criterio debería ser aplicado por cualquier otro docente en circunstancias similares y te sentirías satisfecho de tu decisión dentro de varios años.
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                            Justificación Final y Síntesis Deontológica:
                          </label>
                          <textarea
                            rows={3}
                            value={justification}
                            onChange={(e) => setJustification(e.target.value)}
                            placeholder="Escribe una breve síntesis de por qué esta decisión es la más prudente y justa..."
                            className="w-full p-3 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step Navigation Bar */}
                    <div className="flex items-center justify-between pt-6 border-t border-stone-200 mt-8">
                      <button
                        onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                        disabled={currentStep === 1}
                        className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
                      >
                        Paso Anterior
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleSaveNotes}
                          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{savedSuccess ? '¡Guardado!' : 'Guardar en mi Bitácora'}</span>
                        </button>

                        {currentStep < 4 ? (
                          <button
                            onClick={() => {
                              handleSaveNotes();
                              setCurrentStep((prev) => Math.min(4, prev + 1));
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>Siguiente Paso</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              handleSaveNotes();
                              const elem = document.getElementById('evaluacion');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>Finalizar & Ir a Evaluación</span>
                            <CheckCircle className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

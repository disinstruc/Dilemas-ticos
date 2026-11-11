/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SCENARIOS } from '../data/ethicsData';
import { useProgress } from '../context/ProgressContext';
import {
  CheckCircle,
  HelpCircle,
  AlertTriangle,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  MessageSquare,
  ShieldAlert,
  Save,
  Check,
} from 'lucide-react';

export const ScenariosSection: React.FC = () => {
  const { progress, recordScenarioDecision } = useProgress();
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0].id);
  const [reflectionInput, setReflectionInput] = useState<string>('');
  const [savedFeedback, setSavedFeedback] = useState<boolean>(false);

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
  const chosenOptionId = progress.scenarioDecisions[activeScenario.id];
  const chosenOption = activeScenario.options.find((opt) => opt.id === chosenOptionId);

  // Sync reflection text if student previously typed something for this scenario
  React.useEffect(() => {
    setReflectionInput(progress.scenarioReflections[activeScenario.id] || '');
    setSavedFeedback(false);
  }, [activeScenario.id, progress.scenarioReflections]);

  const handleSelectOption = (optionId: string) => {
    recordScenarioDecision(activeScenario.id, optionId, reflectionInput);
  };

  const handleSaveReflection = () => {
    recordScenarioDecision(activeScenario.id, chosenOptionId || activeScenario.options[0].id, reflectionInput);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <section id="casos" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <span>Módulo 02</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Simulador de Escenarios de Decisión</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
              Dilemas Morales Reales en el Aula Universitaria
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Enfréntate a situaciones complejas e hipercontextualizadas donde las reglas estándar no ofrecen una solución sencilla. 
              Examina los testimonios, sopesa los valores en tensión, toma una decisión y analiza las consecuencias éticas a corto y largo plazo.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-md max-w-sm w-full">
              <img
                src="/src/assets/images/ethics_seminar_dialogue_1794422428207.jpg"
                alt="Docentes universitarios en seminario de deliberación ética pedagógica"
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600">
                La deliberación dialógica transforma el conflicto individual en criterio formativo colectivo.
              </div>
            </div>
          </div>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SCENARIOS.map((scen, idx) => {
            const isSelected = scen.id === activeScenarioId;
            const isAnswered = !!progress.scenarioDecisions[scen.id];

            return (
              <button
                key={scen.id}
                onClick={() => setActiveScenarioId(scen.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-400 shadow-md ring-1 ring-amber-300'
                    : 'bg-stone-50 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-amber-800">
                      {scen.code}
                    </span>
                    {isAnswered && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Resuelto</span>
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-serif font-bold text-stone-900 line-clamp-2">
                    {scen.title}
                  </h4>
                </div>
                <span className="text-[11px] text-stone-500 mt-3 pt-2 border-t border-stone-200/60 block">
                  {scen.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm mb-12">
          
          {/* Header of Active Scenario */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <span className="text-xs font-mono font-semibold text-amber-800">
                {activeScenario.code} · {activeScenario.category}
              </span>
              <span className="text-xs text-stone-500 italic">
                {activeScenario.deontologicalReference}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
              {activeScenario.title}
            </h3>

            {/* Context paragraph */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              {activeScenario.context}
            </p>

            {/* Student Voice Callout */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-semibold text-amber-900 block mb-1">
                    La Voz y Perspectiva del Estudiante
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed">
                    {activeScenario.studentVoice}
                  </p>
                </div>
              </div>
            </div>

            {/* Tensions in Conflict */}
            <div>
              <span className="text-xs uppercase font-semibold text-stone-500 block mb-2">
                Valores y Bienes Jurídicos en Tensión
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeScenario.tensions.map((tension, i) => (
                  <li
                    key={i}
                    className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 font-medium"
                  >
                    • {tension}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Decision Choices */}
          <div className="mb-10">
            <h4 className="text-lg font-serif font-bold text-stone-900 mb-4">
              ¿Qué curso de acción decides tomar como docente?
            </h4>
            <div className="space-y-4">
              {activeScenario.options.map((option) => {
                const isSelected = chosenOptionId === option.id;
                const isOptimal = option.id === activeScenario.recommendedOptionId;

                return (
                  <div
                    key={option.id}
                    className={`rounded-xl border transition-all ${
                      isSelected
                        ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-300'
                        : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50'
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-stone-900 text-base">
                            {option.label}
                          </span>
                        </div>
                        <button
                          onClick={() => handleSelectOption(option.id)}
                          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-stone-950 font-bold'
                              : 'bg-stone-900 text-white hover:bg-stone-800'
                          }`}
                        >
                          {isSelected ? 'Decisión Seleccionada' : 'Elegir esta Opción'}
                        </button>
                      </div>

                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-3">
                        {option.actionText}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                        <span>Enfoque: <strong className="text-stone-700">{option.ethicalApproach}</strong></span>
                        <span aria-hidden="true">·</span>
                        <span>Principio rector: <strong className="text-stone-700">{option.primaryPrinciple}</strong></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Branching Feedback Details (Shown once an option is selected) */}
          {chosenOption && (
            <div className="p-6 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span className="text-sm uppercase tracking-wider font-semibold text-amber-300">
                    Análisis Deontológico de tu Decisión
                  </span>
                </div>
                {chosenOption.id === activeScenario.recommendedOptionId ? (
                  <span className="text-xs px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded-md font-medium">
                    ✓ Vía Óptima Deliberada
                  </span>
                ) : (
                  <span className="text-xs px-2.5 py-1 bg-amber-950 text-amber-300 border border-amber-700 rounded-md font-medium">
                    ⚠ Vía Unilateral o Extrema
                  </span>
                )}
              </div>

              {/* Feedback text */}
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {chosenOption.pedagogicalFeedback}
              </p>

              {/* Impact comparison grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
                <div className="p-3.5 rounded-lg bg-stone-800 border border-stone-700">
                  <span className="text-amber-300 font-semibold uppercase tracking-wider block mb-1">
                    Consecuencia Inmediata (Corto Plazo)
                  </span>
                  <p className="text-stone-300 leading-relaxed">
                    {chosenOption.consequencesShortTerm}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-800 border border-stone-700">
                  <span className="text-amber-300 font-semibold uppercase tracking-wider block mb-1">
                    Impacto Sistémico y Pedagógico (Largo Plazo)
                  </span>
                  <p className="text-stone-300 leading-relaxed">
                    {chosenOption.consequencesLongTerm}
                  </p>
                </div>
              </div>

              {/* Ethical Metrics Bar */}
              <div className="p-4 rounded-lg bg-stone-950 border border-stone-800 mb-6">
                <span className="text-xs uppercase font-semibold text-stone-400 block mb-3">
                  Ponderación de Impacto en Ejes Deontológicos (1 a 5)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-stone-400 block mb-1">Rigor Formativo</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 bg-stone-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-400 h-2"
                          style={{ width: `${(chosenOption.ethicalScore.rigor / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{chosenOption.ethicalScore.rigor}/5</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 block mb-1">Empatía y Cuidado</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 bg-stone-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-400 h-2"
                          style={{ width: `${(chosenOption.ethicalScore.empathy / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{chosenOption.ethicalScore.empathy}/5</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 block mb-1">Justicia Sustantiva</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 bg-stone-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-400 h-2"
                          style={{ width: `${(chosenOption.ethicalScore.justice / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{chosenOption.ethicalScore.justice}/5</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 block mb-1">Confianza Dialógica</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 bg-stone-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-400 h-2"
                          style={{ width: `${(chosenOption.ethicalScore.trust / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{chosenOption.ethicalScore.trust}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Personal Reflection Input */}
              <div className="pt-4 border-t border-stone-800">
                <label className="block text-xs uppercase tracking-wider font-semibold text-amber-300 mb-2">
                  Tu Bitácora Reflexiva: ¿Qué aprendizajes pedagógicos extraes de este caso?
                </label>
                <textarea
                  rows={3}
                  value={reflectionInput}
                  onChange={(e) => setReflectionInput(e.target.value)}
                  placeholder="Escribe aquí tu análisis crítico personal (se guardará en tu portafolio y acta final)..."
                  className="w-full p-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] text-stone-400">
                    {savedFeedback ? '✓ Guardado exitosamente en tu bitácora local' : 'Tus notas se conservan automáticamente.'}
                  </span>
                  <button
                    onClick={handleSaveReflection}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-md transition-colors cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Guardar Reflexión</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

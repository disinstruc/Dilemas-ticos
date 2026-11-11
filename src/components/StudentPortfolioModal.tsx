/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { SCENARIOS } from '../data/ethicsData';
import {
  X,
  Award,
  CheckCircle,
  Clock,
  BookOpen,
  RotateCcw,
  FileText,
  UserCheck,
  ChevronRight,
} from 'lucide-react';

interface StudentPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPortfolioModal: React.FC<StudentPortfolioModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { progress, calculateOverallProgress, resetProgress, setActiveSection } = useProgress();
  const progressPercent = calculateOverallProgress();

  if (!isOpen) return null;

  const handleJumpTo = (sectionId: string) => {
    setActiveSection(sectionId);
    onClose();
    const elem = document.getElementById(sectionId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConfirmReset = () => {
    if (
      window.confirm(
        '¿Estás seguro de que deseas reiniciar todo tu progreso y notas? Esta acción borrará tus respuestas de la memoria local.'
      )
    ) {
      resetProgress();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-200">
        
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-stone-100">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Bitácora de Deliberación Ética
              </h3>
              <p className="text-xs text-stone-400">
                Progreso acumulado y reflexiones del estudiante
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Cerrar bitácora"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-stone-800">
          
          {/* Overall Progress Widget */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-stone-600">
                Avance Global del Módulo
              </span>
              <span className="font-mono text-base font-bold text-amber-900">
                {progressPercent}%
              </span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mb-2">
              <div
                className="bg-amber-500 h-2 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-stone-500">
              {progressPercent === 100
                ? '¡Has completado todas las actividades requeridas para la certificación!'
                : 'Continúa explorando los módulos y registrando tus deliberaciones para alcanzar el 100%.'}
            </p>
          </div>

          {/* Module 1: Fundamentos & Matching */}
          <div className="border border-stone-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif font-bold text-stone-900">
                Módulo 1: Fundamentos & Asociación
              </span>
              {progress.matchingGameCompleted ? (
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Completado</span>
                </span>
              ) : (
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Pendiente</span>
                </span>
              )}
            </div>
            <p className="text-xs text-stone-600 mb-2">
              Principios bioéticos revisados y actividad de correspondencia conceptual resuelta.
            </p>
            <button
              onClick={() => handleJumpTo('fundamentos')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Ir a Fundamentos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 2: Scenarios Solved */}
          <div className="border border-stone-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif font-bold text-stone-900">
                Módulo 2: Simulador de Casos
              </span>
              <span className="text-xs font-mono font-semibold text-stone-700">
                {Object.keys(progress.scenarioDecisions).length} / {SCENARIOS.length}
              </span>
            </div>
            <ul className="space-y-2 mb-3">
              {SCENARIOS.map((s) => {
                const decision = progress.scenarioDecisions[s.id];
                const opt = s.options.find((o) => o.id === decision);
                return (
                  <li key={s.id} className="text-xs p-2 rounded bg-stone-50 border border-stone-100">
                    <div className="flex items-center justify-between font-semibold text-stone-800">
                      <span>{s.code}: {s.title}</span>
                      {decision ? (
                        <span className="text-emerald-700">✓ Resuelto</span>
                      ) : (
                        <span className="text-stone-400">Sin responder</span>
                      )}
                    </div>
                    {opt && (
                      <p className="text-[11px] text-stone-600 mt-1 italic">
                        Decisión: {opt.label} ({opt.ethicalApproach})
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => handleJumpTo('casos')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Ir al Simulador de Casos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 3: Deliberation Notes */}
          <div className="border border-stone-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif font-bold text-stone-900">
                Módulo 3: Matriz de Deliberación
              </span>
              {progress.deliberationNotes.optimalCourse ? (
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Matriz Registrada</span>
                </span>
              ) : (
                <span className="text-xs text-stone-400">Sin registrar</span>
              )}
            </div>
            {progress.deliberationNotes.optimalCourse ? (
              <div className="p-2.5 rounded bg-stone-50 text-xs text-stone-700 space-y-1 mb-2">
                <p><strong>Hecho:</strong> {progress.deliberationNotes.dilemmaFact.slice(0, 80)}...</p>
                <p><strong>Curso Óptimo:</strong> {progress.deliberationNotes.optimalCourse.slice(0, 80)}...</p>
              </div>
            ) : (
              <p className="text-xs text-stone-500 mb-2">
                Aplica la matriz de Diego Gracia para registrar tu propio análisis ético.
              </p>
            )}
            <button
              onClick={() => handleJumpTo('deliberacion')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Ir a la Matriz Deliberativa</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 4: Evaluation */}
          <div className="border border-stone-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif font-bold text-stone-900">
                Módulo 4: Evaluación de Competencias
              </span>
              {progress.quizCompleted ? (
                <span className="text-xs font-semibold text-emerald-700">
                  {progress.quizScore} / 6 Aciertos
                </span>
              ) : (
                <span className="text-xs text-stone-400">No completado</span>
              )}
            </div>
            <button
              onClick={() => handleJumpTo('evaluacion')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Ir a la Evaluación Formativa</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-6 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <button
            onClick={handleConfirmReset}
            className="flex items-center gap-1.5 text-xs text-rose-700 hover:text-rose-900 font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar Progreso</span>
          </button>

          <button
            onClick={() => handleJumpTo('sintesis')}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Ver Certificado Oficial
          </button>
        </div>

      </div>
    </div>
  );
};

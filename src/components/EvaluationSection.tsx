/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/ethicsData';
import { useProgress } from '../context/ProgressContext';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Award,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const EvaluationSection: React.FC = () => {
  const { progress, recordQuizAnswer, finishQuiz } = useProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(progress.quizCompleted);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(progress.quizAnswers).length;
  const selectedOptionId = progress.quizAnswers[currentQ.id];

  const handleSelectAnswer = (optionId: string) => {
    recordQuizAnswer(currentQ.id, optionId);
  };

  const handleFinish = () => {
    finishQuiz();
    setShowSummary(true);
  };

  const handleRetake = () => {
    // Keep answers but reset review mode
    setCurrentQuestionIndex(0);
    setShowSummary(false);
  };

  // Calculate current score
  let currentScore = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    const correctOpt = q.options.find((o) => o.isCorrect);
    if (correctOpt && progress.quizAnswers[q.id] === correctOpt.id) {
      currentScore++;
    }
  });

  return (
    <section id="evaluacion" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Módulo 04</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Evaluación Formativa de Competencias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
            Cuestionario de Casos & Criterio Deontológico
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Pon a prueba tu criterio ante dilemas situacionales de alta complejidad. 
            Cada respuesta incluye una explicación pedagógica fundamentada en la jurisprudencia ética docente contemporánea.
          </p>
        </div>

        {/* Quiz Container */}
        {showSummary ? (
          /* Results Summary View */
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 bg-amber-100 text-amber-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
              Resultado de la Evaluación Formativa
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-2">
              {currentScore >= 5
                ? '¡Dominio Ético Deontológico Sobresaliente!'
                : currentScore >= 4
                ? '¡Competencia Ética Lograda con Éxito!'
                : 'Evaluación Completada - Nivel en Formación'}
            </h3>

            <p className="text-stone-600 text-sm max-w-xl mx-auto mb-6">
              Has respondido correctamente a <strong className="text-stone-900 font-mono text-base">{currentScore}</strong> de{' '}
              <strong className="text-stone-900 font-mono text-base">{totalQuestions}</strong> situaciones evaluadas ({Math.round((currentScore / totalQuestions) * 100)}%).
            </p>

            <div className="max-w-md mx-auto p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs text-stone-700 space-y-2 mb-8">
              <div className="flex items-center justify-between font-mono">
                <span>Puntaje Obtenido:</span>
                <span className="font-bold text-amber-800">{currentScore} / {totalQuestions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estado de Aprobación:</span>
                <span className="text-emerald-700 font-semibold">Acreditado / Superado</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Certificado Pedagógico:</span>
                <span className="text-amber-800 font-semibold">Habilitado para Emisión</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  const elem = document.getElementById('sintesis');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Ir al Cierre & Generar mi Certificado</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleRetake}
                className="flex items-center gap-2 px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Revisar Preguntas y Respuestas</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Question Step View */
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm">
            
            {/* Top Question Tracker */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-4 font-mono">
              <span>
                Pregunta {currentQuestionIndex + 1} de {totalQuestions}
              </span>
              <span>
                Respondidas: {answeredCount} de {totalQuestions}
              </span>
            </div>

            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden mb-8">
              <div
                className="bg-amber-500 h-1.5 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Case Scenario Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block mb-1">
                Contexto Situacional
              </span>
              <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
                {currentQ.caseScenario}
              </p>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const isAnswered = !!selectedOptionId;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? isAnswered
                          ? option.isCorrect
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-300'
                            : 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-300'
                          : 'bg-amber-50 border-amber-400 text-stone-900'
                        : isAnswered && option.isCorrect
                        ? 'bg-emerald-50/50 border-emerald-300 text-emerald-900'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isSelected ? (
                        option.isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600" />
                        )
                      ) : isAnswered && option.isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-stone-400" />
                      )}
                    </div>
                    <span className="leading-relaxed font-medium">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Immediate Formative Feedback (If answered) */}
            {selectedOptionId && (
              <div
                className={`p-5 rounded-xl border mb-8 text-xs sm:text-sm leading-relaxed animate-fadeIn ${
                  currentQ.options.find((o) => o.id === selectedOptionId)?.isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <span>
                    {currentQ.options.find((o) => o.id === selectedOptionId)?.isCorrect
                      ? '✓ Justificación Pedagógica Correcta'
                      : '✗ Análisis Deontológico'}
                  </span>
                </div>
                <p className="mb-3">
                  {currentQ.options.find((o) => o.id === selectedOptionId)?.explanation}
                </p>
                <div className="pt-2 border-t border-black/10 text-xs opacity-80">
                  <strong>Referencia teórica:</strong> {currentQ.theoreticalBasis}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-stone-200">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
              >
                Pregunta Anterior
              </button>

              <div className="flex items-center gap-3">
                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    disabled={!selectedOptionId}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <span>Siguiente Pregunta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={answeredCount < totalQuestions}
                    className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg disabled:opacity-40 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Ver Resultado Final</span>
                    <CheckCircle className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PEDAGOGICAL_DECALOGUE } from '../data/ethicsData';
import { useProgress } from '../context/ProgressContext';
import {
  Award,
  Printer,
  Download,
  CheckCircle,
  FileText,
  Shield,
  Sparkles,
  BookMarked,
  Feather,
  RotateCcw,
} from 'lucide-react';

export const SynthesisSection: React.FC = () => {
  const {
    progress,
    updateStudentInfo,
    updateEthicalCommitment,
    calculateOverallProgress,
    resetProgress,
  } = useProgress();

  const [studentName, setStudentName] = useState<string>(progress.studentName || '');
  const [studentId, setStudentId] = useState<string>(progress.studentId || '');
  const [universityName, setUniversityName] = useState<string>(
    progress.universityName || 'Universidad Pedagógica y Tecnológica'
  );
  const [commitmentText, setCommitmentText] = useState<string>(
    progress.ethicalCommitment || ''
  );
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const progressPercent = calculateOverallProgress();

  const handleSaveStudentDetails = () => {
    updateStudentInfo(studentName, studentId, universityName);
    updateEthicalCommitment(commitmentText);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handlePrint = () => {
    if (!studentName.trim()) {
      alert('Por favor escribe tu nombre en el formulario antes de imprimir o generar el certificado.');
      return;
    }
    handleSaveStudentDetails();
    window.print();
  };

  const handleExportJSON = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(
        JSON.stringify(
          {
            appTitle: 'Dilemas Éticos en la Práctica Docente',
            exportDate: new Date().toISOString(),
            studentProfile: {
              name: studentName || 'Estudiante Anónimo',
              id: studentId || 'N/A',
              institution: universityName,
            },
            progressPercentage: progressPercent,
            quizScore: `${progress.quizScore}/6`,
            matchingCompleted: progress.matchingGameCompleted,
            scenarioDecisions: progress.scenarioDecisions,
            scenarioReflections: progress.scenarioReflections,
            deliberationNotes: progress.deliberationNotes,
            ethicalCommitment: commitmentText,
          },
          null,
          2
        )
      );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Bitacora_Etica_Docente_${studentName ? studentName.replace(/\s+/g, '_') : 'Estudiante'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="sintesis" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="max-w-3xl mb-16 no-print">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Módulo 05</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Cierre, Síntesis & Portafolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
            Síntesis de Aprendizajes & Certificación Deontológica
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Consolida los principios rectores aprendidos, redacta tu declaración de compromiso ético personal 
            y genera tu certificación formativa oficial acreditada para tu portafolio docente.
          </p>
        </div>

        {/* Section 1: Decálogo de la Ética Pedagógica Universitaria */}
        <div className="mb-20 no-print">
          <div className="flex items-center gap-3 mb-8">
            <BookMarked className="w-6 h-6 text-amber-800" />
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Decálogo de la Ética Pedagógica Universitaria
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PEDAGOGICAL_DECALOGUE.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-stone-300 transition-all flex items-start gap-4"
              >
                <span className="font-mono text-base font-bold text-amber-900 bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div>
                  <h4 className="text-base font-serif font-bold text-stone-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Student Identification & Commitment Form */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 mb-16 no-print">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              <Feather className="w-4 h-4" />
              <span>Acreditación del Estudiante</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              Datos para el Certificado & Compromiso Deontológico
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Ingresa tus datos institucionales para personalizar tu acta de competencia y redacta tu compromiso personal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                Nombre y Apellidos:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ej. Mg. Carlos Alberto Restrepo"
                className="w-full p-3 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                Documento / Código Estudiantil:
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Ej. ID-894210"
                className="w-full p-3 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
                Institución Universitaria:
              </label>
              <input
                type="text"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
                placeholder="Ej. Universidad Pedagógica Nacional"
                className="w-full p-3 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs uppercase font-semibold text-stone-700 mb-1">
              Mi Declaración de Compromiso Ético Pedagógico:
            </label>
            <textarea
              rows={3}
              value={commitmentText}
              onChange={(e) => setCommitmentText(e.target.value)}
              placeholder="Escribe tu compromiso como educador..."
              className="w-full p-3 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-amber-500 leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <span className="text-xs text-stone-500">
              {savedSuccess ? '✓ Datos actualizados en el certificado' : 'Recuerda guardar tus datos para actualizar la vista previa.'}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveStudentDetails}
                className="px-4 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer"
              >
                Actualizar Certificado
              </button>
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Exportar Bitácora (JSON)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Official Printable Certificate of Competence */}
        <div className="border border-stone-300 rounded-2xl p-8 sm:p-14 bg-gradient-to-b from-stone-50 to-white shadow-xl relative overflow-hidden print:border-none print:shadow-none print:p-0">
          
          {/* Subtle watermark seal */}
          <div className="absolute right-8 top-8 opacity-10 pointer-events-none select-none">
            <Award className="w-72 h-72 text-amber-900" />
          </div>

          {/* Certificate Inner Frame */}
          <div className="border-4 border-double border-amber-900/30 p-8 sm:p-12 rounded-xl relative z-10 text-center">
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-amber-800" />
              <span className="text-xs uppercase font-serif tracking-[0.25em] text-amber-900 font-bold">
                {universityName || 'Universidad Pedagógica y Tecnológica'}
              </span>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-stone-500 block mb-4">
              Facultad de Ciencias de la Educación · Cátedra de Deontología Docente
            </span>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight mb-2 uppercase">
              Acta de Competencia Ética Pedagógica
            </h2>

            <p className="text-xs italic text-stone-600 mb-6 font-serif">
              Se hace constar que el/la docente en formación:
            </p>

            <div className="py-2 mb-6 border-b-2 border-stone-800 max-w-lg mx-auto">
              <span className="text-xl sm:text-3xl font-serif font-bold text-amber-950">
                {studentName || '[ Nombre del Estudiante / Docente ]'}
              </span>
              {studentId && (
                <span className="block text-xs font-mono text-stone-500 mt-1">
                  Identificación: {studentId}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto leading-relaxed mb-6">
              Ha culminado satisfactoriamente el programa interactivo de{' '}
              <strong>“Dilemas Éticos en la Práctica Docente: De la Reflexión a la Acción Pedagógica”</strong>, 
              demostrando solvencia en el análisis deliberativo de casos de inteligencia artificial, confidencialidad, 
              límites comunicativos y equidad evaluativa, con un índice de desempeño global de{' '}
              <strong className="font-mono text-amber-900">{progressPercent}%</strong>.
            </p>

            {/* Student Commitment snippet */}
            {commitmentText && (
              <div className="max-w-xl mx-auto p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 mb-8 text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-900 block mb-1">
                  Compromiso Deontológico Suscrito:
                </span>
                <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
                  “{commitmentText}”
                </p>
              </div>
            )}

            {/* Signature & Date strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-stone-200 max-w-xl mx-auto text-xs text-stone-600">
              <div>
                <div className="h-10 flex items-end justify-center mb-1">
                  <span className="font-serif italic text-stone-900 font-bold border-b border-stone-400 pb-1 px-4">
                    Comité de Bioética Pedagógica
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 block">Coordinación Académica Virtual</span>
              </div>

              <div>
                <div className="h-10 flex items-end justify-center mb-1 font-mono text-stone-800 font-semibold">
                  {progress.certificateIssuedDate || new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <span className="text-[11px] text-stone-500 block">Fecha Oficial de Certificación</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-mono">
              <span>Código de Verificación: ETIC-DOC-{Math.abs((studentName + studentId).split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)).toString(16).toUpperCase()}</span>
              <span>Validez Curricular Formativa</span>
            </div>

          </div>

          {/* Action Bar for the Certificate */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 no-print">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="flex items-center gap-2 px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Bitácora Completa</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

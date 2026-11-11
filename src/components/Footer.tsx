/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800 no-print text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          <div className="md:col-span-5 space-y-3">
            <span className="text-base font-serif font-bold text-white tracking-tight block">
              Dilemas Éticos en la Práctica Docente
            </span>
            <p className="text-stone-400 leading-relaxed text-xs">
              Recurso educativo abierto para la formación ético-deontológica de docentes universitarios en modalidad virtual. 
              Promueve la transición del juicio intuitivo a la deliberación reflexiva y la acción pedagógica humanizante.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-amber-200 uppercase tracking-wider block mb-2">
              Referencias Teóricas Clave
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>• Gracia, D. (2001). <em>Procedimientos de decisión en ética clínica</em>.</li>
              <li>• Cortina, A. (2000). <em>Ética de las profesiones</em>. Madrid: Verbo Divino.</li>
              <li>• Freire, P. (1997). <em>Pedagogía de la autonomía</em>. Siglo XXI.</li>
              <li>• Beauchamp, T. & Childress, J. (2013). <em>Principles of Biomedical Ethics</em>.</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-amber-200 uppercase tracking-wider block mb-2">
              Estructura Formativa
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>1. Principios Deontológicos</li>
              <li>2. Escenarios Ramificados</li>
              <li>3. Matriz Deliberativa</li>
              <li>4. Evaluación Formativa</li>
              <li>5. Certificación Pedagógica</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© 2026 Módulo Educativo de Deontología Docente Universitaria. Licencia Educativa Abierta.</p>
          <div className="flex items-center gap-4">
            <span>Modalidad Virtual</span>
            <span>·</span>
            <span>Diseño Instruccional Universitario</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

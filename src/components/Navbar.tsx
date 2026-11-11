/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, Award, CheckCircle, Menu, X, RotateCcw } from 'lucide-react';

interface NavbarProps {
  onOpenPortfolio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortfolio }) => {
  const { activeSection, setActiveSection, calculateOverallProgress, resetProgress } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressPercent = calculateOverallProgress();

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'fundamentos', label: 'Fundamentos' },
    { id: 'casos', label: 'Simulador de Casos' },
    { id: 'deliberacion', label: 'Matriz Deliberativa' },
    { id: 'evaluacion', label: 'Evaluación' },
    { id: 'sintesis', label: 'Cierre & Portafolio' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm backdrop-blur-md bg-stone-900/95 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-lg font-serif tracking-tight text-amber-100 hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Dilemas Éticos Docentes
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative text-left cursor-pointer ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPortfolio}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              title="Ver bitácora y avance del estudiante"
            >
              <Award className="w-3.5 h-3.5 text-stone-950" />
              <span>Bitácora ({progressPercent}%)</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? 'bg-stone-800 text-amber-300 font-semibold'
                    : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Subtle progress line */}
      <div className="w-full bg-stone-800 h-0.5">
        <div
          className="bg-amber-400 h-0.5 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};

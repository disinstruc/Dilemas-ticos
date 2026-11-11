/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentProgress } from '../types/ethics';
import { SCENARIOS, QUIZ_QUESTIONS } from '../data/ethicsData';

interface ProgressContextType {
  progress: StudentProgress;
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  markSectionVisited: (sectionId: string) => void;
  markSectionCompleted: (sectionId: string) => void;
  recordScenarioDecision: (scenarioId: string, optionId: string, reflection?: string) => void;
  recordMatchingGame: (score: number) => void;
  updateDeliberationNotes: (notes: Partial<StudentProgress['deliberationNotes']>) => void;
  recordQuizAnswer: (questionId: string, optionId: string) => void;
  finishQuiz: () => void;
  updateStudentInfo: (name: string, id: string, university: string) => void;
  updateEthicalCommitment: (text: string) => void;
  calculateOverallProgress: () => number;
  resetProgress: () => void;
}

const STORAGE_KEY = 'pedagogical_ethics_progress_v1';

const initialProgress: StudentProgress = {
  studentName: '',
  studentId: '',
  universityName: 'Universidad Pedagógica y Tecnológica',
  visitedSections: ['inicio'],
  completedSections: [],
  scenarioDecisions: {},
  scenarioReflections: {},
  matchingGameCompleted: false,
  matchingScore: 0,
  deliberationNotes: {
    dilemmaFact: '',
    conflictingValues: '',
    extremeCourses: '',
    optimalCourse: '',
    publicityTest: false,
    legalTest: false,
    universalityTest: false,
    justification: '',
  },
  quizAnswers: {},
  quizCompleted: false,
  quizScore: 0,
  ethicalCommitment:
    'Como futuro educador, me comprometo a ejercer la docencia guiado por la dignidad incondicional de mis estudiantes, la equidad sustantiva frente a las brechas contextuales y la búsqueda permanente de cursos de acción formativos y humanizantes.',
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // LocalStorage fallback
    }
    return initialProgress;
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Handle quota exceeded
    }
  }, [progress]);

  const markSectionVisited = (sectionId: string) => {
    setProgress((prev) => {
      if (prev.visitedSections.includes(sectionId)) return prev;
      return {
        ...prev,
        visitedSections: [...prev.visitedSections, sectionId],
      };
    });
  };

  const markSectionCompleted = (sectionId: string) => {
    setProgress((prev) => {
      if (prev.completedSections.includes(sectionId)) return prev;
      return {
        ...prev,
        completedSections: [...prev.completedSections, sectionId],
      };
    });
  };

  const recordScenarioDecision = (scenarioId: string, optionId: string, reflection?: string) => {
    setProgress((prev) => {
      const updatedDecisions = { ...prev.scenarioDecisions, [scenarioId]: optionId };
      const updatedReflections = reflection
        ? { ...prev.scenarioReflections, [scenarioId]: reflection }
        : prev.scenarioReflections;

      // Check if all scenarios completed
      const allScenariosDone = SCENARIOS.every((s) => updatedDecisions[s.id]);
      const completedSections = allScenariosDone && !prev.completedSections.includes('casos')
        ? [...prev.completedSections, 'casos']
        : prev.completedSections;

      return {
        ...prev,
        scenarioDecisions: updatedDecisions,
        scenarioReflections: updatedReflections,
        completedSections,
      };
    });
  };

  const recordMatchingGame = (score: number) => {
    setProgress((prev) => {
      const completedSections = !prev.completedSections.includes('fundamentos')
        ? [...prev.completedSections, 'fundamentos']
        : prev.completedSections;

      return {
        ...prev,
        matchingGameCompleted: true,
        matchingScore: score,
        completedSections,
      };
    });
  };

  const updateDeliberationNotes = (notes: Partial<StudentProgress['deliberationNotes']>) => {
    setProgress((prev) => {
      const updatedNotes = { ...prev.deliberationNotes, ...notes };
      const hasDeliberated =
        updatedNotes.dilemmaFact.trim().length > 15 &&
        updatedNotes.optimalCourse.trim().length > 15;
      const completedSections =
        hasDeliberated && !prev.completedSections.includes('deliberacion')
          ? [...prev.completedSections, 'deliberacion']
          : prev.completedSections;

      return {
        ...prev,
        deliberationNotes: updatedNotes,
        completedSections,
      };
    });
  };

  const recordQuizAnswer = (questionId: string, optionId: string) => {
    setProgress((prev) => {
      return {
        ...prev,
        quizAnswers: { ...prev.quizAnswers, [questionId]: optionId },
      };
    });
  };

  const finishQuiz = () => {
    setProgress((prev) => {
      let correctCount = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        const correctOpt = q.options.find((o) => o.isCorrect);
        if (correctOpt && prev.quizAnswers[q.id] === correctOpt.id) {
          correctCount++;
        }
      });

      const completedSections = !prev.completedSections.includes('evaluacion')
        ? [...prev.completedSections, 'evaluacion']
        : prev.completedSections;

      return {
        ...prev,
        quizCompleted: true,
        quizScore: correctCount,
        completedSections,
        certificateIssuedDate: prev.certificateIssuedDate || new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
    });
  };

  const updateStudentInfo = (name: string, id: string, university: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
      studentId: id,
      universityName: university,
      certificateIssuedDate: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }));
  };

  const updateEthicalCommitment = (text: string) => {
    setProgress((prev) => ({
      ...prev,
      ethicalCommitment: text,
    }));
  };

  const calculateOverallProgress = (): number => {
    // 5 main milestones:
    // 1. Visited Fundamentos and did matching game (20%)
    // 2. Completed 4 scenarios (30%)
    // 3. Completed Deliberation matrix (20%)
    // 4. Completed Quiz evaluation (20%)
    // 5. Written reflection or visited synthesis (10%)

    let total = 0;
    if (progress.matchingGameCompleted || progress.completedSections.includes('fundamentos')) total += 20;

    const answeredScenarios = Object.keys(progress.scenarioDecisions).length;
    total += Math.round((answeredScenarios / SCENARIOS.length) * 30);

    if (
      progress.deliberationNotes.dilemmaFact.trim().length > 10 &&
      progress.deliberationNotes.optimalCourse.trim().length > 10
    ) {
      total += 20;
    }

    if (progress.quizCompleted) {
      total += 20;
    } else {
      const answeredQuiz = Object.keys(progress.quizAnswers).length;
      total += Math.round((answeredQuiz / QUIZ_QUESTIONS.length) * 15);
    }

    if (progress.studentName.trim().length > 0 || progress.visitedSections.includes('sintesis')) {
      total += 10;
    }

    return Math.min(100, total);
  };

  const resetProgress = () => {
    setProgress({
      ...initialProgress,
      visitedSections: ['inicio'],
    });
    localStorage.removeItem(STORAGE_KEY);
    setActiveSection('inicio');
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        activeSection,
        setActiveSection: (sec: string) => {
          setActiveSection(sec);
          markSectionVisited(sec);
        },
        markSectionVisited,
        markSectionCompleted,
        recordScenarioDecision,
        recordMatchingGame,
        updateDeliberationNotes,
        recordQuizAnswer,
        finishQuiz,
        updateStudentInfo,
        updateEthicalCommitment,
        calculateOverallProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LearningObjective {
  id: string;
  category: 'Saber' | 'Saber Hacer' | 'Saber Ser' | 'Saber Convivir';
  title: string;
  description: string;
  bloomLevel: string;
}

export interface EthicalPrinciple {
  id: string;
  name: string;
  greekOrLatinRoot?: string;
  shortDescription: string;
  academicContext: string;
  classroomDilemma: string;
  tensionPair: string;
  tensionDescription: string;
  goodPractices: string[];
  keyQuote: {
    author: string;
    text: string;
  };
}

export interface MatchingPair {
  id: string;
  concept: string;
  principleId: string;
  realCase: string;
  feedback: string;
}

export interface ScenarioOption {
  id: string;
  label: string;
  actionText: string;
  ethicalApproach: string;
  primaryPrinciple: string;
  consequencesShortTerm: string;
  consequencesLongTerm: string;
  pedagogicalFeedback: string;
  ethicalScore: {
    rigor: number; // 1 to 5
    empathy: number;
    justice: number;
    trust: number;
  };
}

export interface Scenario {
  id: string;
  code: string;
  title: string;
  category: 'Integridad y Tecnología' | 'Confidencialidad y Cuidado' | 'Evaluación y Equidad' | 'Límites y Relaciones';
  context: string;
  studentVoice: string;
  tensions: string[];
  options: ScenarioOption[];
  recommendedOptionId: string;
  deontologicalReference: string;
}

export interface DeliberationStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  promptQuestion: string;
  guidingQuestions: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  caseScenario: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  theoreticalBasis: string;
}

export interface StudentProgress {
  studentName: string;
  studentId: string;
  universityName: string;
  visitedSections: string[];
  completedSections: string[];
  scenarioDecisions: Record<string, string>; // scenarioId -> optionId
  scenarioReflections: Record<string, string>; // scenarioId -> reflection text
  matchingGameCompleted: boolean;
  matchingScore: number;
  deliberationNotes: {
    dilemmaFact: string;
    conflictingValues: string;
    extremeCourses: string;
    optimalCourse: string;
    publicityTest: boolean;
    legalTest: boolean;
    universalityTest: boolean;
    justification: string;
  };
  quizAnswers: Record<string, string>; // questionId -> optionId
  quizCompleted: boolean;
  quizScore: number;
  ethicalCommitment: string;
  certificateIssuedDate?: string;
}

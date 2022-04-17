import { Evaluation, EvaluationDetailType } from '../types/score';

export const Tap: EvaluationDetailType = {
  criticalPerfect: 500,
  highPerfect: 500,
  lowPerfect: 500,
  perfect: 500,
  great: 500 * 0.8,
  good: 500 * 0.5,
  miss: 0,
} as const;

export const Hold: EvaluationDetailType = {
  criticalPerfect: 1000,
  highPerfect: 1000,
  lowPerfect: 1000,
  perfect: 1000,
  great: 1000 * 0.8,
  good: 1000 * 0.5,
  miss: 0,
} as const;

export const Slide: EvaluationDetailType = {
  criticalPerfect: 1500,
  highPerfect: 1500,
  lowPerfect: 1500,
  perfect: 1500,
  great: 1500 * 0.8,
  good: 1500 * 0.5,
  miss: 0,
} as const;

export const Touch: EvaluationDetailType = {
  criticalPerfect: 500,
  highPerfect: 500,
  lowPerfect: 500,
  perfect: 500,
  great: 500 * 0.8,
  good: 500 * 0.5,
  miss: 0,
} as const;

export const Break: EvaluationDetailType = {
  criticalPerfect: 2600,
  highPerfect: 2550,
  lowPerfect: 2500,
  perfect: 2500,
  great: 2000,
  good: 1000,
  miss: 0,
} as const;

export const BreakBonus: EvaluationDetailType = {
  criticalPerfect: 100,
  highPerfect: 50,
  lowPerfect: 0,
  perfect: 0,
  great: 0,
  good: 0,
  miss: 0,
} as const;

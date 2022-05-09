import { EvaluationDetailType } from '../types/score';

export const Tap: EvaluationDetailType = {
  criticalPerfect: 1,
  highPerfect: 1,
  lowPerfect: 1,
  perfect: 1,
  great: 1 * 0.8,
  good: 1 * 0.5,
  miss: 0,
} as const;

export const Hold: EvaluationDetailType = {
  criticalPerfect: 2,
  highPerfect: 2,
  lowPerfect: 2,
  perfect: 2,
  great: 2 * 0.8,
  good: 2 * 0.5,
  miss: 0,
} as const;

export const Slide: EvaluationDetailType = {
  criticalPerfect: 3,
  highPerfect: 3,
  lowPerfect: 3,
  perfect: 3,
  great: 3 * 0.8,
  good: 3 * 0.5,
  miss: 0,
} as const;

export const Touch: EvaluationDetailType = {
  criticalPerfect: 1,
  highPerfect: 1,
  lowPerfect: 1,
  perfect: 1,
  great: 1 * 0.8,
  good: 1 * 0.5,
  miss: 0,
} as const;

export const Break: EvaluationDetailType = {
  criticalPerfect: 5,
  highPerfect: 5,
  lowPerfect: 5,
  perfect: 5,
  great: 4,
  good: 2,
  miss: 0,
} as const;

export const BreakBonus: EvaluationDetailType = {
  criticalPerfect: 1,
  highPerfect: 0.75,
  lowPerfect: 0.5,
  perfect: 0.5,
  great: 0.4,
  good: 0.3,
  miss: 0,
} as const;

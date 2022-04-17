import { EvaluationDetailType } from '../types/score';

export const DXScore: EvaluationDetailType = {
  criticalPerfect: 3,
  highPerfect: 2,
  lowPerfect: 2,
  perfect: 2,
  great: 1,
  good: 0,
  miss: 0,
} as const;

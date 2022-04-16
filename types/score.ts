import { evaluationColor } from '../constants/color';

export type Evaluation =
  | 'criticalPerfect'
  | 'highPerfect'
  | 'lowPerfect'
  | 'perfect'
  | 'great'
  | 'good'
  | 'miss';

export type EvaluationDetailType = {
  [key in keyof typeof evaluationColor]?: number;
};

export type NotesDetailType = {
  total: number;
  detail: EvaluationDetailType;
};

export type NotesType = 'tap' | 'hold' | 'slide' | 'touch' | 'break';

export type ScoreDataType = {
  [key in NotesType]: NotesDetailType;
};

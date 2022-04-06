export const Tap = {
  criticalPerfect: 1,
  perfect: 1,
  great: 1 * 0.8,
  good: 1 * 0.5,
  miss: 0,
} as const;

export const Hold = {
  criticalPerfect: 2,
  perfect: 2,
  great: 2 * 0.8,
  good: 2 * 0.5,
  miss: 0,
} as const;

export const Slide = {
  criticalPerfect: 3,
  perfect: 3,
  great: 3 * 0.8,
  good: 3 * 0.5,
  miss: 0,
} as const;

export const Touch = {
  criticalPerfect: 1,
  perfect: 1,
  great: 1 * 0.8,
  good: 1 * 0.5,
  miss: 0,
} as const;

export const Break = {
  criticalPerfect: 5,
  HighPerfect: 5,
  rowPerfect: 5,
  great: 4,
  good: 2,
  miss: 0,
} as const;

export const BreakBonus = {
  criticalPerfect: 1,
  HighPerfect: 0.75,
  rowPerfect: 0.5,
  great: 0.4,
  good: 0.3,
  miss: 0,
} as const;

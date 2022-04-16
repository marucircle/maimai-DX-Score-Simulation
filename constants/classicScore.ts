export const Tap = {
  criticalPerfect: 500,
  perfect: 500,
  great: 500 * 0.8,
  good: 500 * 0.5,
  miss: 0,
} as const;

export const Hold = {
  criticalPerfect: 1000,
  perfect: 1000,
  great: 1000 * 0.8,
  good: 1000 * 0.5,
  miss: 0,
} as const;

export const Slide = {
  criticalPerfect: 1500,
  perfect: 1500,
  great: 1500 * 0.8,
  good: 1500 * 0.5,
  miss: 0,
} as const;

export const Touch = {
  criticalPerfect: 500,
  perfect: 500,
  great: 500 * 0.8,
  good: 500 * 0.5,
  miss: 0,
} as const;

export const Break = {
  criticalPerfect: 2600,
  highPerfect: 2550,
  rowPerfect: 2500,
  great: 2000,
  good: 1000,
  miss: 0,
} as const;

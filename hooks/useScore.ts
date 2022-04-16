import { useState } from 'react';

export const useScore = () => {
  const [classicScore, setClassicScore] = useState({ max: 0, total: 0 });
  const [newScore, setNewScore] = useState({
    max: 0,
    total: 0,
    maxBreakBonus: 0,
    totalBreakBonus: 0,
  });
  const [DXScore] = useState({ max: 0, total: 0 });
  const [scoreData, setScoreData] = useState({
    tap: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    hold: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    slide: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    touch: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    break: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
  });
};

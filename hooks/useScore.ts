import { useEffect, useState } from 'react';
import { classicScoreCalc } from '../functions/classicScoreCalc';
import { Evaluation, NotesType, ScoreDataType } from '../types/score';

export const useScore = () => {
  const [classicScore, setClassicScore] = useState({
    max: 0,
    total: 0,
    maxBreakBonus: 0,
    totalBreakBonus: 0,
  });
  const [newScore, setNewScore] = useState({
    max: 0,
    total: 0,
    maxBreakBonus: 0,
    totalBreakBonus: 0,
  });
  const [DXScore, setDXScore] = useState({ max: 0, total: 0 });
  const [scoreData, setScoreData] = useState<ScoreDataType>({
    tap: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
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
        highPerfect: 0,
        lowPerfect: 0,
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
        highPerfect: 0,
        lowPerfect: 0,
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
        highPerfect: 0,
        lowPerfect: 0,
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
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
  });

  const editScoreData = (value: string, notesType: NotesType, evaluation: Evaluation) => {
    const re = /^[0-9\b]+$/;
    if (re.test(value) && Number(value) <= 100000 && Number(value) >= 0)
      setScoreData((updateData) => {
        if (updateData[notesType].detail[evaluation] === -1) return updateData;

        updateData[notesType].total += -updateData[notesType].detail[evaluation] + Number(value);
        updateData[notesType].detail[evaluation] = Number(value);
        // console.log(updateData);
        return Object.assign({}, updateData); //あんまり良くないらしい　次回以降気を付けよう
      });
  };

  useEffect(() => {
    let calcData = Object.entries(scoreData).map(([key, value]) => {
      return {
        notesName: key,
        total: value.total,
        detail: Object.entries(value.detail).map(([key, value]) => {
          return { evaluation: key, sum: value };
        }),
      };
    });
    setClassicScore(Object.assign({}, classicScoreCalc(calcData)));
  }, [editScoreData]);

  return {
    classicScore,
    setClassicScore,
    newScore,
    setNewScore,
    DXScore,
    setDXScore,
    scoreData,
    setScoreData,
    editScoreData,
  };
};

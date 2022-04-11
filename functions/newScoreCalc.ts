import { Tap, Hold, Slide, Touch, Break, BreakBonus } from '../constants/newScore';

interface ScorePointDetail {
  evaluation: keyof typeof Tap & keyof typeof Break; //判定名
  sum: number; //その判定を獲得したノーツ数
}

interface ScorePoint {
  notesName: string; //ノーツ名
  total: number; //そのノーツの総数
  detail: ScorePointDetail[]; //判定の獲得数詳細
}

//全ノーツの最高点の合計
export const maxScoreCalc = (scorePoint: ScorePoint) => {
  switch (scorePoint.notesName) {
    case 'tap': {
      return Tap['criticalPerfect'] * scorePoint.total;
    }
    case 'hold': {
      return Hold['criticalPerfect'] * scorePoint.total;
    }
    case 'slide': {
      return Slide['criticalPerfect'] * scorePoint.total;
    }
    case 'touch': {
      return Touch['criticalPerfect'] * scorePoint.total;
    }
    case 'break': {
      return (
        Break['criticalPerfect'] * scorePoint.total +
        BreakBonus['criticalPerfect'] * scorePoint.total
      );
    }
    default: {
      alert('スコアに異常がある可能性があります。');
      return 0;
    }
  }
};

//該当ノーツの各判定ごとの合計点
export const detailScoreCalc = (scoreDetail: ScorePointDetail, notesName: string) => {
  switch (notesName) {
    case 'tap': {
      return Tap[scoreDetail.evaluation] * scoreDetail.sum;
    }
    case 'hold': {
      return Hold[scoreDetail.evaluation] * scoreDetail.sum;
    }
    case 'slide': {
      return Slide[scoreDetail.evaluation] * scoreDetail.sum;
    }
    case 'touch': {
      return Touch[scoreDetail.evaluation] * scoreDetail.sum;
    }
    case 'break': {
      return (
        Break[scoreDetail.evaluation] * scoreDetail.sum +
        BreakBonus[scoreDetail.evaluation] * scoreDetail.sum
      );
    }
    default: {
      console.error('スコアに異常がある可能性があります。');
      return 0;
    }
  }
};

//各ノーツの合計獲得点
export const totalScoreCalc = (scorePoint: ScorePoint) => {
  return scorePoint.detail.reduce(
    (previousScore: number, currentDetail: ScorePointDetail) =>
      previousScore + detailScoreCalc(currentDetail, scorePoint.notesName),
    0
  );
};

export const newScoreCalc = (scorePoints: ScorePoint[]) => {
  let maxScore = scorePoints.reduce(
    (previousPoint: number, currentPoint: ScorePoint) => previousPoint + maxScoreCalc(currentPoint),
    0
  );

  let totalScore = scorePoints.reduce(
    (previousPoint: number, currentPoint: ScorePoint) =>
      previousPoint + totalScoreCalc(currentPoint),
    0
  );
  if (maxScore === 0) {
    return 0;
  }
  return {
    max: maxScore,
    total: totalScore,
  };
};

import { DXScore } from '../constants/DXScore';

interface ScorePointDetail {
  evaluation: string; //判定名
  sum: number; //その判定を獲得したノーツ数
}

interface ScorePoint {
  notesName: string; //ノーツ名
  total: number; //そのノーツの総数
  detail: ScorePointDetail[]; //判定の獲得数詳細
}

//全ノーツの最高点の合計
export const maxScoreCalc = (scorePoint: ScorePoint) => {
  return DXScore['criticalPerfect'] * scorePoint.total;
};

//該当ノーツの各判定ごとの合計点
export const detailScoreCalc = (scoreDetail: ScorePointDetail) => {
  return DXScore[scoreDetail.evaluation] * scoreDetail.sum;
};

//各ノーツの合計獲得点
export const totalScoreCalc = (scorePoint: ScorePoint) => {
  return scorePoint.detail.reduce(
    (previousScore: number, currentDetail: ScorePointDetail) =>
      previousScore + detailScoreCalc(currentDetail),
    0
  );
};

export const DXScoreCalc = (scorePoints: ScorePoint[]) => {
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

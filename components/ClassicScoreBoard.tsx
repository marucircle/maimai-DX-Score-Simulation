import styled from 'styled-components';
import { ClassicScoreColor } from '../constants/color';
import { scoreValidation } from '../functions/scoreValidation';

export type ClassicScoreBoardProps = {
  scoreData: {
    total: number;
    max: number;
    totalBreakBonus: number;
    maxBreakBonus: number;
  };
};

const StyledClassicScoreBoard = styled.div`
  font-family: Noto Sans Noto Sans JP;
  max-width: 600px;
  border: 3px solid #3e9cf5;
  border-radius: 5px;
  border-collapse: separate;
  border-spacing: 0;
  padding: 10px 10px;
  background-color: #606fb348;
`;

const BoardTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #606fb3;
  letter-spacing: 2px;
  text-shadow: white 2px 2px 0, white -2px -2px 0, /*右下、左上*/ white -2px 2px 0, white 2px -2px 0,
    /*右上、左下*/ white 0px 2px 0, white 0 -2px 0, /*右、左*/ white -2px 0 0, white 2px 0 0;
`;

const Achievement = styled.div`
  text-align: center;
  font-size: 50px;
  color: ${ClassicScoreColor['text']};
  letter-spacing: 2px;
  text-shadow: ${ClassicScoreColor['shadow']} 2px 2px 0, ${ClassicScoreColor['shadow']} -2px -2px 0,
    /*右下、左上*/ ${ClassicScoreColor['shadow']} -2px 2px 0,
    ${ClassicScoreColor['shadow']} 2px -2px 0,
    /*右上、左下*/ ${ClassicScoreColor['shadow']} 0px 2px 0, ${ClassicScoreColor['shadow']} 0 -2px 0,
    /*右、左*/ ${ClassicScoreColor['shadow']} -2px 0 0, ${ClassicScoreColor['shadow']} 2px 0 0;
`;

const AchievementPercent = styled.span`
  margin-left: 3px;
  font-size: 60%;
`;

const ScoreDetail = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const MaxScore = styled.div``;

const TotalScore = styled.div``;

const BreakBonus = styled.div``;

export const ClassicScoreBoard = ({ scoreData }: ClassicScoreBoardProps) => {
  return (
    <StyledClassicScoreBoard>
      <BoardTitle>旧筐体 達成率</BoardTitle>
      <Achievement>
        {Math.round(scoreValidation(scoreData.total, scoreData.max) * 100 * Math.pow(10, 2)) /
          Math.pow(10, 2)}
        <AchievementPercent>%</AchievementPercent>
      </Achievement>
      <ScoreDetail>
        <MaxScore>Maxスコア: {scoreData.max + scoreData.maxBreakBonus}</MaxScore>
        <TotalScore>Totalスコア: {scoreData.total}</TotalScore>
        <BreakBonus>
          Breakボーナス: {scoreData.totalBreakBonus} / {scoreData.maxBreakBonus}
        </BreakBonus>
      </ScoreDetail>
    </StyledClassicScoreBoard>
  );
};

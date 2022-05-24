import styled from 'styled-components';
import { ClassicScoreColor } from '../constants/color';
import { scoreFloor, scoreValidation } from '../functions/scoreValidation';
export type DXScoreBoardProps = {
  scoreData: {
    total: number;
    max: number;
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
  width: 100%;
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

const DXAchievement = styled.div`
  text-align: center;
  font-size: 30px;
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

export const DXScoreBoard = ({ scoreData }: DXScoreBoardProps) => {
  return (
    <StyledClassicScoreBoard>
      <BoardTitle>でらっくスコア達成率</BoardTitle>
      <Achievement>
        {scoreFloor(scoreValidation(scoreData.total, scoreData.max) * 100, 2).toFixed(2)}
        <AchievementPercent>%</AchievementPercent>
      </Achievement>
      <DXAchievement>
        {scoreData.total} / {scoreData.max}
      </DXAchievement>
    </StyledClassicScoreBoard>
  );
};

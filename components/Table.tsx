import styled from 'styled-components';
import { evaluationColor } from '../constants/color';
import { NotesType, ScoreDataType } from '../types/score';

export type TableProps = {
  onChange: (value: number, notesType: String, evaluation: String) => void;
  scoreData: ScoreDataType;
};

const StyledTable = styled.table`
  width: 80%;
  border: 2px solid #3e9cf5;
  border-radius: 5px;
  border-collapse: separate;
  border-spacing: 0;
  line-height: 17px;
  background: #fff;
  font-family: Noto Sans;
`;

const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const TableRow = styled.tr<{ notesType?: String }>`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  background: ${({ notesType }) =>
    notesType === 'tap' || notesType === 'slide' || notesType === 'break' ? '#e1f1f9' : '#ffffff'};
`;

const TableData = styled.td<{ evaluation: keyof typeof evaluationColor; cellType: String }>`
  text-align: ${({ cellType }) => (cellType === 'evaluationName' ? 'center' : 'right')};
  padding: 8px 2px;
  border: 1px solid #c0e5f7;
  display: table-cell;
  text-transform: uppercase;
  vertical-align: inherit;
  color: ${({ evaluation }) => evaluationColor[evaluation]};
  font-weight: ${({ cellType }) => (cellType === 'evaluationName' ? 'bold' : '')};
`;

const TableNumInput = styled.input`
  padding: 0;
  border: none;
  width: 100%;
  border-radius: 0;
  outline: none;
  text-align: right;
  font-size: inherit;
  color: inherit;
  background: inherit;
`;

const TableInputLabel = styled.span`
  text-align: left;
`;

const TableBreakBonus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    position: relative;
    padding-bottom: 8px;
    &::before {
      content: '';
      position: absolute;
      left: -2%;
      top: 100%;
      width: 104%;
      height: 1px;
      background-color: #c0e5f7;
    }
  }
  &:last-child {
    padding-top: 8px;
  }
`;

const TableHeader = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
  padding: 8px 5px;
  border: 1px solid #c0e5f7;
  text-transform: uppercase;
  color: #4762b1;
`;

export const Table = ({ onChange, scoreData }: TableProps) => {
  const notesTypes: NotesType[] = ['tap', 'hold', 'slide', 'touch', 'break'];
  const evaluations: evaluation[] = ['criticalPerfect', 'perfect', 'great', 'good', 'miss'];

  return (
    <StyledTable>
      <TableBody>
        <TableRow key="evaluationName">
          <TableHeader></TableHeader>
          {evaluations.map((evaluation) => {
            return (
              <TableData
                key={'header-' + evaluation}
                evaluation={evaluation}
                cellType="evaluationName"
              >
                {evaluation === 'criticalPerfect' ? (
                  <div>
                    critical
                    <br />
                    perfect
                  </div>
                ) : (
                  evaluation
                )}
              </TableData>
            );
          })}
        </TableRow>
        {notesTypes.map((notesType) => {
          return notesType !== 'break' ? (
            <TableRow notesType={notesType} key={notesType}>
              <TableHeader>{notesType}</TableHeader>
              {evaluations.map((evaluation) => {
                return (
                  <TableData
                    key={notesType + '-' + evaluation}
                    evaluation={evaluation}
                    cellType="evaluationData"
                  >
                    <TableNumInput
                      value={scoreData[notesType].detail[evaluation]}
                      onChange={(e) => onChange(Number(e.target.value), notesType, evaluation)}
                    ></TableNumInput>
                  </TableData>
                );
              })}
            </TableRow>
          ) : (
            <TableRow notesType={notesType} key={notesType}>
              <TableHeader>{notesType}</TableHeader>
              {evaluations.map((evaluation) => {
                if (evaluation !== 'perfect') {
                  return (
                    <TableData
                      key={notesType + '-' + evaluation}
                      evaluation={evaluation}
                      cellType="evaluationData"
                    >
                      <TableNumInput
                        value={scoreData[notesType].detail[evaluation]}
                        onChange={(e) => onChange(Number(e.target.value), notesType, evaluation)}
                      />
                    </TableData>
                  );
                } else {
                  return (
                    <TableData
                      key={notesType + '-' + evaluation}
                      evaluation={'perfect'}
                      cellType="evaluationData"
                    >
                      <TableBreakBonus>
                        <TableInputLabel>High</TableInputLabel>
                        <TableNumInput
                          value={scoreData[notesType].detail['highPerfect']}
                          onChange={(e) =>
                            onChange(Number(e.target.value), notesType, 'highPerfect')
                          }
                        />
                      </TableBreakBonus>
                      <TableBreakBonus>
                        <TableInputLabel>Low</TableInputLabel>
                        <TableNumInput
                          value={scoreData[notesType].detail['lowPerfect']}
                          onChange={(e) =>
                            onChange(Number(e.target.value), notesType, 'lowPerfect')
                          }
                        />
                      </TableBreakBonus>
                    </TableData>
                  );
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

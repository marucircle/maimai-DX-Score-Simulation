import styled from 'styled-components';
import { evaluationColor } from '../constants/color';

export type TableProps = {
  purpose?: string;
};

type evaluation = keyof typeof evaluationColor;

const StyledTable = styled.table`
  width: 300px;
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
  padding: 4px 5px;
  border: 1px solid #c0e5f7;
  display: table-cell;
  text-transform: uppercase;
  vertical-align: inherit;
  color: ${({ evaluation }) => evaluationColor[evaluation]};
  font-weight: ${({ cellType }) => (cellType === 'evaluationName' ? 'bold' : '')};
`;

const TableBreakBonus = styled.div`
  padding: 4px 0px;
  text-align: right;
`;

const TableHeader = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
  padding: 4px 5px;
  border: 1px solid #c0e5f7;
  text-transform: uppercase;
  color: #4762b1;
`;

export const Table = ({ purpose }: TableProps) => {
  const notesTypes = ['tap', 'hold', 'slide', 'touch', 'break'];
  const evaluations: evaluation[] = ['criticalPerfect', 'perfect', 'great', 'good', 'miss'];

  return (
    <StyledTable>
      <TableBody>
        <TableRow>
          <TableHeader></TableHeader>
          {evaluations.map((evaluation) => {
            return (
              <TableData evaluation={evaluation} cellType="evaluationName">
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
            <TableRow notesType={notesType}>
              <TableHeader>{notesType}</TableHeader>
              {evaluations.map((evaluation) => {
                return (
                  <TableData evaluation={evaluation} cellType="evaluationData">
                    11
                  </TableData>
                );
              })}
            </TableRow>
          ) : (
            <TableRow notesType={notesType}>
              <TableHeader>{notesType}</TableHeader>
              {evaluations.map((evaluation) => {
                if (evaluation !== 'perfect') {
                  return (
                    <TableData evaluation={evaluation} cellType="evaluationData">
                      11
                    </TableData>
                  );
                } else {
                  return (
                    <TableData evaluation={'perfect'} cellType="evaluationData">
                      <TableBreakBonus>High:11</TableBreakBonus>
                      <TableBreakBonus>Low:11</TableBreakBonus>
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

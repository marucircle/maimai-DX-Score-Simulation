import React from 'react';
import styled from 'styled-components';
import { ClassicScoreBoard } from '../components/ClassicScoreBoard';
import { NewScoreBoard } from '../components/NewScoreBoard';
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { useScore } from '../hooks/useScore';

const TableWrapper = styled.div`
  width: 100%;
`;

const ScoreBoards = styled.div`
  display: flex;
  margin: 40px auto;
  @media screen and (min-width: 1400px) {
    width: 90%;
    flex-direction: row;
    column-gap: 30px;
    justify-content: center;
  }
  @media screen and (max-width: 1399px) {
    width: 80%;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }
`;

const Home = () => {
  const { scoreData, editScoreData, classicScore, newScore } = useScore();
  return (
    <div>
      <Header>maimaiでらっくす　すこあしみゅれーたー</Header>
      <ScoreBoards>
        <ClassicScoreBoard scoreData={classicScore} />
        <NewScoreBoard scoreData={newScore} />
      </ScoreBoards>
      <TableWrapper>
        <Table scoreData={scoreData} onChange={editScoreData} />
      </TableWrapper>
    </div>
  );
};

export default Home;

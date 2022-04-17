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
  flex-direction: column;
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

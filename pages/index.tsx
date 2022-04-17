import React from 'react';
import styled from 'styled-components';
import { ClassicScoreBoard } from '../components/ClassicScoreBoard';
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { useScore } from '../hooks/useScore';

const TableWrapper = styled.div`
  width: 100%;
`;

const ScoreBoards = styled.div``;

const Home = () => {
  const { scoreData, editScoreData, classicScore } = useScore();
  return (
    <div>
      <Header>maimaiでらっくす　すこあしみゅれーたー</Header>
      <ScoreBoards>
        <ClassicScoreBoard scoreData={classicScore} />
      </ScoreBoards>
      <TableWrapper>
        <Table scoreData={scoreData} onChange={editScoreData} />
      </TableWrapper>
    </div>
  );
};

export default Home;

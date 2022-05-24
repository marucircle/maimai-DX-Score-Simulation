import React, { useState } from 'react';
import styled from 'styled-components';
import { ClassicScoreBoard } from '../components/ClassicScoreBoard';
import { NewScoreBoard } from '../components/NewScoreBoard';
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { useScore } from '../hooks/useScore';
import { mediaQuery } from '../constants/mediaQuery';
import { DXScoreBoard } from '../components/DXScoreBoard';
import { TabNavigation } from '../components/TabNavigation';

const TableWrapper = styled.div`
  width: 100%;
`;

const ScoreBoards = styled.div`
  display: flex;
  margin: 40px auto;
  @media screen and (min-width: ${mediaQuery['pc'].min}) {
    width: 90%;
    flex-direction: row;
    column-gap: 30px;
    justify-content: center;
  }
  @media screen and (max-width: ${mediaQuery['tb'].max}) {
    width: 80%;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }
`;

const Home = () => {
  const { scoreData, editScoreData, classicScore, newScore, DXScore } = useScore();
  const [mode, setMode] = useState('Classic');
  return (
    <div>
      <Header>
        <span>maimaiでらっくす</span>
        <span>すこあしみゅれーたー</span>
      </Header>
      <TabNavigation onChange={setMode} mode={mode} />
      <ScoreBoards>
        {mode === 'Classic' ? <ClassicScoreBoard scoreData={classicScore} /> : ''}
        {mode === 'New' ? <NewScoreBoard scoreData={newScore} /> : ''}
        {mode === 'DX' ? <DXScoreBoard scoreData={DXScore} /> : ''}
      </ScoreBoards>
      <TableWrapper>
        <Table scoreData={scoreData} onChange={editScoreData} />
      </TableWrapper>
    </div>
  );
};

export default Home;

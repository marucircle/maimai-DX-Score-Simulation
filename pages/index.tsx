import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
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

const MainView = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Home = () => {
  const { scoreData, setScoreData, editScoreData, classicScore, newScore, DXScore } = useScore();
  const [mode, setMode] = useState('Classic');

  useEffect(() => {
    const jsonStr = Cookies.get('score_data');
    console.log(Cookies.get());
    if (jsonStr) {
      setScoreData(JSON.parse(jsonStr));
      Cookies.remove('score_data');
    }
  }, []);

  return (
    <div>
      <Header>
        <span>maimaiでらっくす</span>
        <span>すこあしみゅれーたー</span>
      </Header>
      <TabNavigation onChange={setMode} mode={mode} />
      <MainView>
        <ScoreBoards>
          {mode === 'Classic' ? <ClassicScoreBoard scoreData={classicScore} /> : ''}
          {mode === 'New' ? <NewScoreBoard scoreData={newScore} /> : ''}
          {mode === 'DX' ? <DXScoreBoard scoreData={DXScore} /> : ''}
        </ScoreBoards>
        <TableWrapper>
          <Table scoreData={scoreData} onChange={editScoreData} />
        </TableWrapper>
      </MainView>
    </div>
  );
};

export default Home;

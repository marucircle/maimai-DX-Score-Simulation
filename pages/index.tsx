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
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { scoreData, setScoreData, editScoreData, classicScore, newScore, DXScore } = useScore();
  const [mode, setMode] = useState('Classic');

  useEffect(() => {
    try {
      if (router.query.scoreQuery) {
        sessionStorage.setItem(
          'maimai-dx_score_data',
          decodeURIComponent(router.query.scoreQuery.toString())
        );
        router.replace(router.pathname);
      }
      const jsonStr = sessionStorage.getItem('maimai-dx_score_data');
      if (jsonStr) {
        setScoreData(JSON.parse(jsonStr));
        sessionStorage.removeItem('maimai-dx_score_data');
      }
    } catch (error) {
      alert('不正なパラメータが入力されました。');
    }
  }, [router.query]);

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

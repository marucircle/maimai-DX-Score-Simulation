import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { useScore } from '../hooks/useScore';

const TableWrapper = styled.div`
  width: 100%;
`;

const Home = () => {
  const { scoreData, editScoreData } = useScore();
  return (
    <div>
      <Header>maimaiでらっくす　すこあしみゅれーたー</Header>
      <TableWrapper>
        <Table scoreData={scoreData} onChange={editScoreData} />
      </TableWrapper>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Header } from '../components/Header';
import { TabNavigation } from '../components/TabNavigation';
import { useRouter } from 'next/router';
import { MenuBar } from '../components/MenuBar';
import { useModal } from '../hooks/useModal';

const MainView = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const MenuBarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100vw;
  max-width: 300px;
  right: ${({ isOpen }) => (isOpen ? '0' : '-310px')};
  top: 0;
  z-index: 10;
  transition: right 0.3s;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  z-index: 5;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const Tutorial = () => {
  const router = useRouter();
  const [mode, setMode] = useState('Classic');
  const { isOpen, setIsOpen } = useModal();
  const MenuLinks = [{ path: '/', text: 'メインページ' }];

  return (
    <div>
      <Header>
        <span>maimaiでらっくす</span>
        <span>すこあしみゅれーたー</span>
      </Header>
      <TabNavigation onChange={setMode} mode={mode} />
      <MainView>
        <MenuBarWrapper isOpen={isOpen}>
          <MenuBar links={MenuLinks} onClose={() => setIsOpen(false)} />
        </MenuBarWrapper>
        <Overlay onClick={() => setIsOpen(false)} isOpen={isOpen} />
      </MainView>
      <MenuButton onClick={() => setIsOpen(true)}>
        <AiOutlineMenu size="40" color="white" />
      </MenuButton>
    </div>
  );
};

export default Tutorial;

import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Header } from '../components/Header';
import { TabNavigation } from '../components/TabNavigation';
import { useRouter } from 'next/router';
import { MenuBar } from '../components/MenuBar';
import { useModal } from '../hooks/useModal';
import { Overlay } from '../components/utils/Overlay';
import { MenuBarWrapper } from '../components/MenuBar';

const MainView = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
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

import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Header } from '../components/Header';
import { MenuBar } from '../components/MenuBar';
import { useModal } from '../hooks/useModal';
import { Overlay } from '../components/utils/Overlay';
import { MenuBarWrapper } from '../components/MenuBar';
import { MenuLinks } from '../constants/link';

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

const Bookmarklet = () => {
  const { isOpen, setIsOpen } = useModal();
  return (
    <div>
      <Header>
        <span>maimaiでらっくす</span>
        <span>すこあしみゅれーたー</span>
      </Header>
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

export default Bookmarklet;

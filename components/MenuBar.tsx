import styled from 'styled-components';
import { BaseColor } from '../constants/color';
import { fontSize } from '../constants/font';

export type MenuBarLink = {
  text: string;
  path: string;
};

export type MenuBarProps = {
  links: MenuBarLink[];
  onClose: () => void;
};

const StyledMenuBar = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  max-width: 400px;
  background-color: ${BaseColor['white']};
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div``;

const LinkFlex = styled.div`
  margin: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuBarLink = styled.div`
  font-size: ${fontSize['large']};
  position: relative;
  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: #333333;
    position: absolute;
    top: 100%;
    left: 0;
  }
  cursor: pointer;
`;

const MenuBarLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const BottomLinks = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const MenuBar = ({ links, onClose }: MenuBarProps) => {
  return (
    <StyledMenuBar>
      <CloseButton onClick={onClose}>閉じる</CloseButton>
      <LinkFlex>
        <MenuBarLinks>
          {links.map((link) => {
            return <MenuBarLink key={link.text + link.path}>{link.text}</MenuBarLink>;
          })}
        </MenuBarLinks>
        <BottomLinks>
          <div>Github</div>
          <div>Twitter</div>
        </BottomLinks>
      </LinkFlex>
    </StyledMenuBar>
  );
};

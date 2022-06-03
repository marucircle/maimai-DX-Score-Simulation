import Link from 'next/link';
import styled from 'styled-components';
import { SiTwitter, SiGithub } from 'react-icons/si';
import { GrClose } from 'react-icons/gr';
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
  height: 95vh;
  max-width: 400px;
  background-color: ${BaseColor['white']};
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const IconLink = styled.div`
  cursor: pointer;
`;

const LinkFlex = styled.div`
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
  margin-top: 20px;
  row-gap: 25px;
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MenuBar = ({ links, onClose }: MenuBarProps) => {
  return (
    <StyledMenuBar>
      <CloseButton onClick={onClose}>
        <GrClose size="30" />
      </CloseButton>
      <LinkFlex>
        <MenuBarLinks>
          {links.map((link) => {
            return <MenuBarLink key={link.text + link.path}>{link.text}</MenuBarLink>;
          })}
        </MenuBarLinks>
        <BottomLinks>
          <IconLink>
            <Link href={process.env.githubURL ? process.env.githubURL : ''}>
              <SiGithub size="50" />
            </Link>
          </IconLink>
          <IconLink>
            <Link href={process.env.twitterURL ? process.env.twitterURL : ''}>
              <SiTwitter size="50" color="#1DA1F2" />
            </Link>
          </IconLink>
        </BottomLinks>
      </LinkFlex>
    </StyledMenuBar>
  );
};

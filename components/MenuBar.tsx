import Link from 'next/link';
import styled from 'styled-components';
import { SiTwitter, SiGithub } from 'react-icons/si';
import { GrClose } from 'react-icons/gr';
import { BaseColor } from '../constants/color';
import { fontSize } from '../constants/font';
import { useRouter } from 'next/router';
import { BookMarkletTemplate } from '../constants/clipboard';
import { useModal } from '../hooks/useModal';

export type MenuBarLink = {
  text: string;
  path: string;
};

export type MenuBarProps = {
  links: MenuBarLink[];
  onClose: () => void;
};

const StyledMenuBar = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  background-color: ${BaseColor['white']};
  display: flex;
  flex-direction: column;
  box-shadow: 6px 4px 10px 4px #000000;
`;

const CloseButton = styled.div`
  margin-left: 20px;
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
  text-align: center;
  padding: 10px 30px 10px 20px;
  font-size: ${fontSize['medium']};
  font-weight: bold;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #00000030;
  }

  transition: background-color 0.2s;
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

const pasteClipboard = () => {
  navigator.clipboard
    .writeText(BookMarkletTemplate)
    .then(() => {
      alert('ブック―マークレットをコピーしました！');
    })
    .catch(() => {
      alert('コピーに失敗しました...');
    });
};

export const MenuBar = ({ links, onClose }: MenuBarProps) => {
  const router = useRouter();
  const { setIsOpen } = useModal();
  return (
    <StyledMenuBar>
      <CloseButton onClick={onClose}>
        <GrClose size="30" />
      </CloseButton>
      <LinkFlex>
        <MenuBarLinks>
          {links.map((link) => {
            return (
              <MenuBarLink
                key={link.text + link.path}
                onClick={() => {
                  router.push(link.path);
                  setIsOpen(false);
                }}
              >
                {link.text}
              </MenuBarLink>
            );
          })}
          <MenuBarLink key="bookmarklet-copy" onClick={pasteClipboard}>
            ブックマークレット
            <br />
            をコピー
          </MenuBarLink>
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

type MenuBarWrapperProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const StyledMenuBarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100vw;
  max-width: 300px;
  right: ${({ isOpen }) => (isOpen ? '0' : '-310px')};
  top: 0;
  z-index: 10;
  transition: right 0.3s;
`;

export const MenuBarWrapper = ({ children, isOpen }: MenuBarWrapperProps): JSX.Element => {
  return <StyledMenuBarWrapper isOpen={isOpen}>{children}</StyledMenuBarWrapper>;
};

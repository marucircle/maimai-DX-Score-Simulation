import styled from 'styled-components';

type OverlayProps = {
  isOpen: boolean;
  onClick: () => void;
};

const StyledOverlay = styled.div<{ isOpen: boolean }>`
  z-index: 5;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
`;

export const Overlay = ({ isOpen, onClick }: OverlayProps): JSX.Element => {
  return <StyledOverlay onClick={onClick} isOpen={isOpen} />;
};

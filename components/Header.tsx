import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize } from '../constants/font';

export type HeaderProps = {
  children?: ReactNode;
};

const StyledHeader = styled.header`
  font-size: ${fontSize['large']};
  padding: 20px 0;
  font-family: Noto Sans Noto Sans JP;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 15px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }
`;

export const Header = ({ children }: HeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize } from '../constants/font';

export type HeaderProps = {
  children?: ReactNode;
};

const StyledHeader = styled.header`
  font-size: ${fontSize['large']};
  text-align: center;
  padding: 20px 0;
`;

export const Header = ({ children }: HeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

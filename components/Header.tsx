import styled from 'styled-components';

export type HeaderProps = {
  text?: string;
};

const StyledHeader = styled.header``;

export const Header = ({ text }: HeaderProps) => {
  return <StyledHeader>{text}</StyledHeader>;
};

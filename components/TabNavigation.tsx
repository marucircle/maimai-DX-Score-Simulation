import styled, { css } from 'styled-components';
import { mediaQuery } from '../constants/mediaQuery';

type TabNavigationProps = {
  onChange: (value: string) => void;
  mode: string;
};

const StyledTabNavigation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 5px;
  @media screen and (max-width: ${mediaQuery['sp'].max}) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    padding-bottom: 0;
  }
  background-color: #4850b9;
  color: #eeeeee;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.4);
`;

const Tab = styled.div<{ isActive: boolean }>`
  position: relative;
  font-family: Noto Sans Noto Sans JP;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  text-align: center;

  //   &:not(&:last-child) {
  //     &::after {
  //       content: '';
  //       position: absolute;
  //       right: 0;
  //       background-color: #555;
  //       width: 2px;
  //       height: 100%;
  //       top: 0px;
  //     }
  //   }

  @media screen and (min-width: ${mediaQuery['tb'].min}) {
    ${({ isActive }) =>
      isActive &&
      css`
        &::before {
          content: '';
          position: absolute;
          background-color: #0e185f;
          width: 100%;
          height: 6px;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}
  }

  @media screen and (max-width: ${mediaQuery['sp'].max}) {
    padding: 10px 0;
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: #0e185f;
        color: #ffffff;
        &::before {
          content: '';
          position: absolute;
          background-color: #ffffff;
          height: 100%;
          width: 8px;
          bottom: 0;
          left: 0px;
        }
      `}
  }
`;

export const TabNavigation = ({ onChange, mode }: TabNavigationProps) => {
  return (
    <StyledTabNavigation>
      <Tab onClick={() => onChange('Classic')} isActive={mode === 'Classic' ? true : false}>
        旧筐体
      </Tab>
      <Tab onClick={() => onChange('New')} isActive={mode === 'New' ? true : false}>
        新筐体
      </Tab>
      <Tab onClick={() => onChange('DX')} isActive={mode === 'DX' ? true : false}>
        でらっくスコア
      </Tab>
    </StyledTabNavigation>
  );
};

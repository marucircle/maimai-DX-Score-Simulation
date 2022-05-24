import styled, { css } from 'styled-components';

type TabNavigationProps = {
  onChange: (value: string) => void;
  mode: string;
};

const StyledTabNavigation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #4850b9;
  color: #eeeeee;
  padding-bottom: 5px;
  box-shadow: 0px 2.5px 3px 0 rgba(0, 0, 0, 0.4);
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

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: #80ffdb;
        width: 100%;
        height: 6px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
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

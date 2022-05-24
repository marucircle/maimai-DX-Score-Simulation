import styled from 'styled-components';

type TabNavigationProps = {
  onChange: (value: string) => void;
  mode: string;
};

const StyledTabNavigation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 6px solid #333333;
  padding-bottom: 10px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  position: relative;
  font-family: Noto Sans Noto Sans JP;
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

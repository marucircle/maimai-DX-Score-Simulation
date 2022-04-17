import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ClassicScoreBoard as ClassicScoreBoardComponent,
  ClassicScoreBoardProps,
} from '../components/ClassicScoreBoard';

export default {
  title: 'Components',
  component: ClassicScoreBoardComponent,
  argTypes: {},
} as Meta;

const Template: Story<ClassicScoreBoardProps> = (args) => <ClassicScoreBoardComponent {...args} />;

export const ClassicScoreBoard = Template.bind({});
ClassicScoreBoard.args = {
  scoreData: {
    max: 490000,
    total: 495400,
    maxBreakBonus: 10000,
    totalBreakBonus: 9400,
  },
};

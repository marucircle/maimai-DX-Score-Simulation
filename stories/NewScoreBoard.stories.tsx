import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  NewScoreBoard as NewScoreBoardComponent,
  NewScoreBoardProps,
} from '../components/NewScoreBoard';

export default {
  title: 'Components',
  component: NewScoreBoardComponent,
  argTypes: {},
} as Meta;

const Template: Story<NewScoreBoardProps> = (args) => <NewScoreBoardComponent {...args} />;

export const NewScoreBoard = Template.bind({});
NewScoreBoard.args = {};

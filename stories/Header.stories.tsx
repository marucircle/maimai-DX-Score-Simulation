import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header as HeaderComponent, HeaderProps } from '../components/Header';

export default {
  title: 'Components',
  component: HeaderComponent,
  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});
Header.args = {
  children: 'Header Text',
};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuBar as MenuBarComponent, MenuBarProps } from '../components/MenuBar';

export default {
  title: 'Components',
  component: MenuBarComponent,
  argTypes: {},
} as Meta;

const Template: Story<MenuBarProps> = (args) => <MenuBarComponent {...args} />;

export const MenuBar = Template.bind({});
MenuBar.args = {
  links: [
    { text: 'test1', path: '/test1' },
    { text: 'test2', path: '/test2' },
    { text: 'test3', path: '/test3' },
  ],
};

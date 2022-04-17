import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table as TableComponent, TableProps } from '../components/Table';

export default {
  title: 'Components',
  component: TableComponent,
  argTypes: {},
} as Meta;

const Template: Story<TableProps> = (args) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
  scoreData: {
    tap: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: -1,
        lowPerfect: -1,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    hold: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: -1,
        lowPerfect: -1,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    slide: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: -1,
        lowPerfect: -1,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    touch: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: -1,
        lowPerfect: -1,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    break: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: -1,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
  },
};

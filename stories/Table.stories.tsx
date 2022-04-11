import React from "react";
import { Story, Meta } from "@storybook/react";
import { Table as TableComponent,TableProps } from "../components/Table";

export default {
  title: "Components",
  component: TableComponent,
  argTypes: {},
} as Meta;

const Template: Story<TableProps> = (args) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
  purpose:"purpose",
};

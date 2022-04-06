---
to: stories/<%= name %>.stories.tsx
unless_exists: true
---
import React from "react";
import { Story, Meta } from "@storybook/react";
import { <%= name %> as <%= name %>Component,<%= name %>Props } from "../components/<%= name %>";

export default {
  title: "Components",
  component: <%= name %>Component,
  argTypes: {},
} as Meta;

const Template: Story<<%= name %>Props> = (args) => <<%= name %>Component {...args} />;

export const <%= name %> = Template.bind({});
<%= name %>.args = {
  purpose:"purpose",
};

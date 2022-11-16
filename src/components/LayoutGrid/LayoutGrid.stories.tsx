import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LayoutGrid } from "./LayoutGrid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/LayoutGrid",
  component: LayoutGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LayoutGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LayoutGrid> = (args) => (
  <LayoutGrid {...args} />
);

export const BasicLayout = Template.bind({});

BasicLayout.args = {
  icon: "https://www.clker.com/cliparts/R/3/j/b/j/k/qb-svg-40x40.svg.med.png",
  title: "Maanil",
  description: "Stories",
  actionButton: "Invite",
};

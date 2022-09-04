import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import NavBar from "../NavBar";

export default { component: NavBar, title: "NavBar" } as ComponentMeta<
  typeof NavBar
>;

export const Index: ComponentStoryObj<typeof NavBar> = {
  args: {},
};

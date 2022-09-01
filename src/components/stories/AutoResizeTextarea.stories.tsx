import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import AutoResizeTextarea from "../AutoResizeTextarea";

export default { component: AutoResizeTextarea } as ComponentMeta<
  typeof AutoResizeTextarea
>;

export const Index: ComponentStoryObj<typeof AutoResizeTextarea> = {
  args: {},
};

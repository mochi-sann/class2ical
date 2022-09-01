import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import FormTextarea from "./FormTextarea";

export default { component: FormTextarea } as ComponentMeta<
  typeof FormTextarea
>;

export const Index: ComponentStoryObj<typeof FormTextarea> = {
  args: {},
};

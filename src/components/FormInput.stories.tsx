import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import FormInputText from "./FormInputText";

export default { component: FormInputText } as ComponentMeta<
  typeof FormInputText
>;

export const Index: ComponentStoryObj<typeof FormInputText> = {
  args: {
    id: "name",
    label: "name",
    name: "name",
    placeholder: "name",
    required: true,
  },
};

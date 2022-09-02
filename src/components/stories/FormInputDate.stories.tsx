import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import FormInputDate from "../FormInputDate";

export default {
  component: FormInputDate,
  title: "FormInputDate",
} as ComponentMeta<typeof FormInputDate>;

export const Index: ComponentStoryObj<typeof FormInputDate> = {
  args: {},
};

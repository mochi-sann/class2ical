import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import TableLessonBox from "../TableLessonBox";

export default {
  component: TableLessonBox,
  title: "TableLessonBox",
  argTypes: {
    remove: { action: "remove" },
    open: { action: "open" },
  },
} as ComponentMeta<typeof TableLessonBox>;

export const Index: ComponentStoryObj<typeof TableLessonBox> = {
  args: {
    LessonTitle: "Core Eng II Com-C (G2)",
  },
};

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import TableLessonBox from "../TableLessonBox";

export default {
  component: TableLessonBox,
  title: "TableLessonBox",
  argTypes: {
    onRemove: { action: "remove" },
    onOpen: { action: "open" },
  },
} as ComponentMeta<typeof TableLessonBox>;

export const Index: ComponentStoryObj<typeof TableLessonBox> = {
  args: {
    LessonTitle: "Core Eng II Com-C (G2)",
  },
};

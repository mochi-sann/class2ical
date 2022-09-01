import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import FormTextarea from "../FormTextarea";

export default {
  component: FormTextarea,
  title: "FormTextarea",
  argTypes: {
    id: { type: "string", defaultValue: "textarea" },
    miniRows: { type: "number", defaultValue: "textarea" },
    name: { type: "string", defaultValue: "textarea" },
    required: { type: "boolean", defaultValue: false },
    placeholder: { type: "string", defaultValue: "textarea" },
    label: { type: "string", defaultValue: "textarea" },
  },
} as ComponentMeta<typeof FormTextarea>;

// export const Index: ComponentStoryObj<typeof FormTextarea> = {
//   args: {},
// };
const Template: ComponentStory<typeof FormTextarea> = (args) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextarea {...args} />
      </form>
    </FormProvider>
  );
};
export const Index = Template.bind({});

Index.args = {
  label: "textarea",
  placeholder: "textarea",
  required: false,
  name: "textarea",
  miniRows: 3,
  id: "textarea",
};

import React from "react";
import { useFormContext, ValidationRule } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { AutoResizeTextarea } from "./AutoResizeTextarea";
export type FormTextareaProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  miniRows?: number;
  required?: string | ValidationRule<boolean> | undefined;
};

const FormTextarea: React.FC<FormTextareaProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id} isRequired={props.required ? true : false}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <AutoResizeTextarea
        {...register(props.name, { required: props.required })}
        placeholder={props.placeholder}
        minRows={props.miniRows}
      />
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }: { message: string }) => {
          return <FormErrorMessage>{message}</FormErrorMessage>;
        }}
      />
    </FormControl>
  );
};

export default FormTextarea;

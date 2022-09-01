import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext, ValidationRule } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export type InputFormProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
  defaultValue?: string;
};

const FormInputText: React.FC<InputFormProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id} isRequired={props.required ? true : false}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input
        defaultValue={props.defaultValue}
        {...register(props.name, { required: props.required })}
        type="text"
        placeholder={props.placeholder}
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

export default FormInputText;

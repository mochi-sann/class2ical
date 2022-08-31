import {
  Box,
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
};

const FormInputText: React.FC<InputFormProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input
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

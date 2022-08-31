import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {
  FieldError,
  useFormContext,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

export type InputFormProps = {
  id: string;
  name: string;
  label: string;
  isInvalid: FieldError;
  placeholder: string;
};

const InputForm: React.FC<InputFormProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input
        {...register(props.name)}
        type="text"
        placeholder={props.placeholder}
      />
      <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputForm;

import React from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, ValidationRule } from "react-hook-form";

export type FormInputDateProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
  defaultValue?: string;
};

const FormInputDate: React.FC<FormInputDateProps> = (props) => {
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
        type="date"
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

export default FormInputDate;

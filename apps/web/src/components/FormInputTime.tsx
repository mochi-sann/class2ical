import React from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, ValidationRule } from "react-hook-form";

export type FormInputTimeProps = {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
  defaultValue?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
};

const FormInputTime: React.FC<FormInputTimeProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl id={props.id} isRequired={props.required ? true : false}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input
        onKeyDown={props.onKeyDown}
        defaultValue={props.defaultValue}
        {...register(props.name, { required: props.required })}
        type="time"
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

export { FormInputTime };

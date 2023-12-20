import React from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, ValidationRule } from "react-hook-form";

export type FormNumberInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
  defaultValue?: string;
  max?: number;
  min?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
};

const FormNumberInput: React.FC<FormNumberInputProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id} isRequired={props.required ? true : false}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <NumberInput min={props.min} max={props.max}>
        <NumberInputField
          defaultValue={props.defaultValue}
          {...register(props.name, { required: props.required })}
          placeholder={props.placeholder}
          onKeyDown={props.onKeyDown}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
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

export default FormNumberInput;

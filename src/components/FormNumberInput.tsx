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
import { useFormContext, ValidationRule } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export type FormNumberInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: string | ValidationRule<boolean> | undefined;
  defaultValue?: string;
};

const FormNumberInput: React.FC<FormNumberInputProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl id={props.id} isRequired={props.required ? true : false}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <NumberInput min={1} max={52}>
        <NumberInputField
          defaultValue={props.defaultValue}
          {...register(props.name, { required: props.required })}
          placeholder={props.placeholder}
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

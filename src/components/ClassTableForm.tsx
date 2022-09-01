import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInputText from "./FormInputText";
import FormTextarea from "./FormTextarea";

type FormValue = {
  summary: string;
  description: string;
  classPeriod: number;
  weekOfDay:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
};
const ClassTableForm: React.FC = () => {
  const methods = useForm<FormValue>();

  const onSubmit = (data: FormValue) =>
    console.log("submit!!", JSON.stringify(data, null, 2));
  console.log("methods.formState.errors", methods.formState.errors);
  // TODO : なんかいい感じにする
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack spacing={4} py="4" align="stretch">
          <FormInputText
            id="summary"
            name="summary"
            placeholder="授業名"
            label="授業名"
            required="必須項目です"
          />
          <FormTextarea
            id="description"
            name="description"
            label="授業の説明"
            placeholder="授業の説明"
            miniRows={4}
          />
          <FormControl>
            <FormLabel htmlFor="classPeriod">授業の説明</FormLabel>
            <Select {...methods.register("classPeriod", { required: true })}>
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <option key={value} value={value}>
                  {value}限目
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {methods.formState.errors.classPeriod &&
                methods.formState.errors.classPeriod.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="weekOfDay">授業の曜日</FormLabel>
            <Select {...methods.register("weekOfDay")}>
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {methods.formState.errors.weekOfDay &&
                methods.formState.errors.weekOfDay.message}
            </FormErrorMessage>
          </FormControl>

          <Button type={"submit"} w="full" colorScheme={"blue"}>
            add
          </Button>
        </VStack>
      </form>
    </FormProvider>
  );
};
export default ClassTableForm;

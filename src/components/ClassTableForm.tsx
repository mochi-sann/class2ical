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
  // TODO : なんかいい感じにする
  return (
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
        label="メモ"
        placeholder="メモ"
        miniRows={4}
      />
      <FormInputText id="url" name="url" placeholder="URL" label="URL" />

      <Button type={"submit"} w="full" colorScheme={"blue"}>
        add
      </Button>
    </VStack>
  );
};
export default ClassTableForm;

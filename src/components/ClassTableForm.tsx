import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: FormValue) =>
    console.log("submit!!", JSON.stringify(data, null, 2));
  console.log("errors", errors);
  // TODO : なんかいい感じにする
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel htmlFor="summary">授業名</FormLabel>

          <Input
            type="text"
            placeholder="summary"
            {...register("summary", { required: true })}
          />
          <FormErrorMessage>
            {errors.summary && errors.summary.message}
            {errors.summary && "エラー"}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">授業の説明</FormLabel>
          <Textarea {...register("description", {})} />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="classPeriod">授業の説明</FormLabel>
          <Select {...register("classPeriod", { required: true })}>
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <option key={value} value={value}>
                {value}限目
              </option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.classPeriod && errors.classPeriod.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="weekOfDay">授業の曜日</FormLabel>
          <Select {...register("weekOfDay")}>
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
            {errors.weekOfDay && errors.weekOfDay.message}
          </FormErrorMessage>
        </FormControl>

        <Button type={"submit"} w="full" colorScheme={"blue"}>
          add
        </Button>
      </VStack>
    </form>
  );
};
export default ClassTableForm;

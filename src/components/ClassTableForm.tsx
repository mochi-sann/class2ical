import { Button, Input, Select, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const ClassTableForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch">
        <Input
          type="text"
          placeholder="sumally"
          {...register("sumally", { required: true })}
        />
        <Textarea {...register("description", {})} />
        <Select {...register("classPeriod", { required: true })}>
          {[1, 2, 3, 4, 5, 6].map((value) => (
            <option key={value} value={value}>
              {value}限目
            </option>
          ))}
        </Select>
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

        <Button type={"submit"} w="full">
          add
        </Button>
      </VStack>
    </form>
  );
};
export default ClassTableForm;

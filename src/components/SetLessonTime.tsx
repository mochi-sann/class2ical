import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { FormInputTime } from "./FormInputTime";

export type SetLessonTimeProps = {
  lessonNumber: number;
};

const SetLessonTime: React.FC<SetLessonTimeProps> = (props) => {
  return (
    <Flex flexDir={"column"}>
      <Text>{props.lessonNumber}限</Text>
      <FormInputTime
        id={`LessonTime.${props.lessonNumber - 1}.start`}
        name={`LessonTime.${props.lessonNumber - 1}.start`}
        placeholder="開始時間"
      />
      <Text>〜</Text>
      <FormInputTime
        id={`LessonTime.${props.lessonNumber - 1}.end`}
        name={`LessonTime.${props.lessonNumber - 1}.end`}
        placeholder="終了時間"
      />
    </Flex>
  );
};

export default SetLessonTime;

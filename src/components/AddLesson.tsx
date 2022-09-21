import React, { useState } from "react";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import ConvertDayOfWeekToJp from "src/lib/ConvertDayOfWeekToJp";
import { ShortDayOfWeekList } from "src/lib/types";

import FormInputText from "./FormInputText";
import FormTextarea from "./FormTextarea";
import TableLessonBox from "./TableLessonBox";

export type AddLessonProps = {
  periodNumber: number;
  dayOfweek: ShortDayOfWeekList;
};

const AddLesson = React.memo<AddLessonProps>(function MyAddLessonComponent(
  props
) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getValues, setValue } = useFormContext(); // retrieve all hook methods
  const FormNumber = `${props.dayOfweek}.${props.periodNumber}`;
  const [LessonClassSummary, setLessonClassSummary] = useState<{
    summary: string;
    description: string;
    url: string;
  }>({ ...getValues()[props.dayOfweek][props.periodNumber] });
  const ResetValues = () => {
    setValue(`${FormNumber}`, { summary: "", description: "", url: "" });
    setLessonClassSummary({ summary: "", description: "", url: "" });
  };

  const onSubmit = () => {
    setLessonClassSummary(getValues()[props.dayOfweek][props.periodNumber]);
    onClose();
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // cmd + Enter もしくは ctrl + Enter
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      console.log("key down cmd + Enter");
      onSubmit();
    }
  };

  return (
    <>
      {LessonClassSummary.summary.length > 0 ? (
        <TableLessonBox
          LessonTitle={LessonClassSummary.summary}
          onOpen={onOpen}
          onRemove={() => {
            ResetValues();
          }}
        />
      ) : (
        <IconButton
          colorScheme="blue"
          onClick={onOpen}
          aria-label="授業を追加する"
          icon={<AddIcon />}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {ConvertDayOfWeekToJp(props.dayOfweek)}曜日
            {props.periodNumber + 1}限の授業を追加
          </ModalHeader>
          <ModalBody>
            <VStack spacing={4} py="4" align="stretch">
              <FormInputText
                id={`${FormNumber}.summary`}
                name={`${FormNumber}.summary`}
                placeholder="授業名"
                label="授業名"
                required="必須項目です"
                defaultValue=""
                onKeyDown={handleKeyDown}
              />
              <FormTextarea
                id={`${FormNumber}.description`}
                name={`${FormNumber}.description`}
                label="メモ"
                placeholder="メモ"
                defaultValue=""
                miniRows={4}
                onKeyDown={handleKeyDown}
              />
              <FormInputText
                id={`${FormNumber}.url`}
                name={`${FormNumber}.url`}
                defaultValue=""
                placeholder="URL"
                label="URL"
                onKeyDown={handleKeyDown}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack w="full">
              <Button
                w="full"
                onClick={() => {
                  onClose();
                  ResetValues();
                }}
                colorScheme="red"
                variant={"ghost"}
              >
                削除する
              </Button>
              <Button
                type={"submit"}
                onClick={() => {
                  onSubmit();
                  // 表示するところに入れる
                }}
                w="full"
                colorScheme={"blue"}
              >
                追加
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default AddLesson;

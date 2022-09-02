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
    setValue(`${FormNumber}`, { summry: "", description: "", url: "" });
    setLessonClassSummary({ summary: "", description: "", url: "" });
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
          <ModalHeader>授業を追加する</ModalHeader>
          <ModalBody>
            <VStack spacing={4} py="4" align="stretch">
              <FormInputText
                id={`${FormNumber}.summary`}
                name={`${FormNumber}.summary`}
                placeholder="授業名"
                label="授業名"
                required="必須項目です"
                defaultValue=""
              />
              <FormTextarea
                id={`${FormNumber}.description`}
                name={`${FormNumber}.description`}
                label="メモ"
                placeholder="メモ"
                defaultValue=""
                miniRows={4}
              />
              <FormInputText
                id={`${FormNumber}.url`}
                name={`${FormNumber}.url`}
                defaultValue=""
                placeholder="URL"
                label="URL"
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack w="full">
              <Button
                type={"submit"}
                onClick={() => {
                  console.log(getValues()[props.dayOfweek][props.periodNumber]);
                  // 表示するところに入れる
                  setLessonClassSummary(
                    getValues()[props.dayOfweek][props.periodNumber]
                  );
                  onClose();
                }}
                w="full"
                colorScheme={"blue"}
              >
                追加
              </Button>
              <Button
                w="full"
                onClick={() => {
                  onClose();
                  ResetValues();
                }}
                colorScheme="red"
              >
                削除する
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default AddLesson;

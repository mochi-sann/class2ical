import { Button, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import FormInputText from "./FormInputText";
import FormTextarea from "./FormTextarea";
import { useFormContext } from "react-hook-form";
export type AddLessonProps = {
  periodNumber: number;
  dayOfweek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
};

const AddLesson: React.FC<AddLessonProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { watch } = useFormContext(); // retrieve all hook methods

  const IsSetClass: boolean =
    watch()[props.dayOfweek] && watch()[props.dayOfweek][props.periodNumber];
  return (
    <>
      {IsSetClass ? (
        watch()[props.dayOfweek][props.periodNumber].summary
      ) : (
        <IconButton
          colorScheme="blue"
          onClick={onOpen}
          aria-label="授業を追加する"
          icon={<AddIcon />}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>授業を追加する</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} py="4" align="stretch">
              <FormInputText
                id={`${props.dayOfweek}.${props.periodNumber}.summary`}
                name={`${props.dayOfweek}.${props.periodNumber}.summary`}
                placeholder="授業名"
                label="授業名"
                required="必須項目です"
              />
              <FormTextarea
                id={`${props.dayOfweek}.${props.periodNumber}.description`}
                name={`${props.dayOfweek}.${props.periodNumber}.description`}
                label="メモ"
                placeholder="メモ"
                miniRows={4}
              />
              <FormInputText
                id={`${props.dayOfweek}.${props.periodNumber}.url`}
                name={`${props.dayOfweek}.${props.periodNumber}.url`}
                placeholder="URL"
                label="URL"
              />

              <Button type={"submit"} w="full" colorScheme={"blue"}>
                add
              </Button>
            </VStack>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}> */}
            {/* </Button> */}
            <Button onClick={onClose} colorScheme="red" variant="ghost">
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddLesson;

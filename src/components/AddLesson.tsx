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
import ClassTableForm from "./ClassTableForm";
import FormInputText from "./FormInputText";
import FormTextarea from "./FormTextarea";
export type AddLessonProps = {};

const AddLesson: React.FC<AddLessonProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme="blue"
        onClick={onOpen}
        aria-label="授業を追加する"
        icon={<AddIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>授業を追加する</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
              <FormInputText
                id="url"
                name="url"
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

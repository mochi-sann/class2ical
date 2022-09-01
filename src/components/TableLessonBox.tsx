import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export type TableLessonBoxProps = {
  LessonTitle: string;
  onRemove: () => void;
  onOpen: () => void;
};

const TableLessonBox: React.FC<TableLessonBoxProps> = (props) => {
  return (
    <Box
      borderWidth={"2px"}
      boxShadow={"sm"}
      borderRadius="md"
      borderColor={"gray.600"}
      p={2}
    >
      <HStack>
        <Spacer />
        <CloseButton onClick={() => props.onRemove()} colorScheme={"red"} />
      </HStack>
      <Flex flexDir={"column"} gap="2">
        <Text textAlign={"center"}>{props.LessonTitle}</Text>
        <Button onClick={() => props.onOpen()} w="full" variant={"ghost"}>
          開く
        </Button>
      </Flex>
    </Box>
  );
};

export default TableLessonBox;

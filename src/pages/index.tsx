import { Flex, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import ClassScheduleTable from "src/components/ClassScheduleTable";

const Home: NextPage = () => {
  return (
    <div>
      <Flex flexDir={"column"} gap="2">
        <Heading>授業を入力する</Heading>
        <ClassScheduleTable />
      </Flex>
    </div>
  );
};

export default Home;

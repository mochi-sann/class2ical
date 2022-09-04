import { Flex, Heading, VStack } from "@chakra-ui/react";

import ClassScheduleTable from "src/components/ClassScheduleTable";

import type { NextPage } from "next";

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

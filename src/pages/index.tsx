import { Flex, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";

import ClassScheduleTable from "src/components/ClassScheduleTable";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>大学の時間割をカレンダーインポートするくん</title>
        <meta
          property="og:title"
          content="大学の時間割をカレンダーインポートするくん"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:description"
          content="大学の時間割を入力するとカレンダーにインポートするファイルを生成します"
        />
        <meta property="og:url" content="https://class2ical.mochi33.com" />
        <meta
          property="og:site_name"
          content="大学の時間割をカレンダーインポートするくん"
        />
        <meta
          property="og:image"
          content="https://class2ical.mochi33.com/ogp_imag.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mochi33i" />
      </Head>
      <Flex flexDir={"column"} gap="2">
        <Heading>授業を入力する</Heading>
        <ClassScheduleTable />
      </Flex>
    </div>
  );
};

export default Home;

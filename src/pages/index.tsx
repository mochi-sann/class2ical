import { Button } from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import type { NextPage } from "next";
import { useState } from "react";
import ClassTableForm from "src/components/ClassTableForm";
import {
  useClassTableIcal,
  useClassTableIcalProps,
} from "src/hooks/useClassTableIcal";
import { dayjsWapper } from "src/lib/dayjs";

const Home: NextPage = () => {
  const [fileUrl, setFileUrl] = useState("");

  type classListType = {
    title: string;
    start: Dayjs;
    end: Dayjs;
    summary: string;
  };

  const classList: useClassTableIcalProps["init"] = [
    {
      summary: "テストの授業1つ目です",
      start: dayjsWapper().hour(10).weekday(1).toDate(),
      end: dayjsWapper().hour(10).weekday(1).add(1.5, "hour").toDate(),
    },
    {
      summary: "テストの授業1つ目です",
      start: dayjsWapper().hour(13).weekday(4).toDate(),
      end: dayjsWapper().hour(13).weekday(4).add(1.5, "hour").toDate(),
    },
    {
      summary: "テストの授業1つ目です",
      start: dayjsWapper().hour(16).weekday(6).toDate(),
      end: dayjsWapper().hour(16).weekday(6).add(1.5, "hour").toDate(),
    },
  ];
  const { DownloadFile, AddEvent } = useClassTableIcal({ init: classList });
  return (
    <div>
      <Button
        onClick={() => {
          AddEvent(classList);
        }}
      >
        addEvent
      </Button>
      <Button
        onClick={() => {
          DownloadFile();
        }}
      >
        ダウンロードする
      </Button>
      <p>file is {fileUrl}</p>
      <ClassTableForm />
    </div>
  );
};

export default Home;

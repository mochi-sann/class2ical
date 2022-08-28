import { Button } from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import type { NextPage } from "next";
import { useState } from "react";
import {
  useClassTableIcal,
  useClassTableIcalProps,
} from "src/hooks/useClassTableIcal";
import { dayjsWapper } from "src/lib/dayjs";
import { GetClaender } from "src/lib/ical";

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
  const { DownloadFile } = useClassTableIcal({ init: classList });
  return (
    <div>
      <Button
        onClick={() => {
          console.log("クリックしたで");
          const CalenderBlob = GetClaender().toBlob();
          const url = window.URL.createObjectURL(
            new Blob([CalenderBlob], { type: "text/calendar" })
          );
          window.open(url);
        }}
      >
        This is Button
      </Button>
      <Button
        onClick={() => {
          DownloadFile();
        }}
      >
        ダウンロードする
      </Button>
      <p>file is {fileUrl}</p>
    </div>
  );
};

export default Home;

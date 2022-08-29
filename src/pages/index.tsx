import { Button, Link } from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import { ICalEventRepeatingFreq, ICalWeekday } from "ical-generator";
import type { NextPage } from "next";
import { useState } from "react";
import ClassScheduleTable from "src/components/ClassScheduleTable";
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
      summary: "こんにちはー",
      repeating: {
        freq: ICalEventRepeatingFreq["WEEKLY"],
        until: dayjsWapper("2022-12-10").toDate(),
        interval: 1,
      },
      start: dayjsWapper().hour(10).weekday(1).toDate(),
      end: dayjsWapper().hour(10).weekday(1).add(1.5, "hour").toDate(),
    },
  ];
  const { DownloadFile, AddEvent, CalenderEvents } = useClassTableIcal({
    init: classList,
  });
  return (
    <div>
      <Button
        onClick={() => {
          AddEvent(classList);
        }}
      >
        addEvent
      </Button>
      {DownloadFile() && (
        <Link href={DownloadFile() || "/hgoe"} download={"hoge"}>
          りんく
        </Link>
      )}
      {/* <Button as="a" href={DownloadFile() || "/hgoe"} download={"hoge"}> */}
      {/*   ダウンロードする */}
      {/* </Button> */}
      <p>file is {fileUrl}</p>
      <ClassTableForm />
      <ClassScheduleTable table={CalenderEvents} />
    </div>
  );
};

export default Home;

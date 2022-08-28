import { Dispatch, SetStateAction, useEffect, useState } from "react";

import ical, { ICalEvent, ICalEventData } from "ical-generator";

export type useClassTableIcalProps = {
  init: Array<ICalEvent | ICalEventData>;
};
export type useClassTableIcalTypes = {
  DownloadFile: () => void;
  setCalenderEvents: Dispatch<SetStateAction<(ICalEvent | ICalEventData)[]>>;
  CalenderEvents: useClassTableIcalProps["init"];
  AddEvent: (event: useClassTableIcalProps["init"]) => void;
};

export const useClassTableIcal = (
  props?: useClassTableIcalProps
): useClassTableIcalTypes => {
  const [CalenderEvents, setCalenderEvents] = useState<
    useClassTableIcalProps["init"]
  >(props?.init || []);

  const AddEvent = (event: useClassTableIcalProps["init"]) => {
    setCalenderEvents((pre) => {
      return event.concat(pre);
    });
  };
  const calendar = ical({ name: "授業の時間" });

  CalenderEvents.map((event) => {
    calendar.createEvent(event);
  });

  // ファイルをダウンロード
  const DownloadFile = (): string => {
    const CalenderUrl = calendar.toURL();
    console.log("CalenderBlob", CalenderUrl);
    window.open(CalenderUrl);
    return CalenderUrl;
  };

  return {
    setCalenderEvents,
    CalenderEvents,
    DownloadFile,
    AddEvent,
  };
};

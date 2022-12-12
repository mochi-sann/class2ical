import { Dispatch, SetStateAction, useEffect, useState } from "react";

import ical, { ICalEvent, ICalEventData } from "ical-generator";

export type useClassTableIcalProps = {
  init: Array<ICalEvent | ICalEventData>;
};
export type useClassTableIcalTypes = {
  DownloadFile: (event: useClassTableIcalProps["init"]) => string | null;
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

  // ファイルをダウンロード
  const DownloadFile = (event: useClassTableIcalProps["init"]): string => {
    try {
      const calendar = ical({ name: "授業の時間" });

      calendar.description("大学の授業のカレンダー");

      calendar.clear();
      event.map((event) => {
        calendar.createEvent(event);
      });
      const CalenderBlob = calendar.toBlob() || "";
      const CalenderUrl = calendar.toURL();
      let dummy_a_el = document.createElement("a");

      document.body.appendChild(dummy_a_el);

      // a 要素の href 属性に Object URL をセット
      dummy_a_el.href = CalenderUrl;

      // a 要素の download 属性にファイル名をセット
      dummy_a_el.download = "大学の授業.ics";
      dummy_a_el.click();
      // document.body.removeChild(dummy_a_el);

      return CalenderUrl || "/";
    } catch (error) {
      console.error(" can not downloadl", error);
      return "/";
    }
  };

  return {
    setCalenderEvents,
    CalenderEvents,
    DownloadFile,
    AddEvent,
  };
};

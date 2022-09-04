import { Dispatch, SetStateAction, useEffect, useState } from "react";

import ical, { ICalEvent, ICalEventData } from "ical-generator";

export type useClassTableIcalProps = {
  init: Array<ICalEvent | ICalEventData>;
};
export type useClassTableIcalTypes = {
  DownloadFile: () => string | null;
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
  const DownloadFile = (): string => {
    try {
      const calendar = ical({ name: "授業の時間" });

      calendar.description(
        "大学の授業表をGoogle calender などにインポートできるます"
      );

      calendar.clear();
      CalenderEvents.map((event) => {
        calendar.createEvent(event);
      });
      const CalenderBlob = calendar.toBlob() || "";
      let dummy_a_el = document.createElement("a");
      document.body.appendChild(dummy_a_el);

      // a 要素の href 属性に Object URL をセット
      dummy_a_el.href = URL.createObjectURL(CalenderBlob);

      // a 要素の download 属性にファイル名をセット
      dummy_a_el.download = "hoge_test.ics";
      dummy_a_el.click();
      document.body.removeChild(dummy_a_el);

      const CalenderUrl = URL.createObjectURL(CalenderBlob);
      return CalenderUrl || "/";
    } catch (error) {
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

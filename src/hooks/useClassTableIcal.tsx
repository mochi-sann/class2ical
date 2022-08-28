import { useEffect, useState } from "react";

import ical, { ICalEvent, ICalEventData } from "ical-generator";

export type useClassTableIcalProps = {
  init?: Array<ICalEvent | ICalEventData>;
};
export type useClassTableIcalTypes = {
  DownloadFile: () => void;
};

export const useClassTableIcal = (
  props?: useClassTableIcalProps
): useClassTableIcalTypes => {
  const [CalenderEvents, setCalenderEvents] = useState<
    Array<ICalEvent | ICalEventData>
  >(props?.init || []);

  const calendar = ical({ name: "授業の時間" });

  CalenderEvents.map((event) => {
    calendar.createEvent(event);
  });
  const DownloadFile = (): string => {
    const CalenderUrl = calendar.toURL();
    console.log("CalenderBlob", CalenderUrl);
    window.open(CalenderUrl);
    return CalenderUrl;
  };
  return {
    DownloadFile,
  };
};

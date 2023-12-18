import { save } from "@tauri-apps/api/dialog";
import { writeTextFile } from "@tauri-apps/api/fs";
import ical from "ical-generator";

import { useClassTableIcalProps } from "src/hooks/useClassTableIcal";

export const DownloadTauriApp = async (
  event: useClassTableIcalProps["init"]
) => {
  try {
    const calendar = ical({ name: "授業の時間" });

    calendar.description("大学の授業のカレンダー");

    calendar.clear();
    event.map((event) => {
      calendar.createEvent(event);
    });
    const ClaenderData = calendar.toString();

    const path = await save({ defaultPath: "calender.ics" });
    if (path) {
      await writeTextFile(path, ClaenderData);
    }
  } catch (r) {}
};

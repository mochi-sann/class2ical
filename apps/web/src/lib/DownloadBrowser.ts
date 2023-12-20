import ical from "ical-generator";
import { useClassTableIcalProps } from "../hooks/useClassTableIcal";

export const DownloadBrowsser = (
  event: useClassTableIcalProps["init"]
): string => {
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
};

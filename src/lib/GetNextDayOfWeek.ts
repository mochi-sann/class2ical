//https://crieit.net/posts/JavaScript-60f839da9668b このコードを参考にした
export type GetNextDayOfWeekArgsType = {
  date: string;
  dayOfWeek: number; // dayOfWeek 曜日を示す 0-6 の値。 Date.prototype.getDay() と同様、 0 は日曜日を表す。
  includeToday: boolean;
};
export type GetNextDayOfWeekReturnType = Date;

const GetNextDayOfWeek = (
  args: GetNextDayOfWeekArgsType
): GetNextDayOfWeekReturnType => {
  var now = new Date(args.date);
  now.setDate(now.getDate() + ((args.dayOfWeek + (7 - now.getDay())) % 7));

  return now;
};

export default GetNextDayOfWeek;

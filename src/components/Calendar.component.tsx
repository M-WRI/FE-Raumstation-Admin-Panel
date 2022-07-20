import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  format,
} from "date-fns";
// STYLES
import styles from "../styles/Calendar.module.scss";

export const Calendar: React.FC<{}> = () => {
  // const selectedDate = new Date();

  // const startDate = startOfWeek(startOfMonth(selectedDate));
  // const endDate = endOfWeek(endOfMonth(selectedDate));

  const takeWeek = (start: Date = new Date()) => {
    let date = startOfWeek(startOfDay(start));
    return (): Date[] => {
      const week = [...Array(7)].map((_, i) => addDays(date, i));
      date = addDays(week[6], 1);
      return week;
    };
  };

  const takeMonth = (start: Date = new Date()) => {
    //TO DO
    let month: any[] = [];
    let date = start;

    const lastDayOfRange = (range: any) => {
      return range[range.length - 1][6];
    };

    return () => {
      const weekGenerator = takeWeek(startOfMonth(date));
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGenerator());

      while (lastDayOfRange(month) < endDate) {
        month.push(weekGenerator());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);

      return range;
    };
  };

  const tm = takeMonth();

  return (
    <div className={styles.calendarContainer}>
      {tm().map((el, i) => {
        return (
          <div>
            {el.map((obj: any) => {
              return <div></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

import { Dayjs } from 'dayjs';

export const converteDate = (assignedDay: Dayjs) => {
  const firstWeek = assignedDay.startOf('month').week();

  const dates = Array.from({ length: assignedDay.daysInMonth() + assignedDay.startOf('month').day() }, (v, index) =>
    assignedDay.startOf('year').week(firstWeek).startOf('week').add(index, 'day')
  );

  const init: Dayjs[][] = [];

  let rowIdx = -1;
  return dates.reduce((acc, cur, i) => {
    if (!(i % 7)) {
      acc.push([cur]);
      rowIdx += 1;
    } else {
      acc[rowIdx].push(cur);
    }
    return acc;
  }, init);
};

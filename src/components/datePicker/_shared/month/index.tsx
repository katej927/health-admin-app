import dayjs, { Dayjs } from 'dayjs';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';

import week from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ko';

import styles from './month.module.scss';
import cn from 'classnames';

dayjs.extend(week);
dayjs.extend(localeData);
dayjs.extend(isBetween);
dayjs.locale('ko');

interface Props {
  assignedDay: Dayjs;
  onMonthBtnClick: (isAddMonth: boolean) => void;
  isCurrentMonth: boolean;
}

const Month = ({ assignedDay, onMonthBtnClick, isCurrentMonth }: Props) => {
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);
  const { startDate, endDate } = inquiryPeriod;

  const firstWeek = assignedDay.startOf('month').week();
  const lastWeek = assignedDay.endOf('month').week() === 1 ? 53 : assignedDay.endOf('month').week();

  const onDayClick = (date: Dayjs) => {
    if (!startDate && !endDate)
      setInquiryPeriod((prev) => ({
        ...prev,
        startDate: date.format('YYYY-MM-DD'),
      }));
    else if (startDate && !endDate) {
      if (dayjs(startDate).isAfter(dayjs(date)))
        setInquiryPeriod((prev) => ({
          ...prev,
          startDate: date.format('YYYY-MM-DD'),
        }));
      else
        setInquiryPeriod((prev) => ({
          ...prev,
          endDate: date.format('YYYY-MM-DD'),
        }));
    } else if (startDate && endDate) setInquiryPeriod({ startDate: date.format('YYYY-MM-DD'), endDate: '' });
  };

  // const calendarArr = () => {
  //   let result: any[] = []; // any 수정하기
  //   let weeks = firstWeek;
  //   for (weeks; weeks <= lastWeek; weeks += 1) {
  //     result = result.concat(
  //       <tr key={weeks}>
  //         {Array(7)
  //           .fill(0)
  //           .map((data, index) => {
  //             const days = assignedDay.startOf('year').week(weeks).startOf('week').add(index, 'day');
  //             const isOtherMonth = assignedDay.format('MM') !== days.format('MM');
  //             const isSelectedDate = startDate === days.format('YYYY-MM-DD') || endDate === days.format('YYYY-MM-DD');
  //             const isBetweenDate = dayjs(days).isBetween(startDate, endDate, 'day', '()');

  //             return (
  //               <td
  //                 key={`day-${index + 1}`}
  //                 className={cn(styles.day, {
  //                   [styles.otherMonth]: isOtherMonth,
  //                   [styles.selectedDate]: isSelectedDate,
  //                   [styles.betweenDate]: isBetweenDate,
  //                 })}
  //               >
  //                 <button type='button' onClick={() => onDayClick(days)}>
  //                   {days.format('D')}
  //                 </button>
  //               </td>
  //             );
  //           })}
  //       </tr>
  //     );
  //   }
  //   return result;
  // };

  const dates = Array.from({ length: assignedDay.daysInMonth() + assignedDay.startOf('month').day() }, (v, index) =>
    assignedDay.startOf('year').week(firstWeek).startOf('week').add(index, 'day')
  );

  // type TDate = number | string;
  // const init: TDate[][] = [];

  // let rowIdx = -1;
  // const convertedDate = shownDates.reduce((acc, cur, i) => {
  //   if (!(i % 7)) {
  //     acc.push([cur]);
  //     rowIdx += 1;
  //   } else {
  //     acc[rowIdx].push(cur);
  //   }
  //   return acc;
  // }, init);

  const init: Dayjs[][] = [];

  let rowIdx = -1;
  const convertedDate = dates.reduce((acc, cur, i) => {
    if (!(i % 7)) {
      acc.push([cur]);
      rowIdx += 1;
    } else {
      acc[rowIdx].push(cur);
    }
    return acc;
  }, init);

  // const days = assignedDay.startOf('year').week(weeks).startOf('week').add(index, 'day');
  // const isOtherMonth = assignedDay.format('MM') !== days.format('MM');
  // const isSelectedDate = startDate === days.format('YYYY-MM-DD') || endDate === days.format('YYYY-MM-DD');
  // const isBetweenDate = dayjs(days).isBetween(startDate, endDate, 'day', '()');

  return (
    <div>
      <div className={styles.control}>
        {isCurrentMonth && (
          <button type='button' onClick={() => onMonthBtnClick(false)}>
            이전 달
          </button>
        )}
        <time>{assignedDay.format('YYYY년 MM월')}</time>
        {!isCurrentMonth && (
          <button type='button' onClick={() => onMonthBtnClick(true)}>
            다음 달
          </button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            {dayjs.weekdaysMin().map((weekday) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {convertedDate.map((eachWeek: Dayjs[], idx: number) => (
            <tr key={`week-${idx + 1}st`}>
              {eachWeek.map((date, index) => (
                <td key={`date-${index + 1}`}>{date.format('D')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Month;

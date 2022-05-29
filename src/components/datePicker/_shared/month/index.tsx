import dayjs, { Dayjs } from 'dayjs';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';

import week from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ko';

import { converteDate } from '../utils';

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

  const convertedDate = converteDate(assignedDay);

  const onDayClick = (date: Dayjs) => {
    if (!startDate && !endDate)
      setInquiryPeriod((prev) => ({
        ...prev,
        startDate: date.format('YYYY-MM-DD'),
      }));
    else if (startDate && !endDate) {
      dayjs(startDate).isAfter(dayjs(date))
        ? setInquiryPeriod((prev) => ({
            ...prev,
            startDate: date.format('YYYY-MM-DD'),
          }))
        : setInquiryPeriod((prev) => ({
            ...prev,
            endDate: date.format('YYYY-MM-DD'),
          }));
    } else if (startDate && endDate) setInquiryPeriod({ startDate: date.format('YYYY-MM-DD'), endDate: '' });
  };

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
              {eachWeek.map((date, index) => {
                const isOtherMonth = assignedDay.format('MM') !== date.format('MM');
                const isSelectedDate = startDate === date.format('YYYY-MM-DD') || endDate === date.format('YYYY-MM-DD');
                const isBetweenDate = dayjs(date).isBetween(startDate, endDate, 'day', '()');

                return (
                  <td
                    key={`date-${index + 1}`}
                    className={cn(styles.day, {
                      [styles.otherMonth]: isOtherMonth,
                      [styles.selectedDate]: isSelectedDate,
                      [styles.betweenDate]: isBetweenDate,
                    })}
                  >
                    <button type='button' onClick={() => onDayClick(date)}>
                      {date.format('D')}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Month;

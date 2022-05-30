import { SyntheticEvent, Dispatch } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';

import week from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ko';

import { converteDate, updatePeriod } from '../utils';
import { ArrowLeft, ArrowRight } from 'assets/svgs';

import styles from './month.module.scss';
import cn from 'classnames';

dayjs.extend(week);
dayjs.extend(localeData);
dayjs.extend(isBetween);
dayjs.locale('ko');

interface Props {
  assignedDay: Dayjs;
  onMonthBtnClick: (e: SyntheticEvent<EventTarget>) => void;
  isCurrentMonth: boolean;
  setIsOpenCalendar: Dispatch<React.SetStateAction<boolean>>;
}

const Month = ({ assignedDay, onMonthBtnClick, isCurrentMonth, setIsOpenCalendar }: Props) => {
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);
  const { startDate, endDate } = inquiryPeriod;

  const convertedDate = converteDate(assignedDay);

  const onDayClick = (date: Dayjs) => updatePeriod(date, startDate, endDate, setInquiryPeriod, setIsOpenCalendar);

  return (
    <div className={cn(styles.wrapper, isCurrentMonth ? styles.left : styles.right)}>
      <div className={styles.calendarHead}>
        {isCurrentMonth && (
          <button
            className={cn(styles.arrowBtn, styles.left)}
            type='button'
            onClick={onMonthBtnClick}
            data-name='prevMonth'
          >
            <ArrowLeft className={styles.arrow} />
          </button>
        )}
        <time className={styles.monthOfCalendar} dateTime={assignedDay.format('YYYY-MM-DD')}>
          {assignedDay.format('YYYY년 MM월')}
        </time>
        {!isCurrentMonth && (
          <button
            className={cn(styles.arrowBtn, styles.right)}
            type='button'
            onClick={onMonthBtnClick}
            data-name='nextMonth'
          >
            <ArrowRight className={styles.arrow} />
          </button>
        )}
      </div>
      <table>
        <thead>
          <tr className={styles.weekdaysRow}>
            {dayjs.weekdaysMin().map((weekday) => (
              <th key={weekday} className={styles.weekday}>
                {weekday}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.allDatesOfAMonth}>
          {convertedDate.map((eachWeek: Dayjs[], idx: number) => (
            <tr key={`week-${idx + 1}st`}>
              {eachWeek.map((date, index) => {
                return (
                  <td key={`date-${index + 1}`} className={styles.day}>
                    <button
                      className={cn(styles.dateBtn, {
                        [styles.otherMonth]: assignedDay.format('MM') !== date.format('MM'),
                        [styles.selectedDate]: date.isSame(dayjs(startDate)) || date.isSame(dayjs(endDate)),
                        [styles.betweenDate]: dayjs(date).isBetween(startDate, endDate, 'day', '()'),
                      })}
                      type='button'
                      onClick={() => onDayClick(date)}
                    >
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

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';
import dayjs from 'dayjs';

import { Button, BTN_OPTIONS, Month } from './_shared';
import styles from './datePicker.module.scss';

const DatePicker = () => {
  const fixedToday = '2022-04-20';
  const registrationDate = '2022-02-01'; // 회원 가입일 받아오기

  const [getTime, setTime] = useState(dayjs(fixedToday));
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);
  const { startDate, endDate } = inquiryPeriod;

  const INPUT_DATE_VALUE = [startDate, endDate];

  const nextMonth = getTime.add(1, 'month');

  const onMonthBtnClick = (isAddMonth: boolean) => {
    isAddMonth ? setTime(getTime.add(1, 'month')) : setTime(getTime.subtract(1, 'month'));
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>가입일 조회</legend>
      {INPUT_DATE_VALUE.map((date, idx) => {
        return (
          <input
            key={`date-input-${idx + 1}`}
            className={styles.dateInput}
            type='date'
            readOnly
            value={date}
            required
            pattern='\d{4}-\d{2}-\d{2}'
          />
        );
      })}
      <div className={styles.monthsWrapper}>
        <Month assignedDay={getTime} onMonthBtnClick={onMonthBtnClick} isCurrentMonth />
        <Month assignedDay={nextMonth} onMonthBtnClick={onMonthBtnClick} isCurrentMonth={false} />
      </div>
      {/* {BTN_OPTIONS.map((option) => (
        <Button key={option} text={option} />
      ))} */}
    </fieldset>
  );
};

export default DatePicker;

import { useState, SyntheticEvent } from 'react';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';
import dayjs from 'dayjs';

import { BTN_OPTIONS, Month } from './_shared';
import styles from './datePicker.module.scss';

const DatePicker = () => {
  const fixedToday = '2022-04-20';
  const registrationDate = '2022-02-01'; // 회원 가입일 받아오기

  const [getTime, setTime] = useState(dayjs(fixedToday));
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);
  const { startDate, endDate } = inquiryPeriod;

  const nextMonth = getTime.add(1, 'month');

  const onClickQuickBtn = ({ currentTarget }: SyntheticEvent<EventTarget>) => {
    if (!(currentTarget instanceof HTMLButtonElement)) return;

    const { name } = currentTarget.dataset;
    if (name === '오늘') setInquiryPeriod({ startDate: fixedToday, endDate: fixedToday });
    if (name === '일주일')
      setInquiryPeriod({ startDate: dayjs(fixedToday).subtract(6, 'day').format('YYYY-MM-DD'), endDate: fixedToday });
    if (name === '전체') setInquiryPeriod({ startDate: registrationDate, endDate: fixedToday });
  };

  const onMonthBtnClick = ({ currentTarget }: SyntheticEvent<EventTarget>) => {
    if (!(currentTarget instanceof HTMLButtonElement)) return;
    const { name } = currentTarget.dataset;
    name === 'nextMonth' ? setTime(getTime.add(1, 'month')) : setTime(getTime.subtract(1, 'month'));
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>가입일 조회</legend>
      {[startDate, endDate].map((date, idx) => {
        return (
          <input
            key={`date-input-${idx + 1}`}
            className={styles.dateInput}
            type='text'
            readOnly
            value={date}
            required
            aria-required='true'
            pattern='\d{4}-\d{2}-\d{2}'
            data-placeholder={idx ? '끝' : '시작'}
          />
        );
      })}
      <div className={styles.monthsWrapper}>
        <Month assignedDay={getTime} onMonthBtnClick={onMonthBtnClick} isCurrentMonth />
        <Month assignedDay={nextMonth} onMonthBtnClick={onMonthBtnClick} isCurrentMonth={false} />
      </div>
      {BTN_OPTIONS.map((option) => (
        <button key={option} type='button' className={styles.btn} onClick={onClickQuickBtn} data-name={option}>
          {option}
        </button>
      ))}
    </fieldset>
  );
};

export default DatePicker;

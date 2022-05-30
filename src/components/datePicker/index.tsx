import { useState, SyntheticEvent, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';
import dayjs from 'dayjs';
import { useClickAway } from 'react-use';

import { BTN_OPTIONS, Month, TPage, findRegistrationDate } from './_shared';
import { ArrowDown } from 'assets/svgs';
import styles from './datePicker.module.scss';
import cn from 'classnames';

interface Props {
  isSubmit?: boolean;
  page: TPage;
}

const DatePicker = ({ isSubmit, page }: Props) => {
  const fixedToday = '2022-04-20';
  const registrationDate2 = findRegistrationDate(page); // 회원 가입일 받아오기

  const registrationDate = '2022-02-01'; // 회원 가입일 받아오기

  const [getTime, setTime] = useState(dayjs(fixedToday));
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);
  const { startDate, endDate } = inquiryPeriod;
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpenCalendar(false);
  });

  const nextMonth = getTime.add(1, 'month');

  const onClickDateRange = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

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
      <div className={styles.optionsWrapper}>
        <button
          type='button'
          className={cn(styles.dateInputWrapper, { [styles.invalidated]: isSubmit && (!startDate || !endDate) })}
          onClick={onClickDateRange}
        >
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
                placeholder={idx ? '전체' : '전체'}
              />
            );
          })}
          <ArrowDown className={styles.arrowDown} />
        </button>
        {BTN_OPTIONS.map((option) => (
          <button key={option} type='button' className={styles.btn} onClick={onClickQuickBtn} data-name={option}>
            {option}
          </button>
        ))}
      </div>
      {isOpenCalendar && (
        <div className={styles.monthsWrapper} ref={ref}>
          <Month assignedDay={getTime} onMonthBtnClick={onMonthBtnClick} isCurrentMonth />
          <Month assignedDay={nextMonth} onMonthBtnClick={onMonthBtnClick} isCurrentMonth={false} />
        </div>
      )}
    </fieldset>
  );
};

export default DatePicker;

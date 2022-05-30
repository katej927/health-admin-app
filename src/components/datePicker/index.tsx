import { useState, SyntheticEvent, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inquiryPeriodState, selectMemberState, todayState } from 'states';
import dayjs from 'dayjs';
import { useClickAway } from 'react-use';

import { BTN_OPTIONS, Month, TPage, findRegistrationDate, dateInputValue, onClickQuickBtn } from './_shared';
import { ArrowDown } from 'assets/svgs';
import styles from './datePicker.module.scss';
import cn from 'classnames';

interface Props {
  isSubmit?: boolean;
  page: TPage;
}

const DatePicker = ({ isSubmit, page }: Props) => {
  const selectedMember = useRecoilValue(selectMemberState);
  const fixedToday = useRecoilValue(todayState);
  const registrationDate = findRegistrationDate(page, selectedMember.crt_ymdt);

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

  const onMonthBtnClick = ({ currentTarget }: SyntheticEvent<EventTarget>) => {
    if (!(currentTarget instanceof HTMLButtonElement)) return;
    const { name } = currentTarget.dataset;
    name === 'nextMonth' ? setTime(getTime.add(1, 'month')) : setTime(getTime.subtract(1, 'month'));
  };

  const onClick3TypesOfQuickBtn = (e: SyntheticEvent<EventTarget>) =>
    onClickQuickBtn(e, setInquiryPeriod, fixedToday, registrationDate);

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
                value={dateInputValue(date, idx)}
                required
                aria-required='true'
                pattern='\d{4}-\d{2}-\d{2}'
                placeholder={idx ? '종료일' : '시작일'}
              />
            );
          })}
          <ArrowDown className={styles.arrowDown} />
        </button>
        {BTN_OPTIONS.map((option) => (
          <button
            key={option}
            type='button'
            className={styles.btn}
            onClick={onClick3TypesOfQuickBtn}
            data-name={option}
          >
            {option}
          </button>
        ))}
      </div>
      {isOpenCalendar && (
        <div className={styles.monthsWrapper} ref={ref}>
          <Month
            assignedDay={getTime}
            onMonthBtnClick={onMonthBtnClick}
            isCurrentMonth
            setIsOpenCalendar={setIsOpenCalendar}
          />
          <Month
            assignedDay={nextMonth}
            onMonthBtnClick={onMonthBtnClick}
            isCurrentMonth={false}
            setIsOpenCalendar={setIsOpenCalendar}
          />
        </div>
      )}
    </fieldset>
  );
};

export default DatePicker;

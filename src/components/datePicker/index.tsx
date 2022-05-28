import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inquiryPeriodState } from 'states';
import dayjs from 'dayjs';

import { Button, BTN_OPTIONS, Month } from './_shared';
import styles from './datePicker.module.scss';

const DatePicker = () => {
  const fixedToday = '2022-04-20';
  const [getTime, setTime] = useState(dayjs(fixedToday));
  const [inquiryPeriod, setInquiryPeriod] = useRecoilState(inquiryPeriodState);

  const nextMonth = getTime.add(1, 'month');

  const onMonthBtnClick = (isAddMonth: boolean) => {
    isAddMonth ? setTime(getTime.add(1, 'month')) : setTime(getTime.subtract(1, 'month'));
  };

  console.log('test', getTime.add(1, 'month'));

  return (
    <div>
      {/* {BTN_OPTIONS.map((option) => (
        <Button key={option} text={option} />
      ))} */}
      <Month assignedDay={getTime} onMonthBtnClick={onMonthBtnClick} isCurrentMonth today={fixedToday} />
      <Month assignedDay={nextMonth} onMonthBtnClick={onMonthBtnClick} isCurrentMonth={false} />
    </div>
  );
};

export default DatePicker;

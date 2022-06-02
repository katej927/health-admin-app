import dayjs from 'dayjs';
import { TBTN_OPTIONS } from 'components/datePicker/_shared/constants';

export const getActiveBtn = (
  option: TBTN_OPTIONS,
  fixedToday: string,
  registrationDate: string,
  startDate: string,
  endDate: string
) => {
  let active = false;
  switch (option) {
    case '오늘':
      if (startDate === dayjs(fixedToday).format('YYYY-MM-DD') && endDate === dayjs(fixedToday).format('YYYY-MM-DD')) {
        active = true;
      }
      break;
    case '일주일':
      if (
        startDate === dayjs(fixedToday).subtract(6, 'day').format('YYYY-MM-DD') &&
        endDate === dayjs(fixedToday).format('YYYY-MM-DD')
      ) {
        active = true;
      }
      break;
    case '전체':
      if (
        startDate === dayjs(registrationDate).format('YYYY-MM-DD') &&
        endDate === dayjs(fixedToday).format('YYYY-MM-DD')
      ) {
        active = true;
      }
      break;
    default:
      break;
  }
  return active;
};

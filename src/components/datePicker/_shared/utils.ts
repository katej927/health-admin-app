import { Dayjs } from 'dayjs';
import memberData from 'data/step_data/member_data.json';

export const converteDate = (assignedDay: Dayjs) => {
  const firstWeek = assignedDay.startOf('month').week();

  const dates: Dayjs[] = Array.from(
    { length: assignedDay.daysInMonth() + assignedDay.startOf('month').day() },
    (v, index) => assignedDay.startOf('year').week(firstWeek).startOf('week').add(index, 'day')
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

export type TPage = '회원 관리' | '회원 상세 정보';

export interface IMemberData {
  id: number;
  username: string;
  crt_ymdt: string;
}

const init: IMemberData = memberData[0];

export const findRegistrationDate = (page: TPage) => {
  if (page === '회원 관리')
    return memberData.reduce((c, n) => (Date.parse(n.crt_ymdt) < Date.parse(c.crt_ymdt) ? n : c), init).crt_ymdt;
  return 'tmp'; // 수정하기
};

import dayjs, { Dayjs } from 'dayjs';
import week from 'dayjs/plugin/weekOfYear';

import styles from './month.module.scss';
import cn from 'classnames';

interface Props {
  assignedDay: Dayjs;
  onMonthBtnClick: (isAddMonth: boolean) => void;
  isCurrentMonth: boolean;
  today?: string;
}

const Month = ({ assignedDay, onMonthBtnClick, isCurrentMonth, today }: Props) => {
  const firstWeek = assignedDay.startOf('month').week();
  const lastWeek = assignedDay.endOf('month').week() === 1 ? 53 : assignedDay.endOf('month').week();

  const calendarArr = () => {
    let result: any[] = []; // any 수정하기
    let weeks = firstWeek;
    for (weeks; weeks <= lastWeek; weeks += 1) {
      result = result.concat(
        <tr key={weeks}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              const days = assignedDay.startOf('year').week(weeks).startOf('week').add(index, 'day');
              const isToday = today && dayjs(today).format('YYYYMMDD') === days.format('YYYYMMDD');
              const isOtherMonth = assignedDay.format('MM') !== days.format('MM');

              return (
                <td
                  key={`day-${index + 1}`}
                  className={cn(styles.day, { [styles.today]: isToday, [styles.otherMonth]: isOtherMonth })}
                >
                  <span>{days.format('D')}</span>
                </td>
              );
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <div>
      <div className={styles.control}>
        {isCurrentMonth && (
          <button type='button' onClick={() => onMonthBtnClick(false)}>
            이전 달
          </button>
        )}
        <span>{assignedDay.format('YYYY년 MM월')}</span>
        {!isCurrentMonth && (
          <button type='button' onClick={() => onMonthBtnClick(true)}>
            다음 달
          </button>
        )}
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Month;

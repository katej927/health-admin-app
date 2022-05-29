import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from 'victory';

import heartRateData from '../../data/heartrate_data/heartrate_data_total.json';
import getDatesFromStartToLast from '../../utils/getDatesFromStartToLast';
import { IHeartRate } from 'types/heartRate';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  // TODO: userId prop 값으로 변경
  const userId = 1;
  // TODO: date recoilValue로 변경
  const date = { startDate: '2022-02-26', endDate: '2022-02-26' };
  const rawJson = heartRateData.find((el) => el.id === userId);
  const userHeartRateData = rawJson?.heartRateData ?? [];
  let array: IHeartRate[] = [];

  const selectedDateArray = getDatesFromStartToLast(date.startDate, date.endDate).map((dateEl) =>
    userHeartRateData?.filter((el) => el.crt_ymdt.substr(0, 10) === dateEl && dateEl)
  );

  const filteredDataArray = selectedDateArray?.filter((el) => el.length > 0);
  filteredDataArray.map((el) => {
    if (el.length > 0) {
      for (let j = 0; j < el.length; j += 1) {
        array.push(el[j]);
      }
    }
    return array;
  });

  const data = array?.map((el: IHeartRate) => {
    return { x: el.crt_ymdt, y: el.avg_beat };
  });

  const setTickFormat = (tick: any) => {
    const datesArray = getDatesFromStartToLast(date.startDate, date.endDate);
    if (array.length > 0) {
      if (datesArray.length > 3) {
        return tick.substr(0, 10);
      }
      return tick.substr(10, 6);
    }
    return '';
  };

  return (
    <div className={styles.dashboardWrapper}>
      <div>
        <span>심박수</span> 평균 123
      </div>
      <VictoryChart minDomain={{ y: 50 }} maxDomain={{ y: 160 }}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
          }}
          sortOrder='descending'
          data={data}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {
              fontFamily: 'inherit',
              fontWeight: 100,
              letterSpacing: '1px',
              stroke: 'gray',
              fontSize: 10,
            },
          }}
        />
        <VictoryAxis
          tickFormat={(tick) => setTickFormat(tick)}
          fixLabelOverlap
          tickLabelComponent={<VictoryLabel renderInPortal dx={30} />}
          style={{
            tickLabels: {
              fontFamily: 'inherit',
              fontWeight: 100,
              letterSpacing: '1px',
              stroke: 'gray',
              fontSize: 10,
              marginBlock: '20px',
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Dashboard;

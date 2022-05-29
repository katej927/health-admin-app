import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory';
import stepData from '../../../data/step_data/step_data.json';
import formatDayGraphData from './formatDayGraphData';
import formatDayGraphDataTickValues from './formatDayGraphTickValues';
import formatWeekGraphData from './formatWeekGraphData';

dayjs.extend(isBetween);

const StepDataGraph = () => {
  const userData = stepData.filter((data) => data.id === 1)[0].stepData;

  // 1일 그래프
  const today = '2022-02-26';
  const { oneDayGraphData, totalStep } = formatDayGraphData(userData, today);

  // 일주일 그래프 (기간)
  const date = {
    startDate: '2022-03-08',
    endDate: '2022-04-19',
  };

  const { weeklyGraphData, totalStep2 } = formatWeekGraphData(userData, date);

  return (
    <>
      <div>
        오늘 그래프
        <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 15 }}>
          <VictoryAxis tickFormat={(x) => ''} />
          <VictoryAxis dependentAxis />
          <VictoryBar
            style={{}}
            data={oneDayGraphData}
            x='time'
            y='steps'
            labels={(datum) => formatDayGraphDataTickValues(datum)}
            labelComponent={<VictoryLabel y={270} verticalAnchor='start' />}
          />
        </VictoryChart>
        <div>{today}</div>
        <div>
          <span>총 {totalStep.toLocaleString()} 걸음</span>
        </div>
      </div>
      <hr />
      <div>
        일주일 + 전체 그래프
        <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 40 }}>
          <VictoryAxis />
          <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: '10' } }} />
          <VictoryBar style={{}} data={weeklyGraphData} x='date' y='steps' />
        </VictoryChart>
        <div>{`${date.startDate} ~ ${date.endDate}`}</div>
        <div>
          <span>총 {totalStep2.toLocaleString()} 걸음</span>
        </div>
      </div>
    </>
  );
};

export default StepDataGraph;

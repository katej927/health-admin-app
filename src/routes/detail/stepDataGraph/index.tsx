import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import user1 from '../../../data/step_data/step_user1.json';

dayjs.extend(isBetween);

const StepDataGraph = () => {
  // 1일 그래프
  const today = '2022-02-26';
  const oneDayData = user1.filter((data) => dayjs(data.crt_ymdt).format('YYYY-MM-DD') === today);
  const oneDayGraphData = oneDayData.map((data) => {
    return { time: dayjs(data.crt_ymdt).format('HH:mm:ss'), steps: data.steps };
  });
  // const oneDayTickValues = oneDayGraphData.filter((data) => data.steps)

  // 1주일 그래프 + 전체 그래프
  const startDate = '2022-03-08';
  const endDate = '2022-04-19';
  const weeklyData = user1.filter((data) => dayjs(data.crt_ymdt).isBetween(startDate, endDate + 1, 'day', '[]'));
  // const totalData = user1;

  // 모든 데이터를 순회하기 때문에 비효율적 -> 더 좋은 방법 찾아보기
  const weeklyTickValues = Array.from(new Set(weeklyData.map((data) => dayjs(data.crt_ymdt).format('YYYY-MM-DD'))));
  const weeklyGraphData = weeklyTickValues.map((value) => {
    return { date: value, steps: 0 };
  });
  weeklyData.forEach((data: any) => {
    const formattedDate = dayjs(data.crt_ymdt).format('YYYY-MM-DD');
    weeklyGraphData.find((d) => d.date === formattedDate)!.steps += data.steps;
  });

  // 함수로 분리
  const totalStep = oneDayGraphData.reduce((acc: any, curr: any) => acc + curr.steps, 0);
  const totalStep2 = weeklyGraphData.reduce((acc: any, curr: any) => acc + curr.steps, 0);

  return (
    <>
      <div>
        오늘 그래프
        <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 15 }}>
          {/* <VictoryAxis /> */}
          {/* <VictoryAxis dependentAxis /> */}
          <VictoryBar style={{}} data={oneDayGraphData} x='time' y='steps' />
        </VictoryChart>
        <div>{today}</div>
        <div>
          <span>총 {totalStep.toLocaleString()} 걸음</span>
        </div>
      </div>
      <hr />
      <div>
        일주일 + 전체 그래프
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 40 }}>
          <VictoryAxis />
          <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: '10' } }} />
          <VictoryBar style={{}} data={weeklyGraphData} x='date' y='steps' />
        </VictoryChart>
        <div>{`${startDate} ~ ${endDate}`}</div>
        <div>
          <span>총 {totalStep2.toLocaleString()} 걸음</span>
        </div>
      </div>
    </>
  );
};

export default StepDataGraph;

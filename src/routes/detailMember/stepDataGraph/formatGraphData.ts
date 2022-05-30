import dayjs from 'dayjs';
import { IStep } from './type.d';

interface IFormatGraphData {
  graphData: IGraphData[];
  totalStep: number;
}

interface IGraphData {
  steps: number;
  time?: dayjs.Dayjs;
  date?: string;
}

// date 타입 바꿔주기
const formatGraphData = (userData: IStep[], date: any): IFormatGraphData => {
  const { startDate, endDate } = date;
  const isDayGraph = startDate === endDate;

  if (isDayGraph) {
    const oneDayData = userData.filter((data: IStep) => dayjs(data.crt_ymdt).format('YYYY-MM-DD') === startDate);
    const graphData = oneDayData.map((data: IStep): IGraphData => {
      return {
        time: dayjs(data.crt_ymdt),
        steps: data.steps,
      };
    });

    const totalStep = graphData.reduce((acc: number, curr: IGraphData) => acc + curr.steps, 0);

    return { graphData, totalStep };
  }

  const weeklyData = userData.filter((data: IStep) =>
    dayjs(data.crt_ymdt).isBetween(startDate, endDate + 1, 'day', '[]')
  );

  const weeklyTickValues = Array.from(
    new Set(weeklyData.map((data: IStep) => dayjs(data.crt_ymdt).format('YYYY-MM-DD')))
  );

  const graphData = weeklyTickValues.map((value: string): IGraphData => {
    return { date: value, steps: 0 };
  });

  weeklyData.forEach((data: IStep) => {
    const formattedDate = dayjs(data.crt_ymdt).format('YYYY-MM-DD');
    graphData.find((d) => d.date === formattedDate)!.steps += data.steps;
  });

  const totalStep = graphData.reduce((acc: number, curr: IGraphData) => acc + curr.steps, 0);

  return { graphData, totalStep };
};

export default formatGraphData;

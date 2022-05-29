import dayjs from 'dayjs';

const formatDayGraphData = (userData: any, selectedDate: string) => {
  const oneDayData = userData.filter((data: any) => dayjs(data.crt_ymdt).format('YYYY-MM-DD') === selectedDate);
  const oneDayGraphData = oneDayData.map((data: any) => {
    return {
      time: dayjs(data.crt_ymdt).format('HH:mm:ss'),
      steps: data.steps,
      labels: dayjs(data.crt_ymdt).format('HH'),
    };
  });
  const totalStep = oneDayGraphData.reduce((acc: any, curr: any) => acc + curr.steps, 0);
  return { oneDayGraphData, totalStep };
};

export default formatDayGraphData;

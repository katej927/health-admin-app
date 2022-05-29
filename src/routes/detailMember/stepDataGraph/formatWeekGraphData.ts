import dayjs from 'dayjs';

const formatWeekGraphData = (userData: any, date: any) => {
  const { startDate, endDate } = date;

  const weeklyData = userData.filter((data: any) =>
    dayjs(data.crt_ymdt).isBetween(startDate, endDate + 1, 'day', '[]')
  );

  // const weeklyData = userData;

  // 모든 데이터를 순회하기 때문에 비효율적 -> 더 좋은 방법 찾아보기
  const weeklyTickValues = Array.from(
    new Set(weeklyData.map((data: any) => dayjs(data.crt_ymdt).format('YYYY-MM-DD')))
  );

  const weeklyGraphData = weeklyTickValues.map((value) => {
    return { date: value, steps: 0 };
  });

  weeklyData.forEach((data: any) => {
    const formattedDate = dayjs(data.crt_ymdt).format('YYYY-MM-DD');
    weeklyGraphData.find((d) => d.date === formattedDate)!.steps += data.steps;
  });

  const totalStep2 = weeklyGraphData.reduce((acc: any, curr: any) => acc + curr.steps, 0);

  return { weeklyGraphData, totalStep2 };
};

export default formatWeekGraphData;

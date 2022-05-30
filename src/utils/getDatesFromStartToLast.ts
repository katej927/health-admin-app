const getDatesFromStartToLast = (startDate: string, lastDate: string) => {
  const regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  if (!(regex.test(startDate) && regex.test(lastDate))) return [];
  const result = [];
  const curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return [...result].reverse();
};

export default getDatesFromStartToLast;

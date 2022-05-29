const formatDayGraphDataTickValues = (datum: any) => {
  const isLastDatum = datum.index >= datum.data.length - 1;
  if (!isLastDatum && datum.datum.labels !== datum.data[datum.index + 1].labels) {
    return `${datum.datum.labels}`;
  }

  if (isLastDatum) {
    return `${datum.datum.labels}`;
  }

  return '';
};

export default formatDayGraphDataTickValues;

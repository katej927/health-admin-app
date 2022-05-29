import dayjs from 'dayjs';

const GRAPH_STYLE = {
  weeklyGraphBar: {
    x: 'date',
    y: 'steps',
    barWidth: 10,
  },
  dayGraphBar: {
    x: 'time',
    y: 'steps',
  },
  dayGraphAxis: {
    tickFormat: (x: string) => dayjs(x, 'HH:mm:ss').get('hour'),
    fixLabelOverlap: true,
  },
  axis: {
    style: {
      tickLabels: {
        fontFamily: 'inherit',
        fontWeight: 100,
        letterSpacing: '1px',
        stroke: 'gray',
        fontSize: 8,
        marginBlock: '20px',
      },
    },
  },
  bar: {
    style: { data: { fill: '#3169c4' } },
  },
};

export default GRAPH_STYLE;

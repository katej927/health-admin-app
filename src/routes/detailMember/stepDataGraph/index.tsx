import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import stepData from '../../../data/step_data/step_data.json';
import formatGraphData from './formatGraphData';
import GRAPH_STYLE from './GRAPH_STYLE';
import { IStepData, GraphType } from './type/type.d';

dayjs.extend(isBetween);

const StepDataGraph = () => {
  const { stepData: userData } = stepData.filter((data: IStepData) => data.id === 1)[0];
  const date = {
    startDate: '2022-02-26',
    // endDate: '2022-04-19',
    endDate: '2022-02-26',
  };
  const graphType: GraphType = date.startDate === date.endDate ? 'dayGraph' : 'weeklyGraph';

  const { graphData, totalStep, isThereUserData } = formatGraphData(userData, date);

  return (
    <div>
      {isThereUserData && (
        <div>
          <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 10 }}>
            <VictoryAxis
              {...GRAPH_STYLE.axis}
              {...(graphType === 'dayGraph' && GRAPH_STYLE.dayGraphAxis)}
              scale={{ x: 'time' }}
            />
            <VictoryAxis dependentAxis {...GRAPH_STYLE.axis} />
            <VictoryBar data={graphData} {...GRAPH_STYLE.bar} {...GRAPH_STYLE[`${graphType}Bar`]} />
          </VictoryChart>
          <div>{`${date.startDate} ~ ${date.endDate}`}</div>
          <div>
            <span>총 {totalStep.toLocaleString()} 걸음</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepDataGraph;

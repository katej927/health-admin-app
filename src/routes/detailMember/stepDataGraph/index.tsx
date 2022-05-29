import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';

import formatGraphData from './formatGraphData';
import { GraphType, IStepData } from './type.d';

import GRAPH_STYLE from './GRAPH_STYLE';
import styles from './stepDataGraph.module.scss';

import stepData from '../../../data/step_data/step_data.json';

dayjs.extend(isBetween);

const StepDataGraph = ({ selectedID }: { selectedID: number }) => {
  const date = {
    startDate: '2022-02-26',
    // endDate: '2022-04-19',
    endDate: '2022-02-26',
  };

  const { stepData: userData } = stepData.filter((data: IStepData) => data.id === selectedID)[0];
  const graphType: GraphType = date.startDate === date.endDate ? 'dayGraph' : 'weeklyGraph';
  const { graphData, totalStep, isThereUserData } = formatGraphData(userData, date);

  return (
    <div className={styles.stepDataWrapper}>
      <div className={styles.stepData}>
        <div>{`${date.startDate} ~ ${date.endDate}`}</div>
        <div className={styles.totalStep}>총 {totalStep.toLocaleString() ?? 0} 걸음</div>
      </div>
      {isThereUserData && (
        <div className={styles.stepDataGraph}>
          <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 10 }}>
            <VictoryAxis
              {...GRAPH_STYLE.axis}
              {...(graphType === 'dayGraph' && GRAPH_STYLE.dayGraphAxis)}
              scale={{ x: 'time' }}
            />
            <VictoryAxis dependentAxis {...GRAPH_STYLE.axis} />
            <VictoryBar data={graphData} {...GRAPH_STYLE.bar} {...GRAPH_STYLE[`${graphType}Bar`]} />
          </VictoryChart>
        </div>
      )}
    </div>
  );
};

export default StepDataGraph;

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';

import formatGraphData from './formatGraphData';
import { GraphType, IStepData } from './type.d';

import GRAPH_STYLE from './GRAPH_STYLE';
import styles from './stepDataGraph.module.scss';
import WhiteSection from 'components/whiteSection';

import rawData from '../../../data/step_data/step_data.json';
import { DatePicker } from 'components';
import { useRecoilValue } from 'recoil';
import { inquiryPeriodState } from 'states';

dayjs.extend(isBetween);

const StepDataGraph = ({ selectedID }: { selectedID: number }) => {
  const date = useRecoilValue(inquiryPeriodState);
  const { stepData: userData } = rawData.filter((data: IStepData) => data.id === selectedID)[0];
  const graphType: GraphType = date.startDate === date.endDate ? 'dayGraph' : 'weeklyGraph';
  const { graphData, totalStep } = formatGraphData(userData, date);

  return (
    <WhiteSection>
      <div className={styles.stepDataWrapper}>
        <div className={styles.stepData}>
          <DatePicker page='회원 상세 정보' />
          <div className={styles.totalStep}>
            <span>걸음 수</span> 총 {totalStep.toLocaleString() ?? 0} 걸음
          </div>
        </div>
        <div className={styles.stepDataGraph}>
          <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 10 }} width={900}>
            <VictoryAxis
              {...GRAPH_STYLE.axis}
              {...(graphType === 'dayGraph' && GRAPH_STYLE.dayGraphAxis)}
              scale={{ x: 'time' }}
            />
            <VictoryAxis dependentAxis {...GRAPH_STYLE.axis} />
            <VictoryBar data={graphData} {...GRAPH_STYLE.bar} {...GRAPH_STYLE[`${graphType}Bar`]} />
          </VictoryChart>
        </div>
      </div>
    </WhiteSection>
  );
};

export default StepDataGraph;

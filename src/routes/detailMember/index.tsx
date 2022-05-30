import HeartRateDataGraph from 'routes/detailMember/heartRateDataGraph';
import StepDataGraph from 'routes/detailMember/stepDataGraph';
import styles from './detailMember.module.scss';

const DetailMember = () => {
  const {
    id: selectedID,
    username,
    crt_ymdt: _,
  } = {
    id: 1,
    username: '',
    crt_ymdt: '',
  };
  return (
    <div className={styles.graphWrapper}>
      <HeartRateDataGraph selectedID={selectedID} />
      <StepDataGraph selectedID={selectedID} />
    </div>
  );
};

export default DetailMember;

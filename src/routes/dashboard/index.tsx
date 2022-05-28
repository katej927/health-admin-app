import { DatePicker } from 'components';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <DatePicker />
    </div>
  );
};

export default Dashboard;

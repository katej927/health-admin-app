import { DatePicker } from 'components';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <DatePicker page='회원 관리' />
    </div>
  );
};

export default Dashboard;

import { DatePicker } from 'components';
import styles from './dashboard.module.scss';

import ManageMember from 'routes/manageMember/_shared/showMember';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <DatePicker page='회원 관리' isSubmit />
      <ManageMember />
    </div>
  );
};

export default Dashboard;

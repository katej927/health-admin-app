import styles from './dashboard.module.scss';
import DetailMember from 'routes/detailMember';

import ManageMember from 'routes/manageMember/_shared/showMember';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <DetailMember />
      <ManageMember />
    </div>
  );
};

export default Dashboard;

import styles from './dashboard.module.scss';

import ManageMember from 'routes/manageMember/_shared/showMember';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <ManageMember />
    </div>
  );
};

export default Dashboard;

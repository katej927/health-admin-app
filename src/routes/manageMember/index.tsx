import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import SearchMember from './_shared/searchMember';
import ShowMember from './_shared/showMember';
import styles from './manageMember.module.scss';

const ManageMember = () => {
  return (
    <div className={styles.memberWrapper}>
      <div className={styles.titleWrapper}>
        <h2>회원 관리</h2>
        <nav className={styles.navWrapper}>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            홈
          </NavLink>
          <p className={styles.menu}>&gt;</p>
          <NavLink to='/manageMember' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            회원 관리
          </NavLink>
        </nav>
      </div>
      <SearchMember />
      <ShowMember />
    </div>
  );
};

export default ManageMember;

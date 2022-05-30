import SearchMember from './_shared/searchMember';
import ShowMember from './_shared/showMember';
import styles from './manageMember.module.scss';
import { NavLink } from 'react-router-dom';

const ManageMember = () => {
  return (
    <div className={styles.memberWrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>회원 관리</p>
        <div className={styles.linkWrapper}>
          <NavLink className={styles.link} to='/'>
            홈
          </NavLink>
          <p> &gt; </p>
          <NavLink className={styles.activeLink} to='/manageMember'>
            회원 관리
          </NavLink>
        </div>
      </div>
      <SearchMember />
      <ShowMember />
    </div>
  );
};

export default ManageMember;

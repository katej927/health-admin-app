import SearchMember from './_shared/searchMember';
import ShowMember from './_shared/showMember';
import styles from './manageMember.module.scss';

const ManageMember = () => {
  return (
    <div className={styles.memberWrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>회원 관리</p>
        <p className={styles.route}>홈 &gt; 회원 관리</p>
      </div>
      <SearchMember />
      <ShowMember />
    </div>
  );
};

export default ManageMember;

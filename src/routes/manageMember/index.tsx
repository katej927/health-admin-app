import SearchMember from './_shared/searchMember';
import ShowMember from './_shared/showMember';
import styles from './manageMember.module.scss';

const ManageMember = () => {
  return (
    <div className={styles.memberWrapper}>
      <p>회원 관리</p>
      <SearchMember />
      <ShowMember />
    </div>
  );
};

export default ManageMember;

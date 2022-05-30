import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectMemberState } from 'states/selectMember';
import HeartRateDataGraph from 'routes/detailMember/heartRateDataGraph';
import StepDataGraph from 'routes/detailMember/stepDataGraph';
import styles from './detailMember.module.scss';

const DetailMember = () => {
  const [selectMember, _] = useRecoilState(selectMemberState);
  const { id } = selectMember;

  return (
    <section>
      <nav className={styles.navWrapper}>
        <Link to='/' className={styles.menu}>
          홈
        </Link>
        <p className={styles.menu}> &gt; </p>
        <Link to='/manageMember' className={styles.menu}>
          회원 관리
        </Link>
        <p className={styles.menu}> &gt; 회원 상세</p>
      </nav>
      <article className={styles.titleWrapper}>
        <h2>회원 상세 정보</h2>
      </article>
      <main className={styles.mainWrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor='loginId'>로그인 ID</label>
          <input type='text' value={selectMember.id} id='loginId' name='loginId' disabled />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='memberNum'>회원 번호</label>
          <input type='text' value={selectMember.username} id='memberNum' name='memberNum' disabled />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='joinDate'>가입 일시</label>
          <input type='text' value={selectMember.crt_ymdt} id='joinDate' name='joinDate' disabled />
        </div>
      </main>
      <div className={styles.graphWrapper}>
        <HeartRateDataGraph selectedID={id} />
        <StepDataGraph selectedID={id} />
      </div>
    </section>
  );
};

export default DetailMember;

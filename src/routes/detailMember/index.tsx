import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectMemberState } from 'states/selectMember';
import cx from 'classnames';
import HeartRateDataGraph from 'routes/detailMember/heartRateDataGraph';
import StepDataGraph from 'routes/detailMember/stepDataGraph';
import styles from './detailMember.module.scss';
import WhiteSection from 'components/whiteSection';

const DetailMember = () => {
  const selectMember = useRecoilValue(selectMemberState);
  const { id } = selectMember;

  return (
    <section>
      <article className={styles.titleWrapper}>
        <h2>회원 상세 정보</h2>
        <nav className={styles.navWrapper}>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            홈
          </NavLink>
          <p className={styles.menu}>&gt;</p>
          <NavLink to='/manageMember' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            회원 관리
          </NavLink>
          <p className={styles.menu}>&gt;</p>
          <NavLink to='/detailMember' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            회원 상세
          </NavLink>
        </nav>
      </article>
      <div className={styles.tableWrapper}>
        <WhiteSection>
          <table>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>로그인ID</th>
                <th>가입일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectMember.id}</td>
                <td>{selectMember.username}</td>
                <td>{selectMember.crt_ymdt}</td>
              </tr>
            </tbody>
          </table>
        </WhiteSection>
      </div>
      <div className={styles.graphWrapper}>
        {id !== 0 && (
          <>
            <HeartRateDataGraph selectedID={id} />
            <StepDataGraph selectedID={id} />
          </>
        )}
      </div>
    </section>
  );
};

export default DetailMember;

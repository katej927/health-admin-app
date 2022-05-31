import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { searchMemberList } from 'states/searchMemberList';
import { selectMemberState, IMember } from 'states/selectMember';

import WhiteSection from 'components/whiteSection';
import styles from './showMember.module.scss';

const ShowMember = () => {
  const originMembers = useRecoilValue(searchMemberList);
  const members = originMembers as IMember[];

  const [, setSelectMember] = useRecoilState(selectMemberState);

  const header = ['회원번호', '가입일', '로그인ID', '상세'];

  return (
    <WhiteSection>
      <div className={styles.wrapper}>
        <p>전체 총 {members.length}명의 회원이 검색되었습니다.</p>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                {header.map((headerName, index) => {
                  const key = `${headerName}-${index}`;
                  return <th key={key}>{headerName}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => {
                const key = `${member}-${index}`;
                return (
                  <tr key={key}>
                    <td>{member.id}</td>
                    <td>{member.crt_ymdt}</td>
                    <td>{member.username}</td>
                    <td>
                      <Link to='/detailMember'>
                        <button type='button' onClick={() => setSelectMember(member)}>
                          상세보기
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </WhiteSection>
  );
};
export default ShowMember;
